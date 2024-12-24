import React from 'react';
import { Star } from 'lucide-react';
import { DriverInfo as DriverInfoType } from '../types';

interface DriverInfoProps {
  driver: DriverInfoType;
}

export const DriverInfo: React.FC<DriverInfoProps> = ({ driver }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <div className="flex items-center gap-4">
        <img
          src={driver.photo}
          alt={driver.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{driver.name}</h3>
          <p className="text-gray-400 text-sm">
            {driver.vehicle.model} • {driver.vehicle.plateNumber}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <Star size={16} className="text-yellow-500" />
            <span className="text-yellow-500">{driver.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};