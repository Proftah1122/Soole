export type TimingOption = 'now' | 'later-today' | 'schedule-ahead';

export interface Location {
  address: string;
  isOptional?: boolean;
}

export interface TravelFormData {
  pickupLocations: Location[];
  dropoffLocations: Location[];
  timingOption: TimingOption;
  scheduledTime: Date | null;
  isFlexible: boolean;
}

export interface TravelFormErrors {
  pickupLocations: string[];
  dropoffLocations: string[];
  scheduledTime: string;
}