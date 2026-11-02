/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavigationPage, ProjectItem, GalleryItem, ServiceItem } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { GalleryModal } from './components/GalleryModal';
import { ResumeModal } from './components/ResumeModal';
import { ServiceModal } from './components/ServiceModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { projectsData } from './data/projectsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  // Synchronize hash with current page for browser back/forward support & bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationPage;
      const validPages: NavigationPage[] = ['home', 'about', 'skills', 'projects', 'gallery', 'services', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectById = (projectId: string) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleInquireFromService = (serviceTitle: string) => {
    setSelectedService(null);
    setContactSubject(`Service Inquiry: ${serviceTitle}`);
    navigateTo('contact');
  };

  const handleOpenContactWithSubject = (subject?: string) => {
    setSelectedProject(null);
    setSelectedGalleryItem(null);
    if (subject) {
      setContactSubject(subject);
    }
    navigateTo('contact');
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-secondary)] transition-colors duration-300">
        {/* Subtle Stardust and Constellation Canvas */}
        <BackgroundCanvas />

        {/* Custom Desktop Gold Cursor */}
        <CustomCursor />

        {/* Sticky Luxury Navbar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={navigateTo}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* Main Page Content */}
        <main id="main-content" className="relative z-10 focus:outline-none">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={navigateTo}
              onOpenResume={() => setIsResumeModalOpen(true)}
              onSelectProject={handleSelectProjectById}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={navigateTo} />
          )}

          {currentPage === 'skills' && (
            <SkillsPage />
          )}

          {currentPage === 'projects' && (
            <ProjectsPage onSelectProject={handleSelectProjectById} />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage
              onSelectItem={(item) => setSelectedGalleryItem(item)}
              onOpenContact={handleOpenContactWithSubject}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onSelectService={(service) => setSelectedService(service)}
              onInquire={handleInquireFromService}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage initialSubject={contactSubject} />
          )}
        </main>

        {/* Footer */}
        <Footer onNavigate={navigateTo} />

        {/* Interactive Modals */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={handleOpenContactWithSubject}
        />

        <GalleryModal
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
          onOpenContact={handleOpenContactWithSubject}
        />

        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onInquire={handleInquireFromService}
        />

        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
