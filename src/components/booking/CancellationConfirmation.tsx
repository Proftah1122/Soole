import React from 'react';
import { CheckCircle } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';

interface CancellationConfirmationProps {
  onBookNewRide: () => void;
}

export const CancellationConfirmation: React.FC<CancellationConfirmationProps> = ({
  onBookNewRide
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/95">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          Ride Cancelled Successfully
        </h2>
        
        <p className="text-gray-400 mb-8">
          If this was a mistake, you can book another ride right away.
        </p>
        
        <AuthButton
          variant="primary"
          onClick={onBookNewRide}
          className="w-full"
          type="button"
        >
          Book Another Ride
        </AuthButton>
      </div>
    </div>
  );
};