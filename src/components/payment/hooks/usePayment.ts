import { useState } from 'react';

interface PaymentState {
  isProcessing: boolean;
  error: string | null;
  selectedMethod: string;
}

export const usePayment = () => {
  const [state, setState] = useState<PaymentState>({
    isProcessing: false,
    error: null,
    selectedMethod: ''
  });

  const processPayment = async (method: string, amount: number) => {
    setState(prev => ({ ...prev, isProcessing: true, error: null }));
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (method === 'wallet') {
        // Check wallet balance logic would go here
        const walletBalance = 25000; // Mock balance
        if (amount > walletBalance) {
          throw new Error('Insufficient wallet balance');
        }
      }
      
      return true;
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'Payment failed'
      }));
      return false;
    } finally {
      setState(prev => ({ ...prev, isProcessing: false }));
    }
  };

  return {
    ...state,
    processPayment,
    setPaymentMethod: (method: string) => 
      setState(prev => ({ ...prev, selectedMethod: method }))
  };
};