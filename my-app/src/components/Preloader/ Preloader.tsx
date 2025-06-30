import React from 'react';

const Preloader: React.FC = () => {
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