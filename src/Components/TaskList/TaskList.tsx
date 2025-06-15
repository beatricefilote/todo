import { TaskCard } from '../TaskCard';
import './TaskList.css';
import { type Task } from '../../Types';

export interface TaskListProps {
  tasks: Task[];
  delete_task: (id: number) => void;
}

export const TaskList = ({ tasks, delete_task }: TaskListProps) => {
  return (
    <div className="listOfTasks">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={delete_task} />
      ))}
    </div>
  );
};
