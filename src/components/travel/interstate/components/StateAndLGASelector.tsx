import React from 'react';
import { MapPin } from 'lucide-react';
import { nigerianStates, getLGAs } from '../../../../utils/locationData';

interface StateAndLGASelectorProps {
  state: string;
  lga: string;
  onStateChange: (state: string) => void;
  onLGAChange: (lga: string) => void;
  error?: {
    state?: string;
    lga?: string;
  };
}

export const StateAndLGASelector: React.FC<StateAndLGASelectorProps> = ({
  state,
  lga,
  onStateChange,
  onLGAChange,
  error
}) => {
  const lgas = state ? getLGAs(state) : [];

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-200">
          State
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={state}
            onChange={(e) => {
              onStateChange(e.target.value);
              onLGAChange(''); // Reset LGA when state changes
            }}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
              focus:ring-2 focus:ring-purple-500 transition-all
              text-white appearance-none"
          >
            <option value="">Select a state</option>
            {nigerianStates.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        {error?.state && (
          <p className="text-sm text-red-500">{error.state}</p>
        )}
      </div>

      {state && (
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-200">
            Local Government Area
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={lga}
              onChange={(e) => onLGAChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
                focus:ring-2 focus:ring-purple-500 transition-all
                text-white appearance-none"
            >
              <option value="">Select LGA</option>
              {lgas.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          {error?.lga && (
            <p className="text-sm text-red-500">{error.lga}</p>
          )}
        </div>
      )}
    </div>
  );
};