import React from 'react';

const certifications = [
  { name: 'ISO 9001', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100' },
  { name: 'VCA**', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100' },
  { name: 'Duurzaam Schilderwerk', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100' },
  { name: 'AF-Erkenning', logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=200&h=100' },
];

export function Certifications() {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <img
                src={cert.logo}
                alt={cert.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}