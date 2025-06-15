import { TaskCard } from '../TaskCard';
import './TaskList.css';
import { type Task } from '../../Types';

export interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, deleteTask }: TaskListProps) => {
  return (
    <div className="listOfTasks">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};
