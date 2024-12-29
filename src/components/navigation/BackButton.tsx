// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
};
