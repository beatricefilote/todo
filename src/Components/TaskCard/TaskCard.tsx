import './TaskCard.css';
import type { Task } from '../../Types';

export interface TaskCardProps {
  task: Task;
  deleteTask: (id: number) => void;
}

export const TaskCard = ({ task, deleteTask }: TaskCardProps) => {
  const { id, date, title } = task;
  const handleDelete = () => {
    deleteTask(id);
  };
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Data la care a fost adaugat taskul este : {date}</p>
      <button className="button-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
