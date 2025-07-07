import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Car } from '../types/types';

interface CardsPageProps {
  cars: Car[];
}

const CardsPage = ({ cars }: CardsPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [yearRange, setYearRange] = useState([2010, 2024]);
  const [mileageRange, setMileageRange] = useState([0, 100000]);

  // Get limit from URL or default to 10
  const limit = parseInt(searchParams.get('limit') || '10');

  // Filter cars based on search and filters
  useEffect(() => {
    let result = [...cars];

    if (searchTerm) {
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterBrand) {
      result = result.filter((car) => car.brand === filterBrand);
    }

    result = result.filter(
      (car) =>
        car.price >= priceRange[0] &&
        car.price <= priceRange[1] &&
        car.year >= yearRange[0] &&
        car.year <= yearRange[1] &&
        car.mileage >= mileageRange[0] &&
        car.mileage <= mileageRange[1]
    );

    // Apply limit
    result = result.slice(0, limit);

    setFilteredCars(result);
  }, [searchTerm, filterBrand, priceRange, yearRange, mileageRange, cars, limit]);

  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Каталог автомобилей</h2>

      {/* Limit selector */}
      <div className="flex items-center space-x-4">
        <span>Показывать по:</span>
        <select
          value={limit}
          onChange={(e) => setSearchParams({ limit: e.target.value })}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Фильтры</h3>
        {<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Поиск по названию
                  </label>
                  <input
                    type="text"
                    placeholder="Модель или марка"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Марка
                  </label>
                  <select
                    value={filterBrand}
                    onChange={(e) => setFilterBrand(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">Все марки</option>
                    {uniqueBrands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Цена от: ${priceRange[0]} до: ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Пробег от: {mileageRange[0]} до: {mileageRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={mileageRange[1]}
                    onChange={(e) =>
                      setMileageRange([mileageRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Год от: {yearRange[0]} до: {yearRange[1]}
                  </label>
                  <input
                    type="range"
                    min="2010"
                    max="2024"
                    step="1"
                    value={yearRange[1]}
                    onChange={(e) =>
                      setYearRange([yearRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                </div>
              </div>}
      </div>

      {/* Car Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              { <><img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-48 object-cover" /><div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Год выпуска: {car.year}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Пробег: {car.mileage.toLocaleString()} км
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Состояние: {car.condition === 'new' ? 'Новый' : 'С пробегом'}
                  </p>
                  <p className="text-lg font-semibold text-blue-600 mb-4">
                    ${car.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => alert(`Запрос отправлен на ${car.brand} ${car.model}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
                  >
                    Запросить информацию
                  </button>
                </div></>}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            Автомобили не найдены по заданным критериям.
          </p>
        )}
      </div>
    </section>
  );
};

export default CardsPage;