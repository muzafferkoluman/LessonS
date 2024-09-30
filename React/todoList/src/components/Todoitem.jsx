import React from "react";
import { FaRegCircle, FaRegTrashAlt, FaRegCheckCircle } from "react-icons/fa";

const Todoitem = ({ todo, toggle }) => {
  return (
    <div
      className="flex items-center w-full py-4 px-2 gap-2 border-b  rounded-lg cursor-pointer select-none"
      onClick={() => toggle(todo.id)}
    >
      {todo.isComplete ? (
        <FaRegCheckCircle className="size-5 text-[#00ADB5]" />
      ) : (
        <FaRegCircle className="size-5 text-[#1e4547]" />
      )}

      <p
        className={`flex-1 ${
          todo.isComplete ? "line-through" : ""
        }`}
      >
        {todo.text}
      </p>
      <FaRegTrashAlt className="size-5 text-[#871231] hover:scale-110 transition-all" />
    </div>
  );
};

export default Todoitem;
