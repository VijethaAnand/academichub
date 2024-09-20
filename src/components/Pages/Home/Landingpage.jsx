import React from "react";
import LandingpageImg from "../../../assets/landingPage.png";

function Landingpage() {
  return (
    // <div className=" flex flex-col lg:flex-row gap-8 items-center w-full my-8 lg:gap-2">
    //   <div className="flex flex-col text-center items-center gap-4 px-10 2xl:pl-[140px] xl:pl-[60px] xl:px-0 xl:w-[560px] lg:min-w-[420px] lg:text-left lg:items-start xl:text-left xl:items-start 2xl:text-left 2xl:items-start sm:text-center sm:items-center">
    //     <div className="flex flex-col">
    //       <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[38px] 2xl-text-[42px] font-['Noto_Serif_SC'] text-[#014487]">
    //         Academic Project Hub
    //       </h1>
    //       <p className="text-sm lg:text-[16px] 2xl:text-[16px] sm:w-[480px] lg:w-[380px] md:w-[480px] xl:w-[420px] text-[#014487a2] leading-8  ">
    //         A versatile tool designed to assist academicians,
    //         <br /> including students, mentors, software developers, and
    //         business professionals.
    //       </p>
    //     </div>
    //     <button className="w-[240px] h-10 text-[12px] tracking-[.05em] md:w-[248px] md:h-[42px]  lg:w-[240px] lg:h-[44px] xl:h-[54px] 2xl:w-[328px] 2xl:h-[58px]  rounded-[2px] text-white bg-[#EC4E20] uppercase font-semibold ">
    //       View project
    //     </button>
    //   </div>
    //   <div>
    //     <div className="flex justify-center items-center">
    //       <div className="h-[540px] w-14 mx-auto  left-0 bg-[#D9D9D9]"></div>
    //       <img
    //         src={LandingpageImg}
    //         className="right-0 h-auto  md:w-[860px] lg:w-[860px] xl:w-[940px] 2xl:w-[960px]"
    //         alt=""
    //       />
    //     </div>
    //     <div className="h-[10px] w-[860px] mx-auto  left-0 bg-[#014487]"></div>
    //   </div>
    // </div>
    <div className=" flex flex-col lg:flex-row gap-8 items-center w-full my-8 lg:gap-2">
      <div className="flex flex-col text-center items-center space-y-3 2xl:space-y-8 2xl:pl-[110px] xl:pl-[60px] xl:px-0 xl:w-[560px] lg:min-w-[420px] lg:text-left lg:items-start xl:text-left xl:items-start 2xl:text-left 2xl:items-start">
        <div className="flex flex-col space-y-2">
          <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[38px] 2xl-text-[42px] text-primaryColor">
            Academic Project Hub
          </h1>
          <p className="text-sm lg:text-[16px] 2xl:text-[16px] sm:w-[480px] lg:w-[380px] md:w-[480px] xl:w-[420px] text-bodyText leading-8">
            A versatile tool designed to assist academicians,
            <br /> including students, mentors, software developers, and
            business professionals.
          </p>
        </div>
        <button className="w-[240px] h-10 text-[14px] tracking-[.08em] md:w-[248px] md:h-[42px]  lg:w-[240px] lg:h-[44px] xl:h-[54px] 2xl:w-[260px] 2xl:h-[58px]  rounded-[2px] text-white bg-SecondaryColor hover:bg-orange900 uppercase font-semibold ">
          View project
        </button>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="h-[540px] w-14 mx-auto  left-0 bg-[#D9D9D9]"></div>
          <img
            src={LandingpageImg}
            className="right-0 h-auto  md:w-[860px] lg:w-[860px] xl:w-[940px] 2xl:w-[960px]"
            alt=""
          />
        </div>
        <div className="h-[10px] w-[860px] mx-auto  left-0 bg-[#014487]"></div>
      </div>
    </div>
  );
}

export default Landingpage;
