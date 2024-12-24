import React from 'react';

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const AuthButton = ({ 
  variant, 
  children, 
  className = '',
  disabled,
  ...props 
}: AuthButtonProps) => {
  const baseStyles = `
    px-6 py-2 
    rounded-lg 
    font-semibold 
    transition-all 
    duration-300 
    transform
    hover:scale-105 
    active:scale-95
    disabled:opacity-50 
    disabled:cursor-not-allowed 
    disabled:hover:scale-100 
    disabled:active:scale-100
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-offset-gray-900
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-purple-500 
      hover:from-cyan-600 hover:to-purple-600 
      active:from-cyan-700 active:to-purple-700 
      text-white 
      shadow-lg 
      hover:shadow-xl
      hover:shadow-cyan-500/25
      focus:ring-purple-500
    `,
    secondary: `
      border-2 
      border-purple-500 
      text-purple-500 
      hover:bg-purple-500/10 
      hover:shadow-lg 
      hover:shadow-purple-500/25 
      active:bg-purple-500/20
      focus:ring-purple-500
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};