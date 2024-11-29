import React from 'react';
import { Shield, Award, Users, ThumbsUp } from 'lucide-react';

const strengths = [
  {
    icon: Shield,
    title: '25+ Jaar Ervaring',
    description: 'Jarenlange expertise in diverse schilderprojecten',
  },
  {
    icon: Award,
    title: 'Gecertificeerd Vakmanschap',
    description: 'Erkend schildersbedrijf met alle benodigde certificeringen',
  },
  {
    icon: Users,
    title: 'Persoonlijke Aanpak',
    description: 'Direct contact met onze vakspecialisten',
  },
  {
    icon: ThumbsUp,
    title: 'Kwaliteitsgarantie',
    description: 'Uitstekende service en duurzame resultaten',
  },
];

export function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Onze Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bij Schildersbedrijf040 combineren we jarenlange ervaring met moderne technieken 
            voor het beste resultaat.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <strength.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}