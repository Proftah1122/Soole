import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { BookingSuccess } from '../components/booking/BookingSuccess';
import { ShareRideModal } from '../components/sharing/ShareRideModal';
import { useBookingNotification } from '../components/booking/hooks/useBookingNotification';

export const BookingNotificationPage: React.FC = () => {
  const router = useRouter();
  // const navigate = useNavigate();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { isVisible, cancelBooking } = useBookingNotification();

  const bookingData = JSON.parse(
    sessionStorage.getItem('selectedRide') || '{}'
  );
  const paymentMethod = sessionStorage.getItem('paymentMethod');

  useEffect(() => {
    if (!paymentMethod || !bookingData.driver) {
      router.push('/travel-selection');
    }
  }, [router, paymentMethod, bookingData]);

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handleCancel = async () => {
    const success = await cancelBooking();
    if (success) {
      sessionStorage.removeItem('selectedRide');
      sessionStorage.removeItem('bookingConfirmed');
      sessionStorage.removeItem('paymentMethod');
      router.push('/cancellation-success');
    }
  };

  if (!bookingData.driver) return null;

  const bookingDetails = {
    pickup: {
      location: bookingData.ride.pickup,
      time: bookingData.ride.eta,
    },
    driver: {
      name: bookingData.driver.name,
      photo: bookingData.driver.photo,
      plateNumber: bookingData.driver.vehicle.plateNumber,
    },
    vehicleInfo: `${bookingData.driver.vehicle.model} (${bookingData.driver.vehicle.color})`,
    trackingLink: `${window.location.origin}/tracking/${Date.now()}`,
  };

  return (
    <>
      <BookingSuccess
        pickup={bookingDetails.pickup}
        driver={bookingDetails.driver}
        onShare={handleShare}
        onCancel={handleCancel}
      />

      <ShareRideModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        rideDetails={{
          driverName: bookingDetails.driver.name,
          vehicleInfo: bookingDetails.vehicleInfo,
          pickupTime: bookingDetails.pickup.time,
          trackingLink: bookingDetails.trackingLink,
        }}
      />
    </>
  );
};
