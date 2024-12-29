import { useRouter } from 'next/router';
import { MapPin, Navigation } from 'lucide-react';

export const TravelSelectionPage = () => {
  const router = useRouter();
  const buttonBaseStyles = `
    group 
    relative 
    bg-gray-800 
    p-6 
    rounded-xl 
    border 
    border-gray-700 
    transition-all 
    duration-300 
    hover:border-purple-500 
    hover:scale-105 
    active:scale-95 
    hover:shadow-xl 
    hover:shadow-purple-500/25
    focus:outline-none 
    focus:ring-2 
    focus:ring-purple-500 
    focus:ring-offset-2 
    focus:ring-offset-gray-900
  `;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
          Where Would You Like to Travel?
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => router.push('/local')}
            className={buttonBaseStyles}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all">
                <MapPin className="w-8 h-8 text-cyan-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                Local Travel
              </h2>
              <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">
                Travel within your current state. Perfect for local trips and daily commutes.
              </p>
            </div>
          </button>

          <button
            onClick={() => router.push('/interstate')}
            className={buttonBaseStyles}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all">
                <Navigation className="w-8 h-8 text-purple-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                Interstate Travel
              </h2>
              <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors">
                Travel between states for long-distance trips and adventures.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};