import './Card.css';
interface CardProps {
  title: string;
  date: string;
}

function Card({ title, date }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Data la care a fost adaugat taskul este : {date}</p>
    </div>
  );
}
export default Card;
