import { useState, useEffect } from 'react';
import { mockDriver, mockTrip, Driver, Trip } from '../services/mockData';

interface TrackingState {
  driver: Driver | null;
  trip: Trip | null;
  isLoading: boolean;
  error: string | null;
}

export const useTracking = () => {
  const [state, setState] = useState<TrackingState>({
    driver: null,
    trip: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const loadTrackingData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setState({
          driver: mockDriver,
          trip: mockTrip,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: 'Failed to load tracking data'
        }));
      }
    };

    loadTrackingData();
  }, []);

  return state;
};