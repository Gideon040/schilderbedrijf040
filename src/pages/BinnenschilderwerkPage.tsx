import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/services/binnenschilderwerk/Hero';
import { ServiceDetails } from '../components/services/binnenschilderwerk/ServiceDetails';
import { ExteriorPainting } from '../components/services/binnenschilderwerk/ExteriorPainting';
import { FacadeTechnique } from '../components/services/binnenschilderwerk/FacadeTechnique';
import { ColorAdvice } from '../components/services/binnenschilderwerk/ColorAdvice';
import { CTA } from '../components/services/binnenschilderwerk/CTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function BinnenschilderwerkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ServiceDetails />
        <ExteriorPainting />
        <FacadeTechnique />
        <ColorAdvice />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}