import React from "react";
const Body = () =>{
    return (
        <div>
            <div className="flex items-center">
                <img src="./assets/blue.svg" alt="" className="-rotate-45 h-64" />
                <img src="./assets/red.svg" alt="" className="absolute -rotate-[30deg] h-64"  />
                <img src="./assets/purple.svg" alt="" className="absolute -rotate-[15deg] h-64" />
                <img src="./assets/LogoMain.png" alt="" className="absolute rounded-s-2xl h-64 " />
            </div>
            <div></div>
        </div>
    )
}
export default Body