import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { RideInfo } from '../types';

interface RideDetailsProps {
  ride: RideInfo;
}

export const RideDetails: React.FC<RideDetailsProps> = ({ ride }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-4">Trip Details</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="text-purple-500 mt-1" />
          <div>
            <p className="text-sm text-gray-400">Pickup</p>
            <p className="text-white">{ride.pickup}</p>
          </div>
        </div>
        
        {ride.stops.length > 0 && (
          <div className="flex items-start gap-3">
            <Navigation className="text-blue-500 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Stops</p>
              {ride.stops.map((stop, index) => (
                <p key={index} className="text-white">{stop}</p>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-start gap-3">
          <MapPin className="text-cyan-500 mt-1" />
          <div>
            <p className="text-sm text-gray-400">Drop-off</p>
            <p className="text-white">{ride.dropoff}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <Clock className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="text-white">{ride.duration}</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">Distance</p>
            <p className="text-white">{ride.distance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};