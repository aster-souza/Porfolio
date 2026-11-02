import React from 'react';
import { NavigationPage } from '../types';
import { ArrowUp, Instagram, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: Array<{ id: NavigationPage; label: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#05080F] border-t border-[#D4AF65]/20 pt-16 pb-12 overflow-hidden text-sm">
      {/* Subtle top golden light line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#D4AF65]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#07111F] border border-[#D4AF65]/40 flex items-center justify-center text-[#D4AF65] font-display font-black text-sm">
                RS
              </div>
              <span className="text-xl font-display font-extrabold text-white tracking-widest">
                REEVAN SOUZA
              </span>
            </div>

            <p className="text-[#D4AF65] text-base font-serif italic max-w-md">
              "Small Steps Build Big Dreams."
            </p>

            <p className="text-xs text-[#A7B0BE] max-w-md leading-relaxed">
              Creating, designing, developing, and exploring the digital world through web development, intuitive UI/UX design, artificial intelligence concepts, and distinct creative branding.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/ast_souz_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile @ast_souz_"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A7B0BE] hover:text-[#D4AF65] hover:border-[#D4AF65]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('contact')}
                aria-label="Email Reevan Souza"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A7B0BE] hover:text-[#D4AF65] hover:border-[#D4AF65]/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono-tech">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs text-[#A7B0BE] hover:text-[#D4AF65] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Showcase & Direct Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono-tech">
              Showcase
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs text-[#A7B0BE] hover:text-[#D4AF65] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/ast_souz_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D4AF65] hover:underline flex items-center space-x-1"
                >
                  <span>@ast_souz_ on Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B0BE]">
          <div className="space-y-1 text-center sm:text-left">
            <div>© 2026 Reevan Souza. All Rights Reserved.</div>
            <div className="text-[11px] text-[#D4AF65]/90 font-medium">
              Designed &amp; Developed by Reevan Souza.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF65]/40 hover:text-[#D4AF65] text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
