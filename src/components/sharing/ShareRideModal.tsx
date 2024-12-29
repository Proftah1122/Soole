import { Share2, Copy, MessageSquare, Send } from 'lucide-react';
import { Modal } from '../modals/Modal';
import { ShareOption } from './ShareOption';
import { Toast } from '../notifications/Toast';
import { useShareRide } from '../../hooks/useShareRide';
import { useToast } from '../../hooks/useToast';

interface ShareRideModalProps {
  isOpen: boolean;
  onClose: () => void;
  rideDetails: {
    driverName: string;
    vehicleInfo: string;
    pickupTime: string;
    trackingLink: string;
  };
}

export const ShareRideModal: React.FC<ShareRideModalProps> = ({
  isOpen,
  onClose,
  rideDetails
}) => {
  const { shareViaWhatsApp, shareViaSMS, copyToClipboard } = useShareRide(rideDetails);
  const { toast, hideToast } = useToast();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-purple-500/10">
              <Share2 className="text-purple-500" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Share Ride Details
              </h3>
              <p className="text-sm text-gray-400">
                Keep your loved ones informed about your journey
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <ShareOption
              icon={Send}
              label="Share via WhatsApp"
              onClick={shareViaWhatsApp}
              iconColor="text-green-500"
            />
            
            <ShareOption
              icon={MessageSquare}
              label="Share via SMS"
              onClick={shareViaSMS}
              iconColor="text-blue-500"
            />
            
            <ShareOption
              icon={Copy}
              label="Copy Tracking Link"
              onClick={copyToClipboard}
              iconColor="text-purple-500"
            />
          </div>
        </div>
      </Modal>

      {toast.isVisible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </>
  );
};