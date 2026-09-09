import type { Metadata } from 'next'
import { cityData } from './data'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react'
import { notFound } from 'next/navigation'

// Generate static params for all cities
export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }))
}

// Generate dynamic metadata for each city
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = params.city
  const data = cityData[city]

  if (!data) {
    return {
      title: 'Locatie niet gevonden',
    }
  }

  return {
    title: `Op zoek naar een schilder in ${data.displayName}? | Schildersbedrijf040`,
    description: `Schildersbedrijf040 is uw vakkundige schilder in ${data.displayName}. Binnenschilderwerk, buitenschilderwerk, behangen, lakwerk & houtrot sanering. ✓ Hoogst beoordeeld ✓ Gratis offerte.`,
    keywords: [
      `schilder ${data.displayName.toLowerCase()}`,
      `schildersbedrijf ${data.displayName.toLowerCase()}`,
      `binnenschilderwerk ${data.displayName.toLowerCase()}`,
      `buitenschilderwerk ${data.displayName.toLowerCase()}`,
      `houtrot sanering ${data.displayName.toLowerCase()}`,
      `schilderwerk ${data.displayName.toLowerCase()}`,
    ],
    openGraph: {
      title: `Op zoek naar een schilder in ${data.displayName}? | Schildersbedrijf040`,
      description: `Schildersbedrijf040 is uw vakkundige schilder in ${data.displayName}. Binnenschilderwerk, buitenschilderwerk, behangen, lakwerk & houtrot sanering. ✓ Hoogst beoordeeld ✓ Gratis offerte.`,
      url: `https://schildersbedrijf040.nl/locaties/${city}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://schildersbedrijf040.nl/locaties/${city}`,
    },
  }
}

// Star SVG component for reuse
function StarIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FACC15" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

// Google logo SVG
function GoogleLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

// Werkspot logo SVG
function WerkspotLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#FF6A00" />
      <path d="M7 12.5l3.5 3.5 7-7" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const city = params.city
  const data = cityData[city]

  if (!data) {
    notFound()
  }

  // PaintingContractor schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PaintingContractor',
    name: 'Schildersbedrijf040',
    image: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/schildersbedrijf040_logo_aqxhxr.png',
    '@id': `https://schildersbedrijf040.nl/locaties/${city}`,
    url: `https://schildersbedrijf040.nl/locaties/${city}`,
    telephone: '+31638903004',
    email: 'info@schildersbedrijf040.nl',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Straatsburglaan 26',
      addressLocality: 'Eindhoven',
      postalCode: '5627DB',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4334,
      longitude: 5.4834,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100064851917826',
      'https://www.instagram.com/schildersbedrijf040/',
    ],
    areaServed: {
      '@type': 'City',
      name: data.displayName,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '41',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Schilderdiensten in ${data.displayName}`,
      itemListElement: data.diensten.map((dienst) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: dienst.title,
          description: dienst.description,
          url: `https://schildersbedrijf040.nl/diensten/${dienst.slug}`,
        },
      })),
    },
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://schildersbedrijf040.nl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locaties',
        item: 'https://schildersbedrijf040.nl/locaties',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.displayName,
        item: `https://schildersbedrijf040.nl/locaties/${city}`,
      },
    ],
  }

  // FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const prijzen = [
    { dienst: 'Binnenschilderwerk', prijs: '€35 – €45 /uur' },
    { dienst: 'Buitenschilderwerk', prijs: '€40 – €55 /uur' },
    { dienst: 'Behangen', prijs: '€35 – €50 /uur' },
    { dienst: 'Houtrot sanering', prijs: '€45 – €55 /uur' },
    { dienst: 'Lakwerk', prijs: '€40 – €50 /uur' },
    { dienst: 'Latex spuiten', prijs: '€35 – €50 /uur' },
  ]

  const werkwijzeStappen = [
    {
      nummer: 1,
      titel: 'Contact',
      beschrijving: `Bel, mail of vul het formulier in voor een vrijblijvend gesprek over uw schilderproject in ${data.displayName}.`,
    },
    {
      nummer: 2,
      titel: 'Inspectie',
      beschrijving: `Wij komen langs bij uw woning in ${data.displayName} voor een inspectie en bespreking.`,
    },
    {
      nummer: 3,
      titel: 'Offerte',
      beschrijving: 'Binnen 48 uur een gedetailleerde offerte met vaste prijs — zonder verborgen kosten.',
    },
    {
      nummer: 4,
      titel: 'Uitvoering',
      beschrijving: 'Netjes, op tijd en samen controleren wij het eindresultaat.',
    },
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center bg-[#001B32] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={data.heroImage}
            alt={`Schildersbedrijf in ${data.displayName} — Schildersbedrijf040`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#001B32]/95 via-[#001B32]/60 to-[#0088FF]/15" />
        {/* Decorative glow */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,136,255,0.12)_0%,transparent_70%)] rounded-full blur-[60px]" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            <h1 className="font-bebas text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] mb-6 animate-fade-in-up">
              <span className="text-white">SCHILDER </span>
              <span className="text-[#0088FF] block">{data.displayName.toUpperCase()}</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-[560px] mb-10 animate-fade-in-up animation-delay-150">
              {data.intro}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,136,255,0.4)] hover:-translate-y-0.5"
              >
                GRATIS OFFERTE AANVRAGEN
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
              <a
                href="tel:+31638903004"
                className="border-[1.5px] border-white/25 bg-white/[0.04] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:border-white/50 hover:bg-white/[0.08] transition-all duration-250"
              >
                <Phone className="w-[18px] h-[18px]" />
                06-38903004
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-6 mt-10 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2.5">
                <GoogleLogo />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-sm text-gray-300 font-medium">5.0 — 41 reviews</span>
              </div>
              <div className="w-px h-7 bg-white/15" />
              <div className="flex items-center gap-2.5">
                <WerkspotLogo />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-sm text-gray-300 font-medium">4.9 — Topvakman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Diensten ── */}
      <section id="diensten" className="py-24 bg-[#F7F8FA]">
        <div className="container">
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
            Onze Expertise
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Schilderdiensten in {data.displayName}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Van binnenschilderwerk tot houtrot sanering — elk project wordt vakkundig uitgevoerd met Boonstoppel verf en jarenlange ervaring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 rounded-2xl overflow-hidden">
            {data.diensten.map((dienst, index) => (
              <Link
                key={index}
                href={`/diensten/${dienst.slug}`}
                className="group relative bg-white p-10 transition-all duration-350 hover:bg-[#001B32] overflow-hidden"
              >
                {/* Left accent border */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#0088FF] transition-all duration-400 group-hover:h-full" />
                <span className="block font-bebas text-4xl text-gray-200/50 leading-none mb-5 transition-all duration-350 group-hover:text-[#0088FF] group-hover:opacity-100">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bebas text-2xl mb-3 transition-colors duration-350 group-hover:text-white">
                  {dienst.title}
                </h3>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-6 transition-colors duration-350 group-hover:text-gray-300">
                  {dienst.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#0088FF] font-semibold text-sm transition-transform duration-300 group-hover:translate-x-1.5">
                  Meer informatie
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kosten ── */}
      <section id="kosten-schilder" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Transparante Prijzen
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Wat Kost een Schilder in {data.displayName}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {data.kosten}
              </p>
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-7 py-3.5 rounded-lg inline-flex items-center gap-2.5 font-bebas text-base tracking-wider hover:bg-[#006ACC] transition-all duration-250"
              >
                OFFERTE OP MAAT
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
              <div className="bg-gradient-to-br from-[#001B32] to-[#002B4F] px-8 py-7 flex justify-between items-center">
                <h3 className="font-bebas text-2xl text-white">Indicatie Tarieven</h3>
                <span className="bg-[#0088FF] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  2026
                </span>
              </div>
              {prijzen.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center px-8 py-[18px] text-[0.95rem] hover:bg-[#0088FF]/[0.04] transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F7F8FA]'
                  }`}
                >
                  <span className="text-gray-600">{item.dienst}</span>
                  <span className="font-bold text-[#001B32]">{item.prijs}</span>
                </div>
              ))}
              <div className="px-8 py-5 bg-[#F7F8FA] border-t border-gray-200">
                <p className="text-xs text-gray-400">
                  * Prijzen zijn indicatief. Altijd een offerte op maat voor uw woning in {data.displayName}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sfeerbeeld Banner (mid-page CTA) ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={`Schilderwerk in ${data.displayName}`}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#001B32]/[0.92] via-[#001B32]/70 to-[#0088FF]/20" />
        <div className="container relative z-10">
          <div className="max-w-xl">
            <span className="inline-block font-bebas text-sm tracking-[0.15em] text-gray-300 mb-3 uppercase">
              Vakmanschap Zichtbaar
            </span>
            <h2 className="font-bebas text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-tight mb-4">
              Resultaat Waar U Trots Op Bent
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Van voorbereiding tot de laatste kwaststreek — wij leveren schilderwerk dat jarenlang meegaat. Bekijk onze projecten of vraag direct een offerte aan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,136,255,0.4)] hover:-translate-y-0.5"
              >
                GRATIS OFFERTE
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="/projecten"
                className="border-[1.5px] border-white/25 bg-white/[0.04] text-white px-8 py-4 rounded-lg inline-flex items-center font-bebas text-lg tracking-wider hover:border-white/50 hover:bg-white/[0.08] transition-all duration-250"
              >
                BEKIJK PROJECTEN
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waarom Schildersbedrijf040 ── */}
      <section id="waarom-schildersbedrijf040" className="py-24 bg-[#F7F8FA]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Waarom Wij
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Waarom Schildersbedrijf040 in {data.displayName}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {data.waarom}
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { titel: 'Hoogst beoordeeld in de regio', beschrijving: '5 sterren op Google en 4,9 op Werkspot met 41+ beoordelingen.' },
                  { titel: 'Premium Boonstoppel verf', beschrijving: '8 tot 10 jaar bescherming — de beste keuze voor langdurig resultaat.' },
                  { titel: 'Garantie op elk project', beschrijving: 'Kwaliteitsgarantie op al het schilderwerk — u bent altijd verzekerd.' },
                  { titel: 'Korte reistijd — lage kosten', beschrijving: `Gevestigd in Eindhoven, minimale voorrijkosten voor ${data.displayName}.` },
                  { titel: `Kennis van lokale bouwstijlen`, beschrijving: `Ervaring met woningen in ${data.wijken.join(', ')}.` },
                ].map((usp, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start p-5 rounded-xl bg-white hover:bg-[#0088FF]/[0.06] transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0088FF] rounded-[10px] flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[0.95rem] mb-1">{usp.titel}</div>
                      <div className="text-gray-600 text-sm leading-relaxed">{usp.beschrijving}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* Google rating card */}
              <div className="p-9 rounded-2xl border border-gray-200 bg-white hover:border-[#0088FF] hover:shadow-[0_8px_40px_rgba(0,136,255,0.08)] transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="#FACC15">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-bebas text-2xl mb-2">5.0 op Google</h3>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                  &ldquo;Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <GoogleLogo />
                  Google Reviews — 41 beoordelingen
                </div>
              </div>

              {/* Werkspot rating card */}
              <div className="p-9 rounded-2xl border border-gray-200 bg-white hover:border-[#0088FF] hover:shadow-[0_8px_40px_rgba(0,136,255,0.08)] transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="#FACC15">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-bebas text-2xl mb-2">4.9 op Werkspot</h3>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                  &ldquo;Heel tevreden met het schilderwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <WerkspotLogo />
                  Werkspot — Topvakman
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Werkwijze ── */}
      <section id="werkwijze" className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
              Hoe wij werken
            </span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Onze Werkwijze in 4 Stappen
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              {data.werkwijze}
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-11 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#0088FF] via-gray-200 to-gray-200" />

            {werkwijzeStappen.map((stap, index) => (
              <div key={index} className="group relative text-center px-5">
                <div
                  className={`relative z-10 w-[88px] h-[88px] rounded-full mx-auto mb-6 flex items-center justify-center font-bebas text-[2rem] transition-all duration-350 ${
                    index === 0
                      ? 'bg-[#0088FF] text-white border-2 border-[#0088FF] shadow-[0_0_0_8px_rgba(0,136,255,0.12)]'
                      : 'bg-white text-gray-400 border-2 border-gray-200 group-hover:border-[#0088FF] group-hover:text-[#0088FF] group-hover:shadow-[0_0_0_8px_rgba(0,136,255,0.08)] group-hover:scale-[1.08]'
                  }`}
                >
                  {stap.nummer}
                </div>
                <h3 className="font-bebas text-xl mb-2">{stap.titel}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stap.beschrijving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Veelgestelde Vragen ── */}
      <section id="veelgestelde-vragen" className="py-24 bg-[#F7F8FA]">
        <div className="container">
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
            Veelgestelde Vragen
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Vragen over Schilderwerk in {data.displayName}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Staat uw vraag er niet bij? Neem gerust contact op — wij helpen u graag.
          </p>

          <div className="max-w-3xl flex flex-col gap-2">
            {data.faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:border-[#0088FF] open:shadow-[0_4px_24px_rgba(0,136,255,0.06)]"
              >
                <summary className="relative flex items-center justify-between cursor-pointer px-7 py-[22px] font-semibold text-[1.05rem] hover:bg-[#F7F8FA] transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {/* Blue left border on open */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0088FF] opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-7 pb-6">
                  <p className="text-gray-600 text-[0.95rem] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={`Contact Schildersbedrijf040 ${data.displayName}`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#001B32]/95 via-[#001B32]/85 to-[#001B32]/75" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Neem Contact Op
              </span>
              <h2 className="font-bebas text-[clamp(2.2rem,4vw,3rem)] text-white leading-tight mb-4">
                Klaar Voor een Frisse Start?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                {data.contact}
              </p>
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,136,255,0.4)] hover:-translate-y-0.5"
              >
                GRATIS OFFERTE AANVRAGEN
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+31638903004"
                className="group flex items-center gap-4 p-5 rounded-[14px] bg-white/[0.05] border border-white/[0.08] hover:bg-white/10 hover:border-[#0088FF]/30 hover:translate-x-1.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#0088FF]/[0.12] rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#0088FF]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Bel ons direct</div>
                  <div className="text-white font-semibold">06-38903004</div>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-500 group-hover:text-[#0088FF] group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <a
                href="mailto:info@schildersbedrijf040.nl"
                className="group flex items-center gap-4 p-5 rounded-[14px] bg-white/[0.05] border border-white/[0.08] hover:bg-white/10 hover:border-[#0088FF]/30 hover:translate-x-1.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#0088FF]/[0.12] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#0088FF]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Stuur een e-mail</div>
                  <div className="text-white font-semibold">info@schildersbedrijf040.nl</div>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-500 group-hover:text-[#0088FF] group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-[14px] bg-white/[0.05] border border-white/[0.08]">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0088FF]/[0.12] rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#0088FF]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Bereikbaarheid</div>
                  <div className="text-white font-semibold">Ma – Vr: 08:00 – 17:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
