import React from 'react';
import { User, Car, Clock } from 'lucide-react';

interface SharedRideInfoProps {
  passengerName: string;
  driverName: string;
  vehicleInfo: string;
  eta: number;
}

export const SharedRideInfo: React.FC<SharedRideInfoProps> = ({
  passengerName,
  driverName,
  vehicleInfo,
  eta
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-purple-500/10">
          <User className="text-purple-500" size={24} />
        </div>
        <div>
          <p className="text-gray-400">Tracking ride for</p>
          <h2 className="text-xl font-semibold text-white">{passengerName}</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Car className="text-cyan-500" size={20} />
          <div>
            <p className="text-sm text-gray-400">Driver</p>
            <p className="text-white">{driverName}</p>
            <p className="text-sm text-gray-400">{vehicleInfo}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="text-green-500" size={20} />
          <div>
            <p className="text-sm text-gray-400">Estimated Arrival</p>
            <p className="text-white">{eta} minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};