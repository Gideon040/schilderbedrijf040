import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Lisa van Dijk',
    role: 'Huiseigenaar',
    text: 'Uitstekende service en vakmanschap. Het team was zeer professioneel en het resultaat overtrof onze verwachtingen.',
    rating: 5,
  },
  {
    name: 'Marco Vermeulen',
    role: 'Projectontwikkelaar',
    text: 'Al jaren werken we samen met Schildersbedrijf040. Hun betrouwbaarheid en kwaliteit zijn ongeëvenaard.',
    rating: 5,
  },
  {
    name: 'Emma de Groot',
    role: 'Interieurontwerper',
    text: 'De aandacht voor detail en flexibiliteit maken hen de perfecte partner voor onze projecten.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Wat Klanten Zeggen</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ontdek waarom klanten ons aanbevelen voor hun schilderprojecten
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white mb-6">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-gray-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}