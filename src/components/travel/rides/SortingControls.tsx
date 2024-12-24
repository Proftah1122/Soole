import React from 'react';
import { Clock, Star, DollarSign } from 'lucide-react';

interface SortingControlsProps {
  sortBy: 'price' | 'rating' | 'time';
  onSort: (sort: 'price' | 'rating' | 'time') => void;
}

const sortingOptions = [
  { id: 'price', label: 'Price', icon: DollarSign },
  { id: 'rating', label: 'Rating', icon: Star },
  { id: 'time', label: 'Time', icon: Clock }
] as const;

export const SortingControls: React.FC<SortingControlsProps> = ({ sortBy, onSort }) => {
  return (
    <div className="flex gap-2">
      {sortingOptions.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSort(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            sortBy === id
              ? 'bg-purple-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <Icon size={16} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};