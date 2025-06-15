import { useState } from 'react';
import type { Task } from '../../Types';
import { TaskList, mockedTasks, AddTask } from '../../Components';

export const TaskView = () => {
  const [tasks, setTasks] = useState<Task[]>(mockedTasks);

  const addTask = (title: string) => {
    const newTask: Task = {
      title,
      date: new Date().toString(),
      id: Math.random(),
    };
    setTasks((t) => [...t, newTask]);
  };
  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
  };

  return (
    <div className="task-view">
      <AddTask addNewItem={addTask} />
      <TaskList tasks={tasks} delete_task={handleDeleteTask} />
    </div>
  );
};
