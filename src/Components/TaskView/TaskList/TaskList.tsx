import { Card } from '../../CardStructure';
import './TaskList.css';
import { type TaskProps } from '../../../Types';

export interface TaskOfListProps {
  tasks: TaskProps[];
}

export function TaskList({ tasks }: TaskOfListProps) {
  return (
    <div className="listOfTasks">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
}
