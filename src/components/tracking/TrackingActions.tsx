import React from 'react';
import { Phone, XCircle } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';
import { useRideActions } from '../../hooks/useRideActions';
import { Toast } from '../notifications/Toast';

export const TrackingActions = () => {
  const { 
    handleContactDriver, 
    handleCancelRide, 
    isLoading, 
    error, 
    clearError 
  } = useRideActions();

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-[1000] flex gap-4">
        <AuthButton
          variant="secondary"
          onClick={handleContactDriver}
          className="flex-1 flex items-center justify-center gap-2"
          type="button"
        >
          <Phone size={20} />
          <span>Contact Driver</span>
        </AuthButton>
        
        <AuthButton
          variant="primary"
          onClick={handleCancelRide}
          disabled={isLoading}
          className="flex-1 flex items-center justify-center gap-2 !bg-red-500 hover:!bg-red-600 disabled:opacity-50"
          type="button"
        >
          <XCircle size={20} />
          <span>{isLoading ? 'Cancelling...' : 'Cancel Ride'}</span>
        </AuthButton>
      </div>

      {error && (
        <Toast
          message={error}
          type="error"
          onClose={clearError}
        />
      )}
    </>
  );
};