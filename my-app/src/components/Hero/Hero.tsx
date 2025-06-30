import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="promo" id="promo">
      <div className="promo__content">
        <h2 className="promo__title">Candidates with Creative & Engineering Backgrounds</h2>
        <p className="promo__description">
          This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch your career here.
        </p>
        <div className="promo__buttons">
          <button className="promo__button">Join Now</button>
          <p className="promo__button__text">
            Looking for candidates?{' '}
            <a href="https://t.me/+7HxFrva6kodlNjAy " target="_blank" rel="noopener noreferrer">
              Hire now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;