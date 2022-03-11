import type { ReactNode } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { LinksFunction, MetaFunction } from "remix";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://unpkg.com/@picocss/pico@latest/css/pico.classless.min.css",
  },
];

export const meta: MetaFunction = () => {
  return { title: "Remix DApp" };
};

function Document({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <script src="/webpack/remote-entry.js" />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <header className="container">
        <h1>
          {(() => {
            switch (caught.status) {
              case 400:
                return "Bad Request";
              case 401:
                return "Unauthorized";
              case 403:
                return "Forbidden";
              case 404:
                return "Page not found";
              default:
                return "An unknown error occurred";
            }
          })()}
        </h1>
      </header>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  const message = "An unhandled error occurred";
  console.error(message, error);

  return (
    <Document>
      <header className="container">
        <h1>{message}</h1>
      </header>
    </Document>
  );
}
