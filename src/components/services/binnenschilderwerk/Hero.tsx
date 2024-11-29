import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-[400px] flex items-center py-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="flex flex-col space-y-2 text-5xl font-bold mb-6">
            <span className="text-white">De Waarde van</span>
            <span className="text-primary-400">Vakkundig Schilderwerk</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Een woning is meer dan alleen een dak boven uw hoofd - het is een investering die 
            bescherming verdient. Professioneel schilderwerk speelt hierin een cruciale rol. 
            Van karakteristieke herenhuizen tot moderne appartementen, elk pand heeft zijn eigen 
            uitdagingen en vereist een specifieke aanpak.
          </p>
        </div>
      </div>
    </section>
  );
}