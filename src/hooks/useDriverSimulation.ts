import { useState, useEffect } from 'react';
import { mockDriver, mockTrip } from '../services/mockData';

// Simulated route coordinates between pickup and dropoff
const routeCoordinates = [
  { latitude: 6.5244, longitude: 3.3792 }, // Start (pickup)
  { latitude: 6.5280, longitude: 3.3700 },
  { latitude: 6.5300, longitude: 3.3600 },
  { latitude: 6.5320, longitude: 3.3550 },
  { latitude: 6.5355, longitude: 3.3451 }  // End (dropoff)
];

export const useDriverSimulation = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [driverLocation, setDriverLocation] = useState(routeCoordinates[0]);
  const [remainingTime, setRemainingTime] = useState(15); // minutes

  useEffect(() => {
    // Update driver position every 3 seconds
    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        if (prev >= routeCoordinates.length - 1) return prev;
        setDriverLocation(routeCoordinates[prev + 1]);
        return prev + 1;
      });

      // Update ETA
      setRemainingTime((prev) => Math.max(0, prev - 0.25));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return {
    driverLocation,
    remainingTime: Math.ceil(remainingTime),
    progress: (currentPosition / (routeCoordinates.length - 1)) * 100,
    isComplete: currentPosition >= routeCoordinates.length - 1
  };
};