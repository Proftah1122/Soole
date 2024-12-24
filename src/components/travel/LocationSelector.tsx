import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { usePlaceSuggestions } from './hooks/usePlaceSuggestions';

interface LocationSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export const LocationSelector = ({
  label,
  value,
  onChange,
  placeholder,
  required
}: LocationSelectorProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { suggestions, getSuggestions } = usePlaceSuggestions();

  useEffect(() => {
    if (value && value.length > 2) {
      getSuggestions(value);
    }
  }, [value]);

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-200">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
            focus:ring-2 focus:ring-purple-500 transition-all
            text-white placeholder:text-gray-400"
          placeholder={placeholder}
          required={required}
        />
        
        {isFocused && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-gray-300"
                onClick={() => onChange(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};