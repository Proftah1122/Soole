import { useState, useEffect } from 'react';

interface InterStateRide {
  id: string;
  driverName: string;
  vehicleInfo: string;
  rating: number;
  baseFare: number;
  serviceCharge: number;
  duration: number;
  route: {
    pickup: { lat: number; lng: number };
    dropoff: { lat: number; lng: number };
    milestones: Array<{ name: string; lat: number; lng: number }>;
  };
}

export const useInterStateRides = () => {
  const [rides, setRides] = useState<InterStateRide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRides = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock data
      setRides([
        {
          id: 'ride-1',
          driverName: 'Oluwaseun Afolabi',
          vehicleInfo: 'Toyota Camry • LND 123 XY',
          rating: 4.8,
          baseFare: 25000,
          serviceCharge: 2500,
          duration: 21600, // 6 hours in seconds
          route: {
            pickup: { lat: 6.5244, lng: 3.3792 },
            dropoff: { lat: 9.0765, lng: 7.3986 },
            milestones: [
              { name: 'Ibadan', lat: 7.3775, lng: 3.9470 },
              { name: 'Lokoja', lat: 7.8024, lng: 6.7333 }
            ]
          }
        },
        // Add more mock rides as needed
      ]);
      setIsLoading(false);
    };

    fetchRides();
  }, []);

  return { rides, isLoading };
};