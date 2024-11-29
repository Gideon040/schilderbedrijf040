import React from 'react';
import { Button } from '../../common/Button';

export function ServiceDetails() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Binnen</span>
              <span className="text-primary-500">schilderwerk</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Een perfect afgewerkt interieur creëert de juiste sfeer en verhoogt het woongenot. 
              Ons gespecialiseerde team beheerst alle facetten van binnenschilderwerk. Met state-of-the-art 
              stofafzuiging en sneldrogende, watergedragen verven beperken we de overlast tot een minimum.
            </p>
            <p className="text-gray-600 mb-8">
              We behandelen alle oppervlakken - van het minutieus schilderen van kozijnen en deuren tot het 
              strak afwerken van wanden en plafonds. Door gebruik van hoogwaardige materialen en gedegen 
              vakkennis garanderen we een langdurig mooi resultaat.
            </p>
            <Button variant="primary" showArrow>
              Ontdek onze binnenschilderdiensten
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
              alt="Binnenschilderwerk"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}