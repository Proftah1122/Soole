import React from 'react';
import { CheckCircle } from 'lucide-react';

export const RideConfirmationHeader = () => {
  return (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="text-green-500" size={32} />
      </div>
      
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        Confirm Your Ride
      </h1>
      
      <p className="text-gray-400">
        Please review your ride details before confirming
      </p>
    </div>
  );
};