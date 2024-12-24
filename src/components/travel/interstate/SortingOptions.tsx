import React from 'react';
import { Clock, Star } from 'lucide-react';

interface SortingOptionsProps {
  currentSort: 'price' | 'rating' | 'time';
  onSort: (sort: 'price' | 'rating' | 'time') => void;
}

export const SortingOptions = ({ currentSort, onSort }: SortingOptionsProps) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onSort('price')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          currentSort === 'price'
            ? 'bg-purple-500 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        <span className="font-bold">₦</span>
        <span>Price</span>
      </button>

      <button
        onClick={() => onSort('rating')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          currentSort === 'rating'
            ? 'bg-purple-500 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        <Star size={16} />
        <span>Rating</span>
      </button>

      <button
        onClick={() => onSort('time')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          currentSort === 'time'
            ? 'bg-purple-500 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        <Clock size={16} />
        <span>Time</span>
      </button>
    </div>
  );
};