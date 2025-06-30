import { Candidate } from '../../types/types';
import '../../assets/styles/about.css';

type CandidateCardProps = {
  candidate: Candidate;
  isDetailed?: boolean;
};

const CandidateCard = ({ candidate, isDetailed = false }: CandidateCardProps) => {
  return (
    <div className={`candidate-card ${isDetailed ? 'detailed' : ''}`}>
      <div className="candidate-header">
        <img className="candidate-avatar" src="/images/Ellipse.png" alt="Profile" />
        <div className="candidate-info">
          <h3>{candidate.title}</h3>
          <p className="subtitle">{candidate.subtitle}</p>
          <div className="location">
            <span>{candidate.location}</span>
            <span className="freelancer">Fulltime Freelancer</span>
          </div>
        </div>
      </div>

      <div className="tags">
        {candidate.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {isDetailed && (
        <>
          <div className="about-section">
            <h4>About Me</h4>
            <p>{candidate.about}</p>
          </div>

          <div className="portfolio-section">
            <h4>Portfolio</h4>
            <div className="portfolio-images">
              {candidate.portfolioImages?.map((img, index) => (
                <img key={index} src={img} alt={`Portfolio ${index + 1}`} />
              ))}
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-item">
              <img src="/images/sms.png" alt="Email" />
              <div>
                <p className="label">Email</p>
                <p>{candidate.email}</p>
              </div>
            </div>

            <div className="contact-item">
              <img src="/images/call.png" alt="Phone" />
              <div>
                <p className="label">Phone Number</p>
                <p>{candidate.phone}</p>
              </div>
            </div>

            <div className="action-buttons">
              <button className="download-btn">Download Resume</button>
              <button className="message-btn">Message</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CandidateCard;