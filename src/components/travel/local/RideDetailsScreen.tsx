import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RideDetails } from './components/RideDetails';
import { DriverCard } from './components/DriverCard';
import { FareSummary } from './components/FareSummary';
import { AuthButton } from '../../buttons/AuthButton';
import { BackButton } from '../../navigation/BackButton';

export const RideDetailsScreen = () => {
  const navigate = useNavigate();
  const selectedRide = JSON.parse(sessionStorage.getItem('selectedRide') || '{}');

  const handleConfirm = () => {
    sessionStorage.setItem('bookingConfirmed', 'true');
    navigate('/payment');
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!selectedRide.driver) {
    navigate('/local');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
          Confirm Your Ride
        </h1>

        <div className="space-y-6">
          <DriverCard driver={selectedRide.driver} />
          <RideDetails ride={selectedRide.ride} />
          <FareSummary fare={selectedRide.fare} />

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
              Confirm Ride
            </AuthButton>
          </div>
        </div>
      </div>
    </div>
  );
};