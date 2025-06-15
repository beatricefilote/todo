import './TaskCard.css';
import type { Task } from '../../Types';
import './DeleteTask.css';

export interface TaskCardProps {
  task: Task;
  deletedTask: (id: number) => void;
}
interface DeleteTaskProps {
  taskId: number;
  deleteTask: (id: number) => void;
}
export const DeleteTask = ({ taskId, deleteTask }: DeleteTaskProps) => {
  const deletedTask = () => {
    deleteTask(taskId);
  };

  return (
    <div className="delete-task">
      <button className="button-delete" onClick={deletedTask}>
        Delete Task
      </button>
    </div>
  );
};

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
