import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="section__caption" id="caption">
      <div className="caption__content">
        <div className="caption__title">
          <div className="caption__hard">
            <img src="/images/Mask.png" alt="кавычки" />
            <img src="/images/Eli.png" alt="фото" />
          </div>
          <h2 className="caption__title__laed">
            Creating an Online Presence is Hard. <br /> Jobly Makes it Easy for Recruiters to See you
          </h2>
          <div className="caption__subtitle">
            <h3 className="caption__subtitle__1">Zhao Cui</h3>
            <p className="caption__subtitle__laed">Founder at Jobly.co</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;