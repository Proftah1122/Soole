import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RideConfirmationHeader } from '../../components/travel/confirmation/RideConfirmationHeader';
import { DriverInfo } from '../../components/booking/DriverInfo';
import { RideDetails } from '../../components/booking/RideDetails';
import { FareDetails } from '../../components/booking/FareDetails';
import { AuthButton } from '../../components/buttons/AuthButton';
import { BackButton } from '../../components/navigation/BackButton';

export const RideConfirmationPage = () => {
  const navigate = useNavigate();
  const bookingData = JSON.parse(sessionStorage.getItem('selectedRide') || '{}');

  const handleConfirm = () => {
    sessionStorage.setItem('bookingConfirmed', 'true');
    navigate('/payment');
  };

  const handleBack = () => {
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

        <RideConfirmationHeader />

        <div className="space-y-6 mt-8">
          <DriverInfo {...bookingData.driver} />
          <RideDetails {...bookingData.ride} />
          <FareDetails {...bookingData.fare} />

          <div className="flex gap-4">
            <AuthButton
              variant="secondary"
              onClick={handleBack}
              className="flex-1"
              type="button"
            >
              Back
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