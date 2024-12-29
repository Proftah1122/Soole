import React from 'react';
// import { useNavigate } from 'react-router-dom';
import {useRouter} from 'next/router';
import { useVerification } from './hooks/useVerification';
import { VerificationInput } from './VerificationInput';
import { AuthButton } from '../buttons/AuthButton';

export const VerificationForm = () => {
  const router = useRouter();
  const { verify, resendCode, isLoading, error } = useVerification();
  const [emailCode, setEmailCode] = React.useState('');
  const [phoneCode, setPhoneCode] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const success = await verify({ emailCode, phoneCode });
      if (success) {
        router.push('/complete-profile', { replace: true });
      }
    } catch (err) {
      console.error('Verification failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        Verify Your Account
      </h2>

      <p className="text-gray-300 text-center">
        We've sent verification codes to your email and phone number.
      </p>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <VerificationInput
          label="Email Verification Code"
          value={emailCode}
          onChange={setEmailCode}
          disabled={isLoading}
        />

        <VerificationInput
          label="Phone Verification Code"
          value={phoneCode}
          onChange={setPhoneCode}
          disabled={isLoading}
        />
      </div>

      <AuthButton
        variant="primary"
        type="submit"
        disabled={!emailCode || !phoneCode || isLoading}
        className="w-full"
      >
        {isLoading ? 'Verifying...' : 'Verify Account'}
      </AuthButton>

      <button
        type="button"
        onClick={resendCode}
        disabled={isLoading}
        className="w-full text-sm text-purple-500 hover:text-purple-400 transition-colors disabled:opacity-50"
      >
        Resend Verification Codes
      </button>
    </form>
  );
};