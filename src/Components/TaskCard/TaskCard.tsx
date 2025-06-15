import './TaskCard.css';
import type { Task } from '../../Types';
import './DeleteTask.css';

export interface TaskCardProps {
  task: Task;
  deletedTask: (id: number) => void;
}
interface DeleteTaskProps {
  handleDelete: () => void;
}
const DeleteTask = ({ handleDelete }: DeleteTaskProps) => {
  return (
    <button className="button-delete" onClick={handleDelete}>
      Delete
    </button>
  );
};

export const TaskCard = ({ task, deletedTask }: TaskCardProps) => {
  const { id, date, title } = task;
  const handleDelete = () => {
    deletedTask(id);
  };
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Data la care a fost adaugat taskul este : {date}</p>
      <DeleteTask handleDelete={handleDelete} />
    </div>
  );
};
