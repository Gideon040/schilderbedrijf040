import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/services/houtrot/Hero';
import { ServiceDetails } from '../components/services/houtrot/ServiceDetails';
import { PreventiveMaintenance } from '../components/services/houtrot/PreventiveMaintenance';
import { CostsApproach } from '../components/services/houtrot/CostsApproach';
import { CTA } from '../components/services/houtrot/CTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function HoutrotSaneringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ServiceDetails />
        <PreventiveMaintenance />
        <CostsApproach />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}