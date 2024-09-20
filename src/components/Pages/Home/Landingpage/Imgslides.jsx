import React, { useCallback, useEffect, useRef, useState } from "react";
import Arrow from "../../../../assets/arrowBtn.png";
import LeftArrow from "../../../../assets/leftArrow.png";

function Imgslides({ slides }) {
  const timeRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {    
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      goToNext();
    }, 3000);

    return () => clearTimeout(timeRef.current);
  }, [goToNext]);
  return (
    <>
      <div className=" flex flex-col lg:flex-row gap-8 items-center w-full my-8 lg:gap-2 relative transition-all ease-out duration-700">
        <div className="flex flex-col text-center items-center space-y-3 2xl:space-y-8 2xl:pl-[110px] xl:pl-[60px] xl:px-0 xl:w-[560px] lg:min-w-[420px] lg:text-left lg:items-start xl:text-left xl:items-start 2xl:text-left 2xl:items-start">
          <div className="flex flex-col space-y-2 ">
            <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[38px] 2xl-text-[42px] text-primaryColor transition-all ease-out duration-700">
              {slides[currentIndex].headline}
            </h1>
            <p className="p-4 2xl:p-0 xl:p-0 lg:p-0 md:p-0 text-sm lg:text-[16px] 2xl:text-[16px] sm:w-[480px] lg:w-[380px] md:w-[480px] xl:w-[420px] text-bodyText leading-8 transition-all ease-out duration-700">
              {slides[currentIndex].herocopy}
            </p>
          </div>
          <button className="w-[240px] h-10 text-[16px] tracking-[.05em] md:w-[248px] md:h-[42px]  lg:w-[240px] lg:h-[44px] xl:h-[54px] 2xl:w-[328px] 2xl:h-[58px]  rounded-[2px] text-white bg-SecondaryColor hover:bg-orange900 uppercase font-semibold transition-all ease-out duration-700">
            {slides[currentIndex].btnValue}
          </button>
          <div className="flex gap-4 absolute right-10 bottom-8">
            <button
              className="w-[62px] h-[62px] rounded-full  bg-[#ffffffeb]  hover:bg-[#f5f5f5] shadow-lg"
              onClick={goToPrevious}
            >
              <img
                src={LeftArrow}
                alt="Prev"
                className="object-cover h-3 w-auto mx-auto "
              />
            </button>
            <button
              className="w-[62px] h-[62px] rounded-full  bg-[#ffffffeb]   hover:bg-[#f5f5f5] shadow-lg"
              onClick={goToNext}
            >
              <img
                src={Arrow}
                alt="Next"
                className="object-cover h-3 w-auto mx-auto "
              />
            </button>
          </div>
        </div>
        <div>
          <img
            src={slides[currentIndex].imgsrc}
            className="right-0 h-auto  md:w-[860px] lg:w-[860px] xl:w-[940px] 2xl:w-[960px] transition-all ease-out duration-700"
            alt=""
          />
        </div>
      </div>

      {/* <div className="flex items-center justify-center gap-4">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex}>
            <div
              className="w-[12px] h-[12px] rounded-full bg-[#014487]"
              onClick={() => goToSlide(slideIndex)}
            />
          </div>
        ))}
      </div> */}
    </>
  );
}

export default Imgslides;
