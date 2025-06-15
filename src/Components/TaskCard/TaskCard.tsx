import './TaskCard.css';
import type { Task } from '../../Types';
import { DeleteTask } from '../DeleteTask';

export interface TaskCardProps {
  task: Task;
  deletedTask: (id: number) => void;
}

export const TaskCard = ({ task, deletedTask }: TaskCardProps) => {
  const { id, date, title } = task;
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Data la care a fost adaugat taskul este : {date}</p>
      <DeleteTask taskId={id} deleteTask={deletedTask} />
    </div>
  );
};
