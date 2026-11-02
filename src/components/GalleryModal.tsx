import React from 'react';
import { GalleryItem } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { X, Tag, Maximize2, Share2, Sparkles, Mail } from 'lucide-react';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenContact: (subject?: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose, onOpenContact }) => {
  if (!item) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `Check out "${item.title}" by Reevan Souza`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Portfolio link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#07111F] border border-[#D4AF65]/40 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#05080F]/80">
          <div className="flex items-center space-x-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4AF65]/15 text-[#D4AF65] border border-[#D4AF65]/30 font-semibold">
              {item.category}
            </span>
            <span className="text-xs text-[#A7B0BE]">• {item.dimensions}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              aria-label="Share artwork"
              className="p-1.5 rounded-lg text-[#A7B0BE] hover:text-[#D4AF65] hover:bg-white/10 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-[#A7B0BE] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Main Visual Display */}
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
            <ArtworkVisual type={item.svgVisualType} className="w-full h-full" />
          </div>

          {/* Details */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white tracking-wide">
              {item.title}
            </h3>
            <p className="text-sm text-[#A7B0BE] mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center space-x-1 px-3 py-1 text-xs rounded-full bg-white/5 text-[#A7B0BE] border border-white/10"
              >
                <Tag className="w-3 h-3 text-[#D4AF65]" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => onOpenContact(`Inquiry: Custom Design similar to "${item.title}"`)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#D4AF65] text-[#07111F] text-xs font-bold hover:bg-[#F3DE9C] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Commission Similar Artwork</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
