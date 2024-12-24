import { useState, useEffect } from 'react';

interface DriverArrivalState {
  hasArrived: boolean;
  arrivalTime: Date | null;
  waitTime: number; // in minutes
}

export const useDriverArrival = () => {
  const [state, setState] = useState<DriverArrivalState>({
    hasArrived: false,
    arrivalTime: null,
    waitTime: 5
  });

  useEffect(() => {
    // Simulate driver arrival after 10 seconds
    const timer = setTimeout(() => {
      setState({
        hasArrived: true,
        arrivalTime: new Date(),
        waitTime: 5
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return state;
};