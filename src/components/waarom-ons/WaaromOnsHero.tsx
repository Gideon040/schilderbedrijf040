import React from 'react';

export function WaaromOnsHero() {
  return (
    <section className="relative min-h-[400px] flex items-center py-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="flex flex-col space-y-2 text-5xl font-bold mb-6">
            <span className="text-white">Waarom Kiezen voor</span>
            <span className="text-primary-400">Schildersbedrijf040</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Met meer dan 25 jaar ervaring in vakkundig schilderwerk zijn wij uw betrouwbare 
            partner voor elk project. Ontdek waarom klanten ons vertrouwen voor hun 
            schilderwerk in Eindhoven en omgeving.
          </p>
        </div>
      </div>
    </section>
  );
}