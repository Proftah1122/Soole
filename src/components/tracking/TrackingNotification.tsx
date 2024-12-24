import React from 'react';
import { Car } from 'lucide-react';

export const TrackingNotification = () => {
  return (
    <div className="fixed top-4 left-4 right-4 z-[1000]">
      <div className="bg-green-500/10 border border-green-500 rounded-lg p-4 flex items-center gap-3 max-w-md mx-auto">
        <div className="p-2 rounded-full bg-green-500/20">
          <Car className="text-green-500" size={20} />
        </div>
        <p className="text-green-500 font-medium">
          Your driver is on the way!
        </p>
      </div>
    </div>
  );
};