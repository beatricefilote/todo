import { Card } from './Components/Card/Card';
import './index.css';

export const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Clean the room', date: '2023-10-01' },
    { id: 2, title: 'Do homework', date: '2023-10-02' },
    { id: 3, title: 'Walk the dog', date: '2023-10-03' },
    { id: 4, title: 'Buy groceries', date: '2023-10-04' },
    { id: 5, title: 'Prepare dinner', date: '2023-10-05' },
    { id: 6, title: 'Read a book', date: '2023-10-06' },
    { id: 7, title: 'Exercise', date: '2023-10-07' },
    { id: 8, title: 'Call a friend', date: '2023-10-08' },
  ];

  return (
    <div className="list">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
};
