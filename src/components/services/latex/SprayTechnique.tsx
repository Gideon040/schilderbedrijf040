import React from 'react';

const features = [
  'Professionele spuitapparatuur',
  'Uitgebreide voorbehandeling',
  'Stofvrije werkwijze',
  'Snelle droging',
];

export function SprayTechnique() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80"
                alt="Spuittechniek"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Onze</span>
              <span className="text-primary-500">Werkwijze</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Met onze geavanceerde spuittechnieken en professionele apparatuur 
              zorgen we voor een perfect resultaat. We werken snel en efficiënt, 
              met minimale overlast voor u.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Kenmerken:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <span className="text-gray-600">{feature}</span>
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