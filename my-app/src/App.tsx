import React, { useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Testimonial from './components/Testimonial/Testimonial';
import CandidatesSlider from './components/CandidatesSlider/CandidatesSlider';
import Features from './components/Features/Features';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import AuthModal from './components/AuthModal/AuthModal';
Preloader from './components/Preloader/Preloader';

import './App.module.css';

const App: React.FC = () => {
  const [loading] = useState<boolean>(false);

  return (
    <>
      {loading && <Preloader />}
      <div className="body__container">
        <Header />
        <main className="container" id="main">
          <Hero />
          <Testimonial />
          <CandidatesSlider />
          <Features />
          <CTA />
        </main>
        <Footer />
        <AuthModal />
      </div>
    </>
  );
};

export default App;