import React from 'react';
import { Shield, Award, Clock, ThumbsUp } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: 'Kwaliteitsgarantie',
    description: 'Wij staan garant voor vakkundig uitgevoerd schilderwerk met de beste materialen.',
  },
  {
    icon: Award,
    title: 'Gecertificeerd',
    description: 'Ons team bestaat uit gediplomeerde vakmensen met jarenlange ervaring.',
  },
  {
    icon: Clock,
    title: 'Op Tijd',
    description: 'We komen onze afspraken na en leveren het werk op binnen de afgesproken tijd.',
  },
  {
    icon: ThumbsUp,
    title: 'Tevreden Klanten',
    description: 'Onze klanten waarderen ons met gemiddeld een 9,2 voor kwaliteit en service.',
  },
];

export function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Onze Garanties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bij Schildersbedrijf040 staat kwaliteit voorop. Wij bieden verschillende garanties 
            om u te verzekeren van het beste resultaat.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}