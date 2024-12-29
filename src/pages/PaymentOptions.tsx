// import { Wallet, CreditCard, Banknote } from 'lucide-react';
// import { AuthButton } from '../components/buttons/AuthButton';
// import { BackButton } from '../components/navigation/BackButton';
// import { PaymentMethod } from '../components/payment/PaymentMethod';
// import { usePaymentFlow } from '../hooks/usePaymentFlow';
// import { formatCurrency } from '../utils/formatters';

// const PAYMENT_METHODS = [
//   {
//     id: 'wallet',
//     icon: Wallet,
//     title: 'Pay with Wallet',
//     description: 'Instant payment from your wallet balance'
//   },
//   {
//     id: 'card',
//     icon: CreditCard,
//     title: 'Card Payment',
//     description: 'Pay with your debit/credit card'
//   },
//   {
//     id: 'cash',
//     icon: Banknote,
//     title: 'Cash Payment',
//     description: 'Pay with cash after the ride'
//   }
// ] as const;

// export const PaymentOptionsPage = () => {
//   const { method, isProcessing, error, selectPaymentMethod, processPayment } = usePaymentFlow();
//   const bookingData = JSON.parse(sessionStorage.getItem('selectedRide') || '{}');
//   const totalAmount = bookingData.fare?.total || 0;

//   return (
//     <div className="min-h-screen bg-gray-900 p-6">
//       <div className="max-w-2xl mx-auto">
//         <BackButton />

//         <h1 className="text-3xl font-bold text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
//           Choose Payment Method
//         </h1>

//         <div className="space-y-6">
//           <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
//             <p className="text-gray-400">Total Amount</p>
//             <p className="text-2xl font-bold text-white">
//               {formatCurrency(totalAmount)}
//             </p>
//           </div>

//           <div className="space-y-4">
//             {PAYMENT_METHODS.map(({ id, ...method }) => (
//               <PaymentMethod
//                 key={id}
//                 {...method}
//                 selected={id === method}
//                 onClick={() => selectPaymentMethod(id as any)}
//               />
//             ))}
//           </div>

//           {error && (
//             <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
//               {error}
//             </div>
//           )}

//           <AuthButton
//             variant="primary"
//             onClick={processPayment}
//             disabled={!method || isProcessing}
//             className="w-full"
//             type="button"
//           >
//             {isProcessing ? 'Processing...' : 'Confirm Payment'}
//           </AuthButton>
//         </div>
//       </div>
//     </div>
//   );
// };