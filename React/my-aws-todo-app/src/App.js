import { useState, useRef } from "react";
import Home from "./components/Home";

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    const task = inputRef.current.value;
      setTasks([...tasks, task]);
      inputRef.current.value = "";
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="New Task"
            ref={inputRef} // useRef usage
          />
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
