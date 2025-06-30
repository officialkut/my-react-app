import Header from '../components/Header/Header';
import PromoSection from '../components/Promo/Promo';
import CaptionSection from '../components/Caption/Caption';
import AboutSection from '../components/About/About';
import FeaturesSection from '../components/Features/Features';
import CTASection from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';
import { Candidate, FeatureCard } from '../types/types';

const HomePage = () => {
  // Mock данные для демонстрации
  const candidateData: Candidate = {
    id: '1',
    title: "Pristia Candra",
    subtitle: "Senior Product Designer",
    location: "Los Angeles, USA",
    tags: ["Figma", "UI Design", "UX Design"],
    about: "Hi, I'm a final year student completing a bachelor's In information Technology in QUT, with experience. We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and creative channel Bright Side.",
    portfolioImages: [
      "/images/Fram.png",
      "/images/Fram2.png",
      "/images/Fram3.png"
    ],
    email: "pristia@gmail.com",
    phone: "0809021920139"
  };

  const swiperCandidates: Candidate[] = [
    {
      id: '2',
      title: "UI/UX Designer",
      subtitle: "Senior Designer",
      location: "San Francisco, CA",
      about: "I design user interfaces and experiences with a focus on accessibility and clean aesthetics.",
      tags: ["Figma", "Adobe XD", "User Research"]
    },
    {
      id: '3',
      title: "Frontend Developer",
      subtitle: "Mid-level Developer",
      location: "Remote",
      about: "Specialized in React and Vue.js with 3+ years of commercial experience.",
      tags: ["JavaScript", "React", "CSS"]
    }
  ];

  const featureCards: FeatureCard[] = [
    {
        id: '1',
        title: "Professional Profile",
        description: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes.",
        icon: ''
    },
    {
        id: '2',
        title: "Best Portfolio",
        description: "Create a free portfolio to show your best self and get discovered by recruiters.",
        icon: ''
    },
    {
        id: '3',
        title: "Powerful Resume",
        description: "Stand out with a professionally designed resume that highlights your skills.",
        icon: ''
    }
  ];

  return (
    <div className="body__container">
      <Header />
      <main className="container" id="main">
        <PromoSection />
        <CaptionSection />
        <AboutSection 
          candidate={candidateData} 
          swiperCandidates={swiperCandidates} 
        />
        <FeaturesSection featureCards={featureCards} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;