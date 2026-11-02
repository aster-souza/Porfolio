import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { X, CheckCircle2, Layers, Sparkles, ExternalLink, ShieldCheck, Mail, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: (subject?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [faceScanned, setFaceScanned] = useState(false);
  const [paperSearch, setPaperSearch] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('450');
  const [expenseCategory, setExpenseCategory] = useState('Food & Dining');

  if (!project) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF65', '#FFFFFF', '#F3DE9C', '#38BDF8'],
    });
  };

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true);
    triggerConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#07111F] border border-[#D4AF65]/30 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#05080F]/80">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-[#D4AF65]/15 text-[#D4AF65] border border-[#D4AF65]/30 font-semibold">
              PROJECT {project.number}
            </span>
            <span className="text-xs text-[#A7B0BE] uppercase tracking-wider hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-[#A7B0BE] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content area */}
        <div className="p-6 md:p-8 max-h-[78vh] overflow-y-auto space-y-6">
          {/* Title and Tagline */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-[#D4AF65] mt-1 italic font-serif">
              "{project.tagline}"
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex border-b border-white/10 space-x-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 text-sm font-semibold transition-colors relative ${
                activeTab === 'overview'
                  ? 'text-[#D4AF65] border-b-2 border-[#D4AF65]'
                  : 'text-[#A7B0BE] hover:text-white'
              }`}
            >
              Overview &amp; Features
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`pb-2.5 text-sm font-semibold transition-colors flex items-center space-x-1.5 ${
                activeTab === 'interactive'
                  ? 'text-[#D4AF65] border-b-2 border-[#D4AF65]'
                  : 'text-[#A7B0BE] hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#D4AF65]" />
              <span>Interactive Simulator</span>
            </button>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* Visual preview hero */}
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-white/10">
                {project.id === 'paper-wault' && <ArtworkVisual type="paper-wault" />}
                {project.id === 'expense-tracker' && <ArtworkVisual type="expense-tracker" />}
                {project.id === 'faceframe-ai' && <ArtworkVisual type="faceframe-ai" />}
                {project.id === 'file-sharing-utility' && <ArtworkVisual type="file-sharing" />}
                {project.id === 'wedding-invitation-website' && <ArtworkVisual type="wedding-gold" />}
                {project.id === 'digital-posters-graphic-design' && <ArtworkVisual type="college-annual-day" />}
                {project.id === 'ast-edts-creation' && <ArtworkVisual type="ast-edts-brand" />}
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-sm uppercase tracking-wider text-[#A7B0BE] font-semibold flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-[#D4AF65]" />
                  <span>Architecture &amp; Vision</span>
                </h4>
                <p className="text-sm md:text-base text-[#D4AF65]/90 leading-relaxed bg-[#05080F]/50 p-4 rounded-xl border border-white/5">
                  {project.fullDescription}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#A7B0BE] font-semibold mb-3 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Key Features &amp; Modules</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 p-3 rounded-lg bg-[#0B172B]/60 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF65] shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#A7B0BE] font-semibold mb-2">
                  Technologies Explored &amp; Implemented
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-[#D4AF65]/10 text-[#F3DE9C] border border-[#D4AF65]/20 font-mono-tech"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Simulator Tab */
            <div className="p-6 bg-[#05080F] rounded-xl border border-[#D4AF65]/25 space-y-6">
              <div className="text-center max-w-lg mx-auto">
                <span className="text-xs uppercase font-mono-tech text-[#D4AF65] tracking-widest">
                  Live Interactive Concept Simulator
                </span>
                <h4 className="text-xl font-display font-bold text-white mt-1">
                  Experience {project.title}
                </h4>
                <p className="text-xs text-[#A7B0BE] mt-1">
                  Interact directly with the core mechanics and interface design of this project.
                </p>
              </div>

              {/* Project-specific interactive simulators */}
              {project.id === 'wedding-invitation-website' && (
                <div className="text-center py-6 space-y-4">
                  {!envelopeOpened ? (
                    <div className="space-y-4">
                      <div
                        onClick={handleOpenEnvelope}
                        className="w-48 h-32 mx-auto bg-gradient-to-tr from-[#2b0938] to-[#16041d] border-2 border-[#D4AF65] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all shadow-xl hover:shadow-[#D4AF65]/20 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#D4AF65] text-[#07111F] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Heart className="w-6 h-6 fill-current" />
                        </div>
                        <span className="text-xs font-serif text-[#F3DE9C] mt-2 tracking-widest uppercase">
                          Click Wax Seal
                        </span>
                      </div>
                      <p className="text-xs text-[#A7B0BE] italic">
                        Tap the golden royal wax seal to unveil Jesvita &amp; Steevan’s digital invitation!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="p-6 max-w-md mx-auto bg-gradient-to-b from-[#1c0624] to-[#0d0212] border border-[#D4AF65]/50 rounded-2xl shadow-2xl space-y-3">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF65]">Save The Date</div>
                        <h4 className="text-2xl font-display font-bold gold-gradient-text">
                          Jesvita &amp; Steevan
                        </h4>
                        <p className="text-xs text-white/90 font-serif italic">
                          "Two lives, two hearts, joined together in friendship, united forever in love."
                        </p>
                        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[#D4AF65]/20">
                          <div className="p-2 bg-black/40 rounded border border-white/5">
                            <div className="text-lg font-bold text-[#D4AF65] font-mono-tech">184</div>
                            <div className="text-[9px] text-[#A7B0BE]">DAYS</div>
                          </div>
                          <div className="p-2 bg-black/40 rounded border border-white/5">
                            <div className="text-lg font-bold text-[#D4AF65] font-mono-tech">14</div>
                            <div className="text-[9px] text-[#A7B0BE]">HOURS</div>
                          </div>
                          <div className="p-2 bg-black/40 rounded border border-white/5">
                            <div className="text-lg font-bold text-[#D4AF65] font-mono-tech">32</div>
                            <div className="text-[9px] text-[#A7B0BE]">MINS</div>
                          </div>
                          <div className="p-2 bg-black/40 rounded border border-white/5">
                            <div className="text-lg font-bold text-[#D4AF65] font-mono-tech">58</div>
                            <div className="text-[9px] text-[#A7B0BE]">SECS</div>
                          </div>
                        </div>
                        <button
                          onClick={() => setEnvelopeOpened(false)}
                          className="mt-2 text-xs text-[#A7B0BE] hover:text-[#D4AF65] underline"
                        >
                          Fold back into envelope
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.id === 'paper-wault' && (
                <div className="space-y-4 max-w-lg mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search question papers (e.g. Data Structures, 2024, Python)..."
                      value={paperSearch}
                      onChange={(e) => setPaperSearch(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0B172B] border border-white/10 text-white placeholder-gray-500 text-xs focus:border-[#D4AF65] outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    {[
                      { code: 'CS301', name: 'Data Structures & Algorithms', year: 'Dec 2024', branch: 'CSE' },
                      { code: 'CS302', name: 'Database Management Systems', year: 'June 2025', branch: 'CSE' },
                      { code: 'EC204', name: 'Digital Electronics & Logic Design', year: 'Dec 2024', branch: 'ECE' },
                    ]
                      .filter((p) => p.name.toLowerCase().includes(paperSearch.toLowerCase()) || p.branch.toLowerCase().includes(paperSearch.toLowerCase()))
                      .map((p, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-[#0B172B] border border-white/5">
                          <div>
                            <div className="text-xs font-semibold text-white">{p.name}</div>
                            <div className="text-[10px] text-[#A7B0BE]">{p.code} • {p.branch} • {p.year}</div>
                          </div>
                          <button
                            onClick={triggerConfetti}
                            className="text-xs px-2.5 py-1 bg-[#38BDF8]/20 text-[#38BDF8] hover:bg-[#38BDF8]/30 rounded transition-colors"
                          >
                            Download Paper
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {project.id === 'expense-tracker' && (
                <div className="max-w-md mx-auto space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase text-[#A7B0BE] font-semibold">Amount (₹)</label>
                      <input
                        type="number"
                        value={expenseAmount}
                        onChange={(e) => setExpenseAmount(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded bg-[#0B172B] border border-white/10 text-white text-xs outline-none focus:border-[#10B981]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-[#A7B0BE] font-semibold">Category</label>
                      <select
                        value={expenseCategory}
                        onChange={(e) => setExpenseCategory(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded bg-[#0B172B] border border-white/10 text-white text-xs outline-none focus:border-[#10B981]"
                      >
                        <option>Food &amp; Dining</option>
                        <option>Transit &amp; Travel</option>
                        <option>Stationery &amp; Tech</option>
                        <option>Leisure &amp; Outings</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-3 bg-[#0B172B] rounded-lg border border-[#10B981]/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#A7B0BE]">Live Category Analysis</span>
                      <div className="text-xs text-white font-medium">Logged: ₹{expenseAmount} under {expenseCategory}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 bg-[#10B981]/20 text-[#10B981] rounded">
                      Essential
                    </span>
                  </div>
                </div>
              )}

              {project.id === 'faceframe-ai' && (
                <div className="text-center py-4 space-y-4">
                  <button
                    onClick={() => {
                      setFaceScanned(true);
                      triggerConfetti();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white text-xs font-semibold hover:opacity-90 shadow-lg"
                  >
                    {faceScanned ? '✓ Match Verified (3 Photos Found)' : 'Simulate Selfie Upload & Match'}
                  </button>
                  {faceScanned && (
                    <div className="text-xs text-[#10B981] font-mono-tech">
                      AI Vision match confidence: 99.4% • Instant gallery filter active!
                    </div>
                  )}
                </div>
              )}

              {(project.id === 'file-sharing-utility' ||
                project.id === 'digital-posters-graphic-design' ||
                project.id === 'ast-edts-creation') && (
                <div className="text-center py-4 space-y-3">
                  <p className="text-xs text-[#A7B0BE]">
                    This module showcases real-world design specifications, vector assets, and system mockups crafted under Reevan Souza's branding standards.
                  </p>
                  <button
                    onClick={() => onOpenContact(`Inquiry regarding ${project.title}`)}
                    className="px-5 py-2 rounded-lg bg-[#D4AF65] text-[#07111F] text-xs font-bold hover:bg-[#F3DE9C] transition-colors"
                  >
                    Discuss This Project Concept
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Footer CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onOpenContact(`Project Collaboration: ${project.title}`)}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#D4AF65] text-[#07111F] text-xs font-bold hover:bg-[#F3DE9C] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Collaborate On Similar Project</span>
              </button>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 text-white text-xs hover:bg-white/15 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
