'use client'

import Image from 'next/image'

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/buitenschilderwerk-vrijstaande-woning-wit.jpg"
          alt="Vrijstaande woning met wit geschilderde gevel en kozijnen"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">NEEM</span><br />
            <span className="text-[#0088FF]">CONTACT OP</span>
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            Heeft u vragen over onze diensten of wilt u een offerte aanvragen? Neem gerust contact met ons op. We staan klaar om u te helpen.
          </p>
        </div>
      </div>
    </section>
  )
}