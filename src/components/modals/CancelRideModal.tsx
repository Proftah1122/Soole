import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Modal } from './Modal';
import { AuthButton } from '../buttons/AuthButton';

interface CancelRideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export const CancelRideModal: React.FC<CancelRideModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center text-center p-6">
        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
          <AlertTriangle className="text-red-500" size={24} />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">
          Cancel Ride?
        </h3>
        
        <p className="text-gray-400 mb-6">
          Are you sure you want to cancel this ride? Cancellation might affect your account's reliability rating.
        </p>
        
        <div className="flex gap-4 w-full">
          <AuthButton
            variant="secondary"
            onClick={onClose}
            className="flex-1"
            type="button"
          >
            No, Go Back
          </AuthButton>
          
          <AuthButton
            variant="primary"
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 !bg-red-500 hover:!bg-red-600"
            type="button"
          >
            {isLoading ? 'Cancelling...' : 'Yes, Cancel Ride'}
          </AuthButton>
        </div>
      </div>
    </Modal>
  );
};