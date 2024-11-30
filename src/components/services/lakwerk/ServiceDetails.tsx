import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Streeploos eindresultaat',
  'Superieure dekking',
  'Efficiënte applicatie',
  'Duurzame bescherming',
];

export function ServiceDetails() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Plafond &</span>
              <span className="text-primary-500">Wandafwerking</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Voor grootschalige oppervlakken biedt spuittechniek ongekende voordelen. Of het nu 
              gaat om strakke plafonds of karaktervolle wanden - onze specialisten creëren perfect 
              egale afwerkingen die uw ruimte transformeren.
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold">Technische voordelen:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80"
              alt="Plafond en wandafwerking"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}