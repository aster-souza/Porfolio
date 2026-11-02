import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, FileText, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenResume }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: Array<{ id: NavigationPage; label: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111F]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#D4AF65]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group text-left cursor-pointer focus:outline-none"
            aria-label="Reevan Souza Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F223D] to-[#1C3A66] border border-[#D4AF65]/50 flex items-center justify-center shadow-md group-hover:border-[#D4AF65] group-hover:shadow-[#D4AF65]/25 transition-all">
              <span className="font-display font-black text-sm tracking-widest text-[#D4AF65]">
                RS
              </span>
            </div>
            <div>
              <span className="font-display font-extrabold text-base md:text-lg tracking-wider text-white group-hover:text-[#D4AF65] transition-colors">
                REEVAN SOUZA
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-[#D4AF65]/90 font-mono-tech">
                Creative Technologist
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#05080F]/60 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-[#07111F] bg-[#D4AF65] font-bold shadow-md shadow-[#D4AF65]/25'
                      : 'text-[#A7B0BE] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Utilities (Theme toggle & Resume) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#A7B0BE] hover:text-[#D4AF65] hover:border-[#D4AF65]/40 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-[#D4AF65]/50 bg-[#D4AF65]/10 text-[#D4AF65] text-xs font-semibold hover:bg-[#D4AF65] hover:text-[#07111F] transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile hamburger & theme toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#A7B0BE] hover:text-[#D4AF65]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#D4AF65] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#07111F]/98 backdrop-blur-xl border-b border-[#D4AF65]/25 shadow-2xl px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#D4AF65] text-[#07111F] font-bold'
                      : 'text-[#A7B0BE] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#07111F]" />}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 rounded-xl bg-[#D4AF65]/15 border border-[#D4AF65]/40 text-[#D4AF65] text-xs font-bold flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>View &amp; Download Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
