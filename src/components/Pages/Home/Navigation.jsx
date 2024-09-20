import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import Cart from "../../../assets/cart.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <header>
      <nav className="after:py-4 lg:px-14 px-4">
        <div className="flex justify-between items-center max-w-[1320px] mx-auto gap-8">
          <Link to="/">
            <img
              className="object-cover h-16 w-auto xl:h-14 lg:h-12"
              src={Logo}
              alt="Academic Hub"
            />
          </Link>
          <ul className="lg:flex space-x-12 hidden">
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
          <div className="space-x-6 hidden lg:flex items-center">
            <button className="w-[52px] h-[52px] lg:w-[34px] lg:h-[34px] xl:w-[38px] xl:h-[38px]  rounded-full  bg-[#ededed]  hover:bg-[#f5f5f5] drop-shadow-md">
              <IoMdCart
                size={24}
                color="#024873"
                className="object-cover w-auto mx-auto"
              />
            </button>
            <button className="w-[100px] h-[34px] lg:w-[74px] xl:w-[80px] xl:h-[32px]  text-sm bg-[#024873] hover:bg-transparent text-white border hover:border-[#024873] rounded-[2px]  hover:text-[#024873]">
              Login
            </button>
            <button className="w-[100px] h-[34px] lg:w-[74px] xl:w-[80px] xl:h-[32px] bg-transparent text-sm hover:bg-[#024873] text-[#024873] hover:text-white border rounded-[2px]   border-[#024873] hover:border-transparent">
              Sign Up
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <AiOutlineClose size={20} color="#024873" />
              ) : (
                <AiOutlineMenu size={20} color="#024873" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-white h-full fixed left-0 top-0 w-[60%]  border-r border-gray-400 ease-in-out duration-500 ${
            isMenuOpen ? " block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <NavLink
              to={path}
              key={path}
              className="block text-sm text-primaryColor hover:text-blue900 hover:font-medium"
            >
              {link}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
