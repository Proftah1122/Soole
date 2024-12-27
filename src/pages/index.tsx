import React from 'react';
import { Logo } from '../components/Logo';
import { Hero } from '../components/Hero';
import { ParticleBackground } from '../components/ParticleBackground';
import { NavLinks } from '../components/navigation/NavLinks';
import { MobileNav } from '../components/navigation/MobileNav';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <nav className="relative z-10 container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>
          <MobileNav />
        </div>
      </nav>
      <Hero />
    </div>
  );
};