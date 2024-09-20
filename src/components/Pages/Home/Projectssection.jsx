import React from "react";
import Icon1 from "../../../assets/Icon1.png";
import Icon3 from "../../../assets/Icon3.png";

function Projectssection() {
  return (
    <div className="w-full py-10 md:py-18 ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
          Projects
        </p>
        <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
          Academic Project
        </h1>
      </div>
      <div className="flex flex-col max-w-[1240px] px-4 mx-auto my-12 lg:flex-row xl:flex-row 2xl:flex-row gap-8 2xl:gap-8 justify-between items-center">
        <div className="bg-white w-[340px] h-auto rounded-[8px] 2xl:w-[420px] 2xl:h-[460px] shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="h-2 w-40 mx-auto rounded top-0 bg-[#024873]"></div>
          <div className="flex flex-col mt-4 gap-4 2xl:gap-8 px-4 py-4">
            <img className="w-[80px] h-auto " src={Icon1} alt="" />
            <div className="space-y-1">
              <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                EXPLORE
              </p>
              <h4 className="text-[24px] md:text-[28px] lg:text-[28px] xl:text-[34px] 2xl-text-[38px] font-['Noto_Serif_SC'] text-[#014487]">
                Frontend Projects
              </h4>
              <p className="text-sm text-bodyText leading-7  2xl:text-[16px] lg:text-[14px] 2xl:w-[350px] text-justify">
                Lorem ipsum dolor sit amet consectetur. Bibendum in volutpat
                blandit gravida sit duis. Gravida nisl pellentesque eget ac
                ultrices feugiat scelerisque tellus tellus. Est euismod eget
                ligula mi. Turpis tristique sit egestas viverra vitae adipiscing
                ut nibh
              </p>
            </div>
            <button className="w-[134px] h-10 text-[12px] tracking-[.05em] md:w-[138px] md:h-[38px]  lg:w-[140px] lg:h-[40px] xl:h-[42px] 2xl:w-[160px] 2xl:h-[42px]  rounded-[2px] text-white bg-[#024873] uppercase font-semibold ">
              View More
            </button>
          </div>
        </div>
        <div className="bg-white w-[340px] h-auto rounded-[8px] 2xl:w-[420px] 2xl:h-[460px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="h-2 w-40 mx-auto rounded top-0 bg-[#024873]"></div>
          <div className="flex flex-col mt-4 gap-4 2xl:gap-8 px-4 py-4">
            <img className="w-[80px] h-auto " src={Icon1} alt="" />
            <div className="space-y-1">
              <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                EXPLORE
              </p>
              <h4 className="text-[24px] md:text-[28px] lg:text-[28px] xl:text-[32px] 2xl-text-[34px] font-['Noto_Serif_SC'] text-[#014487]">
                Backend Projects
              </h4>
              <p className="text-sm text-bodyText leading-7 2xl:text-[16px] lg:text-[14px] 2xl:w-[350px] text-justify">
                Lorem ipsum dolor sit amet consectetur. Bibendum in volutpat
                blandit gravida sit duis. Gravida nisl pellentesque eget ac
                ultrices feugiat scelerisque tellus tellus. Est euismod eget
                ligula mi. Turpis tristique sit egestas viverra vitae adipiscing
                ut nibh
              </p>
            </div>
            <button className="w-[134px] h-10 text-[12px] tracking-[.05em] md:w-[138px] md:h-[38px]  lg:w-[140px] lg:h-[40px] xl:h-[42px] 2xl:w-[160px] 2xl:h-[42px]  rounded-[2px] text-white bg-[#024873] uppercase font-semibold ">
              View More
            </button>
          </div>
        </div>
        <div className="bg-white w-[340px] h-auto rounded-[8px] 2xl:w-[420px] 2xl:h-[460px] shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="h-2 w-40 mx-auto rounded top-0 bg-[#024873]"></div>
          <div className="flex flex-col mt-4 gap-4 2xl:gap-8 px-4 py-4">
            <img className="w-[80px] h-auto " src={Icon3} alt="" />
            <div className="space-y-1">
              <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                EXPLORE
              </p>
              <h4 className="text-[24px] md:text-[28px] lg:text-[28px] xl:text-[34px] 2xl-text-[34px] truncate  text-primaryColor">
                Data Science Projects
              </h4>
              <p className="text-sm text-bodyText leading-7 2xl:text-[16px] lg:text-[14px] 2xl:w-[350px] text-justify">
                Lorem ipsum dolor sit amet consectetur. Bibendum in volutpat
                blandit gravida sit duis. Gravida nisl pellentesque eget ac
                ultrices feugiat scelerisque tellus tellus. Est euismod eget
                ligula mi. Turpis tristique sit egestas viverra vitae adipiscing
                ut nibh
              </p>
            </div>
            <button className="w-[134px] h-10 text-[12px] tracking-[.05em] md:w-[138px] md:h-[38px]  lg:w-[140px] lg:h-[40px] xl:h-[42px] 2xl:w-[160px] 2xl:h-[42px]  rounded-[2px] text-white bg-[#024873] uppercase font-semibold ">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectssection;
