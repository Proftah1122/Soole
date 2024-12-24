import { useState } from 'react';

interface TravelLocations {
  pickup1: string;
  pickup2: string;
  dropoff1: string;
  dropoff2: string;
}

export const useTravelForm = (onSubmit: () => void) => {
  const [locations, setLocations] = useState<TravelLocations>({
    pickup1: '',
    pickup2: '',
    dropoff1: '',
    dropoff2: ''
  });

  const handleLocationChange = (field: keyof TravelLocations, value: string) => {
    setLocations(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form validation and API integration
    console.log('Form submitted:', locations);
    onSubmit();
  };

  const isValid = locations.pickup1.length > 0 && locations.dropoff1.length > 0;

  return {
    locations,
    handleLocationChange,
    handleSubmit,
    isValid
  };
};