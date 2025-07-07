import { Link } from 'react-router-dom';
import { Car } from '../types/types'; // Создайте тип Car в отдельном файле
import CardList from '../components/CardList';

interface HomePageProps {
  cars: Car[];
}

const HomePage = ({ cars }: HomePageProps) => {
  const featuredCars = cars.filter(car => car.featured).slice(0, 3);

    <section>
      <h2>Главная страница</h2>
      <div className="preview-cards">
        <CardList limit={3} cardType={'candidates'} />
      </div>
    </section>
};

export default HomePage;