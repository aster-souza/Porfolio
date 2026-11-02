# REEVAN SOUZA — Personal Portfolio Website

> **"Small Steps Build Big Dreams."**  
> *REEVAN SOUZA – Creating, Designing, Developing, and Exploring the Digital World.*

Welcome to the official personal portfolio website for **Reevan Souza** — Web Developer, UI/UX Designer, AI Enthusiast, and Creative Digital Designer.

---

## 🌟 Brand Identity & Palette

- **Brand Name:** REEVAN SOUZA
- **Studio Identity:** ast_edts
- **Instagram:** [@ast_souz_](https://www.instagram.com/ast_souz_/)
- **Theme Palette:**
  - **Deep Navy Blue:** `#07111F`
  - **Dark Background:** `#05080F`
  - **Premium Gold:** `#D4AF65`
  - **White:** `#FFFFFF`
  - **Soft Grey:** `#A7B0BE`

---

## 🚀 Pages & Features

1. **Home (`#home`):**
   - Cinematic hero introducing Reevan Souza.
   - Dynamic typing animation highlighting multidisciplinary titles.
   - Animated starry background with interactive constellation lines.
   - Featured projects, quick stats, and direct action triggers (View Work, Resume, Contact).
2. **About Me (`#about`):**
   - Authentic personal introduction, vision, and mission.
   - Core professional interests (Website Development, UI/UX Design, AI, Graphic Design, Digital Branding, Creative Problem Solving).
   - "What I Love Doing" and "My Creative Journey" milestones.
3. **Skills & Technologies (`#skills`):**
   - Organized into 4 categories: Web Development, Frontend & UI/UX, AI & Tools, Creative Design.
   - Interactive search and filterable skill cards with detailed modals.
4. **My Projects (`#projects`):**
   - Detailed showcase of all 7 key projects:
     1. **Paper Wault:** Academic question paper-sharing platform with student/admin roles.
     2. **Expense Tracker:** Personal finance management and spending habit analysis.
     3. **FaceFrame AI:** AI-powered photography sharing and facial recognition discovery.
     4. **File Sharing Utility:** Frictionless cross-device mobile-to-PC file transfer.
     5. **Wedding Invitation Website:** Interactive keepsake for Jesvita & Steevan with animated wax seal envelope opening, live countdown, and music.
     6. **Digital Posters & Graphic Design:** College Annual Day Celebration 2026, tech fests, election posters.
     7. **ast_edts Creation:** Brand identity studio, QR posters, visiting cards, social graphics.
   - Includes interactive live simulator tabs for key projects.
5. **Creative Gallery (`#gallery`):**
   - Masonry visual gallery for posters, invitations, logos, business cards, and social media designs.
   - Fullscreen lightbox modal with artwork details.
   - Extensible central data file (`src/data/galleryData.ts`).
6. **Services (`#services`):**
   - 8 professional offerings with deliverables, development workflows, and direct inquiry routing.
7. **Contact Me (`#contact`):**
   - Validated contact form with instant celebratory feedback and local submission archiving.
   - Direct Instagram profile link [@ast_souz_](https://www.instagram.com/ast_souz_/).
   - Copyable direct email channel and FAQ accordion.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Custom Glassmorphism & Gold Theme
- **Animations & Effects:** Motion / Framer Motion, HTML5 Canvas Particle System, Canvas Confetti
- **Icons:** Lucide React

---

## 💻 Running Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 3. Start Development Server
Run the local dev server:
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 4. Running Unit Tests
Execute the pure logic tests (form validation, search, and category filters):
```bash
npx --yes tsx --test src/utils/portfolioLogic.test.ts
```

### 5. Production Build
Compile and bundle the production assets:
```bash
npm run build
```
Preview the built bundle locally:
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import this repository.
4. Keep the default build settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://www.netlify.com).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.
3. Deploy site.

---

## 📜 Credits & License

- **Design & Concept:** Designed & Developed by Reevan Souza.
- **Copyright:** © 2026 Reevan Souza. All Rights Reserved.
