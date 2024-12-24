import React from 'react';

interface LuggageSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const LuggageSelect: React.FC<LuggageSelectProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">
        Luggage Size
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500"
      >
        <option value="">Select luggage size</option>
        <option value="small">Small (Backpack/Small Bag)</option>
        <option value="medium">Medium (1-2 Suitcases)</option>
        <option value="large">Large (3+ Suitcases)</option>
      </select>
    </div>
  );
};