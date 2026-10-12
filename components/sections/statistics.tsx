'use client'

import Image from 'next/image'
import { site } from '@/lib/site'

// Alleen verifieerbare feiten. "100+ projecten" pas tonen als Jordy het aantal bevestigt.
const stats = [
  { value: site.google.rating, label: `Google (${site.google.reviewCount} reviews)` },
  { value: site.werkspot.rating, label: 'op Werkspot' },
  { value: site.experience, label: 'ervaring' },
  { value: site.paintBrand, label: 'verf op elk project' },
]

export function Statistics() {
  return (
    <section id="statistieken" className="relative py-12 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=2000"
          alt="Schilderwerk achtergrond - statistieken"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-h-[120px] text-center"
            >
              <span className="text-5xl font-bold mb-2 font-bebas tracking-wide text-[#0088FF]">
                {stat.value}
              </span>
              <span className="text-white text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}