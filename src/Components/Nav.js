import React, { useState } from "react";
import logo from "./shared/logo.svg";
import burgerIcon from "./shared/icon-hamburger.svg";
import closeIcon from "./shared/icon-close.svg";
import { Outlet } from "react-router-dom";
import NavLinks from "./NavLinks";

function Nav() {
  const [burgerClick, setBurgerClick] = useState(false);

  const clickHandler = () => {
    setBurgerClick(!burgerClick);
  };

  return (
    <>
      <div className="absolute w-full h-full md:flex  justify-between md:items-center md:h-24 lg:mt-10  ">
        <div className="flex justify-between items-center m-6 md:m-0 md:ml-10  ">
          <div className="h-10 w-10 border-1 border-white rounded-full flex justify-center items-center">
            <img src={logo} alt="logo" className="w-10" />
          </div>
          <div className="md:hidden">
            <img
              src={burgerIcon}
              alt="burger"
              className="w-6 h-5 cursor-pointer "
              onClick={clickHandler}
            />
          </div>
        </div>
        {burgerClick ? (
          <div className="absolute md:hidden top-0 right-0 h-full  w-64 bg-neutral-whiteblur backdrop-blur-lg">
            <div className=" flex justify-end mt-8 mr-6 ">
              <img
                src={closeIcon}
                alt="close"
                onClick={clickHandler}
                className="cursor-pointer w-5 h-5"
              />
            </div>
            <nav className="mt-28 ml-8">
              <NavLinks />
            </nav>
          </div>
        ) : null}

        <div className="border-t-2 border-white h-1 hidden lg:block absolute  z-20 lg:w-[400px] opacity-25 left-40"></div>

        <nav className="hidden md:block  md:w-2/3  h-24 bg-neutral-whiteblur backdrop-blur-lg lg:w-[830px] z-10  ">
          <NavLinks />
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
