import { Card } from '../Card/Card';
import { tasks } from './TaskData';
import '../../index.css';

export const TaskList = () => {
  return (
    <div className="listTask">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
};
