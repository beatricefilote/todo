import { Card } from '../Card';
import './TaskList.css';
import { type Task } from '../Card';

export interface TaskListItem {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListItem) {
  return (
    <div className="listOfTasks">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
}
