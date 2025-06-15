import { TaskCard } from '../TaskCard';
import './TaskList.css';
import { type Task } from '../../Types';

export interface TaskListProps {
  tasks: Task[];
  deleteBtn: (id: number) => void;
}

export const TaskList = ({ tasks, deleteBtn }: TaskListProps) => {
  return (
    <div className="listOfTasks">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteBtn={deleteBtn} />
      ))}
    </div>
  );
};
