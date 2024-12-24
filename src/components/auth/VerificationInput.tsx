import React from 'react';

interface VerificationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const VerificationInput = ({ 
  label, 
  value, 
  onChange, 
  disabled 
}: VerificationInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    onChange(newValue);
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder="Enter 6-digit code"
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
          focus:ring-2 focus:ring-purple-500 transition-all
          placeholder:text-gray-400
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed"
        maxLength={6}
      />
    </div>
  );
};