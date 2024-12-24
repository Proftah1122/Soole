import { useState } from 'react';

interface BookingDetails {
  pickup: {
    location: string;
    time: string;
  };
  driver: {
    name: string;
    photo: string;
    plateNumber: string;
  };
}

export const useBookingNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  const shareRide = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Track My Ride',
          text: 'Follow my ride in real-time!',
          url: window.location.href
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        // Copy tracking link to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Tracking link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing ride:', error);
    }
  };

  const cancelBooking = async () => {
    try {
      // Add cancellation logic here
      setIsVisible(false);
      return true;
    } catch (error) {
      console.error('Error cancelling booking:', error);
      return false;
    }
  };

  return {
    isVisible,
    shareRide,
    cancelBooking
  };
};