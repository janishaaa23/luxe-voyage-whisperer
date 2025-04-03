
import React from 'react';
import DestinationCard from './DestinationCard';
import { LUXURY_DESTINATIONS } from '../data/destinations';

const DestinationsSection: React.FC = () => {
  return (
    <section id="destinations" className="py-16 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-luxury-navy mb-3">Exclusive Destinations</h2>
        <div className="h-1 w-24 gold-accent mx-auto rounded-full mb-4"></div>
        <p className="text-luxury-charcoal/80 max-w-2xl mx-auto">
          Discover the world's most exclusive and breathtaking destinations, carefully selected for the discerning traveler.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {LUXURY_DESTINATIONS.map((destination, index) => (
          <DestinationCard
            key={index}
            name={destination.name}
            country={destination.country}
            description={destination.description}
            imageUrl={destination.imageUrl}
            rating={destination.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
