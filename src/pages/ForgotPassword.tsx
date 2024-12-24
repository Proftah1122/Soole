import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '../components/auth/FormInput';
import { AuthButton } from '../components/buttons/AuthButton';

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // TODO: Implement password reset logic
      navigate('/login');
    } catch (error) {
      console.error('Password reset failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />

          <AuthButton
            variant="primary"
            type="submit"
            disabled={!email || isLoading}
            className="w-full"
          >
            {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
          </AuthButton>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full text-sm text-purple-500 hover:text-purple-400 transition-colors"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};