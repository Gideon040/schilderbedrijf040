import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProjectsHero } from '../components/projects/ProjectsHero';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ProjectCategories } from '../components/projects/ProjectCategories';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';
import { ProjectProvider } from '../contexts/ProjectContext';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectProvider>
          <ProjectCategories />
          <ProjectGrid />
        </ProjectProvider>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}