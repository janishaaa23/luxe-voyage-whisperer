
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

export interface ExperienceCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  duration: string;
  availability: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  category,
  description,
  imageUrl,
  duration,
  availability
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg flex flex-col card-hover">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"; // Fallback image
            target.onerror = null; // Prevent infinite loop
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 bg-luxury-gold/90 text-white text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </div>
      </div>

      <CardHeader className="pt-4 pb-2">
        <CardTitle className="text-lg font-serif text-luxury-navy">{title}</CardTitle>
      </CardHeader>

      <CardContent className="pb-3 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {description}
        </p>
        <div className="flex items-center space-x-4 text-sm text-luxury-charcoal/70">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{availability}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <button className="w-full py-2 text-luxury-navy font-medium hover:text-luxury-gold transition-colors text-sm">
          Learn More
        </button>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
