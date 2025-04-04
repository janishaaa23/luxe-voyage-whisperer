
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface ChatMessageProps {
  content: string;
  sender: 'user' | 'bot';
  timestamp: string;
  category?: 'destination' | 'activity' | 'dining' | 'exploration' | 'general';
}

const ChatMessageItem: React.FC<ChatMessageProps> = ({ content, sender, timestamp, category }) => {
  const isBot = sender === 'bot';
  
  const getCategoryLabel = () => {
    if (!category || category === 'general') return null;
    
    const categoryColors = {
      destination: 'bg-blue-100 text-blue-800',
      activity: 'bg-green-100 text-green-800',
      dining: 'bg-orange-100 text-orange-800',
      exploration: 'bg-purple-100 text-purple-800'
    };
    
    const categoryLabels = {
      destination: 'Destination',
      activity: 'Activity',
      dining: 'Dining',
      exploration: 'Exploration'
    };
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[category]} mr-2`}>
        {categoryLabels[category]}
      </span>
    );
  };
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <Avatar className={`${isBot ? 'mr-3' : 'ml-3'} mt-1`}>
          {isBot ? (
            <>
              <AvatarImage src="https://images.unsplash.com/photo-1546743181-27faa5dcbf04?q=80&w=100&auto=format&fit=crop" />
              <AvatarFallback className="bg-luxury-navy text-white">LV</AvatarFallback>
            </>
          ) : (
            <>
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" />
              <AvatarFallback className="bg-luxury-gold text-luxury-navy">U</AvatarFallback>
            </>
          )}
        </Avatar>
        
        <div>
          <div 
            className={`relative rounded-2xl p-4 ${
              isBot 
                ? 'bg-white text-luxury-charcoal shadow-sm border border-gray-100' 
                : 'bg-luxury-navy text-white'
            }`}
          >
            {isBot && category && category !== 'general' && (
              <div className="mb-2">
                {getCategoryLabel()}
              </div>
            )}
            <p className="text-sm">{content}</p>
          </div>
          <p className={`text-xs mt-1 text-gray-400 ${isBot ? 'text-left' : 'text-right'}`}>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessageItem;
