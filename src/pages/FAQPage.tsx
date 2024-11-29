import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { FAQHero } from '../components/faq/FAQHero';
import { FAQContent } from '../components/faq/FAQContent';
import { FAQCategories } from '../components/faq/FAQCategories';
import { ContactCTA } from '../components/faq/ContactCTA';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <FAQHero />
        <FAQCategories />
        <FAQContent />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}