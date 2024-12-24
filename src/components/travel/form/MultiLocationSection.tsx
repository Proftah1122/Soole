import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { LocationSelector } from '../LocationSelector';
import { Location } from './types';

interface MultiLocationSectionProps {
  type: 'pickup' | 'dropoff';
  locations: Location[];
  onChange: (locations: Location[]) => void;
  errors?: string[];
}

export const MultiLocationSection: React.FC<MultiLocationSectionProps> = ({
  type,
  locations,
  onChange,
  errors = []
}) => {
  const title = type === 'pickup' ? 'Pickup Details' : 'Drop-off Details';
  
  const addLocation = () => {
    onChange([...locations, { address: '', isOptional: true }]);
  };

  const removeLocation = (index: number) => {
    onChange(locations.filter((_, i) => i !== index));
  };

  const updateLocation = (index: number, address: string) => {
    const newLocations = [...locations];
    newLocations[index] = { ...newLocations[index], address };
    onChange(newLocations);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      
      {locations.map((location, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center gap-2">
            <LocationSelector
              label={`${type === 'pickup' ? 'Pickup' : 'Drop-off'} Location ${index + 1}`}
              value={location.address}
              onChange={(value) => updateLocation(index, value)}
              placeholder={`Enter ${type} location`}
              required={!location.isOptional}
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeLocation(index)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Minus size={20} />
              </button>
            )}
          </div>
          {errors[index] && (
            <p className="text-sm text-red-500">{errors[index]}</p>
          )}
        </div>
      ))}

      {locations.length < 3 && (
        <button
          type="button"
          onClick={addLocation}
          className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
        >
          <Plus size={20} />
          <span>Add another {type === 'pickup' ? 'pickup' : 'drop-off'} point</span>
        </button>
      )}
    </div>
  );
};