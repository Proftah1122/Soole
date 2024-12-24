import React from 'react';

interface AdditionalStopsProps {
  value: string;
  onChange: (value: string) => void;
}

export const AdditionalStops: React.FC<AdditionalStopsProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">
        Additional Stops
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter any additional stops or special requests"
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500"
        rows={3}
      />
    </div>
  );
};