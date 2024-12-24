import React from 'react';
import { Clock } from 'lucide-react';

interface ETADisplayProps {
  minutes: number;
  progress: number;
}

export const ETADisplay: React.FC<ETADisplayProps> = ({ minutes, progress }) => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400">Trip Progress</span>
        <div className="flex items-center gap-2 text-cyan-500">
          <Clock size={16} />
          <span>{minutes} mins remaining</span>
        </div>
      </div>
      
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};