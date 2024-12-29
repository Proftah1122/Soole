import { PartyPopper } from 'lucide-react';

export const RideCompletionHeader = () => {
  return (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto animate-bounce">
        <PartyPopper className="text-purple-500" size={32} />
      </div>
      
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        Thank You for Riding with Sọ́ọ̀lẹ̀
      </h1>
      
      <p className="text-gray-400">
        We hope you enjoyed your ride!
      </p>
    </div>
  );
};