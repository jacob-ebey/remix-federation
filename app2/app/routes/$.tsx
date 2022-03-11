import { useEffect, useState } from "react";
import type { FC } from "react";
import { useLocation } from "remix";
import type { LoaderFunction } from "remix";
import { matchPath } from "react-router-dom";
// @ts-expect-error
import { initSharing, shareScopes } from "@runtime/federation";

let shareScope = "default";
let initPromise = initSharing(shareScope);

let federatedRoutes = {
  "test/:name": {
    remote: "app1",
    exposed: "./app/routes/test.$name",
    baseUrl: "http://localhost:3000",
    id: "routes/test.$name",
  },
};

let findMatch = (pathname: string) => {
  for (let [pattern, route] of Object.entries(federatedRoutes)) {
    let match = matchPath(pattern, pathname);
    if (match) {
      return { route, match };
    }
  }
};

export let loader: LoaderFunction = ({ request }) => {
  let url = new URL(request.url);
  let found = findMatch(url.pathname);

  if (!found) throw new Response(null, { status: 404 });

  let forwardUrl = new URL(url.pathname, found!.route!.baseUrl);
  forwardUrl.searchParams.set("_data", found!.route!.id);
  let forwardRequest = new Request(forwardUrl.href, request);
  return fetch(forwardRequest);
};

export default function CatchAll() {
  let location = useLocation();
  let found = findMatch(location.pathname);

  if (!found) throw new Error("Federated match not found");

  let [Component, setComponent] = useState<FC | undefined>(undefined);
  useEffect(() => {
    initPromise
      .then(() => (window as any)[found!.route!.remote])
      .then(async (container: any) => {
        await container.init(shareScopes[shareScope]);
        return container;
      })
      .then((container: any) => container.get(found!.route!.exposed))
      // run the module factory to get the module value
      .then((factory: any) => factory())
      .then((mod: any) => {
        setComponent(() => mod?.default || mod);
      });
  }, [location.pathname]);

  console.log({ Component });

  if (!Component) return null;

  return <Component />;
}
