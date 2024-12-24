import { useState } from 'react';

export const useCancelRide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cancelRide = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      return true;
    } catch (error) {
      console.error('Failed to cancel ride:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isModalOpen,
    isLoading,
    openModal: () => setIsModalOpen(true),
    closeModal: () => setIsModalOpen(false),
    cancelRide
  };
};