import React from 'react';
import { Button } from '../../common/Button';

export function ExteriorPainting() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                alt="Buitenschilderwerk"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Buiten</span>
              <span className="text-primary-500">schilderwerk</span>
            </h2>
            <p className="text-gray-600 mb-6">
              De buitenzijde van uw woning verdient optimale bescherming tegen weersinvloeden. 
              Degelijk buitenschilderwerk voorkomt kostbare reparaties en houtrot. Onze vakmensen 
              inspecteren eerst zorgvuldig alle te behandelen delen.
            </p>
            <p className="text-gray-600 mb-8">
              Waar nodig vervangen we aangetast houtwerk, waarna we met verschillende lagen hoogwaardige 
              verf een duurzame bescherming aanbrengen. Van dakkapellen tot kozijnen en van deuren tot 
              gevelbetimmeringen - we zorgen voor een resultaat waar u jaren plezier van heeft.
            </p>
            <Button variant="primary" showArrow>
              Bekijk onze buitenschilderoplossingen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}