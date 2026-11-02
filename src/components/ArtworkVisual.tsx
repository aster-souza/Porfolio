import React from 'react';

interface ArtworkVisualProps {
  type:
    | 'college-annual-day'
    | 'wedding-gold'
    | 'ast-edts-brand'
    | 'tech-fest'
    | 'student-council'
    | 'visiting-card'
    | 'teachers-day'
    | 'social-flyer'
    | 'paper-wault'
    | 'expense-tracker'
    | 'faceframe-ai'
    | 'file-sharing';
  className?: string;
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'college-annual-day':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#060D1A] via-[#0E1C38] to-[#040812] flex flex-col items-center justify-between p-6 text-center overflow-hidden border border-[#D4AF65]/30 rounded-xl select-none ${className}`}>
          {/* Subtle gold ornamentation */}
          <div className="absolute top-2 left-2 text-[#D4AF65]/40 text-xs font-serif tracking-widest">✦ ✦ ✦</div>
          <div className="absolute top-2 right-2 text-[#D4AF65]/40 text-xs font-serif tracking-widest">✦ ✦ ✦</div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,101,0.12)_0%,transparent_70%)] pointer-events-none" />

          <div className="w-full flex items-center justify-center space-x-2 pt-2">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF65]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF65] font-semibold">Institutional Celebration</span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF65]" />
          </div>

          <div className="my-auto py-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#A7B0BE] mb-1">Cordially Invites You To</div>
            <h4 className="text-xl md:text-2xl font-display font-bold text-white tracking-wide">
              ANNUAL DAY
            </h4>
            <div className="text-2xl md:text-3xl font-display font-extrabold gold-gradient-text tracking-wider mt-1">
              CELEBRATION 2026
            </div>
            <div className="mt-2 text-xs text-[#D4AF65]/90 font-mono-tech tracking-widest">
              A Symphony of Talents & Academic Excellence
            </div>
          </div>

          <div className="w-full border-t border-[#D4AF65]/20 pt-3 flex items-center justify-between text-[10px] text-[#A7B0BE]">
            <span>Auditorium Hall</span>
            <span className="text-[#D4AF65] font-semibold">Special Edition Invitation</span>
            <span>Grand Gala Event</span>
          </div>
        </div>
      );

    case 'wedding-gold':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#1C0524] via-[#2A0835] to-[#0A020F] flex flex-col items-center justify-center p-6 text-center overflow-hidden border border-[#D4AF65]/40 rounded-xl select-none ${className}`}>
          {/* Ornate corner borders */}
          <div className="absolute inset-3 border border-[#D4AF65]/25 rounded-lg pointer-events-none" />
          <div className="absolute top-4 left-4 text-[#D4AF65]/70 text-xs">❦</div>
          <div className="absolute top-4 right-4 text-[#D4AF65]/70 text-xs">❦</div>
          <div className="absolute bottom-4 left-4 text-[#D4AF65]/70 text-xs">❦</div>
          <div className="absolute bottom-4 right-4 text-[#D4AF65]/70 text-xs">❦</div>

          <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF65]/90 mb-2">Together with their Families</div>
          <h4 className="text-2xl md:text-3xl font-display font-bold gold-gradient-text">
            Jesvita &amp; Steevan
          </h4>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#D4AF65] to-transparent my-2" />
          <p className="text-xs text-white/90 italic max-w-xs font-serif">
            Request the honour of your gracious presence to celebrate their wedding union
          </p>
          <div className="mt-3 px-3 py-1 bg-[#D4AF65]/15 border border-[#D4AF65]/30 rounded-full text-[11px] text-[#F3DE9C] font-mono-tech tracking-wider">
            Holy Matrimony &amp; Grand Reception
          </div>
        </div>
      );

    case 'ast-edts-brand':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#07111F] via-[#0E203B] to-[#040810] flex flex-col items-center justify-center p-6 text-center overflow-hidden border border-[#38BDF8]/30 rounded-xl select-none ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1)_0%,transparent_75%)] pointer-events-none" />

          {/* Monogram emblem */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0F223D] to-[#1C3A66] border border-[#38BDF8]/40 flex items-center justify-center shadow-lg shadow-[#38BDF8]/10 mb-3 group-hover:scale-105 transition-transform">
            <span className="font-display text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#D4AF65]">
              ae
            </span>
          </div>

          <h4 className="text-xl font-display font-bold text-white tracking-wider">
            ast_edts
          </h4>
          <p className="text-xs text-[#38BDF8] tracking-[0.25em] uppercase font-semibold mt-0.5">
            Creative Branding Studio
          </p>
          <div className="text-[11px] text-[#A7B0BE] mt-2 max-w-xs">
            Visual Storytelling • Promotional Posters • QR Collateral
          </div>
          <div className="mt-3 text-[10px] text-[#D4AF65] font-mono-tech tracking-widest bg-[#D4AF65]/10 px-2.5 py-0.5 rounded border border-[#D4AF65]/20">
            @ast_souz_
          </div>
        </div>
      );

    case 'tech-fest':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#04131D] via-[#08263A] to-[#02090F] flex flex-col items-center justify-between p-6 text-center overflow-hidden border border-[#06B6D4]/30 rounded-xl select-none ${className}`}>
          <div className="w-full flex items-center justify-between text-[10px] text-[#06B6D4] font-mono-tech">
            <span>TECH.2026</span>
            <span className="px-2 py-0.5 bg-[#06B6D4]/10 rounded border border-[#06B6D4]/20">NATIONAL SYMPOSIUM</span>
          </div>

          <div className="my-auto py-3">
            <div className="text-[10px] uppercase tracking-widest text-[#A7B0BE] mb-1">Presents</div>
            <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white font-mono-tech">
              TECH <span className="text-[#06B6D4]">HORIZON</span>
            </h4>
            <div className="text-xs text-[#38BDF8] tracking-widest uppercase mt-1">
              Innovate • Code • Transcend
            </div>
            <div className="flex items-center justify-center space-x-2 mt-3 text-[10px] text-[#A7B0BE]">
              <span className="px-2 py-0.5 bg-black/40 rounded border border-white/10">Hackathon</span>
              <span className="px-2 py-0.5 bg-black/40 rounded border border-white/10">Paper Presentation</span>
              <span className="px-2 py-0.5 bg-black/40 rounded border border-white/10">Robotics</span>
            </div>
          </div>

          <div className="w-full text-center text-[10px] text-[#06B6D4] border-t border-[#06B6D4]/20 pt-2 font-mono-tech">
            Registration &amp; Event Guidelines
          </div>
        </div>
      );

    case 'student-council':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#210904] via-[#381508] to-[#0D0401] flex flex-col items-center justify-between p-6 text-center overflow-hidden border border-[#FB923C]/30 rounded-xl select-none ${className}`}>
          <div className="w-full flex items-center justify-between text-[10px] text-[#FB923C] font-semibold tracking-wider uppercase">
            <span>Student Council</span>
            <span>Campus Leadership</span>
          </div>

          <div className="my-auto py-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FB923C] bg-[#FB923C]/10 px-2 py-0.5 rounded border border-[#FB923C]/20">
              Vote For Vision &amp; Progress
            </span>
            <h4 className="text-xl md:text-2xl font-display font-extrabold text-white mt-2">
              EMPOWER THE FUTURE
            </h4>
            <p className="text-xs text-[#A7B0BE] mt-1 italic">
              "Your Voice. Your Representation. Your Campus."
            </p>
          </div>

          <div className="w-full text-center text-[10px] text-[#FB923C] border-t border-[#FB923C]/20 pt-2 font-mono-tech">
            Leadership Campaign • Official Poster
          </div>
        </div>
      );

    case 'visiting-card':
      return (
        <div className={`relative w-full h-full min-h-[200px] bg-gradient-to-br from-[#060C18] via-[#0C172C] to-[#040810] p-5 flex flex-col justify-between border border-[#D4AF65]/40 rounded-xl shadow-xl select-none ${className}`}>
          <div className="flex items-start justify-between">
            <div>
              <h5 className="font-display font-bold text-base md:text-lg text-white tracking-wider">
                REEVAN SOUZA
              </h5>
              <div className="text-[10px] text-[#D4AF65] tracking-widest uppercase font-semibold">
                Web Developer &amp; UI/UX Designer
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#D4AF65]/15 border border-[#D4AF65]/40 flex items-center justify-center text-[#D4AF65] font-display font-bold text-xs">
              RS
            </div>
          </div>

          <div className="my-auto py-1">
            <div className="text-[11px] text-[#A7B0BE] italic">
              "Small Steps Build Big Dreams."
            </div>
          </div>

          <div className="border-t border-[#D4AF65]/20 pt-2 flex items-center justify-between text-[9px] text-[#A7B0BE] font-mono-tech">
            <span>Portfolio &amp; Digital Works</span>
            <span className="text-[#D4AF65]">@ast_souz_</span>
          </div>
        </div>
      );

    case 'teachers-day':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#1C1202] via-[#2F1E05] to-[#0A0701] flex flex-col items-center justify-between p-6 text-center overflow-hidden border border-[#F59E0B]/30 rounded-xl select-none ${className}`}>
          <div className="text-[10px] uppercase tracking-widest text-[#F59E0B]">
            ✦ Commemorative Tribute ✦
          </div>

          <div className="my-auto py-3">
            <h4 className="text-xl md:text-2xl font-display font-bold text-white">
              HAPPY TEACHERS' DAY
            </h4>
            <div className="h-[1px] w-16 bg-[#F59E0B] mx-auto my-2" />
            <p className="text-xs text-[#FDE68A] italic font-serif max-w-xs">
              "To the mentors who ignite curiosity, kindle hope, and inspire lifelong learning."
            </p>
          </div>

          <div className="text-[10px] text-[#A7B0BE]">
            With Deep Gratitude &amp; Respect
          </div>
        </div>
      );

    case 'social-flyer':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#1A0B2E] via-[#2A1248] to-[#0A0414] flex flex-col items-center justify-between p-6 text-center overflow-hidden border border-[#A855F7]/30 rounded-xl select-none ${className}`}>
          <div className="w-full flex items-center justify-between text-[10px] text-[#C084FC]">
            <span>@ast_souz_</span>
            <span className="px-2 py-0.5 bg-[#A855F7]/15 rounded border border-[#A855F7]/30">PROMO</span>
          </div>

          <div className="my-auto py-2">
            <h4 className="text-lg md:text-xl font-display font-bold text-white">
              SMART PROMO FLYER
            </h4>
            <div className="text-xs text-[#C084FC] mt-0.5">
              Scan • Explore • Connect
            </div>
            <div className="mt-2 w-14 h-14 mx-auto rounded-lg bg-white/10 border border-[#A855F7]/40 p-1 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-0.5 w-full h-full p-1 bg-white rounded">
                <div className="bg-[#1A0B2E]" />
                <div className="bg-[#1A0B2E]" />
                <div className="bg-transparent" />
                <div className="bg-[#1A0B2E]" />
                <div className="bg-[#A855F7]" />
                <div className="bg-[#1A0B2E]" />
                <div className="bg-transparent" />
                <div className="bg-[#1A0B2E]" />
                <div className="bg-[#1A0B2E]" />
              </div>
            </div>
          </div>

          <div className="text-[10px] text-[#A7B0BE] font-mono-tech">
            QR Code Integrated Design
          </div>
        </div>
      );

    case 'paper-wault':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#0A1628] via-[#102444] to-[#050D1A] flex flex-col justify-between p-5 border border-[#38BDF8]/30 rounded-xl select-none ${className}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-[11px] text-[#A7B0BE] font-mono-tech ml-2">paper-wault.internal</span>
            </div>
            <span className="text-[10px] bg-[#38BDF8]/15 text-[#38BDF8] px-2 py-0.5 rounded border border-[#38BDF8]/30 font-semibold">
              Academic Portal
            </span>
          </div>

          <div className="my-3 space-y-2">
            <div className="bg-black/30 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
              <span className="text-xs text-white font-medium">Data Structures &amp; Algorithms (2024 Scheme)</span>
              <span className="text-[10px] bg-[#D4AF65]/20 text-[#D4AF65] px-2 py-0.5 rounded">PDF</span>
            </div>
            <div className="bg-black/30 p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
              <span className="text-xs text-white font-medium">Database Management Systems (Dec 2025)</span>
              <span className="text-[10px] bg-[#D4AF65]/20 text-[#D4AF65] px-2 py-0.5 rounded">PDF</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#A7B0BE] border-t border-white/10 pt-2">
            <span>Branch: Computer Science</span>
            <span className="text-[#38BDF8] font-semibold">Semester Archives</span>
          </div>
        </div>
      );

    case 'expense-tracker':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#061F15] via-[#0B3525] to-[#04120D] flex flex-col justify-between p-5 border border-[#10B981]/30 rounded-xl select-none ${className}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#10B981] uppercase tracking-wider">
              Financial Summary
            </span>
            <span className="text-[10px] bg-[#10B981]/15 text-[#10B981] px-2 py-0.5 rounded border border-[#10B981]/30">
              Active Month
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-black/30 p-2.5 rounded-lg border border-white/5">
              <div className="text-[10px] text-[#A7B0BE]">Essential Expenses</div>
              <div className="text-sm font-bold text-white mt-0.5">62% Planned</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-[#10B981] h-full w-[62%]" />
              </div>
            </div>
            <div className="bg-black/30 p-2.5 rounded-lg border border-white/5">
              <div className="text-[10px] text-[#A7B0BE]">Discretionary</div>
              <div className="text-sm font-bold text-[#F3DE9C] mt-0.5">38% Lifestyle</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-[#D4AF65] h-full w-[38%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#A7B0BE] border-t border-white/10 pt-2">
            <span>Alerts: 0 Unusual Spikes</span>
            <span className="text-[#10B981] font-medium">Smart Budget On Track</span>
          </div>
        </div>
      );

    case 'faceframe-ai':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#121035] via-[#1E1C55] to-[#09071F] flex flex-col justify-between p-5 border border-[#818CF8]/30 rounded-xl select-none ${className}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-[#818CF8] animate-ping" />
              <span className="text-xs font-semibold text-[#818CF8]">FaceFrame AI Core</span>
            </div>
            <span className="text-[10px] bg-[#818CF8]/15 text-[#818CF8] px-2 py-0.5 rounded border border-[#818CF8]/30">
              Biometric Indexing
            </span>
          </div>

          <div className="my-auto py-2 text-center">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#818CF8] mx-auto flex items-center justify-center p-1 relative">
              <div className="w-full h-full rounded-full bg-[#818CF8]/10 flex items-center justify-center text-[#818CF8] text-xs font-mono-tech">
                [ SCAN ]
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center text-[8px] text-white">
                ✓
              </div>
            </div>
            <div className="text-xs text-white font-medium mt-2">1 Match Found out of 3,450 Event Photos</div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#A7B0BE] border-t border-white/10 pt-2">
            <span>Private Client Gallery</span>
            <span className="text-[#818CF8]">Instant QR Delivery</span>
          </div>
        </div>
      );

    case 'file-sharing':
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#0B1E38] via-[#142F55] to-[#060F1E] flex flex-col justify-between p-5 border border-[#38BDF8]/30 rounded-xl select-none ${className}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider">
              P2P High-Speed Channel
            </span>
            <span className="text-[10px] bg-[#38BDF8]/15 text-[#38BDF8] px-2 py-0.5 rounded">
              Mobile ⇄ PC
            </span>
          </div>

          <div className="my-auto py-2">
            <div className="flex items-center justify-between text-xs text-white mb-1">
              <span>presentation_final.zip</span>
              <span className="text-[#38BDF8] font-mono-tech">84 MB / 84 MB</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#38BDF8] to-[#10B981] h-full w-[100%]" />
            </div>
            <div className="text-[10px] text-[#A7B0BE] mt-1.5 flex justify-between">
              <span>Speed: 38.5 MB/s</span>
              <span className="text-[#10B981]">Transfer Completed</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#A7B0BE] border-t border-white/10 pt-2">
            <span>Direct Socket Sync</span>
            <span className="text-[#38BDF8]">Zero Cloud Intermediary</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
