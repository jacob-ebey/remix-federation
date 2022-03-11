import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import Nav from "~/components/nav";

export let loader: LoaderFunction = ({ params }) => {
  return params.name || "world";
};

export default function FederatedName() {
  let name = useLoaderData();

  return (
    <header className="container">
      <hgroup>
        <h1>Federated Route</h1>
        <h2>Hello, {name}</h2>
      </hgroup>

      <Nav />
    </header>
  );
}
