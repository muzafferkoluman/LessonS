import React from "react";
import { FaClipboardList, FaPlus } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Todoitem from "./Todoitem";

const Todo = () => {
  return (
    <div className="place-self-center bg-slate-100 w-[450px] h-[600px] p-12 flex flex-col gap-8 rounded-xl">
      {/* Title */}
      <h1 className="text-3xl font-bold tracking-wider flex items-center gap-3">
        <FaClipboardList />
        Todo App{" "}
      </h1>

      {/* Input and Search */}
      <div className="flex items-center  bg-[#eee] rounded-full">
        <input
          type="text"
          placeholder="you can create a new task"
          className="border-none placeholder:text-slate-400 p-3.5 outline-none bg-transparent  flex-1"
        />
        <div className="bg-[#00ADB5] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer">
          <FaPlus className="size-5 text-[#eee]" />
        </div>
      </div>

      {/* Listing tasks */}
      <div className="mt-5">
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        
      </div>
    </div>
  );
};

export default Todo;
