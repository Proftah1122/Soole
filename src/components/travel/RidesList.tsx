// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { Car, Clock, Star } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';
import { formatCurrency } from '../../utils/formatters';
import { useTravelType } from './TravelTypeContext';
import { getMockRides } from '../../utils/travelData';

interface RideProps {
  id: string;
  driverName: string;
  vehicleInfo: string;
  rating: number;
  baseFare: number;
  estimatedTime: string;
  onSelect: (rideId: string) => void;
}

const Ride = ({ 
  id, 
  driverName, 
  vehicleInfo, 
  rating, 
  baseFare, 
  estimatedTime,
  onSelect 
}: RideProps) => {
  const serviceFee = baseFare * 0.1;
  const totalFare = baseFare + serviceFee;

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{driverName}</h3>
          <p className="text-gray-400 text-sm">{vehicleInfo}</p>
        </div>
        <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded">
          <Star size={16} className="text-yellow-500" />
          <span className="text-yellow-500">{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2 text-gray-300">
          <div>
            <p className="font-medium">{formatCurrency(totalFare)}</p>
            <p className="text-xs text-gray-400">Includes {formatCurrency(serviceFee)} service fee</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={18} className="text-purple-500" />
          <div>
            <p className="font-medium">{estimatedTime}</p>
            <p className="text-xs text-gray-400">Estimated time</p>
          </div>
        </div>
      </div>

      <AuthButton
        variant="primary"
        onClick={() => onSelect(id)}
        className="w-full"
        type="button"
      >
        Select Ride
      </AuthButton>
    </div>
  );
};

export const RidesList = () => {
  const router = useRouter();
  const navigate = router.push;
  const { travelType } = useTravelType();
  const rides = getMockRides(travelType);

  const handleRideSelect = (rideId: string) => {
    const selectedRide = rides.find(ride => ride.id === rideId);
    if (selectedRide) {
      sessionStorage.setItem('selectedRide', JSON.stringify({
        driver: {
          name: selectedRide.driverName,
          photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80',
          vehicle: {
            model: selectedRide.vehicleInfo.split('•')[0].trim(),
            color: 'Silver',
            plateNumber: selectedRide.vehicleInfo.split('•')[1].trim()
          },
          rating: selectedRide.rating
        },
        ride: {
          pickup: sessionStorage.getItem('pickup') || 'Selected Location',
          dropoff: sessionStorage.getItem('dropoff') || 'Destination',
          duration: selectedRide.estimatedTime,
          eta: new Date(Date.now() + 45 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        fare: {
          baseFare: selectedRide.baseFare,
          serviceCharge: selectedRide.baseFare * 0.1
        }
      }));
      
      navigate('/booking-confirmation');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-6">Available Rides</h2>
      {rides.map(ride => (
        <Ride
          key={ride.id}
          {...ride}
          onSelect={handleRideSelect}
        />
      ))}
    </div>
  );
};