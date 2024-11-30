import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WaaromOnsHero } from '../components/waarom-ons/WaaromOnsHero';
import { Experience } from '../components/waarom-ons/Experience';
import { Approach } from '../components/waarom-ons/Approach';
import { Team } from '../components/waarom-ons/Team';
import { Testimonials } from '../components/waarom-ons/Testimonials';
import { CTA } from '../components/waarom-ons/CTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function WaaromOnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <WaaromOnsHero />
        <Experience />
        <Approach />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}