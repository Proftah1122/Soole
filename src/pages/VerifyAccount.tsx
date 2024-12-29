import { VerificationForm } from '../components/auth/VerificationForm';

export const VerifyAccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <VerificationForm />
      </div>
    </div>
  );
};