import React from 'react';
import { LocationInput } from './LocationInput';
import { AddLocationButton } from './AddLocationButton';
import { Location } from '../types';

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
        <LocationInput
          key={index}
          label={`${type === 'pickup' ? 'Pickup' : 'Drop-off'} Location ${index + 1}`}
          value={location.address}
          onChange={(value) => updateLocation(index, value)}
          onRemove={index > 0 ? () => removeLocation(index) : undefined}
          placeholder={`Enter ${type} location`}
          required={!location.isOptional}
          error={errors[index]}
        />
      ))}

      {locations.length < 3 && (
        <AddLocationButton
          onClick={addLocation}
          label={`Add another ${type === 'pickup' ? 'pickup' : 'drop-off'} point`}
        />
      )}
    </div>
  );
};