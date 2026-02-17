'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import WaitlistModal from './WaitlistModal'; // 1. Import the modal component

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false); // 2. Manage modal state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* STANDALONE SVG LOGO & NAME */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <svg 
                viewBox="0 0 24 24" 
                className="w-10 h-10 md:w-11 md:h-11" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path 
                  d="M4.5 7c1.5-1.5 3-2 4.5-2s3 1.5 4.5 3 3 2 4.5 2 3-.5 4.5-2" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M4.5 17c1.5 1.5 3 2 4.5 2s3-1.5 4.5-3 3-2 4.5-2 3 .5 4.5 2" 
                  stroke="#f97316" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                <line x1="8" y1="5" x2="8" y2="19" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                <line x1="16" y1="5" x2="16" y2="19" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
              </svg>
            </div>
            <span className={`font-black text-xl md:text-2xl tracking-tighter transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Tele<span className="text-orange-500">Helix</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-8 font-bold text-[11px] tracking-widest transition-colors ${
            isScrolled ? 'text-slate-600' : 'text-white/90'
          }`}>
            {['HOME', 'ABOUT', 'SERVICES', 'COMPANY', 'CONTACT'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-orange-500 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsWaitlistOpen(true)} // 3. Open on click
              className="px-6 py-2.5 bg-orange-500 text-white rounded-xl font-bold text-xs shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all active:scale-95"
            >
              JOIN WAITLIST
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col space-y-4">
              {['HOME', 'ABOUT', 'SERVICES', 'COMPANY', 'CONTACT'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-900 font-bold text-sm tracking-widest py-2 border-b border-slate-50 hover:text-orange-500"
                >
                  {item}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsWaitlistOpen(true); // 4. Open from mobile menu
                }}
                className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl mt-4"
              >
                JOIN WAITLIST
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 5. Render the modal at the root of the navbar */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
}