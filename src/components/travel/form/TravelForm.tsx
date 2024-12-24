import React from 'react';
import { LocationSection } from './LocationSection';
import { TimingSelector } from './TimingSelector';
import { AuthButton } from '../../buttons/AuthButton';
import { useTravelForm } from './hooks/useTravelForm';

interface TravelFormProps {
  onSubmit: () => void;
}

export const TravelForm: React.FC<TravelFormProps> = ({ onSubmit }) => {
  const { formData, errors, setFormData, handleSubmit } = useTravelForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <LocationSection
        type="pickup"
        value={formData.pickupLocations[0].address}
        onChange={(value) => setFormData(prev => ({
          ...prev,
          pickupLocations: [{ address: value, isOptional: false }]
        }))}
        error={errors.pickupLocations[0]}
      />

      <LocationSection
        type="dropoff"
        value={formData.dropoffLocations[0].address}
        onChange={(value) => setFormData(prev => ({
          ...prev,
          dropoffLocations: [{ address: value, isOptional: false }]
        }))}
        error={errors.dropoffLocations[0]}
      />

      <TimingSelector
        selectedOption={formData.timingOption}
        onOptionChange={(option) => setFormData(prev => ({ ...prev, timingOption: option }))}
        scheduledTime={formData.scheduledTime}
        onTimeChange={(date) => setFormData(prev => ({ ...prev, scheduledTime: date }))}
        isFlexible={formData.isFlexible}
        onFlexibleChange={(flexible) => setFormData(prev => ({ ...prev, isFlexible: flexible }))}
        error={errors.scheduledTime}
      />

      <AuthButton
        variant="primary"
        type="submit"
        className="w-full"
      >
        Find Available Rides
      </AuthButton>
    </form>
  );
};