import { useNavigate } from 'react-router-dom';
import { LocalRideDetails } from '../types';

export const useLocalRideConfirmation = () => {
  const navigate = useNavigate();
  
  // In production, this would come from an API or state management
  const rideDetails: LocalRideDetails | null = JSON.parse(
    sessionStorage.getItem('selectedRide') || 'null'
  );

  const handleConfirm = () => {
    // Store confirmation in session
    sessionStorage.setItem('bookingConfirmed', 'true');
    navigate('/payment');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return {
    rideDetails,
    handleConfirm,
    handleBack
  };
};