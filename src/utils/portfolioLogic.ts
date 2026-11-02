import { ContactFormData, ContactFormErrors, GalleryItem, ProjectItem, SkillCategory, SkillItem } from '../types';

/**
 * Validates the contact form fields.
 */
export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: ContactFormErrors } {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Please provide your name.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Please provide an email address.';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.subject || data.subject.trim().length === 0) {
    errors.subject = 'Please specify a subject.';
  } else if (data.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Please write your message.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filters projects by category and text search query.
 */
export function filterProjects(
  projects: ProjectItem[],
  selectedCategory: string,
  searchQuery: string
): ProjectItem[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      project.categorySlug === selectedCategory ||
      project.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.fullDescription.toLowerCase().includes(query) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

/**
 * Filters gallery items by category and search.
 */
export function filterGallery(
  items: GalleryItem[],
  selectedCategory: string,
  searchQuery: string
): GalleryItem[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

/**
 * Filters skills by category and search term.
 */
export function filterSkills(
  categories: SkillCategory[],
  activeCategory: string,
  searchQuery: string
): SkillItem[] {
  const query = searchQuery.trim().toLowerCase();
  const allSkills: SkillItem[] = [];

  for (const cat of categories) {
    if (activeCategory === 'all' || cat.id === activeCategory) {
      allSkills.push(...cat.skills);
    }
  }

  if (!query) {
    return allSkills;
  }

  return allSkills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(query) ||
      skill.category.toLowerCase().includes(query) ||
      skill.description.toLowerCase().includes(query) ||
      skill.useCases.some((uc) => uc.toLowerCase().includes(query))
  );
}
