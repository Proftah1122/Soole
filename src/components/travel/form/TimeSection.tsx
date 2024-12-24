import React from 'react';
import { DateTimePicker } from '../DateTimePicker';

interface TimeSectionProps {
  date: Date | null;
  onDateChange: (date: Date) => void;
  isFlexible: boolean;
  onFlexibleChange: (flexible: boolean) => void;
  error?: string;
}

export const TimeSection: React.FC<TimeSectionProps> = ({
  date,
  onDateChange,
  isFlexible,
  onFlexibleChange,
  error
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">Travel Time</h2>
      <DateTimePicker
        selectedDate={date}
        onDateChange={onDateChange}
        minDate={new Date()}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isFlexible}
          onChange={(e) => onFlexibleChange(e.target.checked)}
          className="rounded border-gray-700 bg-gray-800 text-purple-500 focus:ring-purple-500"
        />
        <span className="text-gray-300">I'm flexible with travel time (±30 mins)</span>
      </label>
    </div>
  );
};