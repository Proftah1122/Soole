import React from 'react';

interface DateTimePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
  minDate?: Date;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedDate,
  onDateChange,
  minDate = new Date()
}) => {
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    onDateChange(newDate);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedDate) return;
    
    const [hours, minutes] = e.target.value.split(':');
    const newDate = new Date(selectedDate);
    newDate.setHours(parseInt(hours), parseInt(minutes));
    onDateChange(newDate);
  };

  // Generate time slots every 30 minutes
  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const hours = Math.floor(i / 2).toString().padStart(2, '0');
    const minutes = (i % 2 * 30).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  });

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">
          Select Date
        </label>
        <input
          type="date"
          min={formatDate(minDate)}
          value={selectedDate ? formatDate(selectedDate) : ''}
          onChange={handleDateChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:ring-2 focus:ring-purple-500 transition-all text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">
          Select Time
        </label>
        <select
          value={selectedDate ? 
            `${selectedDate.getHours().toString().padStart(2, '0')}:${selectedDate.getMinutes().toString().padStart(2, '0')}` 
            : ''
          }
          onChange={handleTimeChange}
          disabled={!selectedDate}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:ring-2 focus:ring-purple-500 transition-all text-white
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select time</option>
          {timeSlots.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
    </div>
  );
};