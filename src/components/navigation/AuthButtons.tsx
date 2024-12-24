import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthButton } from '../buttons/AuthButton';

export const AuthButtons = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignIn = () => {
    // Temporarily navigate to signup until signin is implemented
    navigate('/signup');
  };

  return (
    <div className="flex items-center gap-4">
      <AuthButton 
        variant="secondary" 
        onClick={handleSignIn}
        type="button"
      >
        Sign In
      </AuthButton>
      <AuthButton 
        variant="primary" 
        onClick={handleSignUp}
        type="button"
      >
        Sign Up
      </AuthButton>
    </div>
  );
};