import React, { useState } from "react";
import DownloadIcon from "../../../assets/downloadicon.png";
import ArticleImage1 from "../../../assets/ArticleImageHolder.png";
import ArticleImage2 from "../../../assets/Article ImageHolder1.png";
import AuthorImage1 from "../../../assets/PicofAuthor.png";
import AuthorImage2 from "../../../assets/authorimg.png";
import ArticleImage3 from "../../../assets/ArticleImage3.png";
import ArticleImage4 from "../../../assets/ArticleImage4.png";
import ArticleImage5 from "../../../assets/ArticleImage5.png";
import ArticleImage6 from "../../../assets/ArticleImage6.png";
import ArticleImage7 from "../../../assets/ArticleImage7.png";
import ArticleImage8 from "../../../assets/ArticleImage8.png";

function Articlessection() {
  let [toggle, setToggle] = useState(1);

  function handleClick(id) {
    setToggle(id);
  }
  return (
    <div className="py-10  md:py-40 xl:py-20 mt-20 bg-[#F7F7F7] h-auto">
      <div className="flex flex-col md:gap-24 2xl:gap-32 ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
            Articles
          </p>
          <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
            Academic Articles
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="hidden md:flex flex-col md:flex-row items-center gap-10 justify-center w-full h-0 md:h-[1px] lg:h-[1px] xl:h-[1px] 2xl:h-[1px] bg-[#024873]">
            <div
              className={
                toggle === 1
                  ? "cursor-pointer w-[80%] h-[60px] 2xl:w-[280px] md:w-[320px] 2xl:h-[60px] md:h-[42px] lg:h-[60px] bg-[#EC4E20] hover:bg-[#E33300] text-white flex text-center rounded-full items-center justify-center"
                  : "cursor-pointer hover:bg-[#01366B] w-[80%] h-[60px] 2xl:w-[280px] md:w-[320px] 2xl:h-[60px] md:h-[42px] lg:h-[60px] bg-[#014487] text-white flex text-center rounded-full items-center justify-center"
              }
              onClick={() => handleClick(1)}
            >
              <p className="mx-auto">Data Science</p>
            </div>
            <div
              className={
                toggle === 2
                  ? "cursor-pointer w-[80%] h-[60px] 2xl:w-[280px] md:w-[320px] 2xl:h-[60px] md:h-[42px] lg:h-[60px] bg-[#EC4E20] hover:bg-[#E33300] text-white flex text-center rounded-full items-center justify-center"
                  : "cursor-pointer hover:bg-[#01366B] w-[80%] h-[60px] 2xl:w-[280px] md:w-[320px] 2xl:h-[60px] md:h-[42px] lg:h-[60px] bg-[#014487] text-white flex text-center rounded-full items-center justify-center"
              }
              onClick={() => handleClick(2)}
            >
              <p className="mx-auto">Java</p>
            </div>
            <div
              className={
                toggle === 3
                  ? "cursor-pointer w-[80%] h-[60px] 2xl:w-[280px] md:w-[320px] 2xl:h-[60px] md:h-[42px] lg:h-[60px] bg-[#EC4E20] hover:bg-[#E33300] text-white flex text-center rounded-full items-center justify-center"
                  : "cursor-pointer hover:bg-[#01366B] w-[80%] h-[60px] 2xl:w-[280px] md:w-[320px] 2xl:h-[60px] md:h-[42px] lg:h-[60px] bg-[#014487] text-white flex text-center rounded-full items-center justify-center"
              }
              onClick={() => handleClick(3)}
            >
              <p className="mx-auto">Angular</p>
            </div>
            <div
              className={
                toggle === 4
                  ? "cursor-pointer w-[80%] h-[60px] 2xl:w-[280px] md:w-[320px] 2xl:h-[60px] md:h-[42px] lg:h-[60px] bg-[#EC4E20] hover:bg-[#E33300] text-white flex text-center rounded-full items-center justify-center"
                  : "cursor-pointer hover:bg-[#01366B] w-[80%] h-[60px] 2xl:w-[280px] md:w-[320px] 2xl:h-[60px] md:h-[42px] lg:h-[60px] bg-[#014487] text-white flex text-center rounded-full items-center justify-center"
              }
              onClick={() => handleClick(4)}
            >
              <p className="mx-auto">React Js</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[90%] justify-center items-center py-8 lg:py-8 2xl:py-24 2xl:max-w-[1320px] mx-auto">
        <div
          className={toggle === 1 ? "flex flex-col gap-0 2xl:gap-10" : "hidden"}
        >
          <div className="flex flex-col xl:flex-row 2xl:flex-row my-2 2xl:my-8 gap-12 items-center justify-center">
            <img
              src={ArticleImage1}
              alt=""
              className="hidden  xl:flex 2xl:flex object-cover w-[600px] h-auto "
            />
            <div>
              <div className="flex flex-col">
                <p className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                  Articles
                </p>
                <h1 className="text-[28px] md:text-[28px] lg:text-[32px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
                  Academic Articles
                </h1>
              </div>
              <div className="flex flex-col gap-14">
                <div className="my-4">
                  <div className="flex gap-6 justify-between items-center">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="w-[60px] h-[60px] rounded-full drop-shadow-l">
                        <img
                          src={AuthorImage1}
                          alt="Download"
                          className="object-cover w-auto h-auto mx-auto"
                        />
                      </div>

                      <p className="flex gap-2 items-center">
                        <span className="text-[14px] font-bold text-[#EC4E20]">
                          Sunil Bhadouriya
                        </span>
                        <span className="font-bold"> | </span>
                        <span className="text-[14px] text-[#EC4E20]">
                          24 May 2023 at 10 :10 AM
                        </span>
                      </p>
                    </div>

                    <button className="w-[38px] h-[38px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                      <img
                        src={DownloadIcon}
                        alt="Download"
                        className="object-cover h-4 w-auto mx-auto"
                      />
                    </button>
                  </div>

                  <div>
                  <hr className="my-6 h-[2px] bg-primaryColor"></hr>
                    <h4 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] text-primaryColor">
                      Smart Data Collectivity
                    </h4>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                      <br /> Lorem ipsum dolor sit amet consectetur. Mauris
                      risus nisl dolor purus. Lectus amet ipsum cursus tempus
                      adipiscing. Justo eget morbi ipsum odio justo ac platea
                      vulputate. Aliquet arcu a varius egestas.
                    </p>
                    <h4 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] text-[#014487]">
                      Smart Data Collectivity
                    </h4>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                    </p>
                    <div className="flex gap-4 items-center my-10">
                      <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
                        Read Full Article
                      </button>
                      <button className="w-[160px] h-[42px]  lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px] bg-transparent text-[12px] 2xl:text-[14px] hover:bg-[#EC4E20] text-[#EC4E20] hover:text-white font-semibold border rounded-[2px]   border-[#EC4E20] hover:border-transparent">
                        View All Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row 2xl:flex-row my-2 2xl:my-8 gap-12 items-center justify-center">
            <div>
              <div className="flex flex-col">
                <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                  Articles
                </p>
                <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
                  Academic Articles
                </h1>
              </div>
              <div className="flex flex-col gap-14">
                <div className="my-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="w-[60px] h-[60px] rounded-full drop-shadow-l">
                        <img
                          src={AuthorImage2}
                          alt="Download"
                          className="object-cover w-auto h-auto mx-auto"
                        />
                      </div>
                      <p className="flex gap-2 items-center">
                        <span className="text-[14px] font-bold text-[#EC4E20]">
                          Akshitha Baldia
                        </span>
                        <span className="font-bold"> | </span>
                        <span className="text-[14px] text-[#EC4E20]">
                          30 June 2023 at 11 :45 AM
                        </span>
                      </p>
                    </div>

                    <button className="w-[38px] h-[38px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                      <img
                        src={DownloadIcon}
                        alt="Download"
                        className="object-cover h-4 w-auto mx-auto"
                      />
                    </button>
                  </div>

                  <div>
                    <hr className="my-6 h-[1.5px] bg-[#014487]"></hr>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-bodyText 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                      <br /> Lorem ipsum dolor sit amet consectetur. Mauris
                      risus nisl dolor purus. Lectus amet ipsum cursus tempus
                      adipiscing. Justo eget morbi ipsum odio justo ac platea
                      vulputate. Aliquet arcu a varius egestas.
                    </p>
                    <h4 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-primaryColor">
                      Smart Data Collectivity
                    </h4>
                    <p className="text-[14px] text-bodyText 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                    </p>
                    <div className="flex gap-4 items-center my-10">
                      <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
                        Read Full Article
                      </button>
                      <button className="w-[160px] h-[42px]  lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px] bg-transparent text-[12px] 2xl:text-[14px] hover:bg-[#EC4E20] text-[#EC4E20] hover:text-white font-semibold border rounded-[2px]   border-[#EC4E20] hover:border-transparent">
                        View All Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={ArticleImage2}
              alt=""
              className="hidden xl:flex 2xl:flex object-cover w-[600px] h-auto"
            />
          </div>
        </div>
        <div
          className={toggle === 2 ? "flex flex-col gap-0 2xl:gap-10" : "hidden"}
        >
          <div className="flex flex-col xl:flex-row 2xl:flex-row my-2 2xl:my-8 gap-12 items-center justify-center">
            <img
              src={ArticleImage3}
              alt=""
              className="hidden  xl:flex 2xl:flex object-cover w-[600px] h-auto "
            />
            <div>
              <div className="flex flex-col">
                <p className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                  Articles
                </p>
                <h1 className="text-[28px] md:text-[28px] lg:text-[32px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
                  Academic Articles
                </h1>
              </div>
              <div className="flex flex-col gap-14">
                <div className="my-4">
                  <div className="flex gap-6 justify-between items-center">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="w-[60px] h-[60px] rounded-full drop-shadow-l">
                        <img
                          src={AuthorImage1}
                          alt="Download"
                          className="object-cover w-auto h-auto mx-auto"
                        />
                      </div>

                      <p className="flex gap-2 items-center">
                        <span className="text-[14px] font-bold text-[#EC4E20]">
                          Sunil Bhadouriya
                        </span>
                        <span className="font-bold"> | </span>
                        <span className="text-[14px] text-[#EC4E20]">
                          24 May 2023 at 10 :10 AM
                        </span>
                      </p>
                    </div>

                    <button className="w-[32px] h-[32px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                      <img
                        src={DownloadIcon}
                        alt="Download"
                        className="object-cover h-4 w-auto mx-auto"
                      />
                    </button>
                  </div>

                  <div>
                    <hr className="my-6 h-[1.5px] bg-[#014487]"></hr>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                      <br /> Lorem ipsum dolor sit amet consectetur. Mauris
                      risus nisl dolor purus. Lectus amet ipsum cursus tempus
                      adipiscing. Justo eget morbi ipsum odio justo ac platea
                      vulputate. Aliquet arcu a varius egestas.
                    </p>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-bodyText 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                    </p>
                    <div className="flex gap-4 items-center my-10">
                      <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
                        Read Full Article
                      </button>
                      <button className="w-[160px] h-[42px]  lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px] bg-transparent text-[12px] 2xl:text-[14px] hover:bg-[#EC4E20] text-[#EC4E20] hover:text-white font-semibold border rounded-[2px]   border-[#EC4E20] hover:border-transparent">
                        View All Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row 2xl:flex-row my-2 2xl:my-8 gap-12 items-center justify-center">
            <div>
              <div className="flex flex-col">
                <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                  Articles
                </p>
                <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
                  Academic Articles
                </h1>
              </div>
              <div className="flex flex-col gap-14">
                <div className="my-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="w-[60px] h-[60px] rounded-full drop-shadow-l">
                        <img
                          src={AuthorImage2}
                          alt="Download"
                          className="object-cover w-auto h-auto mx-auto"
                        />
                      </div>
                      <p className="flex gap-2 items-center">
                        <span className="text-[14px] font-bold text-[#EC4E20]">
                          Akshitha Baldia
                        </span>
                        <span className="font-bold"> | </span>
                        <span className="text-[14px] text-[#EC4E20]">
                          30 June 2023 at 11 :45 AM
                        </span>
                      </p>
                    </div>

                    <button className="w-[32px] h-[32px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                      <img
                        src={DownloadIcon}
                        alt="Download"
                        className="object-cover h-4 w-auto mx-auto"
                      />
                    </button>
                  </div>

                  <div>
                    <hr className="my-6 h-[1.5px] bg-[#014487]"></hr>
                    <h4 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px]  text-[#014487]">
                      Smart Data Collectivity
                    </h4>
                    <p className="text-[14px] text-bodyText 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                      <br /> Lorem ipsum dolor sit amet consectetur. Mauris
                      risus nisl dolor purus. Lectus amet ipsum cursus tempus
                      adipiscing. Justo eget morbi ipsum odio justo ac platea
                      vulputate. Aliquet arcu a varius egestas.
                    </p>
                    <h4 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] text-bodyText">
                      Smart Data Collectivity
                    </h4>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                    </p>
                    <div className="flex gap-4 items-center my-10">
                      <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
                        Read Full Article
                      </button>
                      <button className="w-[160px] h-[42px]  lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px] bg-transparent text-[12px] 2xl:text-[14px] hover:bg-[#EC4E20] text-[#EC4E20] hover:text-white font-semibold border rounded-[2px]   border-[#EC4E20] hover:border-transparent">
                        View All Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={ArticleImage4}
              alt=""
              className="hidden xl:flex 2xl:flex object-cover w-[600px] h-auto"
            />
          </div>
        </div>
        <div
          className={toggle === 3 ? "flex flex-col gap-0 2xl:gap-10" : "hidden"}
        >
          <div className="flex flex-col xl:flex-row 2xl:flex-row my-2 2xl:my-8 gap-12 items-center justify-center">
            <img
              src={ArticleImage5}
              alt=""
              className="hidden  xl:flex 2xl:flex object-cover w-[600px] h-auto "
            />
            <div>
              <div className="flex flex-col">
                <p className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                  Articles
                </p>
                <h1 className="text-[28px] md:text-[28px] lg:text-[32px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
                  Academic Articles
                </h1>
              </div>
              <div className="flex flex-col gap-14">
                <div className="my-4">
                  <div className="flex gap-6 justify-between items-center">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="w-[60px] h-[60px] rounded-full drop-shadow-l">
                        <img
                          src={AuthorImage1}
                          alt="Download"
                          className="object-cover w-auto h-auto mx-auto"
                        />
                      </div>

                      <p className="flex gap-2 items-center">
                        <span className="text-[14px] font-bold text-[#EC4E20]">
                          Sunil Bhadouriya
                        </span>
                        <span className="font-bold"> | </span>
                        <span className="text-[14px] text-[#EC4E20]">
                          24 May 2023 at 10 :10 AM
                        </span>
                      </p>
                    </div>

                    <button className="w-[32px] h-[32px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                      <img
                        src={DownloadIcon}
                        alt="Download"
                        className="object-cover h-4 w-auto mx-auto"
                      />
                    </button>
                  </div>

                  <div>
                    <hr className="my-6 h-[1.5px] bg-[#014487]"></hr>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                      <br /> Lorem ipsum dolor sit amet consectetur. Mauris
                      risus nisl dolor purus. Lectus amet ipsum cursus tempus
                      adipiscing. Justo eget morbi ipsum odio justo ac platea
                      vulputate. Aliquet arcu a varius egestas.
                    </p>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                    </p>
                    <div className="flex gap-4 items-center my-10">
                      <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
                        Read Full Article
                      </button>
                      <button className="w-[160px] h-[42px]  lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px] bg-transparent text-[12px] 2xl:text-[14px] hover:bg-[#EC4E20] text-[#EC4E20] hover:text-white font-semibold border rounded-[2px]   border-[#EC4E20] hover:border-transparent">
                        View All Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row 2xl:flex-row my-2 2xl:my-8 gap-12 items-center justify-center">
            <div>
              <div className="flex flex-col">
                <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                  Articles
                </p>
                <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
                  Academic Articles
                </h1>
              </div>
              <div className="flex flex-col gap-14">
                <div className="my-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="w-[60px] h-[60px] rounded-full drop-shadow-l">
                        <img
                          src={AuthorImage2}
                          alt="Download"
                          className="object-cover w-auto h-auto mx-auto"
                        />
                      </div>
                      <p className="flex gap-2 items-center">
                        <span className="text-[14px] font-bold text-[#EC4E20]">
                          Akshitha Baldia
                        </span>
                        <span className="font-bold"> | </span>
                        <span className="text-[14px] text-[#EC4E20]">
                          30 June 2023 at 11 :45 AM
                        </span>
                      </p>
                    </div>

                    <button className="w-[32px] h-[32px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                      <img
                        src={DownloadIcon}
                        alt="Download"
                        className="object-cover h-4 w-auto mx-auto"
                      />
                    </button>
                  </div>

                  <div>
                    <hr className="my-6 h-[1.5px] bg-[#014487]"></hr>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                      <br /> Lorem ipsum dolor sit amet consectetur. Mauris
                      risus nisl dolor purus. Lectus amet ipsum cursus tempus
                      adipiscing. Justo eget morbi ipsum odio justo ac platea
                      vulputate. Aliquet arcu a varius egestas.
                    </p>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                    </p>
                    <div className="flex gap-4 items-center my-10">
                      <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
                        Read Full Article
                      </button>
                      <button className="w-[160px] h-[42px]  lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px] bg-transparent text-[12px] 2xl:text-[14px] hover:bg-[#EC4E20] text-[#EC4E20] hover:text-white font-semibold border rounded-[2px]   border-[#EC4E20] hover:border-transparent">
                        View All Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={ArticleImage6}
              alt=""
              className="hidden xl:flex 2xl:flex object-cover w-[600px] h-auto"
            />
          </div>
        </div>
        <div
          className={toggle === 4 ? "flex flex-col gap-0 2xl:gap-10" : "hidden"}
        >
          <div className="flex flex-col xl:flex-row 2xl:flex-row my-2 2xl:my-8 gap-12 items-center justify-center">
            <img
              src={ArticleImage7}
              alt=""
              className="hidden  xl:flex 2xl:flex object-cover w-[600px] h-auto "
            />
            <div>
              <div className="flex flex-col">
                <p className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                  Articles
                </p>
                <h1 className="text-[28px] md:text-[28px] lg:text-[32px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
                  Academic Articles
                </h1>
              </div>
              <div className="flex flex-col gap-14">
                <div className="my-4">
                  <div className="flex gap-6 justify-between items-center">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="w-[60px] h-[60px] rounded-full drop-shadow-l">
                        <img
                          src={AuthorImage1}
                          alt="Download"
                          className="object-cover w-auto h-auto mx-auto"
                        />
                      </div>

                      <p className="flex gap-2 items-center">
                        <span className="text-[14px] font-bold text-[#EC4E20]">
                          Sunil Bhadouriya
                        </span>
                        <span className="font-bold"> | </span>
                        <span className="text-[14px] text-[#EC4E20]">
                          24 May 2023 at 10 :10 AM
                        </span>
                      </p>
                    </div>

                    <button className="w-[32px] h-[32px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                      <img
                        src={DownloadIcon}
                        alt="Download"
                        className="object-cover h-4 w-auto mx-auto"
                      />
                    </button>
                  </div>

                  <div>
                    <hr className="my-6 h-[1.5px] bg-[#014487]"></hr>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                      <br /> Lorem ipsum dolor sit amet consectetur. Mauris
                      risus nisl dolor purus. Lectus amet ipsum cursus tempus
                      adipiscing. Justo eget morbi ipsum odio justo ac platea
                      vulputate. Aliquet arcu a varius egestas.
                    </p>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                    </p>
                    <div className="flex gap-4 items-center my-10">
                      <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
                        Read Full Article
                      </button>
                      <button className="w-[160px] h-[42px]  lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px] bg-transparent text-[12px] 2xl:text-[14px] hover:bg-[#EC4E20] text-[#EC4E20] hover:text-white font-semibold border rounded-[2px]   border-[#EC4E20] hover:border-transparent">
                        View All Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row 2xl:flex-row my-2 2xl:my-8 gap-12 items-center justify-center">
            <div>
              <div className="flex flex-col">
                <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl-text-[18px] uppercase tracking-[.45em] text-[#EC4E20] font-normal">
                  Articles
                </p>
                <h1 className="text-[28px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl-text-[44px] font-['Noto_Serif_SC'] text-[#014487]">
                  Academic Articles
                </h1>
              </div>
              <div className="flex flex-col gap-14">
                <div className="my-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-6 justify-between items-center">
                      <div className="w-[60px] h-[60px] rounded-full drop-shadow-l">
                        <img
                          src={AuthorImage2}
                          alt="Download"
                          className="object-cover w-auto h-auto mx-auto"
                        />
                      </div>
                      <p className="flex gap-2 items-center">
                        <span className="text-[14px] font-bold text-[#EC4E20]">
                          Akshitha Baldia
                        </span>
                        <span className="font-bold"> | </span>
                        <span className="text-[14px] text-[#EC4E20]">
                          30 June 2023 at 11 :45 AM
                        </span>
                      </p>
                    </div>

                    <button className="w-[32px] h-[32px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                      <img
                        src={DownloadIcon}
                        alt="Download"
                        className="object-cover h-4 w-auto mx-auto"
                      />
                    </button>
                  </div>

                  <div>
                    <hr className="my-6 h-[1.5px] bg-[#014487]"></hr>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                      <br /> Lorem ipsum dolor sit amet consectetur. Mauris
                      risus nisl dolor purus. Lectus amet ipsum cursus tempus
                      adipiscing. Justo eget morbi ipsum odio justo ac platea
                      vulputate. Aliquet arcu a varius egestas.
                    </p>
                    <h3 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl-text-[30px] font-['Noto_Serif_SC'] text-[#014487]">
                      Smart Data Collectivity
                    </h3>
                    <p className="text-[14px] text-[#014487d6] 2xl:text-[16px] lg:text-[16px] leading-8">
                      Lorem ipsum dolor sit amet consectetur. Mauris risus nisl
                      dolor purus. Lectus amet ipsum cursus tempus adipiscing.
                      Justo eget morbi ipsum odio justo ac platea vulputate.
                      Aliquet arcu a varius egestas.
                    </p>
                    <div className="flex gap-4 items-center my-10">
                      <button className="w-[160px] h-[42px] lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px]  font-semibold text-[12px] 2xl:text-[14px] bg-[#EC4E20] hover:bg-transparent text-white  border hover:border-[#EC4E20] rounded-[2px]  hover:text-[#EC4E20]">
                        Read Full Article
                      </button>
                      <button className="w-[160px] h-[42px]  lg:w-[160px] uppercase  xl:w-[180px] xl:h-[42px] bg-transparent text-[12px] 2xl:text-[14px] hover:bg-[#EC4E20] text-[#EC4E20] hover:text-white font-semibold border rounded-[2px]   border-[#EC4E20] hover:border-transparent">
                        View All Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={ArticleImage8}
              alt=""
              className="hidden xl:flex 2xl:flex object-cover w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articlessection;
