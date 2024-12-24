import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data types
interface DriverContact {
  phone: string;
  name: string;
  vehicleInfo: string;
}

interface RideStatus {
  status: 'pending' | 'active' | 'cancelled' | 'completed';
  lastUpdated: Date;
}

export const useRideActions = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock driver data - In production, this would come from an API
  const mockDriver: DriverContact = {
    phone: '+2341234567890',
    name: 'Adebayo Ogunlesi',
    vehicleInfo: 'Toyota Camry • ABC 123 XY'
  };

  // Mock ride status - In production, this would be managed by the backend
  const [rideStatus, setRideStatus] = useState<RideStatus>({
    status: 'active',
    lastUpdated: new Date()
  });

  const handleContactDriver = useCallback(() => {
    try {
      // In production, this might log the contact attempt or initiate an in-app call
      window.location.href = `tel:${mockDriver.phone}`;
    } catch (err) {
      setError('Unable to contact driver. Please try again.');
      console.error('Contact driver error:', err);
    }
  }, []);

  const handleCancelRide = useCallback(async () => {
    if (!window.confirm('Are you sure you want to cancel this ride?')) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update local state
      setRideStatus({
        status: 'cancelled',
        lastUpdated: new Date()
      });

      // Navigate to cancellation success page
      navigate('/cancellation-success');
    } catch (err) {
      setError('Failed to cancel ride. Please try again.');
      console.error('Cancel ride error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    handleContactDriver,
    handleCancelRide,
    isLoading,
    error,
    clearError,
    rideStatus: rideStatus.status
  };
};