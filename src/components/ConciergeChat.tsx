
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ChatMessageItem from './ChatMessageItem';
import { formatDistanceToNow } from 'date-fns';
import { getChatResponse } from '../utils/chatUtils';
import { ChatMessage } from '../types/chat';

const ConciergeChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Welcome to Luxe Voyage Whisperer. I'm your personal AI luxury travel concierge. I can assist with destination recommendations, activities, dining experiences, and hidden gems to explore. How may I help with your travel plans today?",
      sender: 'bot',
      timestamp: formatDistanceToNow(new Date(), { addSuffix: true }),
      category: 'general'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  const determineCategory = (message: string): 'destination' | 'activity' | 'dining' | 'exploration' | 'general' => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('where to travel') || lowerMessage.includes('destination') || 
        lowerMessage.includes('place to visit') || lowerMessage.includes('travel to')) {
      return 'destination';
    } else if (lowerMessage.includes('what to do') || lowerMessage.includes('activity') || 
               lowerMessage.includes('experience') || lowerMessage.includes('things to do')) {
      return 'activity';
    } else if (lowerMessage.includes('what to eat') || lowerMessage.includes('restaurant') || 
               lowerMessage.includes('dining') || lowerMessage.includes('food')) {
      return 'dining';
    } else if (lowerMessage.includes('where to explore') || lowerMessage.includes('hidden gem') || 
               lowerMessage.includes('discover') || lowerMessage.includes('secret spot')) {
      return 'exploration';
    } else {
      return 'general';
    }
  };
  
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: formatDistanceToNow(new Date(), { addSuffix: true })
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Get AI response
    try {
      const response = await getChatResponse(inputMessage);
      const category = determineCategory(inputMessage);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: formatDistanceToNow(new Date(), { addSuffix: true }),
        category
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error getting chat response:", error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an issue while processing your request. Please try again.",
        sender: 'bot',
        timestamp: formatDistanceToNow(new Date(), { addSuffix: true }),
        category: 'general'
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <section id="concierge" className="py-16 px-6 md:px-8 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-luxury-navy mb-3">Your Personal Travel Concierge</h2>
          <div className="h-1 w-24 gold-accent mx-auto rounded-full mb-4"></div>
          <p className="text-luxury-charcoal/80 max-w-2xl mx-auto">
            Ask our AI luxury travel concierge about destinations, activities, dining recommendations, or hidden gems to explore.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Chat header */}
          <div className="bg-luxury-navy text-white p-4 flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <div className="ml-2">
              <h3 className="font-medium">Luxe Voyage Whisperer</h3>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="p-4 h-[400px] overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <ChatMessageItem
                key={message.id}
                content={message.content}
                sender={message.sender}
                timestamp={message.timestamp}
                category={message.category}
              />
            ))}
            <div ref={endOfMessagesRef} />
            
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="flex max-w-[80%] flex-row">
                  <Avatar className="mr-3 mt-1">
                    <AvatarImage src="https://images.unsplash.com/photo-1546743181-27faa5dcbf04?q=80&w=100&auto=format&fit=crop" />
                    <AvatarFallback className="bg-luxury-navy text-white">LV</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="relative rounded-2xl p-4 bg-white text-luxury-charcoal shadow-sm border border-gray-100">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-luxury-navy animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-luxury-navy animate-pulse delay-150"></div>
                        <div className="w-2 h-2 rounded-full bg-luxury-navy animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat input */}
          <div className="p-4 border-t">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex space-x-2"
            >
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about destinations, activities, dining, or places to explore..."
                className="flex-grow"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy"
                disabled={isLoading}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConciergeChat;
