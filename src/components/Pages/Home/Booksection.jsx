import React from "react";
import Softwarebook from "../../../assets/softwarebooks.png";
import Javabook from "../../../assets/javabook.png";
import Teamwork from "../../../assets/teamwork.png";
import ComputerScreen from "../../../assets/computerscreen.png";

function Booksection() {
  return (
    <div className="w-full 2xl:max-w-[1320px] mx-auto py-10  mt-20 md:py-18">
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
          Books
        </p>
        <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
          Academic Books
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row p-4 gap-8 lg:gap-4 xl:gap-4 2xl:gap-6 justify-center items-center">
        <div className=" w-[316px] h-auto flex flex-col gap-4">
          <div>
            <img
              className="object-cover rounded h-[440px] 2xl:h-[440px] xl:h-[400px] lg:h-[380px] "
              src={Javabook}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-['Noto_Serif_SC'] text-[#014487] text-2xl 2xl:text-[26px] lg:text-xl">
                Java Complete Guide
              </h4>
              <p className=" text-[#EC4E20] font-bold lg:text-sm">
                <span className="text-[#014487] lg:text-sm">By</span> Akshitha
                Baldia
              </p>
            </div>
            <div className="">
              <p className="text-[#34699F] lg:text-sm 2xl:text-[16px] 2xl:leading-6">
                Lorem ipsum dolor sit amet consectetur. Mauris risus nisl dolor
                purus. Lectus amet ipsum cursus tempus adipiscing.
              </p>
            </div>
            <p className="font-bold text-3xl text-[#014487] lg:text-xl xl:text-2xl">
              &#8377; 270
            </p>
          </div>
          <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
            Add To Cart
          </button>
        </div>
        <div className="w-[316px] h-auto flex flex-col gap-4">
          <div>
            <img
              className="object-cover rounded h-[440px] 2xl:h-[440px] xl:h-[400px]  lg:h-[380px]"
              src={Softwarebook}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className=" truncate font-['Noto_Serif_SC'] text-[#014487] text-2xl 2xl:text-2xl lg:text-xl">
                PHP Basics For Web
              </h4>
              <p className=" text-[#EC4E20] font-bold lg:text-sm ">
                <span className="text-[#014487] lg:text-sm">By</span> Lalita
                Thakur
              </p>
            </div>
            <div className="">
              <p className="text-[#34699F] lg:text-sm 2xl:text-[16px] 2xl:leading-6">
                Lorem ipsum dolor sit amet consectetur. Mauris risus nisl dolor
                purus. Lectus amet ipsum cursus tempus adipiscing.
              </p>
            </div>
            <p className="font-bold text-3xl text-[#014487] lg:text-xl xl:text-2xl">
              &#8377; 320
            </p>
          </div>
          <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
            Add To Cart
          </button>
        </div>
        <div className=" w-[316px] h-auto flex flex-col gap-4">
          <div>
            <img
              className="object-cover rounded h-[440px] 2xl:h-[440px]  xl:h-[400px]  lg:h-[380px]"
              src={ComputerScreen}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-['Noto_Serif_SC'] text-[#014487] text-2xl 2xl:text-2xl lg:text-xl">
                React Js Complete Guide
              </h4>
              <p className=" text-[#EC4E20] font-bold lg:text-sm">
                <span className="text-[#014487] lg:text-sm">By</span> Deepak
                Kumar
              </p>
            </div>
            <div className="">
              <p className="text-[#34699F] lg:text-sm 2xl:text-[16px] 2xl:leading-6">
                Lorem ipsum dolor sit amet consectetur. Mauris risus nisl dolor
                purus. Lectus amet ipsum cursus tempus adipiscing.
              </p>
            </div>
            <p className="font-bold text-3xl text-[#014487] lg:text-xl xl:text-2xl">
              &#8377; 442
            </p>
          </div>
          <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
            Add To Cart
          </button>
        </div>
        <div className=" w-[316px] h-auto flex flex-col gap-4">
          <div>
            <img
              className="object-cover rounded h-[440px] 2xl:h-[440px]  xl:h-[400px]  lg:h-[380px]"
              src={Teamwork}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="space-y-2">
              <h4 className="font-['Noto_Serif_SC'] text-[#014487] text-2xl 2xl:text-2xl lg:text-xl">
                C++ Advanced Concept
              </h4>
              <p className=" text-[#EC4E20] font-bold lg:text-sm">
                <span className="text-[#014487] lg:text-sm">By</span> Meena
                Shanker
              </p>
            </div>
            <div className="">
              <p className="text-[#34699F] lg:text-sm 2xl:text-[16px] 2xl:leading-6">
                Lorem ipsum dolor sit amet consectetur. Mauris risus nisl dolor
                purus. Lectus amet ipsum cursus tempus adipiscing.
              </p>
            </div>
            <p className="font-bold text-3xl lg:text-xl xl:text-2xl text-[#014487]">
              &#8377; 895
            </p>
          </div>
          <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booksection;
