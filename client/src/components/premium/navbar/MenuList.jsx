import React from "react";
import { navMenuList } from "../../../utils/helpers";
import { Link, useLocation } from "react-router-dom";

export default function MenuList() {
  const location = useLocation();

  return (
    <div className="menu-list py-4 border-b hidden md:block">
      <div className="container">
        <div className="flex items-center gap-8">
          {navMenuList?.map((menu, index) => {
            return (
              <Link
                key={index}
                className={`font-semibold hover:text-green-500 duration-100 ${
                  window.location.pathname === menu.href ? "text-green-500" : ""
                }`}
                to={menu.href}
              >
                {menu.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
