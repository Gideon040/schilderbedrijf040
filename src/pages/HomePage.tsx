import React from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Statistics } from '../components/home/Statistics';
import { Process } from '../components/home/Process';
import { AboutUs } from '../components/home/AboutUs';
import { Projects } from '../components/home/Projects';
import { Reviews } from '../components/home/Reviews';
import { InstagramFeed } from '../components/home/InstagramFeed';
import { Guarantee } from '../components/home/Guarantee';
import { ServiceArea } from '../components/home/ServiceArea';
import { CallBackForm } from '../components/home/CallBackForm';
import { SocialShowcase } from '../components/home/SocialShowcase';
import { Contact } from '../components/home/Contact';
import { Footer } from '../components/layout/Footer';
import { CookieConsent } from '../components/common/CookieConsent';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Statistics />
        <Process />
        <AboutUs />
        <Projects />
        <Reviews />
        <InstagramFeed />
        <Guarantee />
        <ServiceArea />
        <CallBackForm />
        <SocialShowcase />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}