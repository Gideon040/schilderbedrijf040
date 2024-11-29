import React from 'react';
import { Clock, Award, Star, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '25+ jaar ervaring',
    description: 'Jarenlange expertise in vakkundig schilderwerk',
  },
  {
    icon: Award,
    title: 'Gratis offerte',
    description: 'Vrijblijvend advies en kostenraming',
  },
  {
    icon: Star,
    title: 'Vakmanschap',
    description: 'Gecertificeerde vakmensen met oog voor detail',
  },
  {
    icon: ThumbsUp,
    title: '100% klanttevredenheid',
    description: 'Gegarandeerd tevreden met het eindresultaat',
  },
];

export function WhyUs() {
  return (
    <section id="waarom-ons" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Waarom Ons Kiezen</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <benefit.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}