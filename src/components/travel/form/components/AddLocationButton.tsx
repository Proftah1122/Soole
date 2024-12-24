import React from 'react';
import { Plus } from 'lucide-react';

interface AddLocationButtonProps {
  onClick: () => void;
  label: string;
}

export const AddLocationButton: React.FC<AddLocationButtonProps> = ({ onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
    >
      <Plus size={20} />
      <span>{label}</span>
    </button>
  );
};