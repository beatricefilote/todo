import './Card.css';

export interface Task {
  title: string;
  date: string;
  id: number;
}
export interface CardProps {
  task: Task;
}

export function Card({ task }: CardProps) {
  const { date, title } = task;
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Data la care a fost adaugat taskul este : {date}</p>
    </div>
  );
}
