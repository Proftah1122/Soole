import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimingOptionProps {
  icon: LucideIcon;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const TimingOptionButton: React.FC<TimingOptionProps> = ({
  icon: Icon,
  label,
  selected,
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex flex-col items-center gap-2 p-4 rounded-lg border transition-all
        ${selected
          ? 'border-purple-500 bg-purple-500/10'
          : 'border-gray-700 hover:border-gray-600'
        }
      `}
    >
      <Icon className={selected ? 'text-purple-500' : 'text-gray-400'} />
      <span className="text-white">{label}</span>
    </button>
  );
};