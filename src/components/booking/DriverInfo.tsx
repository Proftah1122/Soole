import React from 'react';
import { Star } from 'lucide-react';

interface DriverInfoProps {
  name: string;
  photo: string;
  vehicle: {
    model: string;
    color: string;
    plateNumber: string;
  };
  rating: number;
}

export const DriverInfo: React.FC<DriverInfoProps> = ({ name, photo, vehicle, rating }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-gray-400 text-sm">
            {vehicle.color} {vehicle.model} • {vehicle.plateNumber}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <Star size={16} className="text-yellow-500" />
            <span className="text-yellow-500">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};