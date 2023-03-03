import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [expertID, setExpertID] = useState("");
  const [taskQueue, setTaskQueue] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const startTask = (taskID) => {
    // Find the task in the task queue and assign it to the expert
    const taskIndex = taskQueue.findIndex((task) => task.id === taskID);
    const task = taskQueue[taskIndex];
    task.expert = expertID;
    setTaskQueue([...taskQueue.slice(0, taskIndex), ...taskQueue.slice(taskIndex + 1)]);
    setTaskQueue([...taskQueue, task]);
  };

  const completeTask = (taskID) => {
    // Find the task in the task queue and move it to the completed tasks list
    const taskIndex = taskQueue.findIndex((task) => task.id === taskID);
    const task = taskQueue[taskIndex];
    task.completed = true;
    setTaskQueue([...taskQueue.slice(0, taskIndex), ...taskQueue.slice(taskIndex + 1)]);
    setCompletedTasks([...completedTasks, task]);
  };

  return (
    <div>
      <h1>Expert Dashboard</h1>
      <form>
        <label htmlFor="expertID">Expert ID:</label>
        <input
          type="text"
          id="expertID"
          name="expertID"
          value={expertID}
          onChange={(e) => setExpertID(e.target.value)}
        />
      </form>
      <h2>Task Queue</h2>
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Customer ID</th>
            <th>Task Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskQueue.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.customerID}</td>
              <td>{task.taskType}</td>
              <td>
                <button onClick={() => startTask(task.id)}>Start Task</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Completed Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Customer ID</th>
            <th>Task Type</th>
          </tr>
        </thead>
        <tbody>
          {completedTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.customerID}</td>
              <td>{task.taskType}</td>
            </tr>
          ))}
        </tbody>
      </table
