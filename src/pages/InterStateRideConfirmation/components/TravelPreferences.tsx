import React from 'react';
import { Luggage, Music, PawPrint, Ban } from 'lucide-react';
import { TravelPreferencesInfo } from '../types';

interface TravelPreferencesProps {
  preferences: TravelPreferencesInfo;
}

export const TravelPreferences: React.FC<TravelPreferencesProps> = ({ preferences }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">Travel Preferences</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Luggage className="text-purple-500" />
          <div>
            <p className="text-sm text-gray-400">Luggage Size</p>
            <p className="text-white capitalize">{preferences.luggageSize}</p>
          </div>
        </div>

        {preferences.petFriendly && (
          <div className="flex items-center gap-3">
            <PawPrint className="text-cyan-500" />
            <div>
              <p className="text-sm text-gray-400">Pet Friendly</p>
              <p className="text-white">Allowed</p>
            </div>
          </div>
        )}

        {preferences.nonSmoking && (
          <div className="flex items-center gap-3">
            <Ban className="text-red-500" />
            <div>
              <p className="text-sm text-gray-400">Smoking</p>
              <p className="text-white">Not Allowed</p>
            </div>
          </div>
        )}

        {preferences.musicPreference && (
          <div className="flex items-center gap-3">
            <Music className="text-green-500" />
            <div>
              <p className="text-sm text-gray-400">Music</p>
              <p className="text-white capitalize">{preferences.musicPreference}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};