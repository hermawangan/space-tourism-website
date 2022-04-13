import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCrew } from "../redux";

function Crew({ crew, fetchCrew }) {
  const [name, setName] = useState("Douglas Hurley");

  useEffect(() => {
    fetchCrew();
  }, []);

  const clickHandler = (e) => {
    setName(e.target.id);
  };

  return (
    <div className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop text-white flex flex-col items-center text-center md:h-full lg:pl-[166.5px] lg:text-left">
      <div className="flex mt-[88px] text-base leading-[19px] tracking-[2.7px]  md:justify-start md:w-full md:pl-[38.5px] md:mt-[136px] md:text-xl md:leading-6 md:tracking-[3.375px] lg:mt-[212px] lg:pl-0 lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725px]">
        <span className="mr-[16px] opacity-25">02</span>
        <h2>MEET YOUR CREW</h2>
      </div>

      <div className="flex flex-col-reverse items-center md:flex-col lg:flex-row  lg:w-full">
        <div className="flex flex-col-reverse md:flex-col  lg:mt-[154px]">
          <>
            {crew.map((crews) => {
              return crews.name === name ? (
                <div
                  key={crews.name}
                  className="w-[327px] h-[170px] mb-[104px] md:w-[458px] md:h-[182px] md:mb-0 md:mt-[60px] lg:mt-0 "
                >
                  <h3 className="text-base leading-[18px] opacity-50 md:text-2xl md:leading-7  lg:text-[32px] lg:leading-[37px]">
                    {crews.role.toUpperCase()}
                  </h3>
                  <h2 className="text-2xl leading-7 mt-2 mb-4 md:text-[40px] md:leading-[46px] lg:text-[54px] lg:leading-[64px] lg:w-[488px]lg:mt-[15px] lg:mb-[27px]">
                    {crews.name.toUpperCase()}
                  </h2>
                  <p className="text-neutral-lightpurple text-[15px] leading-6 md:text-base md:leading-7 lg:text-lg lg:leading-8 lg:w-[444px]">
                    {crews.bio}
                  </p>
                </div>
              ) : null;
            })}
          </>

          <div className="flex justify-center my-8 md:my-10 lg:justify-start  lg:my-0 lg:mt-[209px] lg:mb-[94px]">
            <button
              id="Douglas Hurley"
              onClick={clickHandler}
              className={`${
                name === "Douglas Hurley"
                  ? "border-2 border-white opacity-100"
                  : "opacity-[.17]"
              } rounded-full h-2.5 w-2.5 bg-white mr-4 hover:opacity-50 `}
            ></button>
            <button
              id="Mark Shuttleworth"
              onClick={clickHandler}
              className={`${
                name === "Mark Shuttleworth"
                  ? "border-2 border-white opacity-100"
                  : "opacity-[.17]"
              } rounded-full h-2.5 w-2.5 bg-white hover:opacity-50 mr-4  `}
            ></button>
            <button
              id="Victor Glover"
              onClick={clickHandler}
              className={`${
                name === "Victor Glover"
                  ? "border-2 border-white opacity-100"
                  : "opacity-[.17]"
              } rounded-full h-2.5 w-2.5 bg-white hover:opacity-50 mr-4 `}
            ></button>
            <button
              id="Anousheh Ansari"
              onClick={clickHandler}
              className={`${
                name === "Anousheh Ansari"
                  ? "border-2 border-white opacity-100"
                  : "opacity-[.17]"
              } rounded-full h-2.5 w-2.5 bg-white hover:opacity-50 mr-4  `}
            ></button>
          </div>
        </div>
        <div className="w-[327px] h-[223px] mt-8 border-b-2 border-neutral-lightdark flex justify-center md:mt-0 md:w-full md:h-[530px] md:border-b-0 md:overflow-hidden lg:h-[650px]  lg:overflow-visible">
          {crew.map((crews) => {
            return crews.name === name ? (
              <img
                src={crews.images.png}
                key={crews.name}
                alt="crew"
                className="w-[177px] h-[222px] md:w-[456px] md:h-[572px] lg:w-[568px] lg:h-[650px] "
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    crew: state.crew.crew,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrew: () => dispatch(fetchCrew()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crew);
