import React, { useState } from 'react';
import { Clock, Star } from 'lucide-react';
import { InterStateRideCard } from './InterStateRideCard';
import { SortingOptions } from './SortingOptions';
import { useInterStateRides } from '../../../hooks/useInterStateRides';

export const InterStateRidesList = () => {
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'time'>('price');
  const { rides, isLoading } = useInterStateRides();

  const sortedRides = [...rides].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.baseFare - b.baseFare;
      case 'rating':
        return b.rating - a.rating;
      case 'time':
        return a.duration - b.duration;
      default:
        return 0;
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SortingOptions currentSort={sortBy} onSort={setSortBy} />
      <div className="space-y-4">
        {sortedRides.map((ride) => (
          <InterStateRideCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};