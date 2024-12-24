export type TravelStep = 'form' | 'preferences' | 'rides';

export interface StepProps {
  onNext: () => void;
  onBack?: () => void;
}