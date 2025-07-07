import { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import '../../assets/styles/cta.css';

const CTA = () => {
  function setShowModal(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <section className="section__CTA" id="CTA">
      <div className="CTA__chertovna">
        <div className="CTA__tile">
          <h2 className="CTA__subtitle">
            Найдите свой автомобиль мечты.
          </h2>
          <button className="header__signup"
          onClick={() => setShowModal('signup')}
          >
            Католог </button>
          
        </div>
        <img 
          className="CTA__img" 
          src="https://cdn.forbes.ru/files/c/1082x683/photo_galleries/1920-02_tcm-3173-1834873.jpg__1582289253__55999.webp" 
          alt="CTA illustration" 
        />
      </div>
    </section>
  );
};

export default CTA;