
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 md:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-luxury-gold text-3xl font-serif">L</span>
          <h1 className="text-luxury-navy font-serif text-xl md:text-2xl tracking-wide">Luxe Voyage Whisperer</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#destinations" className="text-luxury-navy hover:text-luxury-gold transition-colors">Destinations</a>
          <a href="#experiences" className="text-luxury-navy hover:text-luxury-gold transition-colors">Experiences</a>
          <a href="#concierge" className="text-luxury-navy hover:text-luxury-gold transition-colors">Concierge</a>
        </nav>
        
        <Button className="bg-luxury-navy hover:bg-luxury-navy/90 text-white">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
