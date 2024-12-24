import React from 'react';
import * as LucideIcons from 'lucide-react';

// Define available icons with proper types
type IconName = keyof typeof LucideIcons;

// Create a type-safe icon mapping
const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  // Core icons we know exist
  Music: LucideIcons.Music,
  Volume2: LucideIcons.Volume2,
  PawPrint: LucideIcons.PawPrint,
  Luggage: LucideIcons.Briefcase, // Using Briefcase as fallback for Luggage
  MapPin: LucideIcons.MapPin,
  Car: LucideIcons.Car,
  Clock: LucideIcons.Clock,
  Star: LucideIcons.Star,
  
  // Custom fallbacks for missing icons
  Smoking: LucideIcons.Ban, // Using Ban as fallback for Smoking
  Wheelchair: LucideIcons.Accessibility // Using Accessibility as fallback for Wheelchair
};

export const Icon: React.FC<{
  name: string;
  size?: number;
  className?: string;
}> = ({ name, size = 24, className = '' }) => {
  const IconComponent = iconMap[name] || LucideIcons.HelpCircle;
  return <IconComponent size={size} className={className} />;
};

export const iconNames = Object.keys(iconMap);