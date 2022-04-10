import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const [active, setActive] = useState("Home");
  return (
    <>
      <ul className="md:flex items-center md:justify-around h-full text-white ">
        <li
          className={`${
            active === "Home"
              ? "border-r-2 md:border-b-2 md:border-b-white border-r-white md:border-r-0"
              : null
          } `}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? setActive("Home") : null)}
          >
            <span>01</span> HOME
          </NavLink>
        </li>
        <li
          className={`${
            active === "Destination"
              ? "border-r-2 md:border-b-2 md:border-b-white border-r-white md:border-r-0"
              : null
          } `}
        >
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive ? setActive("Destination") : null
            }
          >
            <span>02</span> DESTINATION
          </NavLink>
        </li>
        <li
          className={`${
            active === "Crew"
              ? "border-r-2 md:border-b-2 md:border-b-white border-r-white md:border-r-0"
              : null
          } `}
        >
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? setActive("Crew") : null)}
          >
            <span>03</span> CREW
          </NavLink>
        </li>
        <li
          className={`${
            active === "Technology"
              ? "border-r-2 md:border-b-2 md:border-b-white border-r-white md:border-r-0"
              : null
          } `}
        >
          <NavLink
            to="/Technology"
            className={({ isActive }) =>
              isActive ? setActive("Technology") : null
            }
          >
            <span>04</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
