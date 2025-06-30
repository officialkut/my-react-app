import CardList from '../components/CardList';

const HomePage: React.FC = () => {
  return (
    <section>
      <h2>Главная страница</h2>
      <div className="preview-cards">
        <CardList limit={3} />
      </div>
    </section>
  );
};

export default HomePage;