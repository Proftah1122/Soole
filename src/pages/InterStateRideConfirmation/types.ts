export interface DriverInfo {
  name: string;
  photo: string;
  vehicle: {
    model: string;
    color: string;
    plateNumber: string;
  };
  rating: number;
  totalTrips: number;
}

export interface RideInfo {
  pickup: string;
  dropoff: string;
  duration: string;
  eta: string;
  distance: string;
  stops: string[];
}

export interface FareInfo {
  baseFare: number;
  serviceCharge: number;
  longDistanceFee: number;
}

export interface TravelPreferencesInfo {
  luggageSize: string;
  petFriendly: boolean;
  nonSmoking: boolean;
  musicPreference: string;
}

export interface InterStateRideDetails {
  driver: DriverInfo;
  ride: RideInfo;
  fare: FareInfo;
  preferences: TravelPreferencesInfo;
}