import React from "react";
import { BsFillSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'
import { GrHomeRounded } from 'react-icons/gr'
import DarkMode from "./DarkMode";


function Menubar() {
    const [isDarkMode, toggleDrakMode] = DarkMode();
    return (
        <div className="grid grid-cols-2 bg-gradient-to-r dark:from-violet-500 from-pink-300 to-fuchsia-250">
            {/* <div>
                <img className="w-[80px]" src="http://buzzdesign.net/wp-content/uploads/2015/07/1.png" alt="logo" />
            </div> */}
            <div className="ml-5">
                {isDarkMode ? (
                    <BsFillSunFill size={"30"} color="#e9c46a" className="cursor-pointer mt-3 mr-10 " onClick={() => toggleDrakMode(!isDarkMode)} />
                ) : (
                    <BsMoonStarsFill size={"23"} color="#5875E3" className="cursor-pointer mt-3 mr-10 " onClick={() => toggleDrakMode(!isDarkMode)} />
                )
                }
            </div>
    
        </div>
    )
}
export default Menubar;