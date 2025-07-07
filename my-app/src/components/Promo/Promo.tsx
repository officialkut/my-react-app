import '../../assets/styles/promo.css';

const Promo = () => {
  return (
    <section className="section promo" id="promo">
      <div className="promo__content">
        <h2 className="promo__title">
          Лучшие автомобили под ваш вкус и бюджет
        </h2>
        <p className="promo__description">
          Найдите идеальный автомобиль с нашим профессиональным подходом
        </p>
        <div className="promo__buttons">
          <button className="promo__button">Пасмотреть католог</button>

        </div>
      </div>

      <div className="background__content"></div>
    </section>
  );
};

export default Promo;