import { useState } from 'react';

interface TravelFormData {
  pickupLocations: Array<{ address: string; isOptional: boolean }>;
  dropoffLocations: Array<{ address: string; isOptional: boolean }>;
  timingOption: 'now' | 'later-today' | 'schedule-ahead';
  scheduledTime: Date | null;
  isFlexible: boolean;
}

interface TravelFormErrors {
  pickupLocations: string[];
  dropoffLocations: string[];
  scheduledTime: string;
}

export const useTravelForm = (onSubmit: () => void) => {
  const [formData, setFormData] = useState<TravelFormData>({
    pickupLocations: [{ address: '', isOptional: false }],
    dropoffLocations: [{ address: '', isOptional: false }],
    timingOption: 'now',
    scheduledTime: null,
    isFlexible: false
  });

  const [errors, setErrors] = useState<TravelFormErrors>({
    pickupLocations: [''],
    dropoffLocations: [''],
    scheduledTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      pickupLocations: [!formData.pickupLocations[0].address ? 'Pickup location is required' : ''],
      dropoffLocations: [!formData.dropoffLocations[0].address ? 'Drop-off location is required' : ''],
      scheduledTime: formData.timingOption !== 'now' && !formData.scheduledTime ? 'Please select a time' : ''
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).flat().some(error => error)) {
      sessionStorage.setItem('travelFormData', JSON.stringify(formData));
      onSubmit();
    }
  };

  return {
    formData,
    errors,
    setFormData,
    handleSubmit
  };
};