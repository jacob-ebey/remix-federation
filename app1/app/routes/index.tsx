import Nav from "~/components/nav";

export default function Index() {
  return (
    <header className="container">
      <hgroup>
        <h1>Federated Remix Application</h1>
        <h2>
          A simple app that shares and loads components from another deployment.
        </h2>
      </hgroup>
      <Nav />
    </header>
  );
}
