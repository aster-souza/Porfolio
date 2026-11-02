import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import {
  Globe,
  Smartphone,
  Layout,
  Briefcase,
  Palette,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Mail,
} from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onInquire }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative pt-28 md:pt-36 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF65]/10 border border-[#D4AF65]/30 text-[#D4AF65] text-xs font-mono-tech uppercase tracking-widest font-semibold">
          <span>Creative &amp; Technical Offerings</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Services &amp; <span className="gold-gradient-text">Capabilities</span>
        </h1>
        <p className="text-sm md:text-base text-[#A7B0BE] max-w-2xl mx-auto leading-relaxed">
          Crafting bespoke websites, engaging user interfaces, commemorative graphic posters, and digital identity concepts with meticulous care and dedication.
        </p>
      </section>

      {/* Services Grid (All 8 services) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group relative rounded-2xl bg-[#07111F] border border-white/10 hover:border-[#D4AF65]/50 transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#D4AF65]/15"
          >
            <div className="space-y-4">
              {/* Header icon and number */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#0B172B] border border-[#D4AF65]/35 flex items-center justify-center text-[#D4AF65] group-hover:scale-110 group-hover:bg-[#D4AF65]/15 transition-all">
                  {renderIcon(service.iconName)}
                </div>
                <span className="font-mono-tech text-xs text-[#D4AF65] font-bold">
                  {service.number}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-[#D4AF65] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#A7B0BE] mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Sample Deliverables list */}
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                {service.deliverables.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-[11px] text-white/80">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981] shrink-0" />
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between gap-2">
              <button
                onClick={() => onSelectService(service)}
                className="text-xs text-[#D4AF65] font-semibold hover:underline inline-flex items-center space-x-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <button
                onClick={() => onInquire(service.title)}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF65]/40 hover:bg-[#D4AF65]/10 text-white hover:text-[#D4AF65] text-xs font-medium transition-colors"
              >
                Inquire
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* How I Work section */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#07111F] to-[#05080F] border border-white/10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-mono-tech text-[#D4AF65] tracking-widest font-semibold">
            Methodology
          </span>
          <h2 className="text-3xl font-display font-bold text-white">
            Workflow &amp; Collaboration Process
          </h2>
          <p className="text-xs sm:text-sm text-[#A7B0BE]">
            A structured approach ensuring every project delivers on aesthetics, function, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: 'Discovery & Vision',
              desc: 'Understanding the project essence, intended audience, key goals, and visual aesthetic tone.',
            },
            {
              num: '02',
              title: 'Wireframing & Layout',
              desc: 'Mapping ergonomic component flows, responsive breakpoints, and typographic hierarchies.',
            },
            {
              num: '03',
              title: 'Craft & Development',
              desc: 'Writing clean semantic code, implementing micro-interactions, and refining graphic assets.',
            },
            {
              num: '04',
              title: 'Validation & Polish',
              desc: 'Rigorous cross-device testing, performance audits, and smooth deployment delivery.',
            },
          ].map((step, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#0B172B]/60 border border-white/5 space-y-2 relative">
              <span className="text-2xl font-mono-tech font-extrabold text-[#D4AF65]/30">
                {step.num}
              </span>
              <h4 className="text-base font-bold text-white">{step.title}</h4>
              <p className="text-xs text-[#A7B0BE] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Collaboration CTA */}
      <section className="text-center pt-4">
        <button
          onClick={() => onInquire('General Consultation')}
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-[#D4AF65] text-[#07111F] text-xs sm:text-sm font-bold hover:bg-[#F3DE9C] transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>Discuss Your Project Vision</span>
        </button>
      </section>
    </div>
  );
};
