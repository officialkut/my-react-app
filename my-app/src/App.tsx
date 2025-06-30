import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppData, Candidate, FeatureCard } from './types/types';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';
import PromoSection from './components/Promo/Promo';
import CaptionSection from './components/Caption/Caption';
import AboutSection from './components/About/About';
import FeaturesSection from './components/Features/Features';
import CTASection from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import './App.css';

const AppWrapper = () => {
  const [data, setData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Локальные данные как fallback
        const localData: AppData = {
          candidateCards: {
            card_1: {
              id: 'card_1',
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
              id: 'card_1',
              title: "Professional Profile",
              description: "We know finding the right job is stressful, so we've made it simple.",
              icon: ''
            },
            card_2: {
              id: 'card_2',
              title: "Best Portfolio",
              description: "Create a free portfolio to show your best self.",
              icon: ''
            },
            card_3: {
              id: 'card_3',
              title: "Powerful Resume",
              description: "Generate a professional resume in minutes.",
              icon: ''
            }
          },
          swiperCandidates: [
            {
              id: 'swiper_1',
              title: "UI/UX Designer",
              subtitle: "Senior Designer",
              location: "San Francisco, CA",
              about: "I design user interfaces with a focus on accessibility.",
              tags: ["Figma", "Adobe XD", "User Research"]
            },
            {
              id: 'swiper_2',
              title: "Frontend Developer",
              subtitle: "Mid-level Developer",
              location: "Remote",
              about: "Specialized in React and Vue.js.",
              tags: ["JavaScript", "React", "CSS"]
            },
            {
              id: 'swiper_3',
              title: "Product Manager",
              subtitle: "Junior PM",
              location: "New York, NY",
              about: "Passionate about building products.",
              tags: ["Agile", "Scrum", "JIRA"]
            }
          ]
        };

        const response = await fetch('data.json');
        if (response.ok) {
          const serverData = await response.json();
          setData(serverData);
        } else {
          setData(localData);
        }
      } catch (error) {
        console.error('Error loading data:', error);
        setData({
          candidateCards: {
            card_1: {
              id: 'card_1',
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
              id: 'card_1',
              title: "Professional Profile",
              description: "We know finding the right job is stressful.",
              icon: ''
            },
            card_2: {
              id: 'card_2',
              title: "Best Portfolio",
              description: "Create a free portfolio.",
              icon: ''
            },
            card_3: {
              id: 'card_3',
              title: "Powerful Resume",
              description: "Generate a professional resume.",
              icon: ''
            }
          },
          swiperCandidates: [
            {
              id: 'swiper_1',
              title: "UI/UX Designer",
              subtitle: "Senior Designer",
              location: "San Francisco, CA",
              about: "I design user interfaces.",
              tags: ["Figma", "Adobe XD", "User Research"]
            },
            {
              id: 'swiper_2',
              title: "Frontend Developer",
              subtitle: "Mid-level Developer",
              location: "Remote",
              about: "Specialized in React.",
              tags: ["JavaScript", "React", "CSS"]
            },
            {
              id: 'swiper_3',
              title: "Product Manager",
              subtitle: "Junior PM",
              location: "New York, NY",
              about: "Passionate about products.",
              tags: ["Agile", "Scrum", "JIRA"]
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    return <Preloader />;
  }

  const MainContent = () => (
    <main className="container" id="main">
      <PromoSection />
      <CaptionSection />
      <AboutSection />
      <FeaturesSection featureCards={Object.values(data.featureCards)} />
      <CTASection />
    </main>
  );

  return (
    <BrowserRouter>
      <div className="body__container">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainContent />} />
            <Route path="cards" element={<CardsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppWrapper;