import React from 'react';
import { Users, Clock } from 'lucide-react';

interface RideHeaderProps {
  passengers: number;
  eta: number;
}

export const RideHeader: React.FC<RideHeaderProps> = ({ passengers, eta }) => {
  return (
    <div className="bg-gray-800 p-4 border-b border-gray-700">
      <h1 className="text-xl font-bold text-white mb-4">Ride in Progress</h1>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-300">
          <Users size={20} className="text-purple-500" />
          <span>{passengers} passengers in the car, including you</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={20} className="text-cyan-500" />
          <span>ETA: {eta} mins</span>
        </div>
      </div>
    </div>
  );
};