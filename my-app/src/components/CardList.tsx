import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

interface CardData {
  id: number;
  title: string;
  description: string;
  // Другие поля карточки
}

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 10 }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Заглушка для демонстрации
        const mockData: CardData[] = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          title: `Card ${i + 1}`,
          description: `Description for card ${i + 1}`
        }));
        
        // Имитация задержки сети
        await new Promise(resolve => setTimeout(resolve, 500));
        setCards(mockData.slice(0, limit));
        setError(null);
      } catch (err) {
        setError('Ошибка загрузки данных');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [limit]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list">
     
      
      <div className="cards-container">
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;