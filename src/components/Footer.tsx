
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-navy text-white py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-luxury-gold text-3xl font-serif">L</span>
              <h3 className="text-white font-serif text-xl tracking-wide">Luxe Voyage</h3>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Elevating your travel experiences with personalized luxury recommendations and concierge services.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-luxury-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors text-sm">About Us</a></li>
              <li><a href="#destinations" className="text-white/70 hover:text-luxury-gold transition-colors text-sm">Destinations</a></li>
              <li><a href="#experiences" className="text-white/70 hover:text-luxury-gold transition-colors text-sm">Experiences</a></li>
              <li><a href="#concierge" className="text-white/70 hover:text-luxury-gold transition-colors text-sm">AI Concierge</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-luxury-gold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors text-sm">Personalized Planning</a></li>
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors text-sm">VIP Reservations</a></li>
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors text-sm">Private Jet Charter</a></li>
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors text-sm">Yacht Rentals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-luxury-gold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">Email: concierge@luxevoyage.com</li>
              <li className="text-white/70 text-sm">Phone: +1 (800) LUXURY</li>
              <li className="text-white/70 text-sm">1 Central Park West, New York, NY</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Luxe Voyage Whisperer. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-luxury-gold transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-luxury-gold transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-luxury-gold transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
