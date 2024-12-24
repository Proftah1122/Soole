import React from 'react';
import { LocationSelector } from '../LocationSelector';

interface LocationSectionProps {
  type: 'pickup' | 'dropoff';
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ 
  type, 
  value, 
  onChange,
  error 
}) => {
  const title = type === 'pickup' ? 'Pickup Details' : 'Drop-off Details';
  const label = type === 'pickup' ? 'Pickup Location' : 'Drop-off Location';
  const placeholder = `Enter ${type === 'pickup' ? 'pickup' : 'drop-off'} location`;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <LocationSelector
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        required
      />
    </div>
  );
};