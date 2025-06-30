import React from 'react';

interface CardProps {
  type: 'candidates' | 'features' | 'swiper';
  data: any;
}

const Card: React.FC<CardProps> = ({ type, data }) => {
  switch (type) {
    case 'candidates':
      return (
        <div className="candidate-card">
          <h3>{data.title}</h3>
          <p className="subtitle">{data.subtitle}</p>
          <p className="location">{data.location}</p>
          <div className="tags">
            {data.tags.map((tag: string, i: number) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
          <p className="about">{data.about}</p>
        </div>
      );
    
    case 'features':
      return (
        <div className="feature-card">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      );
    
    case 'swiper':
      return (
        <div className="swiper-card">
          <h3>{data.title}</h3>
          <p className="subtitle">{data.subtitle}</p>
          <p className="location">{data.location}</p>
          <p className="about">{data.about}</p>
          <div className="tags">
            {data.tags.map((tag: string, i: number) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

export default Card;