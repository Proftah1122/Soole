import React from 'react';
import { BackButton } from '../../components/navigation/BackButton';
import { TravelProvider } from '../../components/travel/TravelTypeContext';
import { InterStateForm } from '../../components/travel/interstate/InterStateForm';
import { InterStateRidesList } from '../../components/travel/interstate/InterStateRidesList';
import { useStepNavigation } from './hooks/useStepNavigation';
import { StepHeader } from './components/StepHeader';

export const InterStateTravelPage = () => {
  const { currentStep, handleNext, handleBack } = useStepNavigation();

  return (
    <TravelProvider type="interstate">
      <div className="min-h-screen bg-gray-900 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <BackButton />
          </div>

          <StepHeader currentStep={currentStep} />
          
          {currentStep === 'form' ? (
            <InterStateForm onSubmit={handleNext} />
          ) : (
            <InterStateRidesList />
          )}
        </div>
      </div>
    </TravelProvider>
  );
};