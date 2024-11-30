import React from 'react';

const partners = [
  { name: 'Sigma Coatings', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100' },
  { name: 'Sikkens', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100' },
  { name: 'Histor', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100' },
  { name: 'Flexa', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100' },
];

export function Partners() {
  return (
    <section className="bg-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Onze Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}