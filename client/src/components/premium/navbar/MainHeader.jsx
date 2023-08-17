import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { navMenuList } from "../../../utils/helpers";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const sliderRef = useRef();
  const handleClick = (e) => {
    if (sliderRef.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  // useEffect(() => {
  //   window?.addEventListener("resize", (e) => {
  //     window.innerWidth >= 719 && setIsOpen(false);
  //   });
  //   return () => window?.removeEventListener("resize");
  // }, [sliderRef]);
  return (
    <>
      <div className="main-header  border-b-[1px] py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer order-3 md:hidden"
            >
              <HiMenuAlt3 className="text-xl" />
            </div>
            <Link to="/" className="order-2 md:order-1 font-dark">
              كارتي
            </Link>

            <form className=" hidden order-2 md:block">
              <div className="flex flex-row-reverse">
                <label
                  htmlFor="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  type="button"
                >
                  {" "}
                  All categories
                  <svg
                    className="w-2.5 h-2.5 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Shopping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Images
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Finance
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full flex ">
                  <button
                    type="submit"
                    className="p-2.5 h-full text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 min-w-[280px] z-20 text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-green-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </div>
            </form>

            <div className="flex flex-row-reverse md:flex-row order-1 md:order-3 items-center gap-3">
              <div className="flex items-center gap-2">
                <AiOutlineShoppingCart className="text-2xl" />
                <span className="text-sm font-semibold hidden md:inline-block">
                  عربة التسوق
                </span>
              </div>
              <UserMenu />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- drawer init and show --> */}

      {/* <!-- drawer component --> */}
      <div className="md:hidden" onClick={(e) => handleClick(e)}>
        <div
          className={`layer h-[100vh] bg-[#11111171] fixed top-0 right-0  duration-200 ease-in-out ${
            isOpen ? "w-[100%]" : "w-0"
          }`}
        ></div>
        <div
          ref={sliderRef}
          id="drawer-navigation"
          className={`fixed top-0 right-0 z-40 w-64 h-screen  overflow-y-auto transition-transform duration-300 ease-in-out ${
            isOpen ? "" : "translate-x-full"
          } bg-white dark:bg-gray-800 `}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <div className="flex py-5 px-3 border-b justify-between items-center ">
            <h3>كارتي</h3>
            <div
              onClick={() => setIsOpen(false)}
              role="button"
              className="p-1 rounded-full bg-green-100 rotate-0 hover:rotate-180 duration-200 ease-in-out"
            >
              <IoIosClose className="" />
            </div>
          </div>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {navMenuList.map((menu, index) => {
                return (
                  <li key={index} className="border-b group px-2 py-3">
                    <Link
                      className={`hover:text-green-500  group-hover:-translate-x-3 inline-block duration-150 font-semibold ${
                        window.location.pathname === menu.href
                          ? "text-green-500 -translate-x-3"
                          : ""
                      }`}
                      to={menu.href}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
