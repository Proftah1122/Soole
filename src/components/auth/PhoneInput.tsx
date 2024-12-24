import React from 'react';
import { countryCodes } from '../../utils/countryCodes';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const PhoneInput = ({ value, onChange, error }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = React.useState('+1');
  
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
    onChange(e.target.value + value.slice(value.indexOf('-') + 1));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value.replace(/[^\d]/g, '');
    onChange(countryCode + '-' + number);
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-200">
        Phone Number
      </label>
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={handleCountryChange}
          className="bg-gray-800 border border-gray-700 rounded-lg px-2 focus:ring-2 focus:ring-purple-500 text-white"
        >
          {countryCodes.map(({ code, name }) => (
            <option key={code} value={code}>
              {code} ({name})
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={value.split('-')[1] || ''}
          onChange={handleNumberChange}
          placeholder="123-456-7890"
          className={`
            flex-1 px-4 py-2 bg-gray-800 border rounded-lg focus:ring-2 transition-all
            placeholder:text-gray-400
            text-white
            ${error ? 'border-red-500' : 'border-gray-700'}
            ${error ? 'focus:ring-red-500' : 'focus:ring-purple-500'}
          `}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};