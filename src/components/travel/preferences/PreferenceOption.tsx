import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PreferenceOptionProps {
  icon: LucideIcon;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const PreferenceOption: React.FC<PreferenceOptionProps> = ({
  icon: Icon,
  label,
  checked,
  onChange
}) => {
  return (
    <label className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded border-gray-600 text-purple-500 focus:ring-purple-500"
      />
      <Icon className="text-purple-500" />
      <span className="text-white">{label}</span>
    </label>
  );
};