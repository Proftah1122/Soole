import React, { useState } from 'react';
import { Phone, Share2, AlertTriangle } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';
import { ReportIssueModal } from './ReportIssueModal';
import { ShareRideModal } from '../sharing/ShareRideModal';

export const RideActions: React.FC = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleContactDriver = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <>
      <div className="fixed bottom-20 right-4 flex flex-col gap-2 z-[1000]">
        <AuthButton
          variant="secondary"
          onClick={handleContactDriver}
          className="flex items-center gap-2"
          type="button"
        >
          <Phone size={20} />
          <span>Contact Driver</span>
        </AuthButton>

        <AuthButton
          variant="secondary"
          onClick={() => setShowShareModal(true)}
          className="flex items-center gap-2"
          type="button"
        >
          <Share2 size={20} />
          <span>Share Ride</span>
        </AuthButton>

        <AuthButton
          variant="primary"
          onClick={() => setShowReportModal(true)}
          className="flex items-center gap-2 !bg-red-500 hover:!bg-red-600"
          type="button"
        >
          <AlertTriangle size={20} />
          <span>Report Issue</span>
        </AuthButton>
      </div>

      <ReportIssueModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
      />

      <ShareRideModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        rideDetails={{
          driverName: "Adebayo Ogunlesi",
          vehicleInfo: "Toyota Camry • ABC 123 XY",
          pickupTime: new Date().toLocaleTimeString(),
          trackingLink: `${window.location.origin}/shared-tracking/123`
        }}
      />
    </>
  );
};