import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, CreditCard, Banknote } from 'lucide-react';
import { PaymentMethod } from '../../components/payment/PaymentMethod';
import { AuthButton } from '../../components/buttons/AuthButton';
import { BackButton } from '../../components/navigation/BackButton';
import { formatCurrency } from '../../utils/formatters';

const PAYMENT_METHODS = [
  {
    id: 'wallet',
    icon: Wallet,
    title: 'Pay with Wallet',
    description: 'Instant payment from your wallet balance'
  },
  {
    id: 'card',
    icon: CreditCard,
    title: 'Card Payment',
    description: 'Pay with your debit/credit card'
  },
  {
    id: 'cash',
    icon: Banknote,
    title: 'Cash Payment',
    description: 'Pay with cash after the ride'
  }
] as const;

export const PaymentConfirmationPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const bookingData = JSON.parse(sessionStorage.getItem('selectedRide') || '{}');
  const totalAmount = bookingData.fare?.total || 0;

  const handlePayment = async () => {
    if (!selectedMethod) return;

    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      sessionStorage.setItem('paymentMethod', selectedMethod);
      navigate('/booking-notification');
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        <BackButton />

        <h1 className="text-3xl font-bold text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
          Choose Payment Method
        </h1>

        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="text-gray-400">Total Amount</p>
            <p className="text-2xl font-bold text-white">
              {formatCurrency(totalAmount)}
            </p>
          </div>

          <div className="space-y-4">
            {PAYMENT_METHODS.map(({ id, ...method }) => (
              <PaymentMethod
                key={id}
                {...method}
                selected={id === selectedMethod}
                onClick={() => setSelectedMethod(id)}
              />
            ))}
          </div>

          <AuthButton
            variant="primary"
            onClick={handlePayment}
            disabled={!selectedMethod || isProcessing}
            className="w-full"
            type="button"
          >
            {isProcessing ? 'Processing...' : 'Confirm Payment'}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};