import React from 'react';
import { useParams } from 'react-router-dom';
import { LeafletMap } from '../components/tracking/LeafletMap';
import { ETADisplay } from '../components/tracking/ETADisplay';
import { SharedRideInfo } from '../components/tracking/SharedRideInfo';
import { useDriverLocation } from '../hooks/useDriverLocation';

export const SharedRideTrackingPage = () => {
  const { trackingId } = useParams();
  const { location, eta, progress } = useDriverLocation();
  
  // Mock pickup and dropoff locations (in production, fetch these based on trackingId)
  const pickup = { latitude: 6.5244, longitude: 3.3792 };
  const dropoff = { latitude: 6.5355, longitude: 3.3451 };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <div className="p-6">
        <SharedRideInfo
          passengerName="John Doe"
          driverName="Adebayo Ogunlesi"
          vehicleInfo="Toyota Camry • ABC 123 XY"
          eta={eta}
        />
      </div>

      <div className="flex-1 relative">
        <LeafletMap
          driverLocation={location}
          pickup={pickup}
          dropoff={dropoff}
        />
        
        <div className="absolute bottom-4 left-4 right-4 z-[1000]">
          <ETADisplay minutes={eta} progress={progress} />
        </div>
      </div>
    </div>
  );
};