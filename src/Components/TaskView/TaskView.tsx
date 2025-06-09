import { useState } from 'react';
import type { Task } from '../Card';
import { TaskList, mockedTasks } from './TaskList';
import { InputTask } from './AddTask';

export function TaskView() {
  const [tasks, setTasks] = useState<Task[]>(mockedTasks);

  function addTask(title: string) {
    const newTask: Task = {
      title,
      date: new Date().toString(),
      id: Math.random(),
    };
    setTasks((t) => [...t, newTask]);
  }

  return (
    <div className="task-view">
      <InputTask addNewItem={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
