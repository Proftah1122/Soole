import React from 'react';
import { MapPin } from 'lucide-react';
import { nigerianStates } from '../../utils/locationData';

interface StateSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const StateSelector: React.FC<StateSelectorProps> = ({
  label,
  value,
  onChange,
  error
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:ring-2 focus:ring-purple-500 transition-all
            text-white appearance-none"
        >
          <option value="">Select a state</option>
          {nigerianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};