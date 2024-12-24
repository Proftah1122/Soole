import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import { AuthButton } from '../../buttons/AuthButton';
import { RoutePreview } from './RoutePreview';
import { formatCurrency } from '../../../utils/formatters';
import { formatDuration } from '../../../utils/timeFormatters';

interface InterStateRideCardProps {
  ride: {
    id: string;
    driverName: string;
    vehicleInfo: string;
    rating: number;
    baseFare: number;
    serviceCharge: number;
    duration: number;
    route: {
      pickup: { lat: number; lng: number };
      dropoff: { lat: number; lng: number };
      milestones: Array<{ name: string; lat: number; lng: number }>;
    };
  };
}

export const InterStateRideCard = ({ ride }: InterStateRideCardProps) => {
  const totalFare = ride.baseFare + ride.serviceCharge;

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{ride.driverName}</h3>
            <p className="text-gray-400">{ride.vehicleInfo}</p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded">
            <Star size={16} className="text-yellow-500" />
            <span className="text-yellow-500">{ride.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="h-40 mb-4 rounded-lg overflow-hidden">
          <RoutePreview route={ride.route} />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Total Travel Time</p>
              <p className="text-white font-medium">{formatDuration(ride.duration)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold text-lg">₦</span>
            <div>
              <p className="text-sm text-gray-400">Total Fare</p>
              <p className="text-white font-medium">{formatCurrency(totalFare)}</p>
              <p className="text-xs text-gray-400">
                Includes {formatCurrency(ride.serviceCharge)} service charge
              </p>
            </div>
          </div>
        </div>

        <AuthButton
          variant="primary"
          onClick={() => {/* Handle ride selection */}}
          className="w-full"
          type="button"
        >
          Select Ride
        </AuthButton>
      </div>
    </div>
  );
};