import React, { useState } from "react";
import "./style.css";

function Todo() {
  const [tasks, setTasks] = useState("");
  const [lists, setLists] = useState([]);

  const handleChange = (e) => {
    setTasks(e.target.value);
    console.log("changed");
  };

  const handleAddTasks = (tasks) => {
    if (tasks === "") return alert("Please enter a task.");
    else {
      setLists([...lists, tasks]);
      setTasks("");
    }
  };

  const handleDeleteTasks = (index) => {
    setLists(lists.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <label>
        <b>Enter a task:</b>
      </label>
      <input onChange={handleChange} name="tasks" value={tasks} />
      <button onClick={() => handleAddTasks(tasks)}>Add</button>
      <ol>
        {lists.map((list, index) => (
          <li key={index}>
            {list}
            <button onClick={() => handleDeleteTasks(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
