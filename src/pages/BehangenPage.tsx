import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/services/behangen/Hero';
import { ServiceDetails } from '../components/services/behangen/ServiceDetails';
import { ModernWallcovering } from '../components/services/behangen/ModernWallcovering';
import { ProfessionalInstallation } from '../components/services/behangen/ProfessionalInstallation';
import { CTA } from '../components/services/behangen/CTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function BehangenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ServiceDetails />
        <ModernWallcovering />
        <ProfessionalInstallation />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}