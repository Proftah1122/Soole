import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ShareOptionProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  iconColor?: string;
}

export const ShareOption: React.FC<ShareOptionProps> = ({
  icon: Icon,
  label,
  onClick,
  iconColor = 'text-gray-400'
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
    >
      <Icon className={iconColor} size={20} />
      <span className="text-white">{label}</span>
    </button>
  );
};