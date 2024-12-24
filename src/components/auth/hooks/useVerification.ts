import { useState } from 'react';

interface VerificationCodes {
  emailCode: string;
  phoneCode: string;
}

export const useVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verify = async (codes: VerificationCodes): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate codes (replace with actual validation)
      if (codes.emailCode !== '123456' || codes.phoneCode !== '123456') {
        throw new Error('Invalid verification code');
      }

      localStorage.setItem('verified', 'true');
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const resendCode = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    } catch (err) {
      setError('Failed to resend verification code');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    verify,
    resendCode,
    isLoading,
    error
  };
};