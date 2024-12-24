import React from 'react';
import { Marker } from 'react-map-gl';
import { Car } from 'lucide-react';

interface DriverMarkerProps {
  latitude: number;
  longitude: number;
}

export const DriverMarker: React.FC<DriverMarkerProps> = ({ latitude, longitude }) => {
  return (
    <Marker latitude={latitude} longitude={longitude}>
      <div className="p-2 rounded-full bg-purple-500 animate-pulse">
        <Car className="text-white" size={20} />
      </div>
    </Marker>
  );
};