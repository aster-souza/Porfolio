export type NavigationPage =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'gallery'
  | 'services'
  | 'contact';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  categorySlug: 'web-dev' | 'finance' | 'ai-saas' | 'utility' | 'creative-web' | 'graphic-design' | 'branding';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  tags: string[];
  gradient: string;
  accentColor: string;
  previewType: 'academic' | 'expense' | 'faceframe' | 'fileshare' | 'wedding' | 'posters' | 'branding';
  liveDemoUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  category: string;
  level: string; // "Explored & Practiced" or "Hands-on Development"
  icon: string;
  description: string;
  useCases: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Posters' | 'Invitations' | 'Logos' | 'Business Cards' | 'Social Media Designs' | 'College Event Designs' | 'Digital Branding' | 'Creative Experiments';
  description: string;
  dimensions: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  tags: string[];
  gradient: string;
  badge: string;
  accentColor: string;
  svgVisualType: 'college-annual-day' | 'wedding-gold' | 'ast-edts-brand' | 'tech-fest' | 'student-council' | 'visiting-card' | 'teachers-day' | 'social-flyer';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  processSteps: string[];
  recommendedFor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceInterest?: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
