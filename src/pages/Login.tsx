import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';

export const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <LoginForm />
    </div>
  );
};