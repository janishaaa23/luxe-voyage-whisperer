
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DestinationsSection from '../components/DestinationsSection';
import ExperiencesSection from '../components/ExperiencesSection';
import ConciergeChat from '../components/ConciergeChat';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <DestinationsSection />
        <ExperiencesSection />
        <ConciergeChat />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
