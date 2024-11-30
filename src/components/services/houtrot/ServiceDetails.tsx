import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Significante kostenbesparing vergeleken met totaalvervanging',
  'Behoud van waardevolle architectonische details',
  'Snelle uitvoering met minimale overlast',
  'Milieubewuste oplossing door behoud van materiaal',
  'Langdurige bescherming tegen nieuwe aantasting',
];

export function ServiceDetails() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Professionele</span>
              <span className="text-primary-500">Houtrestauratie</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Bij aantasting is snelle actie cruciaal. Onze experts beoordelen de schade en bepalen 
              de meest effectieve aanpak. Bij oppervlakkige aantasting passen we geavanceerde 
              reparatietechnieken toe met speciale vulmiddelen en primers die het hout beschermen 
              tegen verdere degradatie.
            </p>
            <p className="text-gray-600 mb-6">
              Bij diepere aantasting vervangen we aangetaste delen met zorgvuldig geselecteerd nieuw 
              hout dat perfect aansluit bij het bestaande materiaal. Deze gerichte aanpak is niet 
              alleen kostenefficiënt, maar bewaart ook het authentieke karakter van uw woning. 
              Moderne reparatiemethoden garanderen een duurzaam resultaat dat naadloos integreert 
              met het origineel.
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold">Concrete voordelen van onze aanpak:</h3>
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
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
              alt="Houtrestauratie"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}