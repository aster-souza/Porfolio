import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Sparkles, Workflow } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-[#07111F] border border-[#D4AF65]/35 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#05080F]/80 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono-tech px-2.5 py-0.5 rounded bg-[#D4AF65]/15 text-[#D4AF65] border border-[#D4AF65]/30 font-semibold">
              SERVICE {service.number}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close service modal"
            className="p-1.5 rounded-lg text-[#A7B0BE] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-white tracking-wide">
              {service.title}
            </h3>
            <p className="text-sm text-[#D4AF65] mt-1 font-serif">
              {service.shortDesc}
            </p>
          </div>

          <p className="text-sm text-[#A7B0BE] leading-relaxed bg-[#05080F]/40 p-4 rounded-xl border border-white/5">
            {service.fullDesc}
          </p>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#D4AF65] font-semibold flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF65]" />
              <span>Included Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 p-2.5 rounded-lg bg-[#0B172B]/70 border border-white/5">
                  <span className="text-[#D4AF65] font-bold text-xs mt-0.5">•</span>
                  <span className="text-xs text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Workflow */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#D4AF65] font-semibold flex items-center space-x-1.5">
              <Workflow className="w-4 h-4 text-[#38BDF8]" />
              <span>Development &amp; Creative Process</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="p-3 bg-[#05080F] rounded-lg border border-white/5 text-center">
                  <div className="text-[10px] text-[#D4AF65] font-mono-tech font-bold">STEP 0{idx + 1}</div>
                  <div className="text-xs text-white font-medium mt-1">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-[#05080F]/80 rounded-xl border border-white/5 flex items-center justify-between text-xs">
            <span className="text-[#A7B0BE]">Best Suited For:</span>
            <span className="text-[#D4AF65] font-semibold text-right">{service.recommendedFor}</span>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => onInquire(service.title)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#D4AF65] text-[#07111F] text-xs font-bold hover:bg-[#F3DE9C] transition-colors"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
