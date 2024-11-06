import React from "react";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const logoutFunc = ()=>{
    localStorage.clear()
    window.location.href = '/auth'
  }
  return (
    <div className="h-20 bg-indigo-600 flex items-center justify-between px-5">
      <div className="text-white font-bold text-2xl cursor-pointer">
        POST SHARE
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 outline-none rounded-md"
        />
        <div className="text-white w-44 border p-2 text-center cursor-pointer hover:bg-indigo-700">
          Create Post
        </div>
        <BiLogOut onClick={logoutFunc} size={25} className="text-white cursor-pointer"/>
      </div>
    </div>
  );
};

export default Navbar;
