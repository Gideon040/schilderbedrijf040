import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-[400px] flex items-center py-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="flex flex-col space-y-2 text-5xl font-bold mb-6">
            <span className="text-white">Moderne</span>
            <span className="text-primary-400">Wandbekleding</span>
          </h1>
          <p className="text-gray-300 text-lg">
            In de dynamische wereld van wandafwerking biedt moderne wandbekleding eindeloze 
            mogelijkheden voor uw interieur. Van subtiel structuurbehang tot exclusieve 
            designcollecties - wij begeleiden u naar de perfecte keuze voor uw ruimte.
          </p>
        </div>
      </div>
    </section>
  );
}