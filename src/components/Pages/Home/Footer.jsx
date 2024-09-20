import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../assets/LogoWhite.png";
import InstagramIcon from "../../../assets/instagram.png";
import FacebookIcon from "../../../assets/facebook.png";
import xIcon from "../../../assets/x.png";

function Footer() {
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Projects", path: "/projects" },
    { link: "Articles", path: "/articles" },
    { link: "Books", path: "/books" },
    { link: "Preowned", path: "/preowned" },
  ];
  const otherLinks = [
    { link: "Jobs", path: "/jobs" },
    { link: "News Feeds", path: "/newsfeeds" },
  ];
  return (
    <div className="w-full mt-40 bg-[#014487]">
      <div className="flex flex-col max-w-[1320px] mx-auto p-4">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-12 justify-between">
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-4">
              <img
                src={Logo}
                className="w-[160px] lg:w-[140px] h-auto"
                alt=""
              />
              <p className="text-white lg:w-[320px] 2xl:max-w-[380px] leading-6 text-sm">
                Lorem ipsum dolor sit amet consectetur. Mauris risus nisl dolor
                purus. Lectus amet ipsum cursus tempus adipiscing.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="w-[42px] h-[42px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                <img
                  src={InstagramIcon}
                  alt="Download"
                  className="object-cover h-6 w-auto mx-auto"
                />
              </button>
              <button className="w-[42px] h-[42px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                <img
                  src={FacebookIcon}
                  alt="Download"
                  className="object-cover h-6 w-auto mx-auto"
                />
              </button>
              <button className="w-[42px] h-[42px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
                <img
                  src={xIcon}
                  alt="Download"
                  className="object-cover h-[19px] w-auto mx-auto"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white tracking-[.05em] font-bold text-[14px] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] uppercase">
              Quick Links
            </h2>
            <div className="flex flex-col space-y-2  2xl:gap-2">
              {navItems.map(({ link, path }) => (
                <NavLink
                  to={path}
                  key={path}
                  className="text-[#e3e3e3] font-base text-[14px]  tracking-[.05em]"
                >
                  {link}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-white tracking-[.05em] font-bold text-[14px] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] uppercase ">
              Other Links
            </h2>
            <div className="flex flex-col space-y-2 2xl:gap-2">
            {otherLinks.map(({ link, path }) => (
                <NavLink
                  to={path}
                  key={path}
                  className="text-[#e3e3e3] font-base  text-[14px]  tracking-[.05em] "
                >
                  {link}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white  lg:w-[320px] 2xl:max-w-[380px]">
            <div>
              <p className="uppercase font-semibold">Address</p>
              <p className="text-[#e3e3e3]  text-sm leading-6">
                #123, 70Th Cross2Nd Floor, SVA Arcade5Th Block, Rajaji Nagara,
                Bengaluru - 560010
              </p>
            </div>
            <div>
              <p className="uppercase font-semibold">Call Us</p>
              <p className="text-[#e3e3e3] text-sm leading-6">
                <tel>+91 080-23100098</tel> <tel>+91 63635 07858</tel>
              </p>
            </div>
            <div>
              <p className="uppercase font-semibold">Write to us</p>
              <p className="text-[#e3e3e3] text-sm leading-6">hr@snipe.co.in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px]">
        <p className="flex py-4 items-center justify-center gap-2 text-white">
          All Rights Reserved © 2023{" "}
          <span className="font-bold"> ACADEMIC HUB </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
