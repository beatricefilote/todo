import { useState } from 'react';
import type { Task } from '../../Types';
import { TaskList, mockedTasks } from '../../Components';
import { AddTask } from '../../Components';

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
      <AddTask addNewItem={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
