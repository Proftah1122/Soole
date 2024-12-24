import { useState } from 'react';

interface LoginCredentials {
  identifier: string;
  password: string;
  rememberMe: boolean;
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Basic validation for development
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.identifier);
      const isValidPassword = credentials.password.length >= 6;
      
      if (!isValidEmail) {
        throw new Error('Please enter a valid email address');
      }
      
      if (!isValidPassword) {
        throw new Error('Password must be at least 6 characters');
      }
      
      // Store auth state
      localStorage.setItem('isAuthenticated', 'true');
      if (credentials.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
    error
  };
};