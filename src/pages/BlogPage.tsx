import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { BlogHero } from '../components/blog/BlogHero';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogCategories } from '../components/blog/BlogCategories';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { CookieConsent } from '../components/common/CookieConsent';
import { BlogProvider } from '../contexts/BlogContext';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <BlogHero />
        <BlogProvider>
          <BlogCategories />
          <BlogGrid />
        </BlogProvider>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}