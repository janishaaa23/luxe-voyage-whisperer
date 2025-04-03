
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: string;
  category?: 'destination' | 'activity' | 'dining' | 'exploration' | 'general';
}
