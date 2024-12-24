import { useState } from 'react';
import { TravelStep } from '../types';

export const useStepNavigation = () => {
  const [currentStep, setCurrentStep] = useState<TravelStep>('form');

  const handleNext = () => {
    setCurrentStep(prev => {
      switch (prev) {
        case 'form':
          return 'preferences';
        case 'preferences':
          return 'rides';
        default:
          return prev;
      }
    });
  };

  const handleBack = () => {
    setCurrentStep(prev => {
      switch (prev) {
        case 'preferences':
          return 'form';
        case 'rides':
          return 'preferences';
        default:
          return prev;
      }
    });
  };

  return {
    currentStep,
    handleNext,
    handleBack
  };
};