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
        <h1 className="">Host your website in less than 5 minutes.</h1>
        <p>
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.{" "}
        </p>
        <form action="">
          <input type="email" placeholder="Enter e-mail address" />
          <button>Join Waitlist</button>
        </form>
        <div>
          <FaCheckCircle />
          <p>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
};
export default Body;
