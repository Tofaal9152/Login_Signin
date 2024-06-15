import React, { useState } from "react";
// import from asset and style
import { close, logo, menu } from "../assets/index";
import { people01 } from "../assets/index";
import styles from "../style";
// From dataArray
import { navLinks } from "../constants";

const Navbar = () => {
  // state
  const [open_close, setopen_close] = useState(true);
  return (
    <nav className={`w-full flex justify-between items-center py-6 `}>
      <div className="font-bold text-xl">
        <span className="text-gray-200">Book</span>
        <span className="text-green-400">Quest</span>
      </div>
      {/* pc */}
      <div className="hidden sm:flex justify-end items-center flex-1 space-x-10 ">
        {navLinks.map((item, index) => {
          return (
            <div className="text-white fontimonti cursor-pointer" key={item.id}>
              {item.title}
            </div>
          );
        })}
        <img className="w-[2.5rem]" src={people01} alt="" />
      </div>
      {/* mobile */}
      <div className="sm:hidden flex items-center justify-end space-x-7">
        <img className="w-[2.5rem]  z-10" src={people01} alt="" />
        <img
          className="relative cursor-pointer w-[1.3rem] z-10"
          onClick={() => setopen_close((e) => !e)}
          src={open_close ? menu : close}
          alt=""
        />

        <div
          className={`${
            open_close ? "hidden" : "flex"
          } sm:hidden flex-col bg-transparent h-screen items-start flex-1  space-y-4 fixed top-[0] overflow-x-hidden right-0 min-w-[140px] p-4 bg-black sidebar`}
        >
          {navLinks.map((item, index) => {
            return (
              <div
                className="text-white fontimonti cursor-pointer mt-[4.1rem]"
                key={item.id}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
