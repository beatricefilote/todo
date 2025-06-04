import { Card } from '../Card';
import { tasks } from './TaskData';
import './TaskList.css';

export const TaskList = () => {
  return (
    <div className="listTask">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
};
