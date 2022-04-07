import React from "react";
import logo from "./shared/logo.svg";
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destination">Destination</Link>
              </li>
              <li>
                <Link to="/crew">Crew</Link>
              </li>
              <li>
                <Link to="/Technology">Technology</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
