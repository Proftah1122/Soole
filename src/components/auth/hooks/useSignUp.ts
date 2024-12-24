import { useState } from 'react';

interface SignUpCredentials {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (credentials: SignUpCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      localStorage.setItem('user', JSON.stringify({
        fullName: credentials.fullName,
        email: credentials.email,
        phoneNumber: credentials.phoneNumber
      }));

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create account');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signUp,
    isLoading,
    error
  };
};