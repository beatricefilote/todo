import { TaskCard } from '../TaskCard';
import './TaskList.css';
import { type Task } from '../../Types';

export interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="listOfTasks">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
