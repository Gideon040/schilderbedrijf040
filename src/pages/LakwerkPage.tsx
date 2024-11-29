import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/services/lakwerk/Hero';
import { ServiceDetails } from '../components/services/lakwerk/ServiceDetails';
import { SprayTechnique } from '../components/services/lakwerk/SprayTechnique';
import { DetailWork } from '../components/services/lakwerk/DetailWork';
import { CTA } from '../components/services/lakwerk/CTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function LakwerkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ServiceDetails />
        <SprayTechnique />
        <DetailWork />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}