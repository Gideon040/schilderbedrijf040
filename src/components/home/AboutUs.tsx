import React from 'react';

export function AboutUs() {
  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Over Ons<br />
            <span className="text-primary-400">Schildersbedrijf</span> in Eindhoven
          </h2>
          <p className="text-gray-300 mb-6">
            Ons schildersbedrijf in Eindhoven draait om het leveren van de hoogste kwaliteit. 
            En dan bedoelen we niet alleen in ons (schilder)werk, maar ook in onze communicatie,
            betrouwbaarheid en flexibiliteit.
          </p>
          <p className="text-gray-300 mb-6">
            Wij doen er alles aan om ieder project tot een mooi einde te brengen. Schilderen is 
            ons vak en hierin bieden we volledige service. Hieronder valt het verven binnens- en 
            buitenshuis, (renovlies) behangen, wrappen, latex spuiten, houtherstel en we bieden 
            ook timmer- en stukadoors services.
          </p>
          <p className="text-gray-300">
            Wij zitten in Eindhoven en werken in heel Brabant en in Noord-Limburg. Mogen wij 
            binnenkort uw kleurrijke ideeën tot leven brengen?
          </p>
        </div>
      </div>
    </section>
  );
}