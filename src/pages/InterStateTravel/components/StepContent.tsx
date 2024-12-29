import React from 'react';
import { TravelForm } from '../../../components/travel/TravelForm';
import { TravelPreferencesForm } from '../../../components/travel/preferences/TravelPreferencesForm';
import { InterStateRidesList } from '../../../components/travel/interstate/InterStateRidesList';
import { TravelStep, StepProps } from '../types';

interface StepContentProps extends StepProps {
  currentStep: TravelStep;
}

export const StepContent: React.FC<StepContentProps> = ({
  currentStep,
  onNext = () => {},
  onBack = () => {},
}) => {
  switch (currentStep) {
    case 'form':
      return <TravelForm onSubmit={onNext} />;
    case 'preferences':
      return <TravelPreferencesForm onSubmit={onNext} onBack={onBack} />;
    case 'rides':
      return <InterStateRidesList />;
    default:
      return null;
  }
};
