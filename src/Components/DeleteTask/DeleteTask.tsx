import './DeleteTask.css';

export interface DeleteTaskProps {
  deleteTask: () => void;
}

export const DeleteTask = ({ deleteTask }: DeleteTaskProps) => {
  const deletedTask = () => {
    deleteTask();
  };

  return (
    <div className="delete-task">
      <button className="button-delete" onClick={deletedTask}>
        Delete Task
      </button>
    </div>
  );
};
