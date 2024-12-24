import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from './hooks/useForm';
import { FormInput } from './FormInput';
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator';
import { PhoneInput } from './PhoneInput';
import { AuthButton } from '../buttons/AuthButton';
import { useSignUp } from './hooks/useSignUp';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const { signUp, isLoading, error } = useSignUp();
  
  const { values, errors, handleChange, isValid } = useForm({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      
      if (!values.fullName || values.fullName.length < 3) {
        errors.fullName = 'Full name must be at least 3 characters';
      }
      
      if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      
      // Updated phone validation to accept country code format
      if (!values.phoneNumber || !/^\+\d{1,4}-\d{6,14}$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Please enter a valid phone number';
      }
      
      if (!values.password || values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }
      
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
      
      return errors;
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      try {
        await signUp({
          fullName: values.fullName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          password: values.password
        });
        navigate('/verify-account');
      } catch (err) {
        console.error('Sign up failed:', err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        Create Your Sọ́ọ̀lẹ̀ Account
      </h2>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <FormInput
        label="Full Name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        error={errors.fullName}
        placeholder="John Doe"
      />

      <FormInput
        label="Email Address"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="john@example.com"
      />

      <PhoneInput
        value={values.phoneNumber}
        onChange={(value) => handleChange({ target: { name: 'phoneNumber', value }})}
        error={errors.phoneNumber}
      />

      <div className="space-y-4">
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <PasswordStrengthIndicator password={values.password} />
      </div>

      <FormInput
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <div className="space-y-4">
        <AuthButton
          variant="primary"
          type="submit"
          disabled={!isValid || isLoading}
          className="w-full"
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </AuthButton>
        
        <p className="text-center text-gray-400">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/signin')}
            className="text-purple-500 hover:text-purple-400 transition-colors"
          >
            Log In
          </button>
        </p>
      </div>
    </form>
  );
};