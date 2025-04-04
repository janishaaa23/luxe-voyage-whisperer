// A simple mock implementation of the chat response function
// In a real application, this would connect to a backend API or AI service
export const getChatResponse = async (message: string): Promise<string> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const message_lower = message.toLowerCase().trim();
  
  // Specific location queries - improved detection
  if (message_lower.includes('dubai')) {
    return "Dubai offers luxury experiences like Burj Khalifa and desert safaris. Best visited in winter.";
  } else if (message_lower.includes('bali')) {
    return "Bali features luxury resorts in Ubud and Seminyak with beautiful beaches and cultural experiences.";
  } else if (message_lower.includes('paris')) {
    return "Paris offers fine dining, shopping on Avenue Montaigne, and iconic landmarks with luxury accommodations.";
  } else if (message_lower.includes('tokyo')) {
    return "Tokyo combines tradition with luxury. Visit exclusive sushi counters and enjoy custom shopping in Ginza.";
  } else if (message_lower.includes('new york')) {
    return "New York features Broadway VIP experiences, fine dining, and luxury shopping with spectacular views.";
  } else if (message_lower.includes('maldives')) {
    return "The Maldives offers overwater villas, private dining, and exclusive snorkeling experiences.";
  }
  
  // Destination recommendations - improved matching
  else if (message_lower.includes('where') || message_lower.includes('travel') || message_lower.includes('destination')) {
    if (message_lower.includes('beach') || message_lower.includes('island')) {
      return "For beaches, consider Maldives, Seychelles, or the Amalfi Coast for exclusive experiences.";
    } else if (message_lower.includes('city') || message_lower.includes('urban')) {
      return "For city breaks, try Tokyo, Paris, New York, or Dubai for world-class accommodations.";
    } else if (message_lower.includes('mountain') || message_lower.includes('ski')) {
      return "For mountain luxury, visit Aspen, Zermatt, or St. Moritz for stunning views and experiences.";
    } else {
      return "Top luxury destinations include the Maldives, Paris, Tokyo, and the Amalfi Coast.";
    }
  } 
  // Activity recommendations - improved detection
  else if (message_lower.includes('do') || message_lower.includes('activities') || message_lower.includes('experiences')) {
    if (message_lower.includes('beach') || message_lower.includes('island')) {
      return "Beach activities include private yacht charters, diving, and exclusive dining experiences.";
    } else if (message_lower.includes('city')) {
      return "City activities include private museum tours, helicopter views, and shopping with stylists.";
    } else if (message_lower.includes('adventure') || message_lower.includes('outdoor')) {
      return "Adventures include helicopter skiing, private safaris, and luxury expeditions.";
    } else {
      return "Luxury experiences include private tours, yacht charters, and exclusive cooking classes.";
    }
  } 
  // Dining recommendations - improved matching
  else if (message_lower.includes('eat') || message_lower.includes('food') || message_lower.includes('restaurant') || message_lower.includes('dining')) {
    if (message_lower.includes('japan') || message_lower.includes('tokyo') || message_lower.includes('japanese')) {
      return "Tokyo offers exclusive sushi at small counters and traditional kaiseki dining experiences.";
    } else if (message_lower.includes('france') || message_lower.includes('paris') || message_lower.includes('french')) {
      return "Paris features fine dining at renowned restaurants with exceptional wine experiences.";
    } else if (message_lower.includes('italy') || message_lower.includes('italian')) {
      return "Italy offers regional specialties from seafood in Sicily to pasta in Bologna with excellent wines.";
    } else {
      return "Top dining destinations include Tokyo for sushi, Paris for fine dining, and Barcelona for innovation.";
    }
  } 
  // Exploration recommendations - improved detection
  else if (message_lower.includes('explore') || message_lower.includes('hidden gem') || message_lower.includes('discover')) {
    if (message_lower.includes('europe')) {
      return "In Europe, explore the Faroe Islands, Montenegro's Bay of Kotor, or Italy's Aeolian Islands.";
    } else if (message_lower.includes('asia')) {
      return "In Asia, visit Bhutan's temples, Japan's Naoshima Island, or experience Myanmar by balloon.";
    } else if (message_lower.includes('africa')) {
      return "In Africa, see Ethiopia's rock churches, Rwanda's mountain gorillas, or Tanzania's wildlife.";
    } else {
      return "Hidden gems include Portugal's Comporta, Uruguay's José Ignacio, and Japan's Naoshima Island.";
    }
  } 
  // Recommendation queries with better matching
  else if (message_lower.includes('recommendation') || message_lower.includes('suggest') || message_lower.includes('best')) {
    if (message_lower.includes('beach') || message_lower.includes('island')) {
      return "For beaches, try Maldives, Seychelles, or Fiji for privacy and luxury.";
    } else if (message_lower.includes('city') || message_lower.includes('culture')) {
      return "For cities, stay at top properties in Tokyo, Paris, or Hong Kong for excellent accommodations.";
    } else if (message_lower.includes('safari') || message_lower.includes('wildlife')) {
      return "For safaris, visit Tanzania or South Africa for exceptional wildlife viewing.";
    } else if (message_lower.includes('mountain') || message_lower.includes('ski')) {
      return "For mountains, try Zermatt, Courchevel, or Aspen for luxury ski experiences.";
    } else {
      return "Top recommendations include luxury experiences in Tokyo, Maldives, and Tanzania.";
    }
  } 
  // Other common queries
  else if (message_lower.includes('cost') || message_lower.includes('price') || message_lower.includes('budget')) {
    return "Luxury accommodations typically range from $1,000-$3,000 per night for world-class experiences.";
  } else if (message_lower.includes('hello') || message_lower.includes('hi') || message_lower.includes('hey')) {
    return "Welcome to Luxe Voyage Whisperer. How may I help with your luxury travel plans today?";
  } else if (message_lower.includes('exclusive') || message_lower.includes('vip') || message_lower.includes('unique')) {
    return "Exclusive experiences include private tours, dining with chefs, and VIP access to events.";
  } else if (message_lower.length > 5) {
    // Provide a more specific response for queries that don't match our patterns but have substantial content
    return "I understand you're interested in luxury travel. Could you specify if you're looking for destinations, activities, dining experiences, or accommodations?";
  } else {
    // Default response as a fallback
    return "I can help with luxury travel recommendations. What specific location or experience interests you?";
  }
};
