import './DeleteTask.css';

export interface DeleteTaskProps {
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
