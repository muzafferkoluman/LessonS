import { useState, useRef } from "react";
import AWS from "aws-sdk";

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
          <h1 className="text-6xl text-white text-center">Test</h1>
          <input type="text" placeholder="New Task" ref={inputRef} />
          <button onClick={addTask}>Add Tasks</button>
        </div>
      </div>
    </div>
  );
}

export default App;
