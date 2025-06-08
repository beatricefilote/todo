import { useState } from 'react';
import './Input.css';
import type { Task } from '../Card';
import { TaskList, mockedTasks } from '../TaskList';

export function InputTask() {
  const [newTitle, setNewTitle] = useState('');
  const [tasks, setTasks] = useState<Task[]>(mockedTasks);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any) {
    setNewTitle(event.target.value);
  }
  function addTask() {
    const newTask: Task = {
      title: newTitle,
      date: new Date().toString(),
      id: Math.random(),
    };
    setTasks((t) => [...t, newTask]);
    setNewTitle('');
  }
  return (
    <div className="input">
      <input
        className="input-add"
        type="text"
        placeholder="Introdu un nou task"
        value={newTitle}
        onChange={handleInputChange}
      ></input>
      <button className="button-add" onClick={addTask}>
        Add Task
      </button>
      <TaskList tasks={tasks} />
    </div>
  );
}
