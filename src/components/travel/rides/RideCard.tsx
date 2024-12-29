import { MapPin, Clock, Star, DollarSign } from 'lucide-react';
import { AuthButton } from '../../buttons/AuthButton';
import { formatCurrency } from '../../../utils/formatters';
import { formatDuration } from '../../../utils/timeFormatters';

interface RideCardProps {
  ride: {
    id: string;
    driverName: string;
    driverPhoto: string;
    vehicleInfo: string;
    rating: number;
    baseFare: number;
    serviceCharge: number;
    duration: number;
    distance: string;
    route: {
      pickup: string;
      dropoff: string;
      milestones: string[];
    };
  };
  onSelect: (rideId: string) => void;
}

export const RideCard: React.FC<RideCardProps> = ({ ride, onSelect }) => {
  const totalFare = ride.baseFare + ride.serviceCharge;

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-purple-500 transition-all">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={ride.driverPhoto}
            alt={ride.driverName}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{ride.driverName}</h3>
                <p className="text-gray-400">{ride.vehicleInfo}</p>
              </div>
              <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded">
                <Star size={16} className="text-yellow-500" />
                <span className="text-yellow-500">{ride.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-purple-500 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Route</p>
              <p className="text-white">{ride.route.pickup} → {ride.route.dropoff}</p>
              {ride.route.milestones.length > 0 && (
                <p className="text-sm text-gray-400">
                  Via: {ride.route.milestones.join(' → ')}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="text-cyan-500" />
              <div>
                <p className="text-sm text-gray-400">Duration</p>
                <p className="text-white">{formatDuration(ride.duration)}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="text-green-500" />
              <div>
                <p className="text-sm text-gray-400">Total Fare</p>
                <p className="text-white">{formatCurrency(totalFare)}</p>
                <p className="text-xs text-gray-400">
                  Includes {formatCurrency(ride.serviceCharge)} service charge
                </p>
              </div>
            </div>
          </div>
        </div>

        <AuthButton
          variant="primary"
          onClick={() => onSelect(ride.id)}
          className="w-full"
          type="button"
        >
          Select Ride
        </AuthButton>
      </div>
    </div>
  );
};