import React from 'react';
import { MultiLocationSection } from './form/MultiLocationSection';
import { TimingSelector } from './form/TimingSelector';
import { AuthButton } from '../buttons/AuthButton';
import { useTravelForm } from './form/useTravelForm';

interface TravelFormProps {
  onSubmit: () => void;
}

export const TravelForm: React.FC<TravelFormProps> = ({ onSubmit }) => {
  const { formData, errors, setFormData, handleSubmit } = useTravelForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <MultiLocationSection
        type="pickup"
        locations={formData.pickupLocations}
        onChange={(locations) => setFormData(prev => ({ ...prev, pickupLocations: locations }))}
        errors={errors.pickupLocations}
      />

      <MultiLocationSection
        type="dropoff"
        locations={formData.dropoffLocations}
        onChange={(locations) => setFormData(prev => ({ ...prev, dropoffLocations: locations }))}
        errors={errors.dropoffLocations}
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