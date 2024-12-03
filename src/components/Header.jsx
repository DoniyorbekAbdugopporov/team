import React from "react";
import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <header id="header" className="bg-[#232536] border-b border-[#FFFFFF0D]">
      <div className="container">
        <nav className="flex justify-between py-7">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-8">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `relative text-base leading-6 text-[#FFFFFF]  text-[16px]${
                  isActive
                    ? "after:content-[''] after:absolute after:h-1 after:translate-y-[-30px] after:w-full after:left-0 after:bg-[#FFD3AF] text-[16px] top-0"
                    : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/service"}
              className={({ isActive }) =>
                `relative text-base leading-6 text-[#FFFFFF]  text-[16px]${
                  isActive
                    ? "after:content-[''] after:absolute after:h-1 after:translate-y-[-30px] after:w-full after:left-0 after:bg-[#FFD3AF] text-[16px] top-0"
                    : ""
                }`
              }
            >
              Service
            </NavLink>
            <NavLink
              to={"/company"}
              className={({ isActive }) =>
                `relative text-base leading-6 text-[#FFFFFF] text-[16px]${
                  isActive
                    ? "after:content-[''] after:absolute after:h-1 after:translate-y-[-30px] after:w-full after:left-0 after:bg-[#FFD3AF] text-[16px] top-0"
                    : ""
                }`
              }
            >
              Company
            </NavLink>
            <NavLink
              to={"/career"}
              className={({ isActive }) =>
                `relative text-base leading-6 text-[#FFFFFF]  text-[16px]${
                  isActive
                    ? "after:content-[''] after:absolute after:h-1 after:translate-y-[-30px] after:w-full after:left-0 after:bg-[#FFD3AF] text-[16px] top-0"
                    : ""
                }`
              }
            >
              Career
            </NavLink>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `relative text-base leading-6 text-[#FFFFFF]  text-[16px]${
                  isActive
                    ? "after:content-[''] after:absolute after:h-1 after:translate-y-[-30px] after:w-full after:left-0 after:bg-[#FFD3AF] text-[16px] top-0"
                    : ""
                }`
              }
            >
              Log In
            </NavLink>
            <div className="flex items-center gap-2 text-[#FFD3AF] text-[16px]">
              <a href="#" className="leading-6 text-[16px]">
                Clone project
              </a>
              <FaArrowRightLong className="text-[#FFFFFF]" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
