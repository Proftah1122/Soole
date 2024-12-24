import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DriverInfo } from '../components/booking/DriverInfo';
import { RideDetails } from '../components/booking/RideDetails';
import { FareDetails } from '../components/booking/FareDetails';
import { AuthButton } from '../components/buttons/AuthButton';
import { BackButton } from '../components/navigation/BackButton';

export const BookingConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const bookingData = JSON.parse(sessionStorage.getItem('selectedRide') || '{}');

  const handleConfirm = () => {
    // Store confirmation in session
    sessionStorage.setItem('bookingConfirmed', 'true');
    navigate('/payment');
  };

  const handleEdit = () => {
    navigate(-1);
  };

  if (!bookingData.driver) {
    navigate('/travel-selection');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
          Confirm Your Booking
        </h1>

        <div className="space-y-6">
          <DriverInfo {...bookingData.driver} />
          <RideDetails {...bookingData.ride} />
          <FareDetails {...bookingData.fare} />

          <div className="flex gap-4">
            <AuthButton
              variant="secondary"
              onClick={handleEdit}
              className="flex-1"
              type="button"
            >
              Edit Details
            </AuthButton>
            <AuthButton
              variant="primary"
              onClick={handleConfirm}
              className="flex-1"
              type="button"
            >
              Confirm Booking
            </AuthButton>
          </div>
        </div>
      </div>
    </div>
  );
};