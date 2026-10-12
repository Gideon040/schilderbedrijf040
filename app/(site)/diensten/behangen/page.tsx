import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { prijzen as prijsTabel } from '@/lib/prices'
import { orgRef, serviceOffers } from '@/lib/schema'
import { ChevronDown, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Behangen Eindhoven | Vliesbehang, Glasvezel & Fotobehang Vakkundig Aangebracht',
  description: 'Behangen door Schildersbedrijf040 in Eindhoven. Vliesbehang, glasvezelbehang en fotobehang professioneel aangebracht. ✓ Hoogst beoordeeld ✓ Gratis offerte.',
  keywords: [
    'behangen eindhoven',
    'behanger eindhoven',
    'vliesbehang eindhoven',
    'glasvezelbehang eindhoven',
    'fotobehang eindhoven',
    'behangen kosten',
    'schildersbedrijf eindhoven',
  ],
  openGraph: {
    title: 'Behangen Eindhoven | Schildersbedrijf040',
    description: 'Professioneel behangen in Eindhoven en omgeving. Vliesbehang, glasvezelbehang en fotobehang vakkundig aangebracht door Schildersbedrijf040.',
    url: 'https://schildersbedrijf040.nl/diensten/behangen',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/behangen',
  },
}

const heroImage = '/images/behangen-woonkamer-accentwand-rond-haard.jpg'

// Star SVG component
function StarIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FACC15" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

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

function WerkspotLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#FF6A00" />
      <path d="M7 12.5l3.5 3.5 7-7" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function BehangenPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/behangen/#service',
    name: 'Behangen',
    description: 'Professioneel behangen voor woningen en bedrijfspanden in Eindhoven en omgeving. Vliesbehang, glasvezelbehang en fotobehang vakkundig aangebracht door Schildersbedrijf040.',
    provider: orgRef,
    areaServed: [
      { '@type': 'City', name: 'Eindhoven' },
      { '@type': 'City', name: 'Veldhoven' },
      { '@type': 'City', name: 'Waalre' },
      { '@type': 'City', name: 'Best' },
      { '@type': 'City', name: 'Nuenen' },
      { '@type': 'City', name: 'Geldrop' },
      { '@type': 'City', name: 'Helmond' },
    ],
    serviceType: 'Behangen',
    offers: serviceOffers('behangen'),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Behangdiensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Vliesbehang aanbrengen' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Glasvezelbehang aanbrengen' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Fotobehang plaatsen' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Oud behang verwijderen' },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
      { '@type': 'ListItem', position: 2, name: 'Behangen', item: 'https://schildersbedrijf040.nl/diensten/behangen' },
    ],
  }

  const faqs = [
    {
      question: 'Wat kost behangen per m² in Eindhoven?',
      answer: 'Behangen kost gemiddeld €15 tot €30 per m², inclusief materiaal en exclusief btw. De prijs hangt af van het type behang: vliesbehang aanbrengen kost €15 tot €25 per m², terwijl fotobehang plaatsen uitkomt op €25 tot €40 per m² vanwege het nauwkeurige paswerk. Schildersbedrijf040 hanteert een uurtarief van €35 tot €50 voor behangwerk. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9% in plaats van 21%.',
    },
    {
      question: 'Welk type behang is het beste voor mijn woning?',
      answer: 'Vliesbehang is de populairste keuze voor woningen in Eindhoven omdat vliesbehang eenvoudig te verwerken is, niet krimpt en scheuren in de ondergrond overbrugt. Voor ruimtes met veel slijtage, zoals hallen en kinderkamers, adviseert Schildersbedrijf040 glasvezelbehang, omdat glasvezelbehang het meest duurzaam is en meerdere keren overschilderd kan worden. Fotobehang is ideaal als accentwand in woon- of slaapkamers.',
    },
    {
      question: 'Moet oud behang eerst verwijderd worden?',
      answer: 'In de meeste gevallen verwijdert Schildersbedrijf040 het oude behang volledig voordat nieuw behang wordt aangebracht. Oud behang dat loslaat of blaasjes vertoont, veroorzaakt oneffenheden onder het nieuwe behang. Het verwijderen van oud behang kost €5 tot €10 per m². Bij vliesbehang kan de vlieslaag soms als ondergrond blijven zitten als deze nog goed hecht. Schildersbedrijf040 beoordeelt dat tijdens de inspectie.',
    },
    {
      question: 'Hoe lang duurt het behangen van een kamer?',
      answer: 'Een gemiddelde kamer van 20 m² wandoppervlak behangen duurt 1 tot 2 werkdagen, afhankelijk van het type behang en de staat van de muren. Vliesbehang aanbrengen gaat sneller dan fotobehang, omdat fotobehang millimeternauwkeurig uitgelijnd moet worden. Schildersbedrijf040 plant het behangwerk efficiënt: terwijl de lijm intrekt op de ene baan, wordt de volgende baan op maat gesneden.',
    },
    {
      question: 'Kan Schildersbedrijf040 ook glasvezelbehang aanbrengen en overschilderen?',
      answer: 'Schildersbedrijf040 brengt glasvezelbehang aan en schildert het vervolgens af in elke gewenste kleur. Glasvezelbehang is het meest duurzame behangtype: glasvezelbehang gaat 20 tot 30 jaar mee en kan tot 10 keer overschilderd worden. Dat maakt glasvezelbehang een uitstekende keuze voor verhuurders en woningeigenaren die regelmatig van kleur willen wisselen zonder opnieuw te hoeven behangen.',
    },
    {
      question: 'Moet de muur voorbehandeld worden voor behangen?',
      answer: 'Een goede ondergrond is essentieel voor behangwerk dat jarenlang blijft zitten. Schildersbedrijf040 behandelt de muren voor met een grondlaag die de zuiging van de muur reguleert en de hechting van het behang verbetert. Scheuren worden gevuld, oneffenheden geschuurd en de muur wordt stofvrij gemaakt. Het voorbehandelen van muren kost €8 tot €12 per m² en voorkomt dat het behang loslaat of blaasjes vormt.',
    },
    {
      question: 'Wat is het verschil tussen vliesbehang en vinylbehang?',
      answer: 'Vliesbehang heeft een vliesdrager die direct op de muur gelijmd wordt, de lijm gaat op de muur, niet op het behang. Dat maakt vliesbehang makkelijker te verwerken en voorkomt krimpen. Vinylbehang heeft een kunststof toplaag die vochtbestendig en afwasbaar is, waardoor vinylbehang geschikt is voor keukens en badkamers. Schildersbedrijf040 adviseert het juiste behangtype op basis van de ruimte en het gewenste gebruik.',
    },
    {
      question: 'Geeft Schildersbedrijf040 garantie op behangwerk?',
      answer: 'Schildersbedrijf040 geeft garantie op al het uitgevoerde behangwerk. De garantie dekt zowel het vakmanschap, correcte hechting, strakke naden, naadloos patroonverloop, als de voorbereiding van de ondergrond. Mocht er onverhoopt een naad loslaten of een blaasje ontstaan, dan herstelt Schildersbedrijf040 het kosteloos. Door professionele voorbereiding en het gebruik van kwalitatieve behanglijm is de kans op problemen minimaal.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const prijzen = prijsTabel['behangen'].map((r) => ({ dienst: r.wat, prijs: r.prijs }))

  const werkwijzeStappen = [
    {
      nummer: 1,
      titel: 'Inspectie & Advies',
      beschrijving: 'Schildersbedrijf040 beoordeelt de staat van de muren, bespreekt uw wensen qua behangtype en geeft advies over vliesbehang, glasvezelbehang of fotobehang.',
    },
    {
      nummer: 2,
      titel: 'Offerte op Maat',
      beschrijving: 'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs, inclusief behang, lijm, voorbehandeling en arbeidskosten.',
    },
    {
      nummer: 3,
      titel: 'Voorbereiding',
      beschrijving: 'Oud behang verwijderen, muren gladmaken, scheuren vullen en een grondlaag aanbrengen, de basis voor behangwerk dat jarenlang blijft zitten.',
    },
    {
      nummer: 4,
      titel: 'Behangen & Oplevering',
      beschrijving: 'Vakkundig aanbrengen van het behang met strakke naden en naadloos patroonverloop, controle samen met u en een netjes achtergelaten werkplek.',
    },
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center bg-[#0B1B30] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={heroImage}
            alt="Professioneel behangen in Eindhoven, vliesbehang vakkundig aangebracht door Schildersbedrijf040"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0B1B30]/95 via-[#0B1B30]/60 to-[#1668E3]/15" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(22,104,227,0.12)_0%,transparent_70%)] rounded-full blur-[60px]" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            <h1 className="font-bebas text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] mb-6 animate-fade-in-up">
              <span className="text-white">PROFESSIONEEL</span>
              <span className="text-[#1668E3] block">BEHANGEN</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-[560px] mb-10 animate-fade-in-up animation-delay-150">
              Behangen door Schildersbedrijf040 geeft uw woning in Eindhoven en omgeving een compleet nieuwe uitstraling. Van vliesbehang en glasvezelbehang tot fotobehang. Schildersbedrijf040 brengt elk behangtype vakkundig aan met strakke naden en een duurzaam resultaat.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="bg-[#1668E3] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#0F56C2] transition-all duration-250 shadow-[0_4px_24px_rgba(22,104,227,0.3)] hover:shadow-[0_8px_32px_rgba(22,104,227,0.4)] hover:-translate-y-0.5"
              >
                Gratis offerte aanvragen
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
              <a
                href="tel:+31638903004"
                className="border-[1.5px] border-white/25 bg-white/[0.04] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:border-white/50 hover:bg-white/[0.08] transition-all duration-250"
              >
                <Phone className="w-[18px] h-[18px]" />
                Bel 06-38903004
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
                <span className="text-sm text-gray-300 font-medium">5,0 uit 41 reviews</span>
              </div>
              <div className="w-px h-7 bg-white/15" />
              <div className="flex items-center gap-2.5">
                <WerkspotLogo />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-sm text-gray-300 font-medium">4,9 op Werkspot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wat is Professioneel Behangen ── */}
      <section id="wat-is-professioneel-behangen" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#1668E3] mb-3 uppercase">
                Onze Expertise
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
                Wat is Professioneel Behangen?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Behangen is het vakkundig aanbrengen van wandbekleding, van vliesbehang en glasvezelbehang tot fotobehang en textiel, op muren en plafonds in woningen en bedrijfspanden. Professioneel behangen verschilt van zelf behangen doordat de voorbereiding van de ondergrond en het nauwkeurige uitlijnen van patronen het verschil maken tussen een resultaat dat 15 jaar meegaat en behangwerk dat na 2 jaar loslaat of blaasjes vertoont.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 voert behangwerk uit voor woningen, appartementen en bedrijfspanden in Eindhoven en omgeving. Of het gaat om een accentwand met fotobehang of een volledige woning met vliesbehang, elk behangproject begint met een inspectie van de ondergrond, advies over het juiste behangtype en een gedetailleerde offerte met vaste prijs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Naast het esthetische aspect biedt behang praktische voordelen: vliesbehang overbrugt hairline scheuren in de ondergrond, glasvezelbehang versterkt kwetsbare muren en vinylbehang is vochtbestendig en afwasbaar. Behangen is daarmee niet alleen een stijlkeuze, maar ook een functionele investering in het onderhoud van uw woning.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Professioneel behangen door Schildersbedrijf040, vliesbehang aangebracht in Eindhoven"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Levensduur vliesbehang', waarde: '15 tot 20 jaar' },
                  { label: 'Glasvezel overschilderbaar', waarde: '10x' },
                  { label: 'Prijs per m²', waarde: '€15 tot €30' },
                  { label: 'BTW woningen 2+ jaar', waarde: '9%' },
                ].map((item, index) => (
                  <div key={index} className="bg-[#F5F3EF] rounded-xl p-5 text-center">
                    <div className="font-bebas text-2xl text-[#1668E3] mb-1">{item.waarde}</div>
                    <div className="text-gray-500 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Soorten Behang ── */}
      <section id="soorten-behang" className="py-24 bg-[#F5F3EF]">
        <div className="container">
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#1668E3] mb-3 uppercase">
            Behangtypen
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Soorten Behang
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Elk behangtype heeft unieke eigenschappen die passen bij specifieke ruimtes en wensen. Schildersbedrijf040 adviseert het juiste behang op basis van uw situatie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 rounded-2xl overflow-hidden">
            {[
              {
                nummer: '01',
                titel: 'Vliesbehang',
                beschrijving: 'Vliesbehang is de populairste keuze voor woningen in Eindhoven. De vliesdrager maakt vliesbehang dimensioneel stabiel, vliesbehang krimpt niet, scheurt niet en overbrugt kleine scheuren in de ondergrond. De behanglijm wordt direct op de muur aangebracht in plaats van op het behang, waardoor vliesbehang sneller en schoner te verwerken is. Schildersbedrijf040 brengt vliesbehang aan vanaf €15 per m².',
                link: '/contact',
                linkTekst: 'Offerte vliesbehang',
              },
              {
                nummer: '02',
                titel: 'Glasvezelbehang',
                beschrijving: 'Glasvezelbehang is het meest duurzame behangtype dat Schildersbedrijf040 aanbrengt. Glasvezelbehang is geweven uit glasvezels, waardoor glasvezelbehang extreem sterk is en muren versterkt tegen scheuren en beschadigingen. Het grootste voordeel van glasvezelbehang is de overschilderbaarheid: tot 10 keer een nieuwe kleur aanbrengen zonder opnieuw te behangen. Ideaal voor verhuurders en woningen met intensief gebruik.',
                link: '/diensten/binnenschilderwerk',
                linkTekst: 'Combineer met schilderwerk',
              },
              {
                nummer: '03',
                titel: 'Vinylbehang',
                beschrijving: 'Vinylbehang heeft een kunststof toplaag die vochtbestendig, afwasbaar en slijtvast is. Dat maakt vinylbehang bijzonder geschikt voor keukens, badkamers en kinderkamers, ruimtes waar muren vaker vuil worden of in contact komen met vocht. Schildersbedrijf040 brengt vinylbehang professioneel aan, inclusief het zorgvuldig afwerken rond stopcontacten, ramen en hoeken.',
                link: '/contact',
                linkTekst: 'Vraag advies aan',
              },
              {
                nummer: '04',
                titel: 'Fotobehang',
                beschrijving: 'Fotobehang creëert een unieke accentwand met een fotografisch beeld, patroon of kunstwerk op groot formaat. Fotobehang vereist millimeternauwkeurig paswerk om de banen naadloos op elkaar aan te laten sluiten. Schildersbedrijf040 heeft ruime ervaring met het plaatsen van fotobehang en zorgt voor een vlekkeloos eindresultaat, zonder zichtbare naden of verschuivingen in het beeld.',
                link: '/projecten',
                linkTekst: 'Bekijk projecten',
              },
              {
                nummer: '05',
                titel: 'Textiel & Natuurbehang',
                beschrijving: 'Textiel- en natuurbehang, zoals jute, linnen, bamboe en gras, geeft muren een warme, organische uitstraling met een tactiele structuur. Natuurbehang is een premium keuze die sfeer toevoegt aan woon- en slaapkamers. Schildersbedrijf040 verwerkt textiel- en natuurbehang met speciale lijm en techniek, omdat natuurlijke materialen gevoeliger zijn voor vocht en vlekken tijdens het aanbrengen.',
                link: '/contact',
                linkTekst: 'Vraag offerte aan',
              },
              {
                nummer: '06',
                titel: 'Overschilderbaar Behang',
                beschrijving: 'Overschilderbaar behang combineert de voordelen van behang en verf: de structuur en scheuroverbrugging van behang met de kleurvrijheid van schilderwerk. Schildersbedrijf040 brengt overschilderbaar behang aan en schildert het af in elke gewenste kleur met hoogwaardige muurverf. Een praktische oplossing voor muren met veel scheuren of oneffenheden die met alleen verf niet weg te werken zijn.',
                link: '/diensten/latex-spuiten',
                linkTekst: 'Bekijk latex spuiten',
              },
            ].map((dienst, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 transition-all duration-350 hover:bg-[#0B1B30] overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#1668E3] transition-all duration-400 group-hover:h-full" />
                <span className="block font-bebas text-4xl text-gray-200/50 leading-none mb-5 transition-all duration-350 group-hover:text-[#1668E3] group-hover:opacity-100">
                  {dienst.nummer}
                </span>
                <h3 id={`behang-${dienst.titel.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`} className="font-bebas text-2xl mb-3 transition-colors duration-350 group-hover:text-white">
                  {dienst.titel}
                </h3>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-6 transition-colors duration-350 group-hover:text-gray-300">
                  {dienst.beschrijving}
                </p>
                <Link
                  href={dienst.link}
                  className="inline-flex items-center gap-2 text-[#1668E3] font-semibold text-sm transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  {dienst.linkTekst}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kosten Behangen ── */}
      <section id="kosten-behangen" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#1668E3] mb-3 uppercase">
                Transparante Prijzen
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Wat Kost Behangen?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Behangen kost gemiddeld €15 tot €30 per m² inclusief materiaal en exclusief btw. De uiteindelijke prijs hangt af van het type behang, de staat van de ondergrond en of oud behang verwijderd moet worden. Vliesbehang aanbrengen is voordeliger per m² dan fotobehang, omdat fotobehang meer voorbereidingstijd en nauwkeurig paswerk vereist.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 hanteert een uurtarief van €35 tot €50 voor behangwerk, inclusief materiaal. Voor woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%, wat een merkbaar verschil maakt op de eindfactuur. Bij een behangproject van €1.500 bespaart u daarmee bijna €180 ten opzichte van het standaard btw-tarief van 21%.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Schildersbedrijf040 werkt altijd met een vaste offerte, geen verrassingen achteraf. De investering in professioneel behangen betaalt zich terug: vakkundig aangebracht vliesbehang gaat 15 tot 20 jaar mee, terwijl zelf aangebracht behang vaak al na 5 jaar loslaat door onjuiste voorbereiding of verkeerde lijm.
              </p>
              <Link
                href="/contact"
                className="bg-[#1668E3] text-white px-7 py-3.5 rounded-lg inline-flex items-center gap-2.5 font-bebas text-base tracking-wider hover:bg-[#0F56C2] transition-all duration-250"
              >
                Gratis offerte aanvragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
              <div className="bg-gradient-to-br from-[#0B1B30] to-[#13294A] px-8 py-7 flex justify-between items-center">
                <h3 className="font-bebas text-2xl text-white">Indicatie Prijzen</h3>
                <span className="bg-[#1668E3] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  2026
                </span>
              </div>
              {prijzen.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center px-8 py-[18px] text-[0.95rem] hover:bg-[#1668E3]/[0.04] transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F5F3EF]'
                  }`}
                >
                  <span className="text-gray-600">{item.dienst}</span>
                  <span className="font-bold text-[#0B1B30]">{item.prijs}</span>
                </div>
              ))}
              <div className="px-8 py-5 bg-[#F5F3EF] border-t border-gray-200">
                <p className="text-xs text-gray-400">
                  * Prijzen zijn indicatief, inclusief materiaal, exclusief btw. Altijd een offerte op maat.
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
            src={heroImage}
            alt="Behangwerk resultaat, vakkundig aangebracht vliesbehang door Schildersbedrijf040"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B30]/[0.92] via-[#0B1B30]/70 to-[#1668E3]/20" />
        <div className="container relative z-10">
          <div className="max-w-xl">
            <span className="inline-block font-bebas text-sm tracking-[0.15em] text-gray-300 mb-3 uppercase">
              Vakmanschap Zichtbaar
            </span>
            <h2 className="font-bebas text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-tight mb-4">
              Behangwerk Waar U Trots Op Bent
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Van het verwijderen van oud behang tot de laatste baan. Schildersbedrijf040 levert behangwerk dat jarenlang meegaat. Bekijk onze projecten of vraag direct een offerte aan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#1668E3] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#0F56C2] transition-all duration-250 shadow-[0_4px_24px_rgba(22,104,227,0.3)] hover:shadow-[0_8px_32px_rgba(22,104,227,0.4)] hover:-translate-y-0.5"
              >
                Gratis offerte aanvragen
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

      {/* ── Werkwijze ── */}
      <section id="werkwijze-behangen" className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#1668E3] mb-3 uppercase">
              Hoe Wij Werken
            </span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Ons Werkproces in 4 Stappen
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Elk behangproject bij Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            <div className="hidden lg:block absolute top-11 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#1668E3] via-gray-200 to-gray-200" />

            {werkwijzeStappen.map((stap, index) => (
              <div key={index} className="group relative text-center px-5">
                <div
                  className={`relative z-10 w-[88px] h-[88px] rounded-full mx-auto mb-6 flex items-center justify-center font-bebas text-[2rem] transition-all duration-350 ${
                    index === 0
                      ? 'bg-[#1668E3] text-white border-2 border-[#1668E3] shadow-[0_0_0_8px_rgba(22,104,227,0.12)]'
                      : 'bg-white text-gray-400 border-2 border-gray-200 group-hover:border-[#1668E3] group-hover:text-[#1668E3] group-hover:shadow-[0_0_0_8px_rgba(22,104,227,0.08)] group-hover:scale-[1.08]'
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

      {/* ── Waarom Schildersbedrijf040 ── */}
      <section id="waarom-schildersbedrijf040" className="py-24 bg-[#F5F3EF]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#1668E3] mb-3 uppercase">
                Waarom Wij
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Waarom Schildersbedrijf040 voor Uw Behangwerk?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Schildersbedrijf040 onderscheidt zich door vakmanschap, transparantie en persoonlijke betrokkenheid bij elk behangproject. Eigenaar Jordy Jacobs is aanwezig bij de inspectie en eindcontrole, dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { titel: 'Hoogst beoordeeld in de regio', beschrijving: '5 sterren op Google en 4,9 op Werkspot, gebaseerd op 60+ beoordelingen van woningeigenaren in Eindhoven en omgeving.' },
                  { titel: 'Advies over het juiste behangtype', beschrijving: 'Vliesbehang, glasvezelbehang, fotobehang of vinylbehang. Schildersbedrijf040 adviseert op basis van de ruimte, het gebruik en uw budget.' },
                  { titel: 'Vaste prijs, geen verrassingen', beschrijving: 'Gedetailleerde offerte binnen 48 uur met vaste prijs. Inclusief behang, lijm, voorbehandeling en oplevering.' },
                  { titel: 'Zorgvuldige voorbereiding', beschrijving: 'Oud behang verwijderen, muren gladmaken en gronden, de basis voor behangwerk dat 15 tot 20 jaar blijft zitten.' },
                  { titel: 'Persoonlijke betrokkenheid', beschrijving: 'Eigenaar Jordy Jacobs is bij elk project betrokken, u hebt altijd een vast aanspreekpunt dat uw wensen kent.' },
                ].map((usp, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start p-5 rounded-xl bg-white hover:bg-[#1668E3]/[0.06] transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1668E3] rounded-[10px] flex items-center justify-center">
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
              <div className="p-9 rounded-2xl border border-gray-200 bg-white hover:border-[#1668E3] hover:shadow-[0_8px_40px_rgba(22,104,227,0.08)] transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="#FACC15">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-bebas text-2xl mb-2">5.0 op Google</h3>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                  &ldquo;Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader voor behangwerk.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <GoogleLogo />
                  Google Reviews: 41 beoordelingen
                </div>
              </div>

              {/* Werkspot rating card */}
              <div className="p-9 rounded-2xl border border-gray-200 bg-white hover:border-[#1668E3] hover:shadow-[0_8px_40px_rgba(22,104,227,0.08)] transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="#FACC15">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-bebas text-2xl mb-2">4.9 op Werkspot</h3>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                  &ldquo;Heel tevreden met het behangwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd. Aanrader!&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <WerkspotLogo />
                  Werkspot: Topvakman
                </div>
              </div>

              {/* Werkgebied link */}
              <div className="p-7 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bebas text-xl mb-3">Behangen in Uw Regio</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Schildersbedrijf040 voert behangwerk uit in Eindhoven en omliggende gemeenten.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { naam: 'Veldhoven', slug: 'veldhoven' },
                    { naam: 'Waalre', slug: 'waalre' },
                    { naam: 'Best', slug: 'best' },
                    { naam: 'Nuenen', slug: 'nuenen' },
                    { naam: 'Geldrop', slug: 'geldrop' },
                    { naam: 'Helmond', slug: 'helmond' },
                    { naam: 'Son en Breugel', slug: 'son-en-breugel' },
                  ].map((locatie) => (
                    <Link
                      key={locatie.slug}
                      href={`/locaties/${locatie.slug}`}
                      className="text-sm px-3 py-1.5 rounded-lg bg-[#F5F3EF] text-gray-600 hover:bg-[#1668E3]/10 hover:text-[#1668E3] transition-colors"
                    >
                      {locatie.naam}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Veelgestelde Vragen ── */}
      <section id="veelgestelde-vragen" className="py-24">
        <div className="container">
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#1668E3] mb-3 uppercase">
            Veelgestelde Vragen
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Vragen over Behangen
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Staat uw vraag er niet bij? Neem gerust contact op. Schildersbedrijf040 helpt u graag verder.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden relative h-[280px]">
                <Image
                  src="/images/binnenschilderwerk-lambrisering-horeca-eindhoven.jpg"
                  alt="Behangwerk resultaat, professioneel aangebracht behang door Schildersbedrijf040 in Eindhoven"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#F5F3EF] rounded-2xl p-8">
                <h3 className="font-bebas text-xl mb-3">Nog vragen?</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Schildersbedrijf040 beantwoordt al uw vragen over behangen. Bel of mail voor persoonlijk advies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+31638903004"
                    className="bg-[#1668E3] text-white px-5 py-2.5 rounded-lg inline-flex items-center gap-2 font-bebas text-sm tracking-wider hover:bg-[#0F56C2] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Bel 06-38903004
                  </a>
                  <Link
                    href="/contact"
                    className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg inline-flex items-center gap-2 font-bebas text-sm tracking-wider hover:border-[#1668E3] hover:text-[#1668E3] transition-colors"
                  >
                    Gratis offerte aanvragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: FAQ accordion */}
            <div className="flex flex-col gap-2">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:border-[#1668E3] open:shadow-[0_4px_24px_rgba(22,104,227,0.06)]"
                >
                  <summary className="relative flex items-center justify-between cursor-pointer px-7 py-[22px] font-semibold text-[1.05rem] hover:bg-[#F5F3EF] transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1668E3] opacity-0 group-open:opacity-100 transition-opacity duration-300" />
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
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Contact Schildersbedrijf040 voor professioneel behangen"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B30]/95 via-[#0B1B30]/85 to-[#0B1B30]/75" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#1668E3] mb-3 uppercase">
                Neem Contact Op
              </span>
              <h2 className="font-bebas text-[clamp(2.2rem,4vw,3rem)] text-white leading-tight mb-4">
                Klaar voor een Nieuwe Wand?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Wilt u weten wat professioneel behangen voor uw woning kost? Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.
              </p>
              <Link
                href="/contact"
                className="bg-[#1668E3] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#0F56C2] transition-all duration-250 shadow-[0_4px_24px_rgba(22,104,227,0.3)] hover:shadow-[0_8px_32px_rgba(22,104,227,0.4)] hover:-translate-y-0.5"
              >
                Gratis offerte aanvragen
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+31638903004"
                className="group flex items-center gap-4 p-5 rounded-[14px] bg-white/[0.05] border border-white/[0.08] hover:bg-white/10 hover:border-[#1668E3]/30 hover:translate-x-1.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#1668E3]/[0.12] rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#1668E3]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Bel ons direct</div>
                  <div className="text-white font-semibold">06-38903004</div>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-500 group-hover:text-[#1668E3] group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <a
                href="mailto:info@schildersbedrijf040.nl"
                className="group flex items-center gap-4 p-5 rounded-[14px] bg-white/[0.05] border border-white/[0.08] hover:bg-white/10 hover:border-[#1668E3]/30 hover:translate-x-1.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#1668E3]/[0.12] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#1668E3]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Stuur een e-mail</div>
                  <div className="text-white font-semibold">info@schildersbedrijf040.nl</div>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-500 group-hover:text-[#1668E3] group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-[14px] bg-white/[0.05] border border-white/[0.08]">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1668E3]/[0.12] rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#1668E3]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Bereikbaarheid</div>
                  <div className="text-white font-semibold">Ma t/m vr: 08:00 tot 17:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
