import { useState } from 'react';
import { TravelFormData, TravelFormErrors, validateTravelForm, TimingOption } from './TravelFormData';

export const useTravelForm = (onSubmit: () => void) => {
  const [formData, setFormData] = useState<TravelFormData>({
    pickupLocations: [{ address: '', isOptional: false }],
    dropoffLocations: [{ address: '', isOptional: false }],
    timingOption: 'now',
    scheduledTime: null,
    isFlexible: false
  });

  const [errors, setErrors] = useState<TravelFormErrors>({
    pickupLocations: [],
    dropoffLocations: [],
    scheduledTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateTravelForm(formData);
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => 
      Array.isArray(error) ? error.some(e => e) : error
    );

    if (!hasErrors) {
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