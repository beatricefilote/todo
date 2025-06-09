import './TaskCard.css';
import type { TaskProps } from '../../Types';

export interface TaskCardProps {
  task: TaskProps;
}

export function TaskCard({ task }: TaskCardProps) {
  const { date, title } = task;
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Data la care a fost adaugat taskul este : {date}</p>
    </div>
  );
}
