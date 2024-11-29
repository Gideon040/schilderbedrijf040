import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Peter van der Berg',
    location: 'Eindhoven Centrum',
    rating: 5,
    text: 'Uitstekend werk geleverd bij het schilderen van onze woning. Zeer professioneel en netjes.',
    date: '2024-02-15',
  },
  {
    id: 2,
    name: 'Maria Jansen',
    location: 'Strijp',
    rating: 5,
    text: 'Perfect behangwerk en zeer klantvriendelijke service. Aanrader!',
    date: '2024-02-10',
  },
  {
    id: 3,
    name: 'Johan Smits',
    location: 'Woensel',
    rating: 5,
    text: 'Zeer tevreden met het buitenschilderwerk. Netjes en volgens planning uitgevoerd.',
    date: '2024-02-05',
  },
];

export function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

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
        <h2 className="text-4xl font-bold text-center text-white mb-4">Klantervaringen</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Ontdek wat onze klanten over ons zeggen
        </p>
        
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4">{review.text}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-gray-300">{review.location}</p>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="w-full flex-shrink-0 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
                  >
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-white mb-4">{review.text}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-white">{review.name}</p>
                        <p className="text-gray-300">{review.location}</p>
                      </div>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevSlide}
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?sca_esv=69dffed68e86d379&sxsrf=ADLYWIJQgcRUaBJEMFORl_sb0t9kHZukpw:1732823840631&q=schildersbedrijf040&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7nCjWHPS-_xjWmidtvM-_jFYi0U7pABYdmUvDI6XZVMrfchx8v0rHIc-nejfoSFktlSEMhQ%3D&uds=ADvngMgcma2krFDWAfXM9WWaYuEsn87kSgU8Mj2bLJ5dIwbgTEE6R0E6yB_9Lq_ekbUNY6EOt2Y497xmfzMmeSxK4zQBKbCWG6CDXVuJZ8IhZQMAjq0pTSQ&sa=X&ved=2ahUKEwi0merr5_-JAxUz8LsIHarIJYgQ3PALegQIGxAE&biw=1920&bih=953&dpr=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white hover:text-primary-300 transition-colors"
          >
            <span>Bekijk al onze Google Reviews</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}