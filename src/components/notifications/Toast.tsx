import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
  type?: 'success' | 'error';
}

export const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  duration = 3000,
  type = 'success'
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 shadow-lg">
        <CheckCircle 
          className={type === 'success' ? 'text-green-500' : 'text-red-500'} 
          size={20} 
        />
        <span className="text-white">{message}</span>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};