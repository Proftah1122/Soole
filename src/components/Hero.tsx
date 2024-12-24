import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoPlayer } from './VideoPlayer';
import { AuthButton } from './buttons/AuthButton';

export const Hero = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="relative flex min-h-screen items-center">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse">
            Your Wallet Will Thank You!
          </h1>
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            Save money every day by sharing your ride with others.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <AuthButton 
              variant="secondary" 
              onClick={handleLogin}
              type="button"
              className="w-full sm:w-auto"
            >
              Log In
            </AuthButton>
            <AuthButton 
              variant="primary" 
              onClick={handleSignUp}
              type="button"
              className="w-full sm:w-auto"
            >
              Sign Up
            </AuthButton>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
};