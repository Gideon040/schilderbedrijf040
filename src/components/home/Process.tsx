import React from 'react';
import { ClipboardCheck, Phone, PaintBucket, ThumbsUp } from 'lucide-react';
import { Button } from '../common/Button';

const steps = [
  {
    icon: Phone,
    title: 'Contact',
    description: 'Neem contact op voor een vrijblijvende afspraak',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspectie & Offerte',
    description: 'Wij komen langs voor een gratis inspectie en offerte',
  },
  {
    icon: PaintBucket,
    title: 'Uitvoering',
    description: 'Vakkundige uitvoering van het schilderwerk',
  },
  {
    icon: ThumbsUp,
    title: 'Oplevering',
    description: 'Controle en garantie op het geleverde werk',
  },
];

export function Process() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Onze Werkwijze</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
              alt="Schilderwerk proces"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <step.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
            <div className="pt-4">
              <Button to="/contact" variant="primary" showArrow>
                Start Uw Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}