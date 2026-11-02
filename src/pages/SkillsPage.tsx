import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import { filterSkills } from '../utils/portfolioLogic';
import { SkillItem } from '../types';
import {
  Code2,
  Palette,
  Terminal,
  Server,
  Database,
  Smartphone,
  Cpu,
  Layers,
  Sparkles,
  FileCode,
  PlayCircle,
  Layout,
  Bot,
  BrainCircuit,
  MessageSquareCode,
  Wand2,
  Boxes,
  Compass,
  PenTool,
  Image,
  Newspaper,
  ShieldCheck,
  Gem,
  Share2,
  Search,
  Filter,
  CheckCircle2,
  Info,
} from 'lucide-react';

export const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'frontend', label: 'Frontend & UI/UX' },
    { id: 'ai-tools', label: 'AI & Development Tools' },
    { id: 'creative-design', label: 'Creative Design' },
  ];

  const filteredSkills = filterSkills(skillsData, activeCategory, searchQuery);

  // Icon mapping
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'PlayCircle': return <PlayCircle className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'MessageSquareCode': return <MessageSquareCode className="w-5 h-5" />;
      case 'Wand2': return <Wand2 className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Image': return <Image className="w-5 h-5" />;
      case 'Newspaper': return <Newspaper className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Gem': return <Gem className="w-5 h-5" />;
      case 'Share2': return <Share2 className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative pt-28 md:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF65]/10 border border-[#D4AF65]/30 text-[#D4AF65] text-xs font-mono-tech uppercase tracking-widest font-semibold">
          <span>Technology Dashboard</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Skills &amp; <span className="gold-gradient-text">Technologies</span>
        </h1>
        <p className="text-sm md:text-base text-[#A7B0BE] max-w-2xl mx-auto leading-relaxed">
          An organized overview of programming languages, frameworks, AI developer tools, and creative design suites explored and applied across various projects.
        </p>

        {/* Honest Disclosure Note as instructed */}
        <div className="inline-flex items-center space-x-2 p-3 bg-[#07111F] rounded-xl border border-[#D4AF65]/20 text-xs text-[#F3DE9C]/90 text-left">
          <Info className="w-4 h-4 text-[#D4AF65] shrink-0" />
          <span>
            These represent technologies and tools explored, practiced, and integrated into active projects and creative experiments.
          </span>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1 bg-[#07111F] rounded-2xl border border-white/10 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF65] text-[#07111F] font-bold shadow-md shadow-[#D4AF65]/20'
                    : 'text-[#A7B0BE] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A7B0BE] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-gray-500 text-xs focus:border-[#D4AF65] outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section>
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 bg-[#07111F] rounded-2xl border border-white/10 space-y-3">
            <p className="text-white font-medium">No technologies matched your query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs text-[#D4AF65] hover:underline"
            >
              Reset filters &amp; search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSkill(skill)}
                className="group relative p-5 rounded-2xl bg-[#07111F] border border-white/10 hover:border-[#D4AF65]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF65]/10 cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF65] group-hover:scale-110 group-hover:bg-[#D4AF65]/15 group-hover:border-[#D4AF65]/40 transition-all">
                      {renderIcon(skill.icon)}
                    </div>
                    <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/5 text-[#A7B0BE]">
                      {skill.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#D4AF65] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-[#A7B0BE] mt-1 leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-[#D4AF65] font-mono-tech">{skill.level}</span>
                  <span className="text-[#A7B0BE] group-hover:text-white transition-colors">Details →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Selected Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className="w-full max-w-lg bg-[#07111F] border border-[#D4AF65]/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF65]/15 border border-[#D4AF65]/40 flex items-center justify-center text-[#D4AF65]">
                  {renderIcon(selectedSkill.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {selectedSkill.name}
                  </h3>
                  <span className="text-xs text-[#D4AF65] font-mono-tech font-semibold">
                    {selectedSkill.category} • {selectedSkill.level}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="text-[#A7B0BE] hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#A7B0BE] leading-relaxed bg-[#05080F] p-4 rounded-xl border border-white/5">
              {selectedSkill.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-[#D4AF65] font-semibold">
                Explored In &amp; Use Cases:
              </h4>
              <div className="space-y-1.5">
                {selectedSkill.useCases.map((uc, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-5 py-2 rounded-xl bg-[#D4AF65] text-[#07111F] text-xs font-bold hover:bg-[#F3DE9C] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
