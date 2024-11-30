import React from 'react';
import { Button } from '../../common/Button';

export function FacadeTechnique() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Gevel</span>
              <span className="text-primary-500">techniek</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Transformeer uw gevel met innovatieve minerale verftechnieken. Deze specialistische 
              behandeling gaat verder dan gewone muurverf - het vormt een blijvende verbinding met 
              de ondergrond.
            </p>
            <p className="text-gray-600 mb-8">
              Het resultaat is niet alleen esthetisch hoogwaardig, maar biedt ook superieure 
              bescherming tegen vocht, schimmels en vervuiling. Ideaal voor zowel moderne als 
              klassieke architectuur, met een breed scala aan eigentijdse kleuren.
            </p>
            <Button variant="primary" showArrow>
              Leer meer over geveltechniek
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80"
              alt="Geveltechniek"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}