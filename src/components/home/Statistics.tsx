import React from 'react';

const stats = [
  { value: '5+', label: 'Jaren Ervaring' },
  { value: '100+', label: 'Projecten Voltooid' },
  { value: '98%', label: 'Klanttevredenheid' },
  { value: '100%', label: 'Kwaliteitsgarantie' },
];

export function Statistics() {
  return (
    <section className="relative py-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-300 mb-2">{stat.value}</div>
              <div className="text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}