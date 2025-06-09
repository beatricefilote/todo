import './Card.css';
import type { TaskProps } from '../../Types';

export interface CardItemProps {
  task: TaskProps;
}

export function Card({ task }: CardItemProps) {
  const { date, title } = task;
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Data la care a fost adaugat taskul este : {date}</p>
    </div>
  );
}
