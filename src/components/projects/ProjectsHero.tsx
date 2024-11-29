import React from 'react';

export function ProjectsHero() {
  return (
    <section className="relative min-h-[400px] flex items-center py-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="flex flex-col space-y-2 text-5xl font-bold mb-6">
            <span className="text-white">Onze</span>
            <span className="text-primary-400">Projecten</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Ontdek onze recent voltooide projecten en zie hoe wij ruimtes transformeren
            met vakkundig schilderwerk en oog voor detail.
          </p>
        </div>
      </div>
    </section>
  );
}