import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTechnology } from "../redux";

function Tehcnology({ technology, fetchTechnology }) {
  const [techName, setTechName] = useState("Launch vehicle");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchTechnology();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };

  const clickHandler = (e) => {
    setTechName(e.target.id);
  };

  return (
    <div className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop text-white flex flex-col items-center text-center  h-full lg:pl-[166.5px] lg:text-left">
      <div className="flex mt-[88px] text-base leading-[19px] tracking-[2.7px] md:justify-start md:w-full md:pl-[38.5px] md:mt-[136px] md:text-xl md:leading-6 md:tracking-[3.375px] lg:mt-[212px] lg:pl-0 lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725px]">
        <span className="mr-[16px] opacity-25">03</span>
        <h2>SPACE LAUNCH 101</h2>
      </div>

      <div className="lg:flex lg:flex-row-reverse  lg:w-full lg:justify-between lg:items-cemter">
        <div className="mt-8 mb-[34px] md:mt-[60px] md:mb-14 lg:mb-0 lg:mt-10">
          {technology.map((tech) => {
            return tech.name === techName ? (
              <>
                <img
                  src={
                    windowWidth >= 1024
                      ? tech.images.portrait
                      : tech.images.landscape
                  }
                  key={tech.name}
                  alt="technology"
                  className="w-full h-170px md:h-[310px] lg:h-[527px] lg:w-[405px]"
                />
              </>
            ) : null;
          })}
        </div>

        <div className="flex flex-col items-center lg:flex-row  lg:mt-[137px] lg:items-start">
          <div className="mb-7 lg:flex lg:flex-col lg:mr-20">
            <button
              id="Launch vehicle"
              onClick={clickHandler}
              className={`${
                techName === "Launch vehicle"
                  ? "bg-white text-black opacity-100"
                  : null
              } w-10 h-10 md:w-[58px] md:h-[58px] lg:w-20 lg:h-20 border-[1px] border-white rounded-full opacity-25 hover:opacity-100`}
            >
              1
            </button>
            <button
              id="Spaceport"
              onClick={clickHandler}
              className={`${
                techName === "Spaceport"
                  ? "bg-white text-black opacity-100"
                  : null
              } w-10 h-10 md:w-[58px] md:h-[58px] lg:w-20 lg:h-20 border-[1px] border-white rounded-full mx-4 lg:mx-0 lg:my-8 opacity-25 hover:opacity-100`}
            >
              2
            </button>
            <button
              id="Space capsule"
              onClick={clickHandler}
              className={`${
                techName === "Space capsule"
                  ? "bg-white text-black opacity-100"
                  : null
              } w-10 h-10 md:w-[58px] md:h-[58px] lg:w-20 lg:h-20 border-[1px] border-white rounded-full opacity-25 hover:opacity-100`}
            >
              3
            </button>
          </div>

          <div className="w-[327px] h-[220px] mb-14 md:w-[458px] md:h-[237px] md:mb-24 lg:w-[470px] lg:h-[303px] lg:mb-[214px]">
            <p className="text-neutral-lightpurple text-sm leading-4 tracking-[2.3625px] md:text-base md:leading-[19px] md:tracking-[2.7px]  ">
              THE TERMINOLOGY
            </p>
            {technology.map((tech) => {
              return tech.name === techName ? (
                <div key={tech.name} className="">
                  <h2 className="text-2xl leading-6 mt-2 md:text-[40px] md:leading-[46px] md:mt-4 lg:text-[58px] lg:leading-[64px] lg:mt-[11px] ">
                    {tech.name.toUpperCase()}
                  </h2>
                  <p className="text-neutral-lightpurple text-[15px] leading-[25px] mt-4 md:text-base md:leading-[28px] lg:text-lg lg:leading-[32px] lg:mt-[17px] ">
                    {tech.description}
                  </p>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    technology: state.technology.technology,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTechnology: () => dispatch(fetchTechnology()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tehcnology);
