import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {useRouter} from 'next/navigation';

export type PaymentMethod = 'wallet' | 'card' | 'cash';

interface PaymentState {
  method: PaymentMethod | null;
  isProcessing: boolean;
  error: string | null;
}

export const usePaymentFlow = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  const [state, setState] = useState<PaymentState>({
    method: null,
    isProcessing: false,
    error: null
  });

  const selectPaymentMethod = (method: PaymentMethod) => {
    setState(prev => ({ ...prev, method, error: null }));
  };

  const processPayment = async () => {
    if (!state.method) return;

    setState(prev => ({ ...prev, isProcessing: true, error: null }));

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store payment info in session
      sessionStorage.setItem('paymentMethod', state.method);
      
      // Navigate to next step
      router.push('/booking-notification');
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Payment processing failed. Please try again.'
      }));
    } finally {
      setState(prev => ({ ...prev, isProcessing: false }));
    }
  };

  return {
    ...state,
    selectPaymentMethod,
    processPayment
  };
};