import { useState } from 'react';
import './Input.css';

export function Input() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(); //aici vreau sa mi pun arrayu meu cu taskuri

  function addTask() {
    setTasks();
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  return (
    <div className="input">
      {newTask}
      <input
        className="input-add"
        type="text"
        placeholder="Introdu un nou task"
        value={newTask}
        onChange={handleInputChange}
      ></input>
      <button className="button-add" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}
