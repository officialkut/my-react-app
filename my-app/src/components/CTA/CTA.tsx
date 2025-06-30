import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="section__CTA" id="CTA">
      <div className="CTA__chertovna">
        <div className="CTA__tile">
          <h2 className="CTA__subtitle">Set up your profile. <br /> Let jobs find you.</h2>
          <button className="CTA__button" type="button">Join Now</button>
        </div>
        <img className="CTA__img" src="/images/Rest.png" alt="" />
      </div>
    </section>
  );
};

export default CTA;