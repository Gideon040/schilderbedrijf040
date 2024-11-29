import React from 'react';

const guarantees = [
  'Vooraf duidelijkheid over kosten',
  'Flexibele oplossingen voor elk budget',
  'Garantie op uitgevoerd werk',
  'Professionele documentatie',
  'Nazorg en onderhoudsadvies',
];

export function CostsApproach() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Kosten &</span>
              <span className="text-primary-500">Aanpak</span>
            </h2>
            <p className="text-gray-600 mb-6">
              De investering in houtreparatie varieert met de omvang van het werk. Kleine 
              reparaties voeren we vaak kostenefficiënt uit tijdens regulier schilderwerk. 
              Voor grotere projecten maken we een gedetailleerde analyse en transparante offerte. 
              We werken samen met gespecialiseerde partners voor situaties die complete vervanging 
              vereisen.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Onze werkwijze garandeert:</h3>
              <ul className="space-y-3">
                {guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-600">{guarantee}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80"
              alt="Kosten en aanpak"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}