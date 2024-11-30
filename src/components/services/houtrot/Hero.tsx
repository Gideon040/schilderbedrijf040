import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-[400px] flex items-center py-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="flex flex-col space-y-2 text-5xl font-bold mb-6">
            <span className="text-white">Vakkundige</span>
            <span className="text-primary-400">Houtsanering & Preventie</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Hout is een natuurlijk materiaal dat door weersinvloeden kan worden aangetast. 
            Het Nederlandse klimaat met wisselende temperaturen, UV-straling en vocht stelt 
            hoge eisen aan buitenhoutwerk. Tijdige inspectie en behandeling zijn essentieel 
            voor behoud.
          </p>
        </div>
      </div>
    </section>
  );
}