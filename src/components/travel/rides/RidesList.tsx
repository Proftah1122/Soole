import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Star, DollarSign } from 'lucide-react';
import { RideCard } from './RideCard';

interface SortingOption {
  id: 'price' | 'rating' | 'time';
  label: string;
  icon: React.ReactNode;
}

const sortingOptions: SortingOption[] = [
  { id: 'price', label: 'Price', icon: <DollarSign size={16} /> },
  { id: 'rating', label: 'Rating', icon: <Star size={16} /> },
  { id: 'time', label: 'Time', icon: <Clock size={16} /> }
];

// Mock data for intrastate rides
const mockIntraStateRides = [
  {
    id: '1',
    driverName: 'Oluwaseun Afolabi',
    driverPhoto: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80',
    vehicleInfo: 'Toyota Camry • ABC 123 XY',
    rating: 4.8,
    baseFare: 5000,
    serviceCharge: 500,
    duration: 45,
    distance: '25km',
    route: {
      pickup: 'Ikeja',
      dropoff: 'Victoria Island',
      milestones: []
    }
  }
];

export const RidesList = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'time'>('price');
  const [rides] = useState(mockIntraStateRides);
  const [isSelecting, setIsSelecting] = useState(false);

  const handleRideSelect = async (rideId: string) => {
    if (isSelecting) return;
    setIsSelecting(true);

    const selectedRide = rides.find(ride => ride.id === rideId);
    if (selectedRide) {
      sessionStorage.setItem('selectedRide', JSON.stringify({
        driver: {
          name: selectedRide.driverName,
          photo: selectedRide.driverPhoto,
          vehicle: {
            model: selectedRide.vehicleInfo.split('•')[0].trim(),
            color: 'Silver',
            plateNumber: selectedRide.vehicleInfo.split('•')[1].trim()
          },
          rating: selectedRide.rating
        },
        ride: {
          pickup: sessionStorage.getItem('pickup') || selectedRide.route.pickup,
          dropoff: sessionStorage.getItem('dropoff') || selectedRide.route.dropoff,
          duration: `${selectedRide.duration} mins`,
          eta: new Date(Date.now() + selectedRide.duration * 60000).toLocaleTimeString()
        },
        fare: {
          baseFare: selectedRide.baseFare,
          serviceCharge: selectedRide.serviceCharge,
          total: selectedRide.baseFare + selectedRide.serviceCharge
        }
      }));
      
      navigate('/local/confirmation');
    }
  };

  const sortedRides = [...rides].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return (a.baseFare + a.serviceCharge) - (b.baseFare + b.serviceCharge);
      case 'rating':
        return b.rating - a.rating;
      case 'time':
        return a.duration - b.duration;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {sortingOptions.map(option => (
          <button
            key={option.id}
            onClick={() => setSortBy(option.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              sortBy === option.id
                ? 'bg-purple-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {sortedRides.map(ride => (
          <RideCard
            key={ride.id}
            ride={ride}
            onSelect={handleRideSelect}
          />
        ))}
      </div>
    </div>
  );
};