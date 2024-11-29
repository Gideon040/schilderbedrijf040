import React from 'react';
import { Button } from '../../common/Button';

export function ColorAdvice() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80"
                alt="Kleuradvies"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Professioneel</span>
              <span className="text-primary-500">Kleuradvies</span>
            </h2>
            <p className="text-gray-600 mb-6">
              De juiste kleurkeuze is bepalend voor de uitstraling van uw woning. Onze adviseurs 
              helpen u navigeren door het uitgebreide aanbod van verfmerken en kleurencollecties.
            </p>
            <p className="text-gray-600 mb-8">
              We kijken naar bestaande elementen zoals vloeren en meubels, en adviseren over 
              kleurcombinaties die perfect aansluiten bij uw stijl en wensen. Met onze mobiele 
              showroom brengen we de mogelijkheden bij u thuis.
            </p>
            <Button variant="primary" showArrow>
              Plan uw kleuradvies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}