import React from 'react';
import { Candidate } from '../../types';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="candidate-card-container">
      <img src={candidate.image} alt={candidate.name} />
      <h3>{candidate.name}</h3>
      <p>{candidate.profession}</p>
      <p>{candidate.bio}</p>
    </div>
  );
};

export default CandidateCard;