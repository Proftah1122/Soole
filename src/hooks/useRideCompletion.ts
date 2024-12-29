import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
interface RatingData {
  rating: number;
  comment: string;
  issues: string[];
}

export const useRideCompletion = () => {
  const router = useRouter();
  // const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitFeedback = async (data: RatingData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Feedback submitted:', data);
      
      // Clear ride data from session
      sessionStorage.removeItem('selectedRide');
      sessionStorage.removeItem('bookingConfirmed');
      
      // Navigate to travel selection
      router.push('/travel-selection');
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookNewRide = () => {
    // Clear previous ride data
    sessionStorage.removeItem('selectedRide');
    sessionStorage.removeItem('bookingConfirmed');
    
    // Navigate to travel selection
    router.push('/travel-selection');
  };

  return {
    handleSubmitFeedback,
    handleBookNewRide,
    isSubmitting
  };
};