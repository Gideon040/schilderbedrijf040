import React from 'react';
import { Check } from 'lucide-react';

const approaches = [
  'Persoonlijk advies en maatwerk oplossingen',
  'Gebruik van hoogwaardige materialen',
  'Minimale overlast tijdens werkzaamheden',
  'Flexibele planning en snelle uitvoering',
  'Uitgebreide garantie op al ons werk',
  'Transparante communicatie en prijzen',
];

export function Approach() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Onze Werkwijze</h2>
            <p className="text-gray-600 mb-8">
              We streven naar perfectie in elk project. Onze aanpak is gebaseerd op jaren 
              ervaring en wordt continu verfijnd om u de beste service te bieden.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary-500 mt-1" />
                  <span className="text-gray-600">{approach}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
              alt="Onze werkwijze"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}