import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput } from './FormInput';
import { AuthButton } from '../buttons/AuthButton';
import { useLogin } from './hooks/useLogin';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useLogin();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(formData);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        Welcome Back
      </h2>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <FormInput
        label="Email or Phone Number"
        name="identifier"
        type="text"
        value={formData.identifier}
        onChange={(e) => setFormData(prev => ({ ...prev, identifier: e.target.value }))}
        placeholder="Enter your email or phone number"
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.rememberMe}
            onChange={(e) => setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}
            className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-purple-500 focus:ring-purple-500"
          />
          <span className="text-sm text-gray-300">Remember me</span>
        </label>

        <button
          type="button"
          onClick={() => navigate('/forgot-password')}
          className="text-sm text-purple-500 hover:text-purple-400 transition-colors"
        >
          Forgot Password?
        </button>
      </div>

      <AuthButton
        variant="primary"
        type="submit"
        disabled={!formData.identifier || !formData.password || isLoading}
        className="w-full"
      >
        {isLoading ? 'Logging in...' : 'Log In'}
      </AuthButton>

      <p className="text-center text-gray-400">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="text-purple-500 hover:text-purple-400 transition-colors"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};