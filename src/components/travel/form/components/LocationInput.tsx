import React from 'react';
import { Minus } from 'lucide-react';
import { LocationSelector } from '../../LocationSelector';

interface LocationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onRemove?: () => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export const LocationInput: React.FC<LocationInputProps> = ({
  label,
  value,
  onChange,
  onRemove,
  placeholder,
  required = false,
  error
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <LocationSelector
          label={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Minus size={20} />
          </button>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};