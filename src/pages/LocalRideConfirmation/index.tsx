import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RideConfirmationHeader } from './components/RideConfirmationHeader';
import { RideDetails } from './components/RideDetails';
import { DriverInfo } from './components/DriverInfo';
import { FareBreakdown } from './components/FareBreakdown';
import { useLocalRideConfirmation } from './hooks/useLocalRideConfirmation';
import { AuthButton } from '../../components/buttons/AuthButton';
import { BackButton } from '../../components/navigation/BackButton';

export const LocalRideConfirmationPage = () => {
  const navigate = useNavigate();
  const { rideDetails, handleConfirm, handleBack } = useLocalRideConfirmation();

  if (!rideDetails) {
    navigate('/local');
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
          <DriverInfo driver={rideDetails.driver} />
          <RideDetails ride={rideDetails.ride} />
          <FareBreakdown fare={rideDetails.fare} />

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