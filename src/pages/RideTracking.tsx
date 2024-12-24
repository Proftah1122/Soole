import React from 'react';
import { BackButton } from '../components/navigation/BackButton';
import { LeafletMap } from '../components/tracking/LeafletMap';
import { ETADisplay } from '../components/tracking/ETADisplay';
import { TrackingActions } from '../components/tracking/TrackingActions';
import { TrackingNotification } from '../components/tracking/TrackingNotification';
import { DriverArrivalNotification } from '../components/tracking/DriverArrivalNotification';
import { useDriverLocation } from '../hooks/useDriverLocation';
import { useDriverArrival } from '../hooks/useDriverArrival';

export const RideTrackingPage = () => {
  const { location, eta, progress } = useDriverLocation();
  const { hasArrived, waitTime } = useDriverArrival();
  
  const pickup = { latitude: 6.5244, longitude: 3.3792 };
  const dropoff = { latitude: 6.5355, longitude: 3.3451 };

  const mockDriver = {
    name: 'Adebayo Ogunlesi',
    photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80',
    vehicleInfo: 'Toyota Camry • ABC 123 XY'
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <div className="p-6">
        <BackButton />
      </div>

      {!hasArrived && <TrackingNotification />}
      {hasArrived && (
        <DriverArrivalNotification
          driver={mockDriver}
          waitTime={waitTime}
        />
      )}

      <div className="flex-1 relative">
        <LeafletMap
          driverLocation={location}
          pickup={pickup}
          dropoff={dropoff}
        />
        
        <div className="absolute bottom-24 left-4 right-4 z-[1000]">
          <ETADisplay minutes={eta} progress={progress} />
        </div>

        <TrackingActions />
      </div>
    </div>
  );
};