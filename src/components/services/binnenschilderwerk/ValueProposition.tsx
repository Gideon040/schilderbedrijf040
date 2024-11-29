import React from 'react';
import { Shield, Brush, Clock, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Hoogwaardige Materialen',
    description: 'Gebruik van premium verven en materialen voor duurzame resultaten',
  },
  {
    icon: Brush,
    title: 'Vakkundig Team',
    description: 'Ervaren schilders met oog voor detail en precisie',
  },
  {
    icon: Clock,
    title: 'Minimale Overlast',
    description: 'Efficiënte werkwijze met state-of-the-art stofafzuiging',
  },
  {
    icon: ThumbsUp,
    title: 'Gegarandeerd Resultaat',
    description: 'Perfecte afwerking en langdurige bescherming',
  },
];

export function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Binnenschilderwerk</h2>
          <p className="text-gray-600">
            Een perfect afgewerkt interieur creëert de juiste sfeer en verhoogt het woongenot. 
            Ons gespecialiseerde team beheerst alle facetten van binnenschilderwerk.
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