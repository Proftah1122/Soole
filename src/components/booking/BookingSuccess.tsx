import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Share2, Clock, X } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';

interface BookingSuccessProps {
  pickup: {
    location: string;
    time: string;
  };
  driver: {
    name: string;
    photo: string;
    plateNumber: string;
  };
  onShare: () => void;
  onCancel: () => void;
}

export const BookingSuccess: React.FC<BookingSuccessProps> = ({
  pickup,
  driver,
  onShare,
  onCancel
}) => {
  const navigate = useNavigate();

  const handleTrack = () => {
    navigate('/tracking'); // Ensure this route exists in App.tsx
  };

  return (
    <div className="fixed inset-x-0 bottom-0 p-6 bg-gray-800 border-t border-gray-700 rounded-t-xl">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Booking Confirmed!</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-purple-500 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Pickup Location</p>
              <p className="text-white">{pickup.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="text-cyan-500 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Pickup Time</p>
              <p className="text-white">{pickup.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg">
            <img
              src={driver.photo}
              alt={driver.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-white font-medium">{driver.name}</p>
              <p className="text-sm text-gray-400">{driver.plateNumber}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <AuthButton
            variant="secondary"
            onClick={onShare}
            className="flex-1"
            type="button"
          >
            <div className="flex items-center justify-center gap-2">
              <Share2 size={20} />
              <span>Share Ride</span>
            </div>
          </AuthButton>
          
          <AuthButton
            variant="primary"
            onClick={handleTrack}
            className="flex-1"
            type="button"
          >
            Track Driver
          </AuthButton>
        </div>
      </div>
    </div>
  );
};