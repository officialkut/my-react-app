interface CardProps {
  id: number;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>ID: {id}</div>
    </div>
  );
};

export default Card;