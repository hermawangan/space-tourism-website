import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const clickExplore = (e) => {
    e.preventDefault();

    navigate("/destination");
  };

  return (
    <div className=" bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-screen md:h-full  text-white   flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between lg:items-end ">
      <div className="mt-28 mx-6 md:mt-[202px] md:mx-40  lg:w-[450px]  lg:mb-[131px] lg:mt-[251px]">
        <h4 className="leading-5 tracking-[2.7px] text-neutral-lightpurple md:leading-6 md:tracking-[3.375px] md:text-xl lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725px] ">
          So, you want to travel to{" "}
        </h4>
        <h1 className="text-[80px] font-normal  leading-[100px] md:text-[150px] md:leading-[150px] lg:leading-[172px]">
          SPACE
        </h1>
        <p className="text-[15px] leading-6 text-neutral-lightpurple md:text-base md:leading-7 lg:text-lg lg:leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div
        className="flex justify-center items-center mt-20 md:mt-[156px] md:mb-[90px] lg:mr-[165px] cursor-pointer  "
        onClick={clickExplore}
      >
        <div className="border-2 border-white rounded-full w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 absolute bg-white opacity-0 hover:opacity-10 "></div>

        <div className="border-2 border-white rounded-full bg-white w-36 h-36 flex items-center justify-center md:w-60 md:h-60 lg:w-[274px] lg:h-[274px] ">
          <button className="text-[20px] tracking-[1.25px] leading-[23px] text-[#0B0D17] md:text-[32px] md:tracking-[2px] md:leading-9 ">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
