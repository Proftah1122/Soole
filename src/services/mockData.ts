export interface Driver {
  id: string;
  name: string;
  photo: string;
  vehicle: {
    model: string;
    color: string;
    plateNumber: string;
  };
  rating: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface Trip {
  id: string;
  pickup: {
    address: string;
    location: { latitude: number; longitude: number; }
  };
  dropoff: {
    address: string;
    location: { latitude: number; longitude: number; }
  };
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  fare: {
    base: number;
    service: number;
    total: number;
  };
  eta: string;
  duration: string;
}

export const mockTrip: Trip = {
  id: 'trip-123',
  pickup: {
    address: '123 Main St, Lagos',
    location: { latitude: 6.5244, longitude: 3.3792 }
  },
  dropoff: {
    address: '456 Market St, Lagos',
    location: { latitude: 6.5355, longitude: 3.3451 }
  },
  status: 'active',
  fare: {
    base: 15000,
    service: 1500,
    total: 16500
  },
  eta: '15 mins',
  duration: '45 mins'
};

export const mockDriver: Driver = {
  id: 'driver-123',
  name: 'Adebayo Ogunlesi',
  photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80',
  vehicle: {
    model: 'Toyota Camry',
    color: 'Silver',
    plateNumber: 'ABC 123 XY'
  },
  rating: 4.8,
  location: {
    latitude: 6.5244,
    longitude: 3.3792
  }
};