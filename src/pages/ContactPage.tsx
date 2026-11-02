import React, { useState, useEffect } from 'react';
import { validateContactForm } from '../utils/portfolioLogic';
import { ContactFormData, ContactFormErrors } from '../types';
import {
  Mail,
  Send,
  Instagram,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  initialSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: initialSubject || '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const contactEmailPlaceholder = 'reevansouza.contact@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch & local storage record
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save submission to local history
      try {
        const stored = JSON.parse(localStorage.getItem('rs_portfolio_messages') || '[]');
        stored.push({
          ...formData,
          date: new Date().toISOString(),
        });
        localStorage.setItem('rs_portfolio_messages', JSON.stringify(stored));
      } catch (err) {
        // Safe fallback
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF65', '#FFFFFF', '#38BDF8'],
      });
    }, 1000);
  };

  return (
    <div className="relative pt-28 md:pt-36 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF65]/10 border border-[#D4AF65]/30 text-[#D4AF65] text-xs font-mono-tech uppercase tracking-widest font-semibold">
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Let's Build Something <span className="gold-gradient-text">Amazing</span> Together.
        </h1>
        <p className="text-sm md:text-base text-[#A7B0BE] max-w-2xl mx-auto leading-relaxed">
          Have an idea, project, or collaboration in mind? Let's connect and turn your ideas into something meaningful.
        </p>
      </section>

      {/* Main Grid: Form on Left, Contact Details & Social on Right */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#07111F] rounded-3xl p-6 sm:p-10 border border-[#D4AF65]/30 shadow-2xl relative">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-[#A7B0BE] max-w-md mx-auto">
                Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Reevan will review your message regarding <span className="text-[#D4AF65]">"{formData.subject}"</span> promptly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#A7B0BE]">
                  Fill in your details below and I'll get back to you soon.
                </p>
              </div>

              {/* Name field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A7B0BE] font-semibold mb-1.5">
                  Your Full Name <span className="text-[#D4AF65]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#05080F] border text-white text-xs sm:text-sm placeholder-gray-500 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF65]'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A7B0BE] font-semibold mb-1.5">
                  Your Email Address <span className="text-[#D4AF65]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#05080F] border text-white text-xs sm:text-sm placeholder-gray-500 outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF65]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A7B0BE] font-semibold mb-1.5">
                  Subject or Topic <span className="text-[#D4AF65]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Website Development Inquiry / Creative Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#05080F] border text-white text-xs sm:text-sm placeholder-gray-500 outline-none transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF65]'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A7B0BE] font-semibold mb-1.5">
                  Your Message <span className="text-[#D4AF65]">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your idea, requirements, timeline, or thoughts..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#05080F] border text-white text-xs sm:text-sm placeholder-gray-500 outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF65]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF65] to-[#B38E41] text-[#07111F] text-xs sm:text-sm font-bold shadow-lg shadow-[#D4AF65]/20 hover:scale-[1.01] hover:shadow-[#D4AF65]/35 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Info Details: Instagram, Email copy, Response Time */}
        <div className="lg:col-span-5 space-y-6">
          {/* Instagram highlight card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1A0B2E] via-[#07111F] to-[#05080F] border border-[#D4AF65]/30 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#E1306C] to-[#F77737] flex items-center justify-center text-white shadow-lg">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#D4AF65] font-mono-tech uppercase font-semibold">
                  Primary Social Channel
                </span>
                <h3 className="text-lg font-bold text-white">Instagram Presence</h3>
              </div>
            </div>

            <p className="text-xs text-[#A7B0BE] leading-relaxed">
              Explore creative edits, promotional graphics, poster previews, and daily creative updates under the personal handle.
            </p>

            <a
              href="https://www.instagram.com/ast_souz_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF65]/50 text-white text-xs font-semibold group transition-colors"
            >
              <span className="text-[#D4AF65] font-mono-tech text-sm">@ast_souz_</span>
              <span className="text-xs text-[#A7B0BE] group-hover:text-white">View Profile →</span>
            </a>
          </div>

          {/* Direct Email Card */}
          <div className="p-6 rounded-3xl bg-[#07111F] border border-white/10 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF65]/15 border border-[#D4AF65]/30 flex items-center justify-center text-[#D4AF65]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#A7B0BE] uppercase tracking-wider">Direct Email Placeholder</span>
                <h4 className="text-sm font-bold text-white">Direct Correspondence</h4>
              </div>
            </div>

            <p className="text-xs text-[#A7B0BE]">
              For formal project inquiries or file attachments, use direct email:
            </p>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#05080F] border border-white/5 text-xs">
              <span className="text-white font-mono-tech truncate pr-2">{contactEmailPlaceholder}</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-[#D4AF65]/15 text-[#D4AF65] hover:bg-[#D4AF65]/25 text-[11px] font-semibold transition-colors shrink-0"
              >
                {copiedEmail ? <span>Copied!</span> : <><Copy className="w-3 h-3" /><span>Copy</span></>}
              </button>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-[#10B981]">
              <Clock className="w-3.5 h-3.5" />
              <span>Prompt response typically within 24-48 hours.</span>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="p-6 rounded-3xl bg-[#07111F] border border-white/10 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#D4AF65] uppercase font-bold">
              <HelpCircle className="w-4 h-4 text-[#D4AF65]" />
              <span>Frequently Asked Questions</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-[#05080F] border border-white/5">
                <span className="font-semibold text-white">Can I collaborate on an open-source or academic project?</span>
                <p className="text-[#A7B0BE] mt-1 leading-relaxed">
                  Yes! Reevan actively enjoys collaborating on innovative web tools, AI concepts, and academic utilities like Paper Wault.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#05080F] border border-white/5">
                <span className="font-semibold text-white">Can I request a custom poster or digital invitation?</span>
                <p className="text-[#A7B0BE] mt-1 leading-relaxed">
                  Bespoke event posters, college fests, and digital invitations (like Jesvita &amp; Steevan’s interactive card) can be commissioned directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
