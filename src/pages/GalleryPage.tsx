import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { filterGallery } from '../utils/portfolioLogic';
import { GalleryItem } from '../types';
import { ArtworkVisual } from '../components/ArtworkVisual';
import { Search, Tag, Maximize2, Sparkles, Instagram, Plus } from 'lucide-react';

interface GalleryPageProps {
  onSelectItem: (item: GalleryItem) => void;
  onOpenContact: (subject?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onSelectItem, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'posters', label: 'Posters' },
    { id: 'invitations', label: 'Invitations' },
    { id: 'logos', label: 'Logos' },
    { id: 'business cards', label: 'Business Cards' },
    { id: 'social media designs', label: 'Social Media' },
    { id: 'college event designs', label: 'College Events' },
    { id: 'digital branding', label: 'Digital Branding' },
  ];

  const filteredItems = filterGallery(galleryData, selectedCategory, searchQuery);

  return (
    <div className="relative pt-28 md:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF65]/10 border border-[#D4AF65]/30 text-[#D4AF65] text-xs font-mono-tech uppercase tracking-widest font-semibold">
          <span>Creative Design Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Visual <span className="gold-gradient-text">Design Gallery</span>
        </h1>
        <p className="text-sm md:text-base text-[#A7B0BE] max-w-2xl mx-auto leading-relaxed">
          A curated exhibition of graphic design works, institutional invitations, commemorative posters, digital branding assets, and creative experiments.
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
              placeholder="Search posters, logos, cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-gray-500 text-xs focus:border-[#D4AF65] outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Masonry-Style Gallery Grid */}
      <section>
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#07111F] rounded-2xl border border-white/10 space-y-3">
            <p className="text-white font-medium">No artwork found for this selection.</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group relative rounded-2xl bg-[#07111F] border border-white/10 hover:border-[#D4AF65]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4AF65]/15 cursor-pointer"
              >
                {/* Artwork Canvas / Visual */}
                <div className="relative w-full h-64 overflow-hidden border-b border-white/5 bg-black/40">
                  <ArtworkVisual type={item.svgVisualType} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />

                  {/* Hover Overlay with expand icon */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <span className="p-2.5 rounded-full bg-[#D4AF65] text-[#07111F] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Preview Full Artwork
                    </span>
                  </div>

                  {/* Category Pill on top left */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#05080F]/80 backdrop-blur-md border border-white/10 text-[10px] text-[#D4AF65] font-semibold">
                    {item.badge}
                  </div>
                </div>

                {/* Info info */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#A7B0BE]">
                    <span>{item.category}</span>
                    <span className="font-mono-tech text-[10px]">{item.dimensions}</span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-[#D4AF65] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A7B0BE] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#A7B0BE] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Social / Custom Commission Banner */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#07111F] via-[#0E203C] to-[#07111F] border border-[#D4AF65]/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-xs text-[#D4AF65] font-mono-tech">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF65]" />
            <span>Curated by ast_edts</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            Need a Bespoke Poster, Logo, or Digital Invitation?
          </h3>
          <p className="text-xs sm:text-sm text-[#A7B0BE] max-w-xl">
            Let's create custom graphics, event invitations, and promotional collateral tailored for your milestone or campaign.
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <a
            href="https://www.instagram.com/ast_souz_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:border-[#D4AF65] hover:text-[#D4AF65] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#D4AF65]" />
            <span>@ast_souz_</span>
          </a>
          <button
            onClick={() => onOpenContact('Commission Design Work')}
            className="px-5 py-2.5 rounded-xl bg-[#D4AF65] text-[#07111F] text-xs font-bold hover:bg-[#F3DE9C] transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};
