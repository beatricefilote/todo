import { TaskCard } from '../TaskCard';
import './TaskList.css';
import { type Task } from '../../Types';
import { useState } from 'react';

export interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  const [newTasksList, setNewTasksList] = useState(tasks);

  const handleDeleteTask = (id: number) => {
    setNewTasksList((tasks) => tasks.filter((task) => task.id != id));
  };
  return (
    <div className="listOfTasks">
      {newTasksList.map((task) => (
        <TaskCard key={task.id} task={task} deletedTask={handleDeleteTask} />
      ))}
    </div>
  );
};
