import React from 'react';

export function ProfessionalInstallation() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Vakkundige</span>
              <span className="text-primary-500">Installatie</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Behangen is echt precisiewerk. Gelukkig hebben onze mensen dit kunstje helemaal 
              in de vingers. Wij kunnen elke wand behangen, bijvoorbeeld met een mooi sierbehang 
              of met renovlies. Renovlies is ideaal om scheuren, krimpscheuren en oneffenheden 
              op en in muren te verbergen.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80"
              alt="Vakkundige installatie"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}