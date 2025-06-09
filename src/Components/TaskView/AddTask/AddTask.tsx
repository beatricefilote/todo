import { useState } from 'react';
import './AddTask.css';
import { type InputFormatProps } from '../../../Types';

export function InputTask({ addNewItem }: InputFormatProps) {
  const [newTitle, setNewTitle] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any) {
    setNewTitle(event.target.value);
  }
  function addTask() {
    addNewItem(newTitle);
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
    </div>
  );
}
