import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404 — Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/" className="home-link">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;