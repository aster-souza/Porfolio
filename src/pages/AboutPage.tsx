import React from 'react';
import { NavigationPage } from '../types';
import {
  Compass,
  Target,
  Sparkles,
  Heart,
  Milestone,
  CheckCircle2,
  Code2,
  Layout,
  BrainCircuit,
  Palette,
  Layers,
  Lightbulb,
  ArrowRight,
  Instagram,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const professionalInterests = [
    {
      num: '01',
      title: 'Website Development',
      desc: 'Building responsive, performant, and scalable web solutions using modern semantic standards and architectures.',
      icon: Code2,
    },
    {
      num: '02',
      title: 'UI/UX Design',
      desc: 'Crafting user-centered interfaces, intuitive navigational flows, and cohesive luxury visual design tokens.',
      icon: Layout,
    },
    {
      num: '03',
      title: 'Artificial Intelligence',
      desc: 'Experimenting with AI vision models, intelligent chatbots, and next-generation automated developer tooling.',
      icon: BrainCircuit,
    },
    {
      num: '04',
      title: 'Graphic Design',
      desc: 'Designing high-impact event posters, ceremonial invitations, typography compositions, and commemorative artwork.',
      icon: Palette,
    },
    {
      num: '05',
      title: 'Digital Branding',
      desc: 'Establishing unified brand aesthetics, monograms, visiting cards, and promotional social collateral through ast_edts.',
      icon: Layers,
    },
    {
      num: '06',
      title: 'Creative Problem Solving',
      desc: 'Translating everyday real-world inefficiencies into clean, functional, and purposeful software solutions.',
      icon: Lightbulb,
    },
  ];

  const journeyMilestones = [
    {
      step: '01',
      title: 'Curiosity & Code Exploration',
      desc: 'Began exploring the foundations of the web with HTML, CSS, and JavaScript, driven by an appetite to understand how interactive digital worlds function.',
    },
    {
      step: '02',
      title: 'Graphic Design & Visual Language',
      desc: 'Ventured into digital art, institutional posters, and celebratory invitations, discovering the power of visual hierarchy, contrast, and typography.',
    },
    {
      step: '03',
      title: 'Building Practical Web Solutions',
      desc: 'Engineered Paper Wault to simplify academic question paper sharing, and Expense Tracker to promote financial mindfulness and habit awareness.',
    },
    {
      step: '04',
      title: 'AI Exploration & Modern Toolchains',
      desc: 'Began exploring AI-powered tools (OpenAI Codex, Claude, ChatGPT, modern AI builders) and conceptualized FaceFrame AI for smart photography delivery.',
    },
    {
      step: '05',
      title: 'Digital Branding via ast_edts',
      desc: 'Formed ast_edts as a creative identity to curate promotional graphics, QR marketing cards, and social media designs on Instagram (@ast_souz_).',
    },
  ];

  return (
    <div className="relative pt-28 md:pt-36 pb-20 space-y-20 md:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF65]/10 border border-[#D4AF65]/30 text-[#D4AF65] text-xs font-mono-tech uppercase tracking-widest font-semibold">
          <span>About Reevan Souza</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Turning Creative Ideas Into <span className="gold-gradient-text">Digital Reality</span>
        </h1>
        <p className="text-base text-[#D4AF65] italic font-serif">
          "Small Steps Build Big Dreams."
        </p>
      </section>

      {/* WHO AM I? SECTION */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#07111F] via-[#0E203C] to-[#05080F] border border-[#D4AF65]/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(212,175,101,0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF65] font-mono-tech font-bold">
            <Sparkles className="w-4 h-4 text-[#D4AF65]" />
            <span>Who Am I?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-wide leading-tight">
            Creative Mind. Technology Enthusiast. Digital Creator.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#A7B0BE] leading-relaxed">
            <p>
              I'm <strong className="text-white font-semibold">Reevan Souza</strong>, a creative and technology-driven individual interested in web development, artificial intelligence, digital design, and innovative software solutions.
            </p>
            <p>
              I enjoy exploring new technologies, experimenting with AI-powered tools, designing modern interfaces, and building digital experiences that solve real-world problems.
            </p>
            <p>
              My goal is to continuously improve my skills and transform creative ideas into useful digital products.
            </p>
          </div>

          <div className="pt-2 flex items-center space-x-4 text-xs font-mono-tech text-[#D4AF65]">
            <a
              href="https://www.instagram.com/ast_souz_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:underline"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @ast_souz_ on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* VISION & MISSION DUAL CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="p-8 rounded-2xl bg-[#07111F] border border-[#D4AF65]/25 shadow-xl space-y-4 hover:border-[#D4AF65]/50 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#D4AF65]/15 border border-[#D4AF65]/35 flex items-center justify-center text-[#D4AF65]">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white tracking-wide">
            My Vision
          </h3>
          <p className="text-sm text-[#A7B0BE] leading-relaxed">
            To evolve into a versatile technologist and creative director capable of designing and architecting high-impact digital products, seamlessly bridging the gap between cutting-edge engineering and thoughtful artistic presentation.
          </p>
          <div className="text-xs text-[#F3DE9C] font-mono-tech pt-2">
            ✦ Purposeful Innovation • Aesthetic Precision
          </div>
        </div>

        {/* Mission */}
        <div className="p-8 rounded-2xl bg-[#07111F] border border-[#D4AF65]/25 shadow-xl space-y-4 hover:border-[#D4AF65]/50 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/35 flex items-center justify-center text-[#38BDF8]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white tracking-wide">
            My Mission
          </h3>
          <p className="text-sm text-[#A7B0BE] leading-relaxed">
            To relentlessly sharpen my technical, design, and problem-solving abilities by building real applications, experimenting with emerging AI technologies, and maintaining rigorous design standards across all digital creations.
          </p>
          <div className="text-xs text-[#38BDF8] font-mono-tech pt-2">
            ✦ Continuous Learning • Relentless Iteration
          </div>
        </div>
      </section>

      {/* PROFESSIONAL INTERESTS (1 to 6) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-mono-tech text-[#D4AF65] tracking-widest font-semibold">
            Core Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
            Professional Interests
          </h2>
          <p className="text-xs sm:text-sm text-[#A7B0BE]">
            The key creative and engineering pillars that define my exploration and projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalInterests.map((interest) => (
            <div
              key={interest.num}
              className="p-6 rounded-2xl bg-[#07111F] border border-white/10 hover:border-[#D4AF65]/40 transition-all hover:-translate-y-1 hover:shadow-xl space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF65]">
                  <interest.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono-tech text-[#D4AF65] font-bold">
                  {interest.num}
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                {interest.title}
              </h3>
              <p className="text-xs text-[#A7B0BE] leading-relaxed">
                {interest.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I LOVE DOING */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05080F] border border-white/10 space-y-8">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono-tech text-[#D4AF65] tracking-widest font-semibold">
            Passion in Practice
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            What I Love Doing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Designing Aesthetic User Interfaces',
              desc: 'Crafting dark-mode interfaces, choosing refined serif and sans-serif pairings, and building micro-interactions.',
            },
            {
              title: 'Exploring AI-Powered Toolchains',
              desc: 'Testing generative tools, prompt-based code acceleration, and vision models to build smart concepts.',
            },
            {
              title: 'Architecting Web Utilities',
              desc: 'Building purposeful software like Paper Wault and Expense Tracker that remove friction from everyday tasks.',
            },
            {
              title: 'Creating Commemorative Posters',
              desc: 'Designing institutional invitations and celebrations like the College Annual Day 2026 poster with regal balance.',
            },
            {
              title: 'Curating Creative Brands',
              desc: 'Growing ast_edts through visual storytelling, promotional cards, and social media media on @ast_souz_.',
            },
            {
              title: 'Continuous Technical Learning',
              desc: 'Reading engineering documentation, testing emergent technologies, and refactoring code for modularity.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-[#07111F]/80 border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF65] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-[#A7B0BE] mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MY CREATIVE JOURNEY TIMELINE */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-mono-tech text-[#D4AF65] tracking-widest font-semibold">
            Progress &amp; Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
            My Creative Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#A7B0BE]">
            A chronicle of exploration, design experiments, and continuous growth.
          </p>
        </div>

        <div className="relative border-l-2 border-[#D4AF65]/30 ml-4 md:ml-32 space-y-8 pl-6 md:pl-8">
          {journeyMilestones.map((milestone) => (
            <div key={milestone.step} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#07111F] border-2 border-[#D4AF65] flex items-center justify-center text-[10px] text-[#D4AF65] font-mono-tech font-bold group-hover:scale-125 group-hover:bg-[#D4AF65] group-hover:text-[#07111F] transition-all">
                {milestone.step}
              </div>

              <div className="p-5 rounded-2xl bg-[#07111F] border border-white/10 group-hover:border-[#D4AF65]/40 transition-all space-y-1.5">
                <h3 className="text-base sm:text-lg font-display font-bold text-white">
                  {milestone.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7B0BE] leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center pt-8">
        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-[#D4AF65] text-[#07111F] text-xs sm:text-sm font-bold hover:bg-[#F3DE9C] transition-colors"
        >
          <span>See Projects Built Along This Journey</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
