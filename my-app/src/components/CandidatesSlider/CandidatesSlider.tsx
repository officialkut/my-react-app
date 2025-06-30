import React from 'react';
import { Candidate } from '../../types';
import CandidateCard from './CandidateCard';

interface CandidatesSliderProps {
  candidates: Candidate[];
}

const CandidatesSlider: React.FC<CandidatesSliderProps> = ({ candidates }) => {
  return (
    <section className="section__about" id="about">
      <h2 className="about__title">Everything you want to know in one place.</h2>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="swiper-slide">
              <CandidateCard candidate={candidate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidatesSlider;