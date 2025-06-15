import { TaskCard } from '../TaskCard';
import './TaskList.css';
import { type Task } from '../../Types';
import { useEffect, useState } from 'react';

export interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  const [newTasksList, setNewTasksList] = useState(tasks);
  useEffect(() => {
    setNewTasksList(tasks);
  }, [tasks]);

  const handleDeleteTask = (id: number) => {
    setNewTasksList((prevTasks) => prevTasks.filter((task) => task.id != id));
  };
  return (
    <div className="listOfTasks">
      {newTasksList.map((task) => (
        <TaskCard key={task.id} task={task} deletedTask={handleDeleteTask} />
      ))}
    </div>
  );
};
