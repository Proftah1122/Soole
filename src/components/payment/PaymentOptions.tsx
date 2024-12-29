import { CreditCard, Wallet, Clock } from 'lucide-react';
import { AuthButton } from '../buttons/AuthButton';

interface PaymentOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PaymentOptionsProps {
  amount: number;
  onSelect: (option: string) => void;
}

export const PaymentOptions = ({ amount, onSelect }: PaymentOptionsProps) => {
  const options: PaymentOption[] = [
    {
      id: 'pre',
      title: 'Pay Now',
      description: 'Pay before the ride starts',
      icon: <CreditCard className="text-green-500" />
    },
    {
      id: 'cash',
      title: 'Cash Payment',
      description: 'Pay with cash after the ride',
      icon: <Wallet className="text-yellow-500" />
    },
    {
      id: 'post',
      title: 'Pay Later',
      description: 'Pay after completing the ride',
      icon: <Clock className="text-purple-500" />
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Choose Payment Option</h3>
      <div className="grid gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-all text-left"
          >
            <div className="p-3 rounded-full bg-gray-700">
              {option.icon}
            </div>
            <div>
              <h4 className="font-medium text-white">{option.title}</h4>
              <p className="text-sm text-gray-400">{option.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};