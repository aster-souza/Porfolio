import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { filterProjects } from '../utils/portfolioLogic';
import { ProjectItem } from '../types';
import { ArtworkVisual } from '../components/ArtworkVisual';
import {
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (projectId: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'finance', label: 'Finance' },
    { id: 'ai-saas', label: 'AI & SaaS' },
    { id: 'utility', label: 'Utilities' },
    { id: 'creative-web', label: 'Creative Web' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'branding', label: 'Digital Branding' },
  ];

  const filteredProjects = filterProjects(projectsData, selectedCategory, searchQuery);

  return (
    <div className="relative pt-28 md:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF65]/10 border border-[#D4AF65]/30 text-[#D4AF65] text-xs font-mono-tech uppercase tracking-widest font-semibold">
          <span>Selected Portfolio Works</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Featured <span className="gold-gradient-text">Projects &amp; Concepts</span>
        </h1>
        <p className="text-sm md:text-base text-[#A7B0BE] max-w-2xl mx-auto leading-relaxed">
          Explore web applications, AI platforms, utility tools, and graphic design portfolios crafted with creativity and functional engineering.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 p-1 bg-[#07111F] rounded-2xl border border-white/10 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF65] text-[#07111F] font-bold shadow-md shadow-[#D4AF65]/20'
                    : 'text-[#A7B0BE] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#A7B0BE] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by keyword, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-gray-500 text-xs focus:border-[#D4AF65] outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section>
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#07111F] rounded-2xl border border-white/10 space-y-3">
            <p className="text-white font-medium">No projects matched your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-[#D4AF65] hover:underline"
            >
              Reset filters &amp; search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="group relative rounded-2xl bg-[#07111F] border border-white/10 hover:border-[#D4AF65]/50 transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#D4AF65]/15 cursor-pointer overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Large Image / Visual Preview */}
                  <div className="w-full h-52 rounded-xl overflow-hidden border border-white/10 relative group-hover:scale-[1.02] transition-transform duration-300 shadow-md">
                    {project.id === 'paper-wault' && <ArtworkVisual type="paper-wault" />}
                    {project.id === 'expense-tracker' && <ArtworkVisual type="expense-tracker" />}
                    {project.id === 'faceframe-ai' && <ArtworkVisual type="faceframe-ai" />}
                    {project.id === 'file-sharing-utility' && <ArtworkVisual type="file-sharing" />}
                    {project.id === 'wedding-invitation-website' && <ArtworkVisual type="wedding-gold" />}
                    {project.id === 'digital-posters-graphic-design' && <ArtworkVisual type="college-annual-day" />}
                    {project.id === 'ast-edts-creation' && <ArtworkVisual type="ast-edts-brand" />}

                    {/* Overlay badge on top right */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-white font-semibold">
                      PROJECT {project.number}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#D4AF65] font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#D4AF65] transition-colors mt-0.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#A7B0BE] mt-2 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#A7B0BE] border border-white/5 font-mono-tech"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#A7B0BE] font-mono-tech">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#D4AF65] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1.5">
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <span className="text-[10px] text-[#A7B0BE] font-mono-tech px-2 py-0.5 rounded bg-[#D4AF65]/10 text-[#F3DE9C]">
                    Interactive
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
