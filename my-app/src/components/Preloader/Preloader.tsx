import '../../assets/styles/prolaeder.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__spinner"></div>
        <div className="preloader__text">Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;