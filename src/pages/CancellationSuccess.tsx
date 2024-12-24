import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CancellationConfirmation } from '../components/booking/CancellationConfirmation';

export const CancellationSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('bookingConfirmed')) {
      navigate('/travel-selection');
    }
  }, [navigate]);

  const handleBookNewRide = () => {
    // Clear all booking related session data
    sessionStorage.removeItem('selectedRide');
    sessionStorage.removeItem('bookingConfirmed');
    sessionStorage.removeItem('paymentMethod');
    navigate('/travel-selection');
  };

  return <CancellationConfirmation onBookNewRide={handleBookNewRide} />;
};