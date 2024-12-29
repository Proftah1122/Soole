import { Music } from 'lucide-react';

interface MusicPreferenceProps {
  value: string;
  onChange: (value: string) => void;
}

export const MusicPreference: React.FC<MusicPreferenceProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">
        Music Preferences
      </label>
      <div className="flex items-center gap-3">
        <Music className="text-purple-500" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500"
        >
          <option value="">No preference</option>
          <option value="none">No music</option>
          <option value="low">Low volume</option>
          <option value="moderate">Moderate volume</option>
        </select>
      </div>
    </div>
  );
};