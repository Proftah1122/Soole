import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PaymentMethodCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  icon: Icon,
  title,
  description,
  selected,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-4 p-4 rounded-lg border transition-all
        ${selected 
          ? 'border-purple-500 bg-purple-500/10' 
          : 'border-gray-700 bg-gray-800 hover:border-gray-600'
        }
      `}
    >
      <div className={`
        p-3 rounded-full
        ${selected ? 'bg-purple-500/20' : 'bg-gray-700'}
      `}>
        <Icon className={selected ? 'text-purple-500' : 'text-gray-400'} />
      </div>
      <div className="text-left">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </button>
  );
};