// src/pages/CardsPage.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '/workspaces/fghhh/my-app/src/components/CardList';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '3', 10);

  return (
    <section>
      <h2>Все карточки</h2>
      <CardList limit={limit} />
    </section>
  );
};

export default CardsPage;