import React from 'react';
import { Icon } from '../../icons';
import { AuthButton } from '../../buttons/AuthButton';

interface TravelPreferencesFormProps {
  onSubmit: (preferences: TravelPreferencesData) => void;
  onBack: () => void;
}

export interface TravelPreferencesData {
  petFriendly: boolean;
  nonSmoking: boolean;
  wheelchairAccess: boolean;
  quietRide: boolean;
  musicPreference: string;
  additionalStops: string;
}

export const TravelPreferencesForm: React.FC<TravelPreferencesFormProps> = ({
  onSubmit,
  onBack
}) => {
  const [preferences, setPreferences] = React.useState<TravelPreferencesData>({
    petFriendly: false,
    nonSmoking: true,
    wheelchairAccess: false,
    quietRide: false,
    musicPreference: '',
    additionalStops: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Special Requirements</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.petFriendly}
              onChange={(e) => setPreferences(prev => ({ ...prev, petFriendly: e.target.checked }))}
              className="rounded border-gray-600 text-purple-500 focus:ring-purple-500"
            />
            <Icon name="PawPrint" className="text-purple-500" />
            <span className="text-white">Pet Friendly</span>
          </label>

          <label className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.wheelchairAccess}
              onChange={(e) => setPreferences(prev => ({ ...prev, wheelchairAccess: e.target.checked }))}
              className="rounded border-gray-600 text-purple-500 focus:ring-purple-500"
            />
            <Icon name="Wheelchair" className="text-purple-500" />
            <span className="text-white">Wheelchair Access</span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Ride Preferences</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.nonSmoking}
              onChange={(e) => setPreferences(prev => ({ ...prev, nonSmoking: e.target.checked }))}
              className="rounded border-gray-600 text-purple-500 focus:ring-purple-500"
            />
            <Icon name="Smoking" className="text-purple-500" />
            <span className="text-white">Non-Smoking</span>
          </label>

          <label className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.quietRide}
              onChange={(e) => setPreferences(prev => ({ ...prev, quietRide: e.target.checked }))}
              className="rounded border-gray-600 text-purple-500 focus:ring-purple-500"
            />
            <Icon name="Volume2" className="text-purple-500" />
            <span className="text-white">Quiet Ride</span>
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <AuthButton
          variant="secondary"
          onClick={onBack}
          className="flex-1"
          type="button"
        >
          Back
        </AuthButton>
        <AuthButton
          variant="primary"
          type="submit"
          className="flex-1"
        >
          View Available Rides
        </AuthButton>
      </div>
    </form>
  );
};