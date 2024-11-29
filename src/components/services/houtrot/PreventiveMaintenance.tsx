import React from 'react';
import { Check } from 'lucide-react';

const maintenanceSteps = [
  'Grondige periodieke inspecties van alle houten elementen',
  'Professionele reiniging die de levensduur verlengt',
  'Tijdige aanbreng van beschermende verflagen',
  'Directe aanpak van beginnende problemen',
  'Documentatie van onderhoudsstatus',
];

export function PreventiveMaintenance() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                alt="Preventief onderhoud"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Preventief</span>
              <span className="text-primary-500">Onderhoud</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Voorkomen is beter dan genezen. Ons preventief onderhoudsprogramma omvat een 
              uitgebreide aanpak voor het behoud van uw houtwerk. We bieden verschillende 
              onderhoudscontracten aan, afgestemd op uw specifieke situatie. Van jaarlijkse 
              controles tot complete onderhoudsprogramma's - wij zorgen dat uw houtwerk in 
              optimale conditie blijft.
            </p>
            
            <div className="space-y-4">
              <ul className="space-y-3">
                {maintenanceSteps.map((step, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}