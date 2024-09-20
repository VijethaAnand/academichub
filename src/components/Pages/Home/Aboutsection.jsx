import React from "react";
import AboutpageImg from "../../../assets/AboutSectionImage.png";

function Aboutsection() {
  return (
    <div className="py-10 md:py-40">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-SecondaryColor font-base">
          About
        </p>
        <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[38px] 2xl-text-[42px] text-primaryColor">
          About Academic Hub
        </h1>
      </div>
      <div className=" flex flex-col gap-4 2xl:gap-10 lg:flex-row items-center w-full my-8">
        <img
          src={AboutpageImg}
          className=" right-0 lg:w-[620px] xl:w-[780px] lg:px-0 2xl:w-[840px] 2xl:px-0  h-auto  px-10"
          alt=""
        />

        <div className="flex flex-col w-[400px] text-center items-center gap-4 md:w-[580px] xl:w-[480px] lg:w-[420px]  lg:text-left lg:items-start xl:text-left xl:items-start 2xl:text-left 2xl:items-start sm:text-center sm:items-center">
          <div className="flex flex-col ">
            <p className="text-[14px] p-2 text-bodyText leading-8 2xl:leading-10  2xl:text-[16px] lg:text-[16px] ">
              Lorem ipsum dolor sit amet consectetur. Felis in fames proin non
              neque nisl. Duis tincidunt bibendum erat et pellentesque quis
              maecenas mauris. <br />
              Purus mattis ac duis id sed orci sit quis sed. Fames ut molestie
              mauris bibendum quis diam hendrerit aliquet. Scelerisque vel ac
              fringilla et nunc bibendum facilisis ornare eu.
            </p>
          </div>
          <button className="w-[240px] h-10 text-[14px] tracking-[.08em] md:w-[248px] md:h-[42px]  lg:w-[240px] lg:h-[44px] xl:h-[54px] 2xl:w-[260px] 2xl:h-[58px]  rounded-[2px] text-white bg-SecondaryColor hover:bg-orange900 uppercase font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;
