import React from 'react';
import { TravelStep } from '../types';

interface StepHeaderProps {
  currentStep: TravelStep;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ currentStep }) => {
  const getTitle = () => {
    switch (currentStep) {
      case 'form':
        return 'Plan Your Interstate Journey';
      case 'preferences':
        return 'Travel Preferences';
      case 'rides':
        return 'Available Rides';
      default:
        return '';
    }
  };

  return (
    <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
      {getTitle()}
    </h1>
  );
};