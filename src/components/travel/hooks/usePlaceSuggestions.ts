import { useState } from 'react';

export const usePlaceSuggestions = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // TODO: Integrate with actual places API
  const getSuggestions = async (query: string) => {
    // Temporary mock suggestions
    const mockSuggestions = [
      'Lagos, Nigeria',
      'Abuja, Nigeria',
      'Port Harcourt, Nigeria',
      'Ibadan, Nigeria',
      'Kano, Nigeria'
    ].filter(place => 
      place.toLowerCase().includes(query.toLowerCase())
    );
    
    setSuggestions(mockSuggestions);
  };

  return {
    suggestions,
    getSuggestions
  };
};