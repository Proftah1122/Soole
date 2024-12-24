import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface RideFooterProps {
  location: string;
  eta: number;
}

export const RideFooter: React.FC<RideFooterProps> = ({ location, eta }) => {
  return (
    <div className="bg-gray-800 p-4 border-t border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MapPin className="text-purple-500" size={20} />
          <div>
            <p className="text-sm text-gray-400">Next Stop</p>
            <p className="text-white">{location}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-cyan-500">
          <Clock size={20} />
          <span>{eta} mins</span>
        </div>
      </div>
    </div>
  );
};