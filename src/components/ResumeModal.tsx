import React from 'react';
import { X, Printer, Download, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#07111F] text-[#A7B0BE] border border-[#D4AF65]/35 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#05080F] border-b border-white/10 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF65]" />
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              Reevan Souza — Professional Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF65] text-[#07111F] text-xs font-bold hover:bg-[#F3DE9C] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg text-[#A7B0BE] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable resume document */}
        <div className="p-6 md:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-[#07111F] print:bg-white print:text-black print:max-h-none print:p-0">
          {/* Header */}
          <div className="border-b border-[#D4AF65]/30 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-white tracking-wider print:text-black">
                REEVAN SOUZA
              </h1>
              <p className="text-sm text-[#D4AF65] font-semibold mt-1">
                Web Developer • UI/UX Designer • AI Enthusiast • Creative Digital Designer
              </p>
              <p className="text-xs text-[#A7B0BE] italic mt-1 font-serif">
                "Small Steps Build Big Dreams."
              </p>
            </div>

            <div className="text-xs space-y-1 text-left md:text-right">
              <div>Instagram: <a href="https://www.instagram.com/ast_souz_/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF65] hover:underline font-mono-tech">@ast_souz_</a></div>
              <div>Brand Studio: <span className="text-white font-mono-tech print:text-black">ast_edts</span></div>
              <div>Portfolio: <span className="text-[#38BDF8] font-mono-tech">Reevan Souza Portfolio</span></div>
            </div>
          </div>

          {/* Profile Overview */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-widest text-[#D4AF65] font-bold border-b border-white/10 pb-1">
              Profile Summary
            </h2>
            <p className="text-xs md:text-sm text-white/90 leading-relaxed print:text-black">
              Passionate and technology-driven web developer, UI/UX designer, and creative digital designer dedicated to turning creative concepts into impactful digital experiences. Enjoys exploring modern web technologies, experimenting with AI-powered toolchains, designing aesthetic user interfaces, and creating high-impact visual branding collateral.
            </p>
          </div>

          {/* Professional Interests */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-widest text-[#D4AF65] font-bold border-b border-white/10 pb-1">
              Core Areas of Interest
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                '1. Website Development',
                '2. UI/UX Design',
                '3. Artificial Intelligence',
                '4. Graphic Design',
                '5. Digital Branding',
                '6. Creative Problem Solving',
              ].map((interest, idx) => (
                <div key={idx} className="p-2 rounded bg-[#05080F]/60 border border-white/5 text-xs text-white print:text-black print:border-gray-200">
                  {interest}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Explored */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#D4AF65] font-bold border-b border-white/10 pb-1">
              Technologies &amp; Tools Explored
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#05080F]/50 rounded-lg border border-white/5">
                <span className="text-[#D4AF65] font-semibold">Web Development &amp; Database:</span>
                <p className="text-white/80 mt-1 print:text-black">HTML, CSS, JavaScript, PHP, MySQL, Responsive Web Design</p>
              </div>
              <div className="p-3 bg-[#05080F]/50 rounded-lg border border-white/5">
                <span className="text-[#D4AF65] font-semibold">Frontend &amp; UI/UX:</span>
                <p className="text-white/80 mt-1 print:text-black">React, Next.js, Tailwind CSS, TypeScript, Framer Motion, UI/UX Design</p>
              </div>
              <div className="p-3 bg-[#05080F]/50 rounded-lg border border-white/5">
                <span className="text-[#D4AF65] font-semibold">AI &amp; Development Tools:</span>
                <p className="text-white/80 mt-1 print:text-black">OpenAI Codex, Claude, ChatGPT, AI Website Builders, Android Studio, Replit, Emergent</p>
              </div>
              <div className="p-3 bg-[#05080F]/50 rounded-lg border border-white/5">
                <span className="text-[#D4AF65] font-semibold">Creative &amp; Visual Design:</span>
                <p className="text-white/80 mt-1 print:text-black">Canva, Graphic Design, Poster Design, Logo Design, Digital Branding, Social Media Design</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#D4AF65] font-bold border-b border-white/10 pb-1">
              Key Projects &amp; Creative Works
            </h2>
            <div className="space-y-3 text-xs">
              <div className="border-l-2 border-[#D4AF65] pl-3 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm print:text-black">Paper Wault</span>
                  <span className="text-[#D4AF65] font-mono-tech">Academic Platform</span>
                </div>
                <p className="text-[#A7B0BE] mt-0.5 print:text-gray-700">
                  Question paper-sharing platform with Student &amp; Admin authentication, branch/semester filters, and responsive document archives.
                </p>
              </div>

              <div className="border-l-2 border-[#10B981] pl-3 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm print:text-black">Expense Tracker</span>
                  <span className="text-[#10B981] font-mono-tech">Personal Finance</span>
                </div>
                <p className="text-[#A7B0BE] mt-0.5 print:text-gray-700">
                  Daily expenditure tracking with essential vs non-essential classification, weekly burn-down summaries, and unusual expense alerts.
                </p>
              </div>

              <div className="border-l-2 border-[#818CF8] pl-3 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm print:text-black">FaceFrame AI</span>
                  <span className="text-[#818CF8] font-mono-tech">AI SaaS Concept</span>
                </div>
                <p className="text-[#A7B0BE] mt-0.5 print:text-gray-700">
                  Intelligent photography gallery enabling event guests to discover photos of themselves instantly via facial recognition.
                </p>
              </div>

              <div className="border-l-2 border-[#D4AF65] pl-3 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm print:text-black">Wedding Invitation Website (Jesvita &amp; Steevan)</span>
                  <span className="text-[#D4AF65] font-mono-tech">Interactive Web</span>
                </div>
                <p className="text-[#A7B0BE] mt-0.5 print:text-gray-700">
                  Interactive digital wedding invitation with animated wax-sealed envelope opening, live countdown, GPS maps, and celebration audio.
                </p>
              </div>

              <div className="border-l-2 border-[#FB923C] pl-3 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm print:text-black">College Annual Day 2026 &amp; Institutional Posters</span>
                  <span className="text-[#FB923C] font-mono-tech">Graphic Design</span>
                </div>
                <p className="text-[#A7B0BE] mt-0.5 print:text-gray-700">
                  Official Annual Day 2026 invitation, student council campaigns, and festival greeting posters designed with bespoke typography.
                </p>
              </div>
            </div>
          </div>

          {/* Footer declaration */}
          <div className="border-t border-white/10 pt-4 flex items-center justify-between text-[11px] text-[#A7B0BE]">
            <span>Designed &amp; Developed by Reevan Souza</span>
            <span className="text-[#D4AF65]">© 2026 Reevan Souza</span>
          </div>
        </div>
      </div>
    </div>
  );
};
