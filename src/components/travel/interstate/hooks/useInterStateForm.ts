import { useState } from 'react';

interface InterStateLocation {
  state: string;
  lga: string;
  address: string;
}

interface InterStateFormData {
  pickup: InterStateLocation;
  dropoff: InterStateLocation;
  timingOption: 'now' | 'later-today' | 'schedule-ahead';
  scheduledTime: Date | null;
  isFlexible: boolean;
}

interface InterStateFormErrors {
  pickup?: {
    state?: string;
    lga?: string;
    address?: string;
  };
  dropoff?: {
    state?: string;
    lga?: string;
    address?: string;
  };
  scheduledTime?: string;
}

export const useInterStateForm = (onSubmit: () => void) => {
  const [formData, setFormData] = useState<InterStateFormData>({
    pickup: { state: '', lga: '', address: '' },
    dropoff: { state: '', lga: '', address: '' },
    timingOption: 'now',
    scheduledTime: null,
    isFlexible: false
  });

  const [errors, setErrors] = useState<InterStateFormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: InterStateFormErrors = {};

    // Validate pickup
    if (!formData.pickup.state) {
      newErrors.pickup = { ...newErrors.pickup, state: 'Please select pickup state' };
    }
    if (formData.pickup.state && !formData.pickup.lga) {
      newErrors.pickup = { ...newErrors.pickup, lga: 'Please select pickup LGA' };
    }
    if (!formData.pickup.address) {
      newErrors.pickup = { ...newErrors.pickup, address: 'Please enter pickup address' };
    }

    // Validate dropoff
    if (!formData.dropoff.state) {
      newErrors.dropoff = { ...newErrors.dropoff, state: 'Please select dropoff state' };
    }
    if (formData.dropoff.state && !formData.dropoff.lga) {
      newErrors.dropoff = { ...newErrors.dropoff, lga: 'Please select dropoff LGA' };
    }
    if (!formData.dropoff.address) {
      newErrors.dropoff = { ...newErrors.dropoff, address: 'Please enter dropoff address' };
    }

    // Validate timing
    if (formData.timingOption !== 'now' && !formData.scheduledTime) {
      newErrors.scheduledTime = 'Please select travel time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sessionStorage.setItem('interStateFormData', JSON.stringify(formData));
      onSubmit();
    }
  };

  return {
    formData,
    setFormData,
    errors,
    handleSubmit
  };
};