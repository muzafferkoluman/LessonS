import axios from "axios";
import React, { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://9j7l0whl93.execute-api.eu-north-1.amazonaws.com/$default/tasks",
        {
          name: taskName,
        }
      );

      console.log(response.data.message);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;
