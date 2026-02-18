import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  TrendingUp,
} from 'lucide-react';

interface NavbarProps {
  onEnrollClick?: () => void;
}

export default function Navbar({ onEnrollClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20 py-3'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/evergreenn.png" 
              alt="Evergreen Profit Academy Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight leading-none text-white">
                  Evergreen Profit
                </span>
                
              </div>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-forest-400/80">
                Stock Market Academy
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onEnrollClick}
              className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-forest-500 to-forest-600 text-white hover:from-forest-400 hover:to-forest-500 transition-all duration-300 shadow-lg shadow-forest-500/25 hover:shadow-forest-500/40 cursor-pointer border-0"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onEnrollClick?.();
                setIsOpen(false);
              }}
              className="block mx-4 mt-3 px-5 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-forest-500 to-forest-600 text-white text-center w-full border-0 cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
