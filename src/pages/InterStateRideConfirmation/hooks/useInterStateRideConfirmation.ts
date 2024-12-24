import { useNavigate } from 'react-router-dom';
import { InterStateRideDetails } from '../types';

export const useInterStateRideConfirmation = () => {
  const navigate = useNavigate();
  
  // In production, this would come from an API or state management
  const rideDetails: InterStateRideDetails | null = JSON.parse(
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