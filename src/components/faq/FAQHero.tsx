import React from 'react';

export function FAQHero() {
  return (
    <section className="relative min-h-[400px] flex items-center py-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="flex flex-col space-y-2 text-5xl font-bold mb-6">
            <span className="text-white">Veelgestelde</span>
            <span className="text-primary-400">Vragen</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Vind antwoorden op de meest gestelde vragen over onze schilderdiensten, 
            werkwijze en garanties. Staat uw vraag er niet tussen? Neem dan gerust 
            contact met ons op.
          </p>
        </div>
      </div>
    </section>
  );
}