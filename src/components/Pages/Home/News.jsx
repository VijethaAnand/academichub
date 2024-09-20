import React from "react";
import ArrowBtn from "../../../assets/arrowBtn.png";
import Newsheadlines from "./Newsheadlines";

function News() {
  const newsHeadlines = [
    {
      title: "Simplifying the production of lithium-ion batteries",
      path: "/newsfeeds",
    },
    {
      title: "A faster experiment to find and study topological materials",
      path: "/newsfeeds",
    },
    {
      title: "Honoring work to support innovation in aging",
      path: "/newsfeeds",
    },
    {
      title: "A better way to tell which species are vulnerable",
      path: "/newsfeeds",
    },
    {
      title: "Exploring education from all angles - Learning",
      path: "/newsfeeds",
    },
  ];

  return (
    <div className="w-full mt-20 2xl:max-w-[1320px] mx-auto py-10 md:py-18">
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
          News
        </p>
        <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl-text-[44px] text-[#014487]">
          Technology News Feeds
        </h1>
      </div>
      <div className="py-10  md:py-40 xl:py-20 bg-[#F7F7F7] h-auto">
        {/* Looping through all the news headlines */}
        <Newsheadlines headlines={newsHeadlines} />
        {/* end of loop */}
        <div className="flex items-center gap-4 w-[90%]  2xl:w-[85%] justify-end mt-8">
          <button className="text-[#EC4E20] flex items-center gap-2 uppercase font-semibold 2xl:font-bold text-sm tracking-[.05em] hover:-translate-y-1 hover:scale-110 duration-300">
            View all feeds{" "}
            <span>
              <img src={ArrowBtn} className="h-[10px] w-auto" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
