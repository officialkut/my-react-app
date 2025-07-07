import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Страница не найдена
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Извините, запрашиваемая страница не существует или была перемещена.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;