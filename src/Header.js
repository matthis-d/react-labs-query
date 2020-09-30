import React from "react";
import classnames from "classnames";
import { Link, useRouteMatch } from "react-router-dom";

export default function Header() {
  const isHome = useRouteMatch({
    path: "/",
    exact: true,
  });

  const isEdit = useRouteMatch("/edit");

  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand brand" to="/">
          Developers rules
        </Link>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className={classnames({ active: isHome })}>
            <Link to="/">Home</Link>
          </li>
          <li className={classnames({ active: isEdit })}>
            <Link to="/edit">New</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
