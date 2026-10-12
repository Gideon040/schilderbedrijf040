'use client'

import Image from 'next/image'

export function About() {
  return (
    <section id="over-ons" className="relative py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.55.12_amqj6v.jpg"
          alt="Professional painting tools"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="over-schildersbedrijf040" className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-white">OVER SCHILDERSBEDRIJF040</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-primary">
            SCHILDERSBEDRIJF IN EINDHOVEN
          </h3>

          <div className="space-y-6 text-gray-200">
            <p className="leading-relaxed">
              Schildersbedrijf040 is opgericht door Jordy Jacobs en heeft meer dan vijf jaar
              ervaring als schildersbedrijf in Eindhoven. Kwaliteit draait bij
              Schildersbedrijf040 niet alleen om het schilderwerk zelf, maar ook om heldere
              communicatie, betrouwbaarheid en flexibele planning.
            </p>

            <p className="leading-relaxed">
              Het team van Schildersbedrijf040 voert binnenschilderwerk, buitenschilderwerk,
              behangen, lakwerk, latex spuiten en houtrot sanering uit. Schildersbedrijf040
              werkt uitsluitend met Boonstoppel verf, verf die 8 tot 10 jaar
              meegaat in plaats van de 3 tot 5 jaar van budgetverf.
            </p>

            <p className="leading-relaxed">
              Schildersbedrijf040 is gevestigd in Eindhoven en werkt in heel Noord-Brabant.
              Mogen wij binnenkort uw kleurrijke ideeën tot leven brengen?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}