import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDestination } from "../redux";

function Destination({ destination, errorMsg, fetchDestination }) {
  const [planetMoon, setPlanetMoon] = useState("Moon");

  useEffect(() => {
    fetchDestination();
  }, []);

  const clickHandler = (e) => {
    setPlanetMoon(e.target.id);
  };
  // text-[16px] leading-[19px] tracking-[2.7px]

  return (
    <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop text-white flex flex-col items-center text-center  lg:flex-row lg:justify-evenly lg:text-left ">
      <div className="lg:mb-[110px] md:w-full">
        <div className=" flex mt-[88px] text-[16px] leading-[19px] tracking-[2.7px]  md:w-full md:justify-start md:pl-[76.5px] md:mt-[136px] md:text-[20px] md:leading-[24px] md:tracking-[3.375px]  lg:mt-[212px] lg:text-[28px] lg:leading-[44px] lg:tracking-[4.725px]  lg:pl-[166.5px] ">
          <span className="mr-[18px] opacity-25">01</span>
          <h2> PICK YOUR DESTINATION </h2>
        </div>

        <div className="mt-8 lg:mt-20">
          <div className="flex justify-center ">
            {destination.map((moon) =>
              moon.name === planetMoon ? (
                <img
                  key={moon.distance}
                  src={moon.images.png}
                  alt="planet"
                  className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]"
                />
              ) : null
            )}
          </div>
        </div>
      </div>

      <div className="lg:mt-[310px] lg:w-[445px] lg:h-[445px] lg:mr-[163px] ">
        <div className="flex justify-center lg:justify-start  ">
          <ul className="flex justify-around mt-[26px] text-neutral-lightpurple text-[14px] leading-[17px] tracking-[2.36px] w-[237.5px] h-7 md:w-[285.5px] md:h-9 md:text-[16px] md:leading-[19px] md:tracking-[2.7px] lg:mt-0 ">
            <li
              id="Moon"
              onClick={clickHandler}
              className={`${
                planetMoon === "Moon" ? "border-b-2 border-b-white" : null
              } hover:border-b-2 hover:opacity-50 cursor-pointer`}
            >
              Moon
            </li>
            <li
              id="Mars"
              onClick={clickHandler}
              className={`${
                planetMoon === "Mars" ? "border-b-2 border-b-white" : null
              } hover:border-b-2 hover:opacity-50 cursor-pointer`}
            >
              Mars
            </li>
            <li
              id="Europa"
              onClick={clickHandler}
              className={`${
                planetMoon === "Europa" ? "border-b-2 border-b-white" : null
              } hover:border-b-2 hover:opacity-50 cursor-pointer`}
            >
              Europa
            </li>
            <li
              id="Titan"
              onClick={clickHandler}
              className={`${
                planetMoon === "Titan" ? "border-b-2 border-b-white" : null
              } hover:border-b-2 hover:opacity-50 cursor-pointer`}
            >
              Titan
            </li>
          </ul>
        </div>

        {destination.map((moon) => {
          return moon.name === planetMoon ? (
            <div key={moon.distance} className="mt-[20px] lg:mt-0">
              <h1 className="text-[56px] leading-[64px] md:text-[80px] md:leading-[92px] lg:text-[100px] lg:leading-[115px] ">
                {moon.name.toUpperCase()}
              </h1>
              <p className="text-neutral-lightpurple text-[15px] w-[327px] h-[125px] mb-8 md:text-[16px] md:leading-[28px] md:w-[573px] md:h-[84px] md:mt-2 lg:text-[18px] lg:leading-[32px] lg:w-[444px] lg:h-[128px] lg:mt-3.5">
                {moon.description}
              </p>
              <div className="border-b-2 border-neutral-lightdark w-[327px]  mb-8 md:w-[573px] lg:w-[444px]"></div>
              <div className="md:flex justify-evenly items-center mb-[58px] lg:justify-start">
                <div className="lg:mr-[77px]">
                  <p className="text-neutral-lightpurple text-[14px] leading-[17px] tracking-[2.3625px] md:pb-3">
                    Avg. Distance
                  </p>
                  <span className="text-[28px] leading-[32px]">
                    {moon.distance.toUpperCase()}
                  </span>
                </div>
                <div className="mt-8 md:mt-0">
                  <p className="text-neutral-lightpurple text-[14px] leading-[17px] tracking-[2.3625px] md:pb-3">
                    EST. TRAVEL TIME
                  </p>
                  <span className="text-[28px] leading-[32px]">
                    {moon.travel.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    destination: state.destination.destination,
    errorMsg: state.destination.errorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: () => dispatch(fetchDestination()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);

// flex mt-[88px] text-[16px] leading-[19px] tracking-[2.7px]border-2 border-green-700
