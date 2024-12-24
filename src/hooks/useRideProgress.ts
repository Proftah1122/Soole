import { useState, useEffect } from 'react';

interface RideProgress {
  passengers: number;
  eta: number;
  progress: number;
  dropoffLocation: string;
  driverLocation: {
    latitude: number;
    longitude: number;
  };
}

export const useRideProgress = () => {
  const [state, setState] = useState<RideProgress>({
    passengers: 3,
    eta: 25,
    progress: 0,
    dropoffLocation: "123 Victoria Island, Lagos",
    driverLocation: {
      latitude: 6.5244,
      longitude: 3.3792
    }
  });

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      setState(prev => ({
        ...prev,
        progress: Math.min(prev.progress + 1, 100),
        eta: Math.max(prev.eta - 1, 0),
        driverLocation: {
          latitude: prev.driverLocation.latitude + 0.0001,
          longitude: prev.driverLocation.longitude + 0.0001
        }
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return state;
};