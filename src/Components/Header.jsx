import React from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2 ">
        <img className="max-w-10" src="./assets/logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl px-4 text-xs text-white py-1.5">Hosterr is Hiring!</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li><a href="#"></a>Plans</li>
        <li><a href="#"></a>Find Domain</li>
        <li><a href="#"></a>Why Hosterr?</li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6 ">
        <a className="text-gray-400" href="#">SignIn </a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white" >Join WaitList</button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};
export default Header;
