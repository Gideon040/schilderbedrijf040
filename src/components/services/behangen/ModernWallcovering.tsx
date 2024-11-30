import React from 'react';

export function ModernWallcovering() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                alt="Moderne wandbekleding"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Onze</span>
              <span className="text-primary-500">Aanpak</span>
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                <span>Grondige wandvoorbereiding</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                <span>Vakkundige installatie</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                <span>Nauwkeurige afwerking</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                <span>Minimale overlast</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}