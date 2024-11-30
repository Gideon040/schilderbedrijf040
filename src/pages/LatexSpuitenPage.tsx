import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/services/latex/Hero';
import { ServiceDetails } from '../components/services/latex/ServiceDetails';
import { SprayTechnique } from '../components/services/latex/SprayTechnique';
import { Benefits } from '../components/services/latex/Benefits';
import { CTA } from '../components/services/latex/CTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function LatexSpuitenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ServiceDetails />
        <SprayTechnique />
        <Benefits />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}