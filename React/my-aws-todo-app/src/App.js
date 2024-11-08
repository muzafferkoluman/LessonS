import { useState, useRef } from "react";
import AWS from "aws-sdk";
import Home from "./components/Home";

// AWS configuration
AWS.config.update({
  region: "eu-north-1",
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID, 
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY, 
});

const sns = new AWS.SNS();

const notifyTaskAddition = (task) => {
  const params = {
    Message: `New task added: ${task}`,
    TopicArn: "arn:aws:sns:eu-north-1:211125495898:TaskUpdates", 
  };

  sns.publish(params, (err, data) => {
    if (err) console.log("Error sending notification:", err);
    else console.log("Notification sent:", data);
  });
};

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    const task = inputRef.current.value;
    setTasks([...tasks, task]);
    inputRef.current.value = "";
    
    notifyTaskAddition(task);
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="New Task"
            ref={inputRef} 
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
