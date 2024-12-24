import { useCallback } from 'react';
import { useToast } from '../../../hooks/useToast';

interface RideDetails {
  driverName: string;
  vehicleInfo: string;
  pickupTime: string;
  trackingLink: string;
}

export const useShareRide = (rideDetails: RideDetails) => {
  const { showToast } = useToast();
  const shareMessage = `Hi, I'm using Sọ́ọ̀lẹ̀ to carpool! Here's my ride info:\n\nDriver: ${rideDetails.driverName}\nVehicle: ${rideDetails.vehicleInfo}\nPickup Time: ${rideDetails.pickupTime}\n\nTrack my ride: ${rideDetails.trackingLink}`;

  const shareViaWhatsApp = useCallback(() => {
    const encodedMessage = encodeURIComponent(shareMessage);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    showToast('Ride details shared via WhatsApp');
  }, [shareMessage, showToast]);

  const shareViaSMS = useCallback(() => {
    const encodedMessage = encodeURIComponent(shareMessage);
    window.open(`sms:?body=${encodedMessage}`, '_blank');
    showToast('Ride details shared via SMS');
  }, [shareMessage, showToast]);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(rideDetails.trackingLink);
      showToast('Tracking link copied to clipboard');
    } catch (error) {
      showToast('Failed to copy link', 'error');
    }
  }, [rideDetails.trackingLink, showToast]);

  return {
    shareViaWhatsApp,
    shareViaSMS,
    copyToClipboard
  };
};