import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const [active, setActive] = useState("Home");
  return (
    <>
      <ul className="md:flex items-center md:justify-around h-full text-white lg:w-[542px] font-sm lg:ml-20">
        <li
          className={`${
            active === "Home"
              ? "border-r-2 md:border-b-2 md:border-b-white border-r-white md:border-r-0"
              : null
          } my-8 md:py-8 hover:md:border-b-2 hover:border-r-2 hover:md:border-r-0 hover:opacity-50`}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? setActive("Home") : null)}
          >
            <span className="md:hidden lg:contents">00</span> HOME
          </NavLink>
        </li>
        <li
          className={`${
            active === "Destination"
              ? "border-r-2 md:border-b-2 md:border-b-white border-r-white md:border-r-0"
              : null
          } my-8 md:py-8 hover:md:border-b-2 hover:border-r-2 hover:opacity-50 hover:md:border-r-0 `}
        >
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive ? setActive("Destination") : null
            }
          >
            <span className="md:hidden lg:contents">01</span> DESTINATION
          </NavLink>
        </li>
        <li
          className={`${
            active === "Crew"
              ? "border-r-2 md:border-b-2 md:border-b-white border-r-white md:border-r-0"
              : null
          } my-8  md:py-8 hover:md:border-b-2 hover:border-r-2 hover:opacity-50 hover:md:border-r-0 `}
        >
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? setActive("Crew") : null)}
          >
            <span className="md:hidden lg:contents">02</span> CREW
          </NavLink>
        </li>
        <li
          className={`${
            active === "Technology"
              ? "border-r-2 md:border-b-2 md:border-b-white border-r-white md:border-r-0"
              : null
          } my-8 md:py-8 hover:md:border-b-2 hover:border-r-2 hover:opacity-50 hover:md:border-r-0`}
        >
          <NavLink
            to="/Technology"
            className={({ isActive }) =>
              isActive ? setActive("Technology") : null
            }
          >
            <span className="md:hidden lg:contents">03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
