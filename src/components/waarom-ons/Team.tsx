import React from 'react';

export function Team() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ons Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Maak kennis met onze ervaren vakmensen die elk project met passie en precisie uitvoeren.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80"
                alt="Teamlid"
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-1">Jan van der Berg</h3>
                <p className="text-gray-200">Hoofdschilder</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80"
                alt="Teamlid"
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-1">Peter de Vries</h3>
                <p className="text-gray-200">Projectleider</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
                alt="Teamlid"
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-1">Mark Jansen</h3>
                <p className="text-gray-200">Specialist Houtsanering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}