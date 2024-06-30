import { useState } from "react";
import s from "./Main.module.css";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    const task = taskInput.trim();
    if (task) {
      setTasks([...tasks, task]);
      setTaskInput("");
    } else {
      alert("Please enter a task!");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.title}>To Do List</div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a Task"
        />
        <button onClick={addTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li className={s.todoLi} key={index}>
              {task}
              <button
                className={s.deleteTask}
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
