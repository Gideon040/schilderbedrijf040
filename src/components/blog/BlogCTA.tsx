import React from 'react';
import { Button } from '../common/Button';
import { MapPin } from 'lucide-react';

export function BlogCTA() {
  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-primary-400" />
            <span className="text-primary-300">Werkzaam in uw regio</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Klaar voor Vakkundig Schilderwerk?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Laat ons uw project verzorgen met de expertise die u verdient
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" showArrow>
              Offerte Aanvragen
            </Button>
            <Button variant="outline">
              Bekijk Onze Projecten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}