import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface RideDetailsProps {
  pickup: string;
  dropoff: string;
  duration: string;
  eta: string;
}

export const RideDetails: React.FC<RideDetailsProps> = ({ pickup, dropoff, duration, eta }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Ride Details</h3>
      
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
      
      <div className="flex items-center gap-6 pt-4 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <Clock className="text-purple-500" />
          <div>
            <p className="text-sm text-gray-400">Duration</p>
            <p className="text-white">{duration}</p>
          </div>
        </div>
        
        <div>
          <p className="text-sm text-gray-400">ETA</p>
          <p className="text-white">{eta}</p>
        </div>
      </div>
    </div>
  );
};