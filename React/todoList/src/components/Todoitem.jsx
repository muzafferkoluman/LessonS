import React from "react";
import { FaRegCircle,FaRegTrashAlt } from "react-icons/fa";

const Todoitem = () => {
  return (
    <div className="flex items-center w-full py-4 px-2 gap-2 border-b  rounded-lg cursor-pointer">
      <FaRegCircle className="size-5 text-[#00ADB5]"/>
      <p className="flex-1">Test</p>
      <FaRegTrashAlt className="size-5 text-[#871231] hover:scale-110 transition-all"/>
    </div>
  );
};

export default Todoitem;
