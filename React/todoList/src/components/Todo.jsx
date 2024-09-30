import React, { useRef, useState } from "react";
import { FaClipboardList, FaPlus } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Todoitem from "./Todoitem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const data = useRef();

  const addTodo = () => {
    const inputText = data.current.value.trim();
    if (inputText === "") {
      return null;
    }
    console.log(inputText);
    data.current.value = "";

    const newTodo = {
      id: todos.length + 1,
      text: inputText,
      isComplete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className="place-self-center bg-slate-100 w-[450px] h-[600px] p-12 flex flex-col gap-8 rounded-xl">
      {/* Title Area*/}
      <h1 className="text-3xl font-bold tracking-wider flex items-center gap-3">
        <FaClipboardList />
        Todo App{" "}
      </h1>

      {/* Input and Search */}
      <div className="flex items-center  bg-[#eee] rounded-full">
        <input
          ref={data}
          type="text"
          placeholder="you can create a new task"
          className="border-none placeholder:text-slate-400 p-3.5 outline-none bg-transparent  flex-1"
        />
        <div
          className="bg-[#00ADB5] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer"
          onClick={() => addTodo()}
        >
          <FaPlus className="size-5 text-[#eee]" />
        </div>
      </div>

      {/* Listing tasks */}
      <div className="mt-5">
        <Todoitem />
        <Todoitem />
        <Todoitem />
      </div>
    </div>
  );
};

export default Todo;
