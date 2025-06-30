import { useState, useEffect } from 'react';
import { AppData, Candidate, FeatureCard } from './types/types';
import Header from './components/Header/Header';
import PromoSection from './components/Promo/Promo';
import CaptionSection from './components/Caption/Caption';
import AboutSection from './components/About/About';
import FeaturesSection from './components/Features/Features';
import CTASection from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import './App.css';

const App = () => {
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
              about: "Hi, I'm a final year student completing a bachelor's In information Technology in QUT, with experience. We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and creative channel Bright Side.",
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
              description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
              icon: ''
            },
            card_2: {
              id: 'card_2',
              title: "Best Portfolio",
              description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
              icon: ''
            },
            card_3: {
              id: 'card_3',
              title: "Powerful Resume",
              description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
              icon: ''
            }
          },
          swiperCandidates: [
            {
              id: 'swiper_1',
              title: "UI/UX Designer",
              subtitle: "Senior Designer",
              location: "San Francisco, CA",
              about: "I design user interfaces and experiences with a focus on accessibility and clean aesthetics.",
              tags: ["Figma", "Adobe XD", "User Research"]
            },
            {
              id: 'swiper_2',
              title: "Frontend Developer",
              subtitle: "Mid-level Developer",
              location: "Remote",
              about: "Specialized in React and Vue.js with 3+ years of commercial experience.",
              tags: ["JavaScript", "React", "CSS"]
            },
            {
              id: 'swiper_3',
              title: "Product Manager",
              subtitle: "Junior PM",
              location: "New York, NY",
              about: "Passionate about building products that solve real user problems.",
              tags: ["Agile", "Scrum", "JIRA"]
            }
          ]
        };

        // Попытка загрузить данные с сервера
        const response = await fetch('data.json');
        if (response.ok) {
          const serverData = await response.json();
          setData(serverData);
        } else {
          setData(localData);
        }
      } catch (error) {
        console.error('Error loading data:', error);
        // Используем локальные данные в случае ошибки
        setData({
          candidateCards: {
            card_1: {
              id: 'card_1',
              title: "Pristia Candra",
              subtitle: "Senior Product Designer",
              location: "Los Angeles, USA",
              tags: ["Figma", "UI Design", "UX Design"],
              about: "Hi, I'm a final year student completing a bachelor's In information Technology in QUT, with experience. We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and creative channel Bright Side.",
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
              description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
              icon: ''
            },
            card_2: {
              id: 'card_2',
              title: "Best Portfolio",
              description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
              icon: ''
            },
            card_3: {
              id: 'card_3',
              title: "Powerful Resume",
              description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on brefolio to show your best self and get discovered by recruiters.",
              icon: ''
            }
          },
          swiperCandidates: [
            {
              id: 'swiper_1',
              title: "UI/UX Designer",
              subtitle: "Senior Designer",
              location: "San Francisco, CA",
              about: "I design user interfaces and experiences with a focus on accessibility and clean aesthetics.",
              tags: ["Figma", "Adobe XD", "User Research"]
            },
            {
              id: 'swiper_2',
              title: "Frontend Developer",
              subtitle: "Mid-level Developer",
              location: "Remote",
              about: "Specialized in React and Vue.js with 3+ years of commercial experience.",
              tags: ["JavaScript", "React", "CSS"]
            },
            {
              id: 'swiper_3',
              title: "Product Manager",
              subtitle: "Junior PM",
              location: "New York, NY",
              about: "Passionate about building products that solve real user problems.",
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

  return (
    <div className="body__container">
      <Header />
      <main className="container" id="main">
        <PromoSection />
        <CaptionSection />
        <AboutSection 

        />
        <FeaturesSection featureCards={Object.values(data.featureCards)} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;