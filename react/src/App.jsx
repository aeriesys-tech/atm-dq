import React, { useState, useEffect, useRef } from "react";
import Logo from "./assets/image/aditya-logo.avif";
import { GoHomeFill } from "react-icons/go";
import {
  MdArrowRight,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaFloppyDisk } from "react-icons/fa6";
import { IoIosSettings, IoMdLogOut } from "react-icons/io";
import { CgBell } from "react-icons/cg";
import { IoPersonCircle, IoSettings } from "react-icons/io5";
import { RiArrowRightSFill, RiSettingsFill } from "react-icons/ri";
import { AiFillPieChart, AiFillTool } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { TbHelpOctagonFilled } from "react-icons/tb";
function App() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  //Sidebar jsx--------------------------------------------------------------------------
  // const [openMenu, setOpenMenu] = useState(null);
  // const dashboardRef = useRef(null);
  // const settingsRef = useRef(null);

  // const toggleMenu = (menuId) => {
  //   setOpenMenu((prev) => (prev === menuId ? null : menuId));
  // };

  // useEffect(() => {
  //   const refs = {
  //     dashboard: dashboardRef,
  //     settings: settingsRef,
  //   };

  //   Object.entries(refs).forEach(([key, ref]) => {
  //     if (ref.current) {
  //       if (openMenu === key) {
  //         ref.current.style.maxHeight = ref.current.scrollHeight + "px";
  //       } else {
  //         ref.current.style.maxHeight = "0px";
  //       }
  //     }
  //   });
  // }, [openMenu]);

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex flex-col">
        {/*-------------------------------------------NavBar--------------------------------------------------*/}
        <nav
          className="bg-white border-b-1 border-gray-200 px-4 py-2 sticky top-0 left-0"
          ref={dropdownRef}
        >
          <div className="container-fluid flex items-center justify-between">
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <img className="w-16" src={Logo} />
                <span className="text-[15px] text-blue-500 font-bold">ATM DQ</span>
              </div>
              {/* Menu */}
              <div className=" hidden md:flex space-x-4 items-center ml-10">
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-blue-600 font-semibold text-[13px] flex gap-1 items-center"
                    onClick={() => toggleDropdown("products")}
                  >
                    <GoHomeFill />
                    Home
                    <MdOutlineKeyboardArrowDown className="mt-1" />
                  </button>
                  {openDropdown === "products" && (
                    <div className="absolute left-0 top-8 mt-2 w-40 bg-white shadow-md rounded-lg z-10 py-2">
                      <a
                        href="#"
                        className="flex items-center gap-2 p-2 px-4 mb-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                      >
                        New
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 p-2 px-4 mb-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                      >
                        Popular
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 p-2 px-4 mb-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                      >
                        Sale
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-[13px] font-semibold flex items-center gap-1"
                >
                  <AiFillTool />
                  Configure
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-[13px] font-semibold flex items-center gap-1"
                >
                  <FaFloppyDisk />
                  Templates
                </a>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("notifications")}
                  className="relative text-gray-600 hover:text-blue-600 focus:outline-none border-1 p-1 rounded-lg border-slate-300"
                >
                  <CgBell className="w-5 h-5" />
                  <span className="absolute left-5 bottom-4 inline-block w-4 h-4 bg-red-500 rounded-full text-[10px] text-white">
                    3
                  </span>
                </button>
                {openDropdown === "notifications" && (
                  <div className="absolute right-0 left-[-70px] top-8.5 mt-2 w-64 bg-white rounded shadow-lg z-10">
                    <div className="p-4 border-b font-medium">
                      Notifications
                    </div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[13px] hover:bg-gray-100"
                    >
                      New message from John
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[13px] hover:bg-gray-100"
                    >
                      Server rebooted
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-[13px] hover:bg-gray-100"
                    >
                      New comment on post
                    </a>
                  </div>
                )}
              </div>

              {/* Settings */}
              <button
                //   onClick={() => toggleDropdown("setting")}
                className="relative text-gray-600 hover:text-blue-600 focus:outline-none border-1 p-1 rounded-lg border-slate-300"
              >
                <IoIosSettings className="w-5 h-5" />
              </button>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  className="flex items-center space-x-2 focus:outline-none border-1 p-1 rounded-lg px-2 border-slate-300"
                >
                  <img
                    src="https://i.pravatar.cc/32"
                    alt="Avatar"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="hidden md:block text-gray-700 text-[13px] font-medium">
                    John Deo
                  </span>
                  <MdOutlineKeyboardArrowDown className="mt-1" />
                </button>
                {openDropdown === "profile" && (
                  <div className="absolute right-0 top-9 mt-2 w-40 bg-white shadow-lg rounded-lg z-10 py-2">
                    <a
                      href="#"
                      className="flex items-center font-medium gap-2 p-2 mb-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                    >
                      <IoPersonCircle className="w-4 h-4 text-gray-700" />{" "}
                      Profile
                    </a>
                    <a
                      href="#"
                      className="flex items-center font-medium gap-2 p-2 mb-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                    >
                      <RiSettingsFill className="w-4 h-4 text-gray-700" />
                      Settings
                    </a>
                    <a
                      href="#"
                      className="flex items-center font-medium gap-2 p-2 mb-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                    >
                      <HiOutlineLogout className="w-4 h-4 text-gray-700" />
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2">
              <div className="flex flex-col space-y-2">
                {/* Home Dropdown */}
                <button
                  onClick={() => toggleDropdown("products")}
                  className="text-gray-700 py-2 hover:text-blue-600 font-semibold text-[13px] flex gap-1 items-center"
                >
                  <span className="flex items-center gap-2">Home</span>
                  <MdOutlineKeyboardArrowDown />
                </button>
                {openDropdown === "products" && (
                  <div className=" space-y-1 ml-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 p-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                    >
                      New
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 p-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                    >
                      Popular
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 p-1 text-[13px] hover:bg-blue-50 hover:text-blue-500"
                    >
                      Sale
                    </a>
                  </div>
                )}

                <a
                  href="#"
                  className="text-gray-700 py-2 hover:text-blue-600 font-semibold text-[13px] flex gap-1 items-center"
                >
                  Configure
                </a>
                <a
                  href="#"
                  className="text-gray-700 py-2 hover:text-blue-600 font-semibold text-[13px] flex gap-1 items-center"
                >
                  Templates
                </a>
              </div>
            </div>
          )}
        </nav>
        {/*-------------------------------------------Dashboard--------------------------------------------------*/}
        <div className="">
          
      </div>
      </div>
    </>
  );
}

export default App;
