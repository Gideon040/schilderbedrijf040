import React from 'react';

export function Hero() {
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
            <span className="text-white">Spuitwerk &</span>
            <span className="text-primary-400">Lakwerk</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Modern spuitwerk revolutioneert traditionele schildertechnieken. Met geavanceerde 
            apparatuur realiseren we perfecte, egale oppervlakken in record tijd. Deze innovatieve 
            methode garandeert niet alleen superieure kwaliteit, maar biedt ook economische 
            voordelen door snelle verwerking.
          </p>
        </div>
      </div>
    </section>
  );
}