import React from 'react';
import { Shield, Clock, Brush, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Hoogwaardige Kwaliteit',
    description: 'Perfect egale afwerking zonder rolbanen',
  },
  {
    icon: Clock,
    title: 'Tijdsbesparing',
    description: 'Snelle verwerking en droging',
  },
  {
    icon: Brush,
    title: 'Professioneel',
    description: 'Vakkundige uitvoering met de beste materialen',
  },
  {
    icon: ThumbsUp,
    title: 'Duurzaam',
    description: 'Langdurig mooi resultaat',
  },
];

export function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Voordelen van Latex Spuiten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ontdek waarom steeds meer mensen kiezen voor het professioneel laten 
            spuiten van latex.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}