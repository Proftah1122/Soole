import React from 'react';

interface GenderSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const GenderSelect = ({ value, onChange, error }: GenderSelectProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-200">
        Gender
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full px-4 py-2 bg-gray-800 border rounded-lg focus:ring-2 transition-all
          text-white appearance-none
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-purple-500'}
        `}
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};