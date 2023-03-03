import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [customerID, setCustomerID] = useState("");
  const [taskQueue, setTaskQueue] = useState([]);
  const [expert, setExpert] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);

  const requestTask = (task) => {
    // Add the requested task to the queue
    const newTask = {
      taskName: task,
      customerID: customerID,
      expert: "",
      completed: false
    };
    setTaskQueue([...taskQueue, newTask]);
  };

  return (
    <div>
      <h1>Task Scheduler</h1>
      <form>
        <label htmlFor="customerID">Customer ID:</label>
        <input
          type="text"
          id="customerID"
          name="customerID"
          value={customerID}
          onChange={(e) => setCustomerID(e.target.value)}
        />
        <br />
        <button onClick={() => requestTask("task1")}>Request Task 1</button>
        <button onClick={() => requestTask("task2")}>Request Task 2</button>
        <button onClick={() => requestTask("task3")}>Request Task 3</button>
        <button onClick={() => requestTask("task4")}>Request Task 4</button>
      </form>
      <h2>Task Request Queue</h2>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Customer ID</th>
            <th>Expert Assigned</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskQueue.map((task, index) => (
            <tr key={index}>
              <td>{task.taskName}</td>
              <td>{task.customerID}</td>
              <td>{task.expert}</td>
              <td>{task.completed ? "Completed" : "Ongoing"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
