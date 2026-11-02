import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { projectsData } from '../data/projectsData';
import { ArtworkVisual } from '../components/ArtworkVisual';
import {
  ArrowRight,
  Download,
  Mail,
  Instagram,
  Sparkles,
  Code2,
  Layout,
  BrainCircuit,
  Palette,
  CheckCircle,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenResume,
  onSelectProject,
}) => {
  // Dynamic typing animation titles
  const titles = [
    'Web Developer',
    'UI/UX Designer',
    'AI Enthusiast',
    'Creative Digital Designer',
    'Frontend Developer',
    'Digital Creator',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && displayText === currentFullText) {
      // Pause at full word
      typingSpeed = 2200;
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      typingSpeed = 350;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="relative space-y-24 md:space-y-32 pt-28 md:pt-36 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Ambient radial glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(212,175,101,0.12)_0%,transparent_70%)] pointer-events-none rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#07111F] border border-[#D4AF65]/35 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF65] font-mono-tech font-semibold">
                Available for Projects &amp; Collaborations
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="gold-gradient-text">Reevan Souza</span>.
              </h1>

              {/* Dynamic typing subtitle */}
              <div className="min-h-[42px] flex items-center justify-center lg:justify-start space-x-2 text-xl sm:text-2xl md:text-3xl text-white/90 font-medium">
                <span className="text-[#A7B0BE]">A Passionate</span>
                <span className="text-[#D4AF65] font-mono-tech font-bold border-r-2 border-[#D4AF65] pr-1 animate-pulse">
                  {displayText}
                </span>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-[#F3DE9C] font-serif italic pt-1">
                "Turning Creative Ideas Into Digital Experiences."
              </p>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-[#A7B0BE] max-w-2xl leading-relaxed">
              I'm passionate about technology, web development, UI/UX design, artificial intelligence, and creative digital experiences. I enjoy transforming ideas into meaningful digital products through creativity, experimentation, and continuous learning.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF65] to-[#B38E41] text-[#07111F] text-xs md:text-sm font-bold shadow-lg shadow-[#D4AF65]/20 hover:scale-[1.02] hover:shadow-[#D4AF65]/35 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-[#07111F] border border-[#D4AF65]/40 text-[#D4AF65] text-xs md:text-sm font-semibold hover:bg-[#D4AF65]/10 hover:border-[#D4AF65] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs md:text-sm font-semibold hover:bg-white/10 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#A7B0BE]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social media icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4 text-xs text-[#A7B0BE]">
              <span className="text-xs uppercase tracking-widest font-mono-tech text-[#64748B]">Connect:</span>
              <a
                href="https://www.instagram.com/ast_souz_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile @ast_souz_"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:text-[#D4AF65] hover:border-[#D4AF65]/40 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D4AF65]" />
                <span className="font-mono-tech">@ast_souz_</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:text-[#D4AF65] hover:border-[#D4AF65]/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF65]" />
                <span>Message</span>
              </button>
            </div>
          </div>

          {/* Right Column: Luxury Profile Card / Graphic Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF65] via-[#B38E41] to-[#38BDF8] rounded-3xl opacity-30 blur-lg transition duration-1000 group-hover:opacity-60" />

              <div className="relative rounded-2xl bg-gradient-to-b from-[#0B172B] to-[#05080F] border border-[#D4AF65]/40 p-6 shadow-2xl overflow-hidden">
                {/* Profile Portrait Placeholder visual */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-[#07111F] via-[#102340] to-[#040810] border border-white/10 flex flex-col items-center justify-between p-6 text-center">
                  {/* Subtle pattern background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,101,0.15)_0%,transparent_60%)] pointer-events-none" />

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 text-[10px] text-[#D4AF65] font-mono-tech">✦ RS.2026</div>
                  <div className="absolute top-3 right-3 text-[10px] text-[#D4AF65] font-mono-tech">DESIGN / CODE</div>

                  {/* Central Avatar Visual Emblem */}
                  <div className="my-auto relative flex flex-col items-center">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#D4AF65] via-[#FFFFFF] to-[#38BDF8] shadow-2xl shadow-[#D4AF65]/20 animate-float">
                      <div className="w-full h-full rounded-full bg-[#07111F] flex flex-col items-center justify-center border-2 border-[#05080F]">
                        <span className="font-display text-4xl sm:text-5xl font-extrabold gold-gradient-text tracking-wider">
                          RS
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-1">
                      <h3 className="font-display text-xl font-bold text-white tracking-wide">
                        Reevan Souza
                      </h3>
                      <p className="text-xs text-[#D4AF65] font-mono-tech">
                        Creator &amp; Frontend Architect
                      </p>
                    </div>
                  </div>

                  {/* Bottom quote tag */}
                  <div className="w-full bg-[#05080F]/80 border border-[#D4AF65]/25 rounded-lg py-2 px-3 text-center">
                    <span className="text-[11px] text-[#F3DE9C] font-serif italic">
                      "Small Steps Build Big Dreams."
                    </span>
                  </div>
                </div>

                {/* Quick stats / Highlights below portrait */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-lg font-bold text-[#D4AF65] font-mono-tech">7+</div>
                    <div className="text-[10px] text-[#A7B0BE]">Projects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-lg font-bold text-[#D4AF65] font-mono-tech">8+</div>
                    <div className="text-[10px] text-[#A7B0BE]">Services</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-lg font-bold text-[#D4AF65] font-mono-tech">100%</div>
                    <div className="text-[10px] text-[#A7B0BE]">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center justify-center text-xs text-[#A7B0BE]">
          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#D4AF65]/70 mb-2">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 text-[#D4AF65] animate-bounce" />
        </div>
      </section>

      {/* BRAND STATEMENT BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#07111F] via-[#0E203C] to-[#07111F] border-y border-[#D4AF65]/30 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF65] font-mono-tech font-semibold">
            Brand Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold gold-gradient-text tracking-wide">
            "Small Steps Build Big Dreams."
          </h2>
          <p className="text-xs sm:text-sm text-[#A7B0BE] max-w-xl mx-auto">
            Every line of code crafted, every interface rendered, and every design iterated represents consistent, deliberate progression toward impactful digital excellence.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono-tech text-[#D4AF65] uppercase tracking-widest font-semibold mb-1">
              Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
              Featured Projects
            </h2>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-[#D4AF65] hover:text-[#F3DE9C] font-semibold transition-colors group self-start md:self-auto"
          >
            <span>Explore all 7 projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group relative rounded-2xl bg-[#07111F] border border-white/10 hover:border-[#D4AF65]/50 transition-all duration-300 p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4AF65]/10 cursor-pointer"
            >
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <div className="w-full h-44 rounded-xl overflow-hidden border border-white/10">
                  {project.id === 'paper-wault' && <ArtworkVisual type="paper-wault" />}
                  {project.id === 'expense-tracker' && <ArtworkVisual type="expense-tracker" />}
                  {project.id === 'faceframe-ai' && <ArtworkVisual type="faceframe-ai" />}
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono-tech text-[#D4AF65]">0{project.number}</span>
                    <span className="text-[10px] text-[#A7B0BE] uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#D4AF65] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A7B0BE] mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#D4AF65] font-semibold flex items-center space-x-1">
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-[#A7B0BE] font-mono-tech">Interactive</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE EXPERTISE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#07111F] to-[#0B172B] border border-[#D4AF65]/25 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-mono-tech tracking-widest text-[#D4AF65] font-semibold">
                Multidisciplinary Focus
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-wide">
                Where Code Meets Creative Direction
              </h2>
              <p className="text-sm text-[#A7B0BE] leading-relaxed">
                Bridging functional software architecture with refined visual aesthetics across web applications, UI/UX interaction systems, AI technologies, and personal branding identities.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('skills')}
                  className="inline-flex items-center space-x-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-[#D4AF65] text-[#07111F] hover:bg-[#F3DE9C] transition-colors"
                >
                  <span>Explore Skills Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Code2,
                  title: 'Website Development',
                  desc: 'Crafting responsive, maintainable websites using HTML, CSS, JavaScript, PHP, and modern tools.',
                },
                {
                  icon: Layout,
                  title: 'UI/UX Design',
                  desc: 'Designing intuitive user interfaces with elegant typography, dark themes, and seamless flows.',
                },
                {
                  icon: BrainCircuit,
                  title: 'Artificial Intelligence',
                  desc: 'Exploring AI-driven concepts like face recognition galleries and intelligent utilities.',
                },
                {
                  icon: Palette,
                  title: 'Graphic & Digital Branding',
                  desc: 'Curating event posters, social visuals, QR marketing cards, and studio identities.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#05080F]/60 border border-white/5 space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF65]/15 border border-[#D4AF65]/30 flex items-center justify-center text-[#D4AF65]">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-[#A7B0BE] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
          Let's Build Something <span className="gold-gradient-text">Amazing</span> Together
        </h2>
        <p className="text-sm md:text-base text-[#A7B0BE] max-w-xl mx-auto leading-relaxed">
          Have an idea, project, or collaboration in mind? Let's connect and turn your ideas into meaningful digital experiences.
        </p>
        <div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-[#D4AF65] text-[#07111F] text-sm font-bold shadow-xl shadow-[#D4AF65]/20 hover:bg-[#F3DE9C] hover:scale-105 transition-all"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
