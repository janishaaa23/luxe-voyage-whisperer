
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export interface DestinationCardProps {
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  name, 
  country, 
  description, 
  imageUrl,
  rating
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg card-hover">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
          <Star className="h-4 w-4 text-luxury-gold mr-1 fill-luxury-gold" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <CardHeader className="pt-4 pb-2">
        <CardTitle className="text-xl font-serif text-luxury-navy">{name}</CardTitle>
        <CardDescription className="text-luxury-charcoal/80 font-medium">
          {country}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full border-luxury-gold text-luxury-navy hover:bg-luxury-gold/10">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
