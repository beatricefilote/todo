import { Card } from '../Card';
import { tasks } from './TaskData';

export const TaskList = () => {
  return (
    <div className="listTask">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
};
