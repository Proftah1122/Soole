import React from 'react';
import { Clock, Calendar, Zap } from 'lucide-react';
import { TimingOption } from '../types';
import { DateTimePicker } from '../../DateTimePicker';
import { TimingOptionButton } from './TimingOption';

interface TimingSelectorProps {
  selectedOption: TimingOption;
  onOptionChange: (option: TimingOption) => void;
  scheduledTime: Date | null;
  onTimeChange: (date: Date) => void;
  isFlexible: boolean;
  onFlexibleChange: (flexible: boolean) => void;
  error?: string;
}

export const TimingSelector: React.FC<TimingSelectorProps> = ({
  selectedOption,
  onOptionChange,
  scheduledTime,
  onTimeChange,
  isFlexible,
  onFlexibleChange,
  error
}) => {
  const options = [
    { id: 'now' as const, icon: Zap, label: 'Now' },
    { id: 'later-today' as const, icon: Clock, label: 'Later Today' },
    { id: 'schedule-ahead' as const, icon: Calendar, label: 'Schedule Ahead' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white mb-4">When do you want to travel?</h2>
      
      <div className="grid grid-cols-3 gap-4">
        {options.map(({ id, icon, label }) => (
          <TimingOptionButton
            key={id}
            icon={icon}
            label={label}
            selected={selectedOption === id}
            onClick={() => onOptionChange(id)}
          />
        ))}
      </div>

      {selectedOption !== 'now' && (
        <div className="space-y-4">
          <DateTimePicker
            selectedDate={scheduledTime}
            onDateChange={onTimeChange}
            minDate={selectedOption === 'later-today' ? new Date() : new Date(Date.now() + 86400000)}
            maxDate={selectedOption === 'later-today' ? new Date(new Date().setHours(23, 59, 59, 999)) : undefined}
          />
          
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isFlexible}
              onChange={(e) => onFlexibleChange(e.target.checked)}
              className="rounded border-gray-700 bg-gray-800 text-purple-500 focus:ring-purple-500"
            />
            <span className="text-gray-300">I'm flexible with travel time (±30 mins)</span>
          </label>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
        </div>
      )}
    </div>
  );
};