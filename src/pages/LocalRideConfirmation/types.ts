export interface DriverInfo {
  name: string;
  photo: string;
  vehicle: {
    model: string;
    color: string;
    plateNumber: string;
  };
  rating: number;
}

export interface RideInfo {
  pickup: string;
  dropoff: string;
  duration: string;
  eta: string;
}

export interface FareInfo {
  baseFare: number;
  serviceCharge: number;
}

export interface LocalRideDetails {
  driver: DriverInfo;
  ride: RideInfo;
  fare: FareInfo;
}