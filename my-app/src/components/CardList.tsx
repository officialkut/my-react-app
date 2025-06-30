import { useState, useEffect } from 'react';
import Card from './Card';
import { CardData } from '../types/dataTypes';

const CardList: React.FC<{ cardType: 'candidates' | 'features' | 'swiper'; limit?: number }> = ({ 
  cardType, 
  limit 
}) => {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data.json');
        
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные');
        }
        
        const data: CardData = await response.json();
        
        let cardsData: any[] = [];
        
        switch (cardType) {
          case 'candidates':
            cardsData = Object.values(data.candidateCards);
            break;
          case 'features':
            cardsData = Object.values(data.featureCards);
            break;
          case 'swiper':
            cardsData = data.swiperCandidates;
            break;
          default:
            throw new Error('Неизвестный тип карточек');
        }
        
        setCards(limit ? cardsData.slice(0, limit) : cardsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки данных');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [cardType, limit]);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className={`card-list ${cardType}`}>
      {cards.map((card, index) => (
        <Card 
          key={index} 
          type={cardType}
          data={card} 
        />
      ))}
    </div>
  );
};

export default CardList;