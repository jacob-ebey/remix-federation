import { Link } from "remix";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/test/test">Federated Page</Link>
        </li>
        <li>
          <Link to="/about">Learn how this works</Link>
        </li>
      </ul>
    </nav>
  );
}
