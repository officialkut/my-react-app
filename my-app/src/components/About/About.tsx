import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../assets/styles/style.css';


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

const AboutSection: React.FC = () => {
  const [appData, setAppData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);

  // Локальные данные
  const localData: AppData = {
    candidateCards: {

    },
    featureCards: {

    },
    swiperCandidates: [

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
     <img src="/images/plit.png" alt="" />

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
       <h2 className="about__title">Почему выбирают нас?</h2>


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

export default AboutSection;