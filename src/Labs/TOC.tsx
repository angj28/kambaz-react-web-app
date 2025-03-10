import { Link } from "react-router";

export default function TOC() {
  return (
    <div>
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <Link to="/labs">Labs</Link>
        </li>
        <li>
          <Link to="/labs/lab1">Lab1</Link>
        </li>
        <li>
          <Link to="/labs/lab2">Lab2</Link>
        </li>
        <li>
          <Link to="/labs/lab3">Lab3</Link>
        </li>
        <li>
          <Link to="/Kambaz">Kambaz</Link>
        </li>
        <li>
            <a href="https://github.com/angj28/kambaz-react-web-app/tree/a1">Assignment 1 Source Code</a>
        </li>
      </ul>
    </div>
  );
}
