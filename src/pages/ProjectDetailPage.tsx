import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProjectDetail } from '../components/projects/ProjectDetail';
import { RelatedProjects } from '../components/projects/RelatedProjects';
import { ProjectCTA } from '../components/projects/ProjectCTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ProjectDetail />
        <RelatedProjects />
        <ProjectCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}