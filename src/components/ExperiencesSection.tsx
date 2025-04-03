
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { LUXURY_EXPERIENCES } from '../data/experiences';

const ExperiencesSection: React.FC = () => {
  return (
    <section id="experiences" className="py-16 px-6 md:px-8 luxury-gradient text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Extraordinary Experiences</h2>
          <div className="h-1 w-24 gold-accent mx-auto rounded-full mb-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Curated exclusive experiences that transform your journey into unforgettable memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LUXURY_EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              category={experience.category}
              description={experience.description}
              imageUrl={experience.imageUrl}
              duration={experience.duration}
              availability={experience.availability}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
