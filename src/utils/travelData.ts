interface RideOption {
  id: string;
  driverName: string;
  vehicleInfo: string;
  rating: number;
  baseFare: number;
  estimatedTime: string;
}

export const getMockRides = (type: 'intrastate' | 'interstate'): RideOption[] => {
  if (type === 'intrastate') {
    return [
      {
        id: 'intra-1',
        driverName: 'Oluwaseun Afolabi',
        vehicleInfo: 'Honda Civic • LND 123 XY',
        rating: 4.8,
        baseFare: 5000,
        estimatedTime: '25 mins'
      },
      {
        id: 'intra-2',
        driverName: 'Chidinma Okafor',
        vehicleInfo: 'Toyota Corolla • LND 456 AB',
        rating: 4.9,
        baseFare: 5500,
        estimatedTime: '20 mins'
      }
    ];
  }

  return [
    {
      id: 'inter-1',
      driverName: 'Adebayo Ogunlesi',
      vehicleInfo: 'Toyota Camry • ABC 123 XY',
      rating: 4.8,
      baseFare: 15000,
      estimatedTime: '45 mins'
    },
    {
      id: 'inter-2',
      driverName: 'Olayinka Adeleke',
      vehicleInfo: 'Honda Accord • XYZ 789 AB',
      rating: 4.9,
      baseFare: 17500,
      estimatedTime: '40 mins'
    }
  ];
};