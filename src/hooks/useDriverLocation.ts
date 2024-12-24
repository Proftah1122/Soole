import { useState, useEffect } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

// Mock route coordinates from pickup to dropoff
const ROUTE_COORDINATES: Location[] = [
  { latitude: 6.5244, longitude: 3.3792 }, // Start (Lagos Island)
  { latitude: 6.5280, longitude: 3.3700 },
  { latitude: 6.5300, longitude: 3.3600 },
  { latitude: 6.5320, longitude: 3.3550 },
  { latitude: 6.5355, longitude: 3.3451 }  // End (Victoria Island)
];

export const useDriverLocation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState(ROUTE_COORDINATES[0]);
  const [eta, setEta] = useState(15); // Initial ETA in minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= ROUTE_COORDINATES.length - 1) return prev;
        
        const nextLocation = ROUTE_COORDINATES[prev + 1];
        setLocation(nextLocation);
        
        // Update ETA based on remaining points
        const remainingPoints = ROUTE_COORDINATES.length - (prev + 2);
        setEta(Math.max(1, remainingPoints * 5));
        
        return prev + 1;
      });
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return {
    location,
    eta,
    progress: (currentIndex / (ROUTE_COORDINATES.length - 1)) * 100,
    isComplete: currentIndex >= ROUTE_COORDINATES.length - 1
  };
};