import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Cart from "../../assets/cart.svg";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Projects", path: "/projects" },
    { link: "Articles", path: "/articles" },
    { link: "Books", path: "/books" },
    { link: "Preowned", path: "/preowned" },
    { link: "Jobs", path: "/jobs" },
    { link: "News Feeds", path: "/newsfeeds" },
  ];

  return (
    <>
      <div className="flex justify-between h-20 max-w-[1320px] px-4 mx-auto items-center z-1000">
        <Link to="/">
          <img
            className="object-cover h-16 w-auto xl:h-14 lg:h-12"
            src={Logo}
            alt="Academic Hub"
          />
        </Link>
        <ul className="hidden lg:flex space-x-12 text-[#024873]">
          {navItems.map(({ link, path }) => (
            <NavLink
              to={path}
              key={path}
              className="block text-sm text-primaryColor hover:text-blue900 hover:font-medium"
            >
              {link}
            </NavLink>
          ))}
        </ul>
        <div className="hidden lg:flex gap-4 items-center">
          <button className="w-[52px] h-[52px] lg:w-[34px] lg:h-[34px] xl:w-[38px] xl:h-[38px]  rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-md">
            <img
              src={Cart}
              alt="Cart"
              className="object-cover h-[10px] md:h-4 xl:h-5 lg:h-[18px] w-auto mx-auto"
            />
          </button>

          <button className="w-[100px] h-[34px] lg:w-[74px] border xl:w-[80px] xl:h-[32px]  font-semibold text-[14px] bg-[#024873] hover:bg-transparent text-white  hover:border-[#024873] rounded-[2px]  hover:text-[#024873]">
            Login
          </button>
          <button className="w-[100px] h-[34px]  lg:w-[74px]   xl:w-[80px] xl:h-[32px] bg-transparent text-[14px] hover:bg-[#024873] text-[#024873] hover:text-white font-semibold border rounded-[2px]   border-[#024873] hover:border-transparent">
            Sign Up
          </button>
        </div>
        <div onClick={handleNav} className="block lg:hidden">
          <div className="flex items-center gap-4">
            <button className="w-[32px] h-[32px] rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-l">
              <img
                src={Cart}
                alt="Cart"
                className="object-cover h-4 w-auto mx-auto"
              />
            </button>
            {!nav ? (
              <AiOutlineMenu size={20} color="#024873" />
            ) : (
              <AiOutlineClose size={20} color="#024873" />
            )}
          </div>
        </div>

        <div
          className={
            nav
              ? "z-50 fixed left-0 top-0 w-[60%] h-full border-r border-gray-400 bg-white ease-in-out duration-500 overflow-auto"
              : "hidden"
          }
        >
          <img
            className="object-cover h-12 w-auto m-4  lg:hidden"
            src={Logo}
            alt="Academic Hub"
          />
          <ul className="p-4 text-[#024873] space-y-6 lg:hidden">
            {navItems.map(({ link, path }) => (
              <NavLink
                to={path}
                key={path}
                className="block text-sm text-primaryColor hover:text-blue900 hover:font-medium"
              >
                {link}
              </NavLink>
            ))}
          </ul>
          <div className=" flex flex-col gap-3 p-4 w-full lg:hidden">
            <button className="w-full h-12 bg-[#024873] hover:bg-transparent text-sm text-white rounded-[2px] hover:border-[#024873] hover:text-[#024873]">
              Login
            </button>
            <button className="w-full h-12 bg-transparent hover:bg-[#024873] text-sm text-[#024873] rounded-[2px] hover:text-white  border border-[#024873] hover:border-transparent">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
