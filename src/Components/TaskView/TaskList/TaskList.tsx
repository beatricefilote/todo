import { TaskCard } from '../../TaskCard';
import './TaskList.css';
import { type TaskProps } from '../../../Types';

export interface TaskListProps {
  tasks: TaskProps[];
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
