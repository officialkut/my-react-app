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
            Set up your profile. <br /> Let jobs find you.
          </h2>
          <button className="header__signup"
          onClick={() => setShowModal('signup')}
          >
            Join Now</button>
          
        </div>
        <img 
          className="CTA__img" 
          src="/images/Rest.png" 
          alt="CTA illustration" 
        />
      </div>
    </section>
  );
};

export default CTA;