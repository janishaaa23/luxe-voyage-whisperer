
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1601144913965-d7c6800c4212?q=80&w=1932&auto=format&fit=crop')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/80 to-luxury-navy/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-4 leading-tight">
            Elevate Your <span className="text-luxury-gold">Travel Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Discover exclusive destinations and curated experiences with your personal AI luxury travel concierge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-medium text-lg"
              onClick={() => document.getElementById('concierge')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Chat with Concierge <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
