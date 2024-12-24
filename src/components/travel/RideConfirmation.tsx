import React from 'react';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { PaymentOptions } from '../payment/PaymentOptions';
import { AuthButton } from '../buttons/AuthButton';
import { formatCurrency } from '../../utils/formatters';

interface RideDetails {
  pickup: string;
  dropoff: string;
  estimatedTime: string;
  fare: number;
  driverName: string;
  vehicleInfo: string;
}

interface RideConfirmationProps {
  ride: RideDetails;
  onConfirm: (paymentMethod: string) => void;
  onBack: () => void;
}

export const RideConfirmation = ({ ride, onConfirm, onBack }: RideConfirmationProps) => {
  const [selectedPayment, setSelectedPayment] = React.useState<string>('');

  const handleConfirm = () => {
    if (selectedPayment) {
      onConfirm(selectedPayment);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4">Trip Details</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-purple-500 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Pickup</p>
              <p className="text-white">{ride.pickup}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="text-cyan-500 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Drop-off</p>
              <p className="text-white">{ride.dropoff}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <Clock className="text-purple-500" />
              <div>
                <p className="text-sm text-gray-400">Estimated Time</p>
                <p className="text-white">{ride.estimatedTime}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <DollarSign className="text-green-500" />
              <div>
                <p className="text-sm text-gray-400">Total Fare</p>
                <p className="text-white">{formatCurrency(ride.fare)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentOptions 
        amount={ride.fare} 
        onSelect={setSelectedPayment} 
      />

      <div className="flex gap-4">
        <AuthButton
          variant="secondary"
          onClick={onBack}
          className="flex-1"
          type="button"
        >
          Back
        </AuthButton>
        <AuthButton
          variant="primary"
          onClick={handleConfirm}
          disabled={!selectedPayment}
          className="flex-1"
          type="button"
        >
          Confirm Booking
        </AuthButton>
      </div>
    </div>
  );
};