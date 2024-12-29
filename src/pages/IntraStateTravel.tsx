import { useState } from 'react';
import { TravelForm } from '../components/travel/TravelForm';
import { RidesList } from '../components/travel/RidesList';
import { BackButton } from '../components/navigation/BackButton';
import { TravelProvider } from '../components/travel/TravelTypeContext';

export const IntraStateTravelPage = () => {
  const [showRides, setShowRides] = useState(false);

  const handleFormSubmit = () => {
    setShowRides(true);
  };

  return (
    <TravelProvider type="intrastate">
      <div className="min-h-screen bg-gray-900 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <BackButton />
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
            {showRides ? 'Select Your Ride' : 'Plan Your Local Journey'}
          </h1>

          {showRides ? (
            <RidesList />
          ) : (
            <TravelForm onSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    </TravelProvider>
  );
};