import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Clock } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';

interface DriverArrivalNotificationProps {
  driver: {
    name: string;
    photo: string;
    vehicleInfo: string;
  };
  waitTime: number; // in minutes
}

export const DriverArrivalNotification: React.FC<DriverArrivalNotificationProps> = ({
  driver,
  waitTime
}) => {
  const [remainingTime, setRemainingTime] = useState(waitTime * 60); // Convert to seconds
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!showNotification) return null;

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="fixed top-4 left-4 right-4 z-[1000]">
      <div className="bg-gray-800 border border-purple-500 rounded-lg p-4 max-w-md mx-auto shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={driver.photo}
            alt={driver.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-medium text-white">{driver.name}</h3>
            <p className="text-sm text-gray-400">{driver.vehicleInfo}</p>
          </div>
          <div className="flex items-center gap-2 text-purple-500">
            <Clock size={16} />
            <span>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        <p className="text-green-500 font-medium mb-4">
          Your driver has arrived at your location. Please proceed to meet them.
        </p>

        <div className="flex gap-3">
          <AuthButton
            variant="secondary"
            onClick={() => window.location.href = 'tel:+1234567890'}
            className="flex-1 flex items-center justify-center gap-2"
            type="button"
          >
            <Phone size={18} />
            <span>Call Driver</span>
          </AuthButton>

          <AuthButton
            variant="primary"
            onClick={() => setShowNotification(false)}
            className="flex-1 flex items-center justify-center gap-2"
            type="button"
          >
            <MessageSquare size={18} />
            <span>I'm on my way</span>
          </AuthButton>
        </div>
      </div>
    </div>
  );
};