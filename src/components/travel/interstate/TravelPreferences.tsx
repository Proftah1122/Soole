import React from 'react';
import { Luggage, PawPrint, Accessibility } from 'lucide-react';
import { AuthButton } from '../../buttons/AuthButton';

interface TravelPreferencesProps {
  onSubmit: (preferences: TravelPreferencesData) => void;
  onBack: () => void;
}

export interface TravelPreferencesData {
  luggageSize: string;
  luggageWeight: string;
  petFriendly: boolean;
  wheelchairAccess: boolean;
  nonSmoking: boolean;
  quietRide: boolean;
  musicPreference: string;
  additionalStops: string;
}

export const TravelPreferences: React.FC<TravelPreferencesProps> = ({
  onSubmit,
  onBack
}) => {
  const [preferences, setPreferences] = React.useState<TravelPreferencesData>({
    luggageSize: '',
    luggageWeight: '',
    petFriendly: false,
    wheelchairAccess: false,
    nonSmoking: true,
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
        <h3 className="text-lg font-medium text-white">Luggage Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <select
            value={preferences.luggageSize}
            onChange={(e) => setPreferences(prev => ({ ...prev, luggageSize: e.target.value }))}
            className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <select
            value={preferences.luggageWeight}
            onChange={(e) => setPreferences(prev => ({ ...prev, luggageWeight: e.target.value }))}
            className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
          >
            <option value="">Select Weight</option>
            <option value="light">Light (0-10kg)</option>
            <option value="medium">Medium (10-20kg)</option>
            <option value="heavy">Heavy (20kg+)</option>
          </select>
        </div>
      </div>

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
            <PawPrint className="text-purple-500" size={20} />
            <span className="text-white">Pet Friendly</span>
          </label>

          <label className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.wheelchairAccess}
              onChange={(e) => setPreferences(prev => ({ ...prev, wheelchairAccess: e.target.checked }))}
              className="rounded border-gray-600 text-purple-500 focus:ring-purple-500"
            />
            <Accessibility className="text-purple-500" size={20} />
            <span className="text-white">Wheelchair Access</span>
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