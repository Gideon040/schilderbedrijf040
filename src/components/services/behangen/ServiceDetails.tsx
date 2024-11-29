import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Uitgebreide collectie designmerken',
  'Duurzame materialen',
  'Perfecte integratie met uw interieur',
  'Expert advies bij selectie',
];

export function ServiceDetails() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Professioneel</span>
              <span className="text-primary-500">Behangen</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Vakkundige installatie vormt de basis voor duurzaam resultaat. Onze specialisten 
              beheersen alle technieken voor zowel klassieke als moderne wandbekleding. Bij 
              nieuwbouw zorgen we voor optimale voorbewerking, terwijl we bij renovatie eerst 
              zorgvuldig oude lagen verwijderen voor een perfect eindresultaat.
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold">Belangrijkste voordelen:</h3>
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
              src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80"
              alt="Professioneel behangen"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}