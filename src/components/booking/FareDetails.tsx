import React from 'react';
import { formatCurrency } from '../../utils/formatters';

interface FareDetailsProps {
  baseFare: number;
  serviceCharge: number;
}

export const FareDetails: React.FC<FareDetailsProps> = ({ baseFare, serviceCharge }) => {
  const total = baseFare + serviceCharge;

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">Fare Breakdown</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-400">Base Fare</span>
          <span className="text-white">{formatCurrency(baseFare)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Service Charge (10%)</span>
          <span className="text-white">{formatCurrency(serviceCharge)}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-gray-700">
          <span className="font-semibold text-white">Total</span>
          <span className="font-semibold text-white">{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
};