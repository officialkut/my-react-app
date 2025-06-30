import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../src/assets/styles/about.css';
import { Link } from 'react-router-dom';

// Типы данных
type CandidateCard = {
  title: string;
  subtitle: string;
  location: string;
  tags: string[];
  about: string;
  portfolioImages: string[];
  email: string;
  phone: string;
};

type FeatureCard = {
  title: string;
  description: string;
};

type SwiperCandidate = {
  title: string;
  subtitle: string;
  location: string;
  about: string;
  tags: string[];
};

type AppData = {
  candidateCards: Record<string, CandidateCard>;
  featureCards: Record<string, FeatureCard>;
  swiperCandidates: SwiperCandidate[];
};

const CardsPage: React.FC = () => {
  const [appData, setAppData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);

  // Локальные данные
  const localData: AppData = {
    candidateCards: {
      card_1: {
        title: "Pristia Candra",
        subtitle: "Senior Product Designer",
        location: "Los Angeles, USA",
        tags: ["Figma", "UI Design", "UX Design"],
        about: "Hi, I'm a final year student completing a bachelor's In information Technology in QUT, with experience.",
        portfolioImages: [
          "images/Fram.png",
          "images/Fram2.png",
          "images/Fram3.png"
        ],
        email: "pristia@gmail.com",
        phone: "0809021920139"
      }
    },
    featureCards: {
      card_1: {
        title: "Professional Profile",
        description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters."
      },
      card_2: {
        title: "Best Portfolio",
        description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters."
      },
      card_3: {
        title: "Powerful Resume",
        description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters."
      }
    },
    swiperCandidates: [
      {
        title: "UI/UX Designer",
        subtitle: "Senior Designer",
        location: "San Francisco, CA",
        about: "I design user interfaces with a focus on accessibility.",
        tags: ["Figma", "Adobe XD", "User Research"]
      },
      {
        title: "Frontend Developer",
        subtitle: "Mid-level Developer",
        location: "Remote",
        about: "Specialized in React and Vue.js with 3+ years experience.",
        tags: ["JavaScript", "React", "CSS"]
      },
      {
        title: "Product Manager",
        subtitle: "Junior PM",
        location: "New York, NY",
        about: "Passionate about building products that solve problems.",
        tags: ["Agile", "Scrum", "JIRA"]
      }
    ]
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Failed to load data');
        const data = await response.json();
        
        if (data.candidateCards && data.featureCards && data.swiperCandidates) {
          setAppData(data);
        } else {
          setAppData(localData);
        }
      } catch (error) {
        console.error('Error loading data:', error);
        setAppData(localData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const CandidateCardComponent: React.FC<{data: CandidateCard}> = ({ data }) => (
    <div className="about__wrapper animate__animated animate__fadeIn">
      <div className="about__inner">
        <div className="about__inner__war">
          <img className="about__avatar" src="images/Ellipse.png" alt="Profile" />
          <p className="about__subject">{data.title}</p>
          <p className="about__caption">{data.subtitle}</p>
          <div className="about__col">
            <p>{data.location}</p>
            <p className="about__slogan">Fulltime Freelancer</p>
          </div>
        </div>
        <div className="about__registertext">
          {data.tags.map(tag => (
            <p key={tag} className="about__register">{tag}</p>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="about__text">About Me</p>
        <p className="about__slogan__text">{data.about}</p>
        <p>Portfolio</p>
        <div className="about__img">
          {data.portfolioImages.map((img, index) => (
            <img key={index} src={img} alt={`Portfolio ${index + 1}`} />
          ))}
        </div>
        <p>Work Experience</p>
      </div>
      
      <div className="about__list__item">
        <div className="about__list2">
          <div className="about__conteiners">
            <div className="about__images">
              <img src="images/sms.png" alt="Email" />
            </div>
            <div className="about__email">
              <p className="about__normol">Email</p>
              <p>{data.email}</p>
            </div>
          </div>
          <div className="about__conteiners">
            <div className="about__images">
              <img src="images/call.png" alt="Phone" />
            </div>
            <div className="about__email">
              <p className="about__normol">Phone Number</p>
              <p>{data.phone}</p>
            </div>
          </div>
          <div>
            <p className="about__content">Download Resume</p>
            <p className="about__content2">Message</p>
          </div>
        </div>
      </div>
    </div>
  );

  const FeatureCardComponent: React.FC<{data: FeatureCard}> = ({ data }) => (
    <div className="card animate__animated animate__fadeInUp">
      <h3 className="text-x">{data.title}</h3>
      <p className="text-gray">{data.description}</p>
    </div>
  );

  if (loading) {
    return (
      <div className="preloader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <section className="section__about" id="about">
     <Link to="/cards" className="cards-link">
          <h2 className="about__title">Everything you want to know in one place.</h2>
      </Link>

      {/* Swiper Slider */}
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {appData?.swiperCandidates.map((candidate, index) => (
            <SwiperSlide key={index}>
              <div className="candidate-card-container">
                <CandidateCardComponent data={{
                  ...candidate,
                  portfolioImages: ["images/Fram.png", "images/Fram2.png", "images/Fram3.png"],
                  email: "example@example.com",
                  phone: "123-456-7890"
                }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Feature Cards Grid */}
      <div id="feature-cards-container" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {appData?.featureCards && Object.values(appData.featureCards).map((card, index) => (
          <FeatureCardComponent key={index} data={card} />
        ))}
      </div>
    </section>
  );
};

export default CardsPage; 