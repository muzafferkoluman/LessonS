import React from "react";
import {BiLogOut} from "react-icons/bi"

const Navbar = () => {
  return (
    <div className="h-20 bg-indigo-400 flex items-center justify-between px-5"> 
      <div className="text-white font-bold text-2xl cursor-pointer">POST SHARE</div>
      <div>
        <input type="text" placeholder="Search" />
        <div>Create Post</div>
      </div>
    </div>
  );
};

export default Navbar;
