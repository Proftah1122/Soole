import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { isValidEmail } from '../../utils/validation';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  validateEmail?: boolean;
}

export const FormInput = ({ 
  label, 
  error,
  type,
  validateEmail,
  onChange,
  onBlur,
  ...props 
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateEmail) {
      setEmailError('');
    }
    onChange?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validateEmail && e.target.value) {
      if (!isValidEmail(e.target.value)) {
        setEmailError('Please enter a valid email address');
      }
    }
    onBlur?.(e);
  };

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
  const displayError = error || emailError;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          type={inputType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`
            w-full px-4 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-all
            placeholder:text-gray-400
            text-white
            ${displayError ? 'border-red-500' : 'border-gray-700'}
            ${displayError ? 'focus:ring-red-500' : 'focus:ring-purple-500'}
            ${isPassword ? 'pr-12' : ''}
          `}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 focus:outline-none"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>
      {displayError && (
        <p className="text-sm text-red-500">{displayError}</p>
      )}
    </div>
  );
};