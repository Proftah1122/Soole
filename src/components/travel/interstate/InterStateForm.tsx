import React from 'react';
import { StateAndLGASelector } from './components/StateAndLGASelector';
import { LocationSelector } from '../LocationSelector';
import { TimingSelector } from '../form/components/TimingSelector';
import { AuthButton } from '../../buttons/AuthButton';
import { useInterStateForm } from './hooks/useInterStateForm';

interface InterStateFormProps {
  onSubmit: () => void;
}

export const InterStateForm: React.FC<InterStateFormProps> = ({ onSubmit }) => {
  const { formData, errors, setFormData, handleSubmit } = useInterStateForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Pickup Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white mb-4">Pickup Details</h2>
        <StateAndLGASelector
          state={formData.pickup.state}
          lga={formData.pickup.lga}
          onStateChange={(state) => setFormData(prev => ({
            ...prev,
            pickup: { ...prev.pickup, state, lga: '' }
          }))}
          onLGAChange={(lga) => setFormData(prev => ({
            ...prev,
            pickup: { ...prev.pickup, lga }
          }))}
          error={errors.pickup}
        />
        {formData.pickup.lga && (
          <LocationSelector
            label="Specific Location"
            value={formData.pickup.address}
            onChange={(address) => setFormData(prev => ({
              ...prev,
              pickup: { ...prev.pickup, address }
            }))}
            placeholder="Enter specific pickup location"
            required
          />
        )}
      </div>

      {/* Dropoff Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white mb-4">Drop-off Details</h2>
        <StateAndLGASelector
          state={formData.dropoff.state}
          lga={formData.dropoff.lga}
          onStateChange={(state) => setFormData(prev => ({
            ...prev,
            dropoff: { ...prev.dropoff, state, lga: '' }
          }))}
          onLGAChange={(lga) => setFormData(prev => ({
            ...prev,
            dropoff: { ...prev.dropoff, lga }
          }))}
          error={errors.dropoff}
        />
        {formData.dropoff.lga && (
          <LocationSelector
            label="Specific Location"
            value={formData.dropoff.address}
            onChange={(address) => setFormData(prev => ({
              ...prev,
              dropoff: { ...prev.dropoff, address }
            }))}
            placeholder="Enter specific drop-off location"
            required
          />
        )}
      </div>

      {/* Timing Section */}
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