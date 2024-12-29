// import React from 'react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator = ({ password }: PasswordStrengthIndicatorProps) => {
  const getStrength = (password: string): { strength: number; label: string } => {
    if (!password) return { strength: 0, label: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const labels = ['Weak', 'Moderate', 'Strong'];
    const label = labels[Math.min(Math.floor(strength / 2), 2)];
    
    return { strength, label };
  };

  const { strength, label } = getStrength(password);
  if (!password) return null;

  return (
    <div className="space-y-1">
      <div className="flex gap-1 h-1">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className={`
              flex-1 rounded-full transition-all duration-300
              ${index <= strength / 2 ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gray-700'}
            `}
          />
        ))}
      </div>
      <p className="text-sm text-gray-400">
        Password strength: <span className="font-medium">{label}</span>
      </p>
    </div>
  );
};