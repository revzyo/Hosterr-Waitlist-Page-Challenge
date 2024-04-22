import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const Body = () => {
  return (
    <div>
      <div className="flex items-center">
        <img src="./assets/blue.svg" alt="" className="-rotate-45 h-64" />
        <img
          src="./assets/red.svg"
          alt=""
          className="absolute -rotate-[30deg] h-64"
        />
        <img
          src="./assets/purple.svg"
          alt=""
          className="absolute -rotate-[15deg] h-64"
        />
        <img
          src="./assets/LogoMain.png"
          alt=""
          className="absolute rounded-s-2xl h-64 "
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold font-playfair leading-tight mt-10">Host your website in less than 5 minutes.</h1>
        <p className="font-lato text-gray-400 mt-3">
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.{" "}
        </p>
        <form action="" className="flex flex-col gap-4 mt-3">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400 " type="email" placeholder="Enter e-mail address" />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white">Join Waitlist</button>
        </form>
        <div className="flex gap-2">
          <FaCheckCircle className="mt-1" />
          <p className="font-lato text-gray-400">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
};
export default Body;
