import '../../assets/styles/caption.css';

const Caption = () => {
  return (
    <section className="section__caption" id="caption">
      <div className="caption__content">
        <div className="caption__title">
          <div className="caption__hard">
            <img src="/images/Mask.png" alt="Quote marks" className="caption__content__img" />
            <img src="/images/Eli.png" alt="Zhao Cui" className="caption__pic" />
          </div>
          <h3 className="caption__title__laed">
            Создать присутствие в Интернете сложно.<br />
            Jobly облегчает поиск вас рекрутерами
          </h3>
          <div className="caption__subtitle">
            <h4>Чжао Цуй</h4>
            <p>Основатель Jobly.co</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Caption;