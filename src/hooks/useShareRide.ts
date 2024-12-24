import { useState } from 'react';
import { useToast } from './useToast';

interface ShareRideConfig {
  driverName: string;
  vehicleInfo: string;
  pickupTime: string;
  trackingLink: string;
}

export const useShareRide = (config: ShareRideConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const generateShareMessage = () => {
    return `Hi, I'm using Sọ́ọ̀lẹ̀ to carpool! Here's my ride info:\n\nDriver: ${config.driverName}\nVehicle: ${config.vehicleInfo}\nPickup Time: ${config.pickupTime}\n\nTrack my ride: ${config.trackingLink}`;
  };

  const shareViaWhatsApp = async () => {
    const message = encodeURIComponent(generateShareMessage());
    window.open(`https://wa.me/?text=${message}`, '_blank');
    showToast('Ride details shared via WhatsApp');
  };

  const shareViaSMS = async () => {
    const message = encodeURIComponent(generateShareMessage());
    window.open(`sms:?body=${message}`, '_blank');
    showToast('Ride details shared via SMS');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(config.trackingLink);
      showToast('Tracking link copied to clipboard');
    } catch (error) {
      showToast('Failed to copy link', 'error');
    }
  };

  return {
    isLoading,
    shareViaWhatsApp,
    shareViaSMS,
    copyToClipboard
  };
};