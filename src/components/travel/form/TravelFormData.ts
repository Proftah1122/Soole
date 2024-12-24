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

export const validateTravelForm = (data: TravelFormData): TravelFormErrors => {
  return {
    pickupLocations: data.pickupLocations.map((loc, index) => 
      !loc.address && !loc.isOptional ? `Please enter pickup location ${index + 1}` : ''),
    dropoffLocations: data.dropoffLocations.map((loc, index) => 
      !loc.address && !loc.isOptional ? `Please enter drop-off location ${index + 1}` : ''),
    scheduledTime: data.timingOption !== 'now' && !data.scheduledTime ? 
      'Please select travel time' : ''
  };
};