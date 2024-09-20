import React from "react";
import { Link } from "react-router-dom";

function Newsheadlines({ headlines }) {
  return (
    <>
      {headlines.map(({ title, path }) => (
        <div className="flex justify-start items-center gap-6 2xl:gap-12 w-[90%]  2xl:w-[70%] mx-auto p-4  border-b-2 ">
          <div className="w-[10px] h-[10px] rounded-full bg-[#EC4E20]"></div>
          <h4 className="text-lg 2xl:text-[24px] hover:text-[19px] 2xl:hover:text-[25px] hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer text-[#014487]">
            <Link to={path} key={path}>
              {title}
            </Link>
          </h4>
        </div>
      ))}
    </>
  );
}

export default Newsheadlines;
