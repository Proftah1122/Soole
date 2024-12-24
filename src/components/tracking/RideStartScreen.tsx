import React from 'react';
import { useRideProgress } from '../../hooks/useRideProgress';
import { RideHeader } from './RideHeader';
import { RideMap } from './RideMap';
import { RideActions } from './RideActions';
import { RideFooter } from './RideFooter';

export const RideStartScreen = () => {
  const { 
    passengers,
    eta,
    progress,
    dropoffLocation,
    driverLocation
  } = useRideProgress();

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <RideHeader 
        passengers={passengers}
        eta={eta}
      />

      <div className="flex-1 relative">
        <RideMap 
          driverLocation={driverLocation}
          progress={progress}
        />
      </div>

      <RideActions />
      <RideFooter location={dropoffLocation} eta={eta} />
    </div>
  );
};