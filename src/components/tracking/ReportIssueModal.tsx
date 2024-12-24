import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Modal } from '../modals/Modal';
import { AuthButton } from '../buttons/AuthButton';

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportIssueModal: React.FC<ReportIssueModalProps> = ({
  isOpen,
  onClose
}) => {
  const issues = [
    "Driver is not following the route",
    "Vehicle condition concerns",
    "Driver behavior",
    "Safety concerns",
    "Other issues"
  ];

  const handleReport = (issue: string) => {
    // Simulate reporting
    console.log('Reporting issue:', issue);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-full bg-red-500/10">
            <AlertTriangle className="text-red-500" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Report an Issue</h3>
            <p className="text-sm text-gray-400">
              Select the type of issue you're experiencing
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {issues.map((issue) => (
            <AuthButton
              key={issue}
              variant="secondary"
              onClick={() => handleReport(issue)}
              className="w-full justify-start"
              type="button"
            >
              {issue}
            </AuthButton>
          ))}
        </div>
      </div>
    </Modal>
  );
};