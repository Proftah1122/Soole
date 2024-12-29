import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest('.mobile-nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="md:hidden mobile-nav">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="p-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`
        fixed inset-x-0 top-16 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
          <a 
            href="#how-it-works" 
            className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            How it Works
          </a>
          <a 
            href="#safety" 
            className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Safety
          </a>
          <a 
            href="#about" 
            className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </nav>
      </div>
    </div>
  );
};