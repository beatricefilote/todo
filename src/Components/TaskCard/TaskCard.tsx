import './TaskCard.css';
import type { Task } from '../../Types';

export interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { date, title } = task;
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Data la care a fost adaugat taskul este : {date}</p>
    </div>
  );
};
