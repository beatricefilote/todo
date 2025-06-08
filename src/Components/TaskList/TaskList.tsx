import { Card } from '../Card';
import './TaskList.css';
import { type Task } from '../Card';

export interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="listTask">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
}
