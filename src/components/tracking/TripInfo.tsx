import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

interface TripInfoProps {
  driverName: string;
  vehicleInfo: string;
  eta: string;
  pickup: string;
  dropoff: string;
}

export const TripInfo: React.FC<TripInfoProps> = ({
  driverName,
  vehicleInfo,
  eta,
  pickup,
  dropoff
}) => {
  return (
    <div className="bg-gray-800 border-t border-gray-700 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4 pb-4 border-b border-gray-700">
          <Car className="text-purple-500" size={24} />
          <div>
            <h3 className="font-medium text-white">{driverName}</h3>
            <p className="text-sm text-gray-400">{vehicleInfo}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Clock className="text-cyan-500" size={16} />
            <span className="text-white">ETA: {eta}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-purple-500 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Pickup</p>
              <p className="text-white">{pickup}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="text-cyan-500 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Drop-off</p>
              <p className="text-white">{dropoff}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};