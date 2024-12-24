import React from 'react';
import { MapPin, Clock, CreditCard } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export const RideSummary = () => {
  // In production, this would come from a context or props
  const rideDetails = JSON.parse(sessionStorage.getItem('selectedRide') || '{}');

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-lg font-semibold text-white mb-4">Ride Summary</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="text-purple-500 mt-1" />
          <div>
            <p className="text-sm text-gray-400">From</p>
            <p className="text-white">{rideDetails.ride?.pickup || 'Starting Location'}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="text-cyan-500 mt-1" />
          <div>
            <p className="text-sm text-gray-400">To</p>
            <p className="text-white">{rideDetails.ride?.dropoff || 'Destination'}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <Clock className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="text-white">{rideDetails.ride?.duration || '45 mins'}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CreditCard className="text-green-500" />
            <div>
              <p className="text-sm text-gray-400">Total Cost</p>
              <p className="text-white">
                {formatCurrency(rideDetails.fare?.total || 15000)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};