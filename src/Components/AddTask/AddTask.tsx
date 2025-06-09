import { useState } from 'react';
import './AddTask.css';

export interface AddTaskProps {
  addNewItem: (title: string) => void;
}

export const AddTask = ({ addNewItem }: AddTaskProps) => {
  const [newTitle, setNewTitle] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    setNewTitle(event.target.value);
  };
  const addTask = () => {
    addNewItem(newTitle);
    setNewTitle('');
  };
  return (
    <div className="input">
      <input
        type="text"
        value={newTitle}
        className="input-add"
        onChange={handleInputChange}
        placeholder="Introdu un nou task"
      />

      <button className="button-add" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};
