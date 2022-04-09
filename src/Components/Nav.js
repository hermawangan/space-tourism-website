import React, { useState } from "react";
import logo from "./shared/logo.svg";
import { Outlet, NavLink } from "react-router-dom";

function Nav() {
  const [burgerClick, setBurgerClick] = useState(false);

  return (
    <>
      <div>
        <img src={logo} alt="logo" />
        <nav>
          <div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "border-b-black border-2" : null
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/destination"
                  className={({ isActive }) =>
                    isActive ? "border-b-black border-2" : null
                  }
                >
                  Destination
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/crew"
                  className={({ isActive }) =>
                    isActive ? "border-b-black border-2" : null
                  }
                >
                  Crew
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Technology"
                  className={({ isActive }) =>
                    isActive ? "border-b-black border-2" : null
                  }
                >
                  Technology
                </NavLink>
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
