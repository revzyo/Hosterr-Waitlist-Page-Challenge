import React from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2 ">
        <img className="max-w-10" src="./assets/logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl px-4 text-xs text-white py-1.5">Hosterr is Hiring!</button>
      </div>
      <div>
        <FaBars />
      </div>
    </div>
  );
};
export default Header;
