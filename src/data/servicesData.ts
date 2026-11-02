import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design-dev',
    number: '01',
    title: 'Website Design and Development',
    shortDesc: 'End-to-end custom website creation tailored to elevate personal brands and modern concepts.',
    fullDesc:
      'Designing and developing modern, robust web solutions built with clean HTML5, CSS3, modern JavaScript, and component architectures. Focuses on semantic structure, snappy interactions, and seamless user experiences.',
    iconName: 'Globe',
    deliverables: [
      'Custom website architecture and wireframe planning',
      'Semantic, maintainable, and clean code structure',
      'Cross-browser and multi-platform compatibility',
      'Integrated contact mechanisms and analytics endpoints',
    ],
    processSteps: ['Discovery & Requirements', 'Wireframing & Layout', 'Development & Scripting', 'Testing & Launch'],
    recommendedFor: 'Creators, professionals, and initiatives needing a bespoke online identity.',
  },
  {
    id: 'responsive-web',
    number: '02',
    title: 'Responsive Website Creation',
    shortDesc: 'Pixel-perfect fluid layouts that look and perform flawlessly on mobile, tablet, and desktop.',
    fullDesc:
      'Engineering mobile-first fluid design systems that dynamically adapt to any screen size. Ensures intuitive touch navigation, optimized image delivery, and zero horizontal overflow.',
    iconName: 'Smartphone',
    deliverables: [
      'Adaptive mobile navigation and drawer interfaces',
      'Fluid typographic scales and responsive image art direction',
      'Touch-friendly button hitboxes and ergonomic layouts',
      'Performance audit across mobile viewports',
    ],
    processSteps: ['Mobile-First Blueprint', 'Fluid Breakpoint Design', 'Touch Interaction Tuning', 'Multi-Device Validation'],
    recommendedFor: 'Any web product aiming for seamless mobile user engagement.',
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX Design',
    shortDesc: 'Crafting intuitive user journeys, aesthetic interface systems, and friction-free interactions.',
    fullDesc:
      'Translating user needs into sleek, purposeful interfaces. Emphasizing typography contrast, intuitive visual hierarchy, accessible color palettes, and micro-interactions that delight visitors.',
    iconName: 'Layout',
    deliverables: [
      'User journey mapping and high-fidelity wireframes',
      'Modern dark/light UI design tokens and typography hierarchy',
      'Interactive prototype demonstrations',
      'Ergonomic component styling and state designs',
    ],
    processSteps: ['User Research & Goals', 'Information Architecture', 'Visual Prototyping', 'Usability Refinement'],
    recommendedFor: 'Web applications and digital products seeking polished, modern interfaces.',
  },
  {
    id: 'portfolio-development',
    number: '04',
    title: 'Portfolio Website Development',
    shortDesc: 'Personal brand websites that showcase skills, projects, and personality with cinematic flair.',
    fullDesc:
      'Building signature personal websites that stand out from ordinary templates. Featuring dynamic project galleries, animated skill dashboards, downloadable credentials, and custom visual themes.',
    iconName: 'Briefcase',
    deliverables: [
      'Signature hero identity section with dynamic typography',
      'Filterable project showcases with interactive modal previews',
      'Animated skills dashboard and creative design gallery',
      'Fully responsive contact channel with social media integrations',
    ],
    processSteps: ['Personal Brand Identity', 'Content Curation', 'Cinematic Animation Build', 'SEO & Deployment Setup'],
    recommendedFor: 'Developers, designers, and creative technologists wanting an unforgettable digital presence.',
  },
  {
    id: 'graphic-poster-design',
    number: '05',
    title: 'Graphic and Poster Design',
    shortDesc: 'Striking promotional posters, event flyers, and cultural celebration banners that command attention.',
    fullDesc:
      'Creating high-impact visual artwork for college annual day celebrations, student council elections, tech symposiums, and festivals. Mastering composition, focal hierarchy, and expressive typography.',
    iconName: 'Palette',
    deliverables: [
      'High-resolution print-ready files (A3, A4, custom poster specs)',
      'Digital web & social media companion flyers',
      'Bespoke color palettes and thematic background compositions',
      'Integrated scannable QR code campaign elements',
    ],
    processSteps: ['Thematic Brainstorming', 'Visual Composition Draft', 'Typographic Balancing', 'High-Res Asset Export'],
    recommendedFor: 'College events, institutional gatherings, festivals, and cultural milestones.',
  },
  {
    id: 'logo-branding-concepts',
    number: '06',
    title: 'Logo and Branding Concepts',
    shortDesc: 'Distinctive monograms, symbolic emblems, and cohesive visual identity guidelines.',
    fullDesc:
      'Developing memorable brand emblems, minimalist vector marks, and visual style guidelines under the creative spirit of ast_edts. Creating versatile marks that look stunning from business cards to social avatars.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Primary logo mark and secondary monogram variations',
      'Curated brand color palette (hex/RGB/CMYK)',
      'Typography pairing specifications',
      'Visiting card concepts and vector assets',
    ],
    processSteps: ['Brand Essence Discovery', 'Monogram & Symbol Sketching', 'Vector Precision Refinement', 'Collateral Mockup'],
    recommendedFor: 'Startups, personal brands, creators, and modern digital projects.',
  },
  {
    id: 'ai-website-concepts',
    number: '07',
    title: 'AI-Based Website Concepts',
    shortDesc: 'Exploring intelligent web applications powered by computer vision, LLMs, and smart automation.',
    fullDesc:
      'Conceptualizing and architecting web apps augmented by artificial intelligence—such as FaceFrame AI for facial recognition gallery sorting, automated smart assistants, and intelligent workflow tools.',
    iconName: 'Sparkles',
    deliverables: [
      'AI feature architecture and user flow prototyping',
      'Interactive frontend mockups showcasing AI responses',
      'API integration schemas and fallback handling',
      'Client discovery and intelligent filtering concepts',
    ],
    processSteps: ['AI Feasibility & Use Case', 'Prompt / Model Flow Design', 'Frontend State Wiring', 'Interactive Simulation'],
    recommendedFor: 'Visionary projects looking to harness modern AI capabilities.',
  },
  {
    id: 'digital-invitations',
    number: '08',
    title: 'Digital Invitation Websites',
    shortDesc: 'Enchanting interactive wedding, anniversary, and celebration portals with audio, maps, and countdowns.',
    fullDesc:
      'Crafting celebratory digital invitations that turn a paper card into a joyful interactive memory. Featuring click-to-open wax seal envelopes, background celebration melodies, live countdowns, and instant GPS directions.',
    iconName: 'HeartHandshake',
    deliverables: [
      'Interactive envelope opening and celebration confetti animation',
      'Live synchronized countdown timer to the main event',
      'Venue location maps with one-tap Google Maps directions',
      'Audio player for background ambience and celebration media gallery',
    ],
    processSteps: ['Event Aesthetic Theme', 'Animation & Countdown Build', 'Music & Media Integration', 'Mobile Guest Testing'],
    recommendedFor: 'Couples, families, and milestone celebration hosts wanting an unforgettable invitation experience.',
  },
];
