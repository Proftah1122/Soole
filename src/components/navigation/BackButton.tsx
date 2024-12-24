import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
};