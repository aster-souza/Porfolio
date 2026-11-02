import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, filterProjects, filterGallery, filterSkills } from './portfolioLogic';
import { ProjectItem, GalleryItem, SkillCategory } from '../types';

test('validateContactForm checks empty fields correctly', () => {
  const result = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid data', () => {
  const result = validateContactForm({
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Project Inquiry',
    message: 'Hello Reevan, I would like to discuss a web project with you.',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactForm flags invalid email syntax', () => {
  const result = validateContactForm({
    name: 'Jane Doe',
    email: 'not-an-email',
    subject: 'Collaboration',
    message: 'Let us build something wonderful together.',
  });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.email, 'Please enter a valid email address.');
});

test('filterProjects filters by category and search keyword', () => {
  const mockProjects: ProjectItem[] = [
    {
      id: 'p1',
      number: '01',
      title: 'Paper Wault',
      tagline: 'Your Gateway to Previous Year Question Papers.',
      category: 'Web Development / Academic Platform',
      categorySlug: 'web-dev',
      shortDescription: 'Question paper sharing platform',
      fullDescription: 'Detailed paper wault description',
      features: ['Authentication', 'Dashboard'],
      techStack: ['PHP', 'MySQL', 'Bootstrap'],
      tags: ['Academic', 'Database'],
      gradient: 'from-blue-900 to-indigo-950',
      accentColor: '#3B82F6',
      previewType: 'academic',
    },
    {
      id: 'p2',
      number: '02',
      title: 'Expense Tracker',
      tagline: 'Personal finance analytics',
      category: 'Web Development / Finance Management',
      categorySlug: 'finance',
      shortDescription: 'Daily expense monitoring tool',
      fullDescription: 'Detailed expense tracker description',
      features: ['Analytics', 'Budgets'],
      techStack: ['React', 'Tailwind CSS'],
      tags: ['Finance', 'Analytics'],
      gradient: 'from-emerald-900 to-slate-950',
      accentColor: '#10B981',
      previewType: 'expense',
    },
  ];

  // Test all category
  const all = filterProjects(mockProjects, 'all', '');
  assert.equal(all.length, 2);

  // Test category filter
  const financeOnly = filterProjects(mockProjects, 'finance', '');
  assert.equal(financeOnly.length, 1);
  assert.equal(financeOnly[0].title, 'Expense Tracker');

  // Test text search
  const paperSearch = filterProjects(mockProjects, 'all', 'wault');
  assert.equal(paperSearch.length, 1);
  assert.equal(paperSearch[0].title, 'Paper Wault');

  // Test tech search
  const reactSearch = filterProjects(mockProjects, 'all', 'React');
  assert.equal(reactSearch.length, 1);
  assert.equal(reactSearch[0].title, 'Expense Tracker');
});

test('filterGallery matches category and search queries', () => {
  const mockGallery: GalleryItem[] = [
    {
      id: 'g1',
      title: 'College Annual Day Celebration 2026',
      category: 'College Event Designs',
      description: 'Official invitation and poster',
      dimensions: 'A3 High Res',
      aspectRatio: 'portrait',
      tags: ['Annual Day', 'College'],
      gradient: 'from-amber-700 to-stone-900',
      badge: 'Event',
      accentColor: '#D4AF65',
      svgVisualType: 'college-annual-day',
    },
    {
      id: 'g2',
      title: 'Ast_edts Brand Identity',
      category: 'Digital Branding',
      description: 'Modern monogram and logo',
      dimensions: 'Vector 1:1',
      aspectRatio: 'square',
      tags: ['Branding', 'Vector'],
      gradient: 'from-cyan-900 to-slate-900',
      badge: 'Branding',
      accentColor: '#06B6D4',
      svgVisualType: 'ast-edts-brand',
    },
  ];

  const brandOnly = filterGallery(mockGallery, 'digital branding', '');
  assert.equal(brandOnly.length, 1);
  assert.equal(brandOnly[0].id, 'g2');

  const annualSearch = filterGallery(mockGallery, 'all', 'annual');
  assert.equal(annualSearch.length, 1);
  assert.equal(annualSearch[0].id, 'g1');
});

test('filterSkills handles category and text queries', () => {
  const mockCategories: SkillCategory[] = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Core web technologies',
      skills: [
        {
          name: 'HTML',
          category: 'Web Development',
          level: 'Explored & Practiced',
          icon: 'Code2',
          description: 'Semantic markup',
          useCases: ['Web structures'],
        },
        {
          name: 'PHP',
          category: 'Web Development',
          level: 'Explored & Practiced',
          icon: 'Server',
          description: 'Backend scripting',
          useCases: ['Dynamic apps'],
        },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend & UI/UX',
      description: 'Modern UI frameworks',
      skills: [
        {
          name: 'React',
          category: 'Frontend & UI/UX',
          level: 'Explored & Practiced',
          icon: 'Atom',
          description: 'Component architecture',
          useCases: ['SPAs'],
        },
      ],
    },
  ];

  const allSkills = filterSkills(mockCategories, 'all', '');
  assert.equal(allSkills.length, 3);

  const webOnly = filterSkills(mockCategories, 'web-dev', '');
  assert.equal(webOnly.length, 2);

  const phpSearch = filterSkills(mockCategories, 'all', 'PHP');
  assert.equal(phpSearch.length, 1);
  assert.equal(phpSearch[0].name, 'PHP');
});
