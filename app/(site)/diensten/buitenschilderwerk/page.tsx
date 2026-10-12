import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { prijzen as prijsTabel } from '@/lib/prices'
import { orgRef, serviceOffers } from '@/lib/schema'
import { ChevronDown, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Buitenschilderwerk Eindhoven | Gevels, Kozijnen & Deuren Duurzaam Geschilderd',
  description: 'Buitenschilderwerk door Schildersbedrijf040 in Eindhoven. Gevels, kozijnen en deuren beschermd met Boonstoppel verf. ✓ Houtrot inspectie ✓ Hoogst beoordeeld ✓ Gratis offerte.',
  keywords: [
    'buitenschilderwerk eindhoven',
    'buitenschilder eindhoven',
    'kozijnen schilderen buiten',
    'gevel schilderen',
    'schildersbedrijf eindhoven',
    'buitenschilderwerk kosten',
    'houtwerk schilderen buiten',
  ],
  openGraph: {
    title: 'Buitenschilderwerk Eindhoven | Schildersbedrijf040',
    description: 'Professioneel buitenschilderwerk in Eindhoven en omgeving. Gevels, kozijnen en deuren duurzaam beschermd met Boonstoppel verf.',
    url: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk',
  },
}

const heroImage = '/images/buitenschilderwerk-tuinhuis-wit-geschilderd.jpg'

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

export default function BuitenschilderwerkPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk/#service',
    name: 'Buitenschilderwerk',
    description: 'Professioneel buitenschilderwerk voor woningen en bedrijfspanden in Eindhoven en omgeving. Gevels, kozijnen en deuren duurzaam beschermd met Boonstoppel verf.',
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
    serviceType: 'Buitenschilderwerk',
    offers: serviceOffers('buitenschilderwerk'),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Buitenschilderwerk diensten',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gevels schilderen' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kozijnen en deuren schilderen' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Houtrot inspectie en behandeling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boeiboorden en windveren schilderen' } },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
      { '@type': 'ListItem', position: 2, name: 'Buitenschilderwerk', item: 'https://schildersbedrijf040.nl/diensten/buitenschilderwerk' },
    ],
  }

  const faqs = [
    {
      question: 'Wat kost buitenschilderwerk per m² in 2026?',
      answer: 'Buitenschilderwerk kost gemiddeld €35 tot €45 per m² inclusief materiaal en exclusief btw. Kozijnen schilderen buiten kost €50 tot €100 per kozijn, afhankelijk van de staat en het formaat. Schildersbedrijf040 hanteert een uurtarief van €40 tot €55 voor buitenschilderwerk. Voor woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%. Schildersbedrijf040 werkt altijd met een vaste offerte, zodat u vooraf precies weet wat het buitenschilderwerk kost.',
    },
    {
      question: 'Wanneer is het beste seizoen voor buitenschilderwerk?',
      answer: 'De ideale periode voor buitenschilderwerk is mei, juni en september, wanneer de temperatuur stabiel tussen 15°C en 25°C ligt. Buitenverf hecht en droogt optimaal bij 18 tot 20°C en een luchtvochtigheid onder 85%. Is het kouder dan 10°C, dan vertraagt het droogproces en hecht de verf minder goed. Is het warmer dan 25°C, dan droogt de verf te snel, wat strepen of blaasjes kan veroorzaken. Schildersbedrijf040 plant buitenschilderwerk altijd in de juiste weersomstandigheden.',
    },
    {
      question: 'Hoe lang gaat buitenschilderwerk mee?',
      answer: 'Professioneel buitenschilderwerk met Boonstoppel verf gaat 8 tot 10 jaar mee. Budgetverf houdt gemiddeld 3 tot 5 jaar, waardoor u vaker moet laten schilderen en de totale kosten hoger uitvallen. De levensduur hangt ook af van de ligging van het houtwerk: kozijnen op het zuiden en westen krijgen meer zon en regen, waardoor de verf daar sneller slijt. Schildersbedrijf040 houdt hier rekening mee door op belaste delen een extra verflaag aan te brengen.',
    },
    {
      question: 'Controleert Schildersbedrijf040 op houtrot voor het schilderen?',
      answer: 'Schildersbedrijf040 voert bij elk buitenschilderproject een grondige houtrot inspectie uit. Houtrot wordt ontdekt door het houtwerk systematisch af te tikken en te prikken met een priem. Aangetast hout wordt uitgefreesd, behandeld met houtharder en opgebouwd met epoxy. Pas daarna wordt het geschilderd. Zonder deze stap verbergt de verf het probleem, terwijl de houtrot onder de verflaag verder vreet en het kozijn uiteindelijk vervangen moet worden.',
    },
    {
      question: 'Is steigerhuur inbegrepen in de offerte?',
      answer: 'Schildersbedrijf040 vermeldt steiger- of ladderkosten altijd apart in de offerte, zodat u precies weet waar de kosten zitten. Voor de meeste eengezinswoningen volstaan professionele ladders en een werkplatform. Bij hogere gevels, dakkapellen of moeilijk bereikbare delen kan een steiger nodig zijn. Schildersbedrijf040 beoordeelt dit tijdens de inspectie en adviseert over de meest kostenefficiënte oplossing.',
    },
    {
      question: 'Welke verf gebruikt Schildersbedrijf040 voor buitenschilderwerk?',
      answer: 'Schildersbedrijf040 werkt uitsluitend met de Boonstoppel Garantie-lijn voor buitenschilderwerk. De Boonstoppel Garantie Systeemverf is een duurzame zijdeglans buitenverf die zowel als grond- en aflak kan dienen, ideaal voor onderhoudswerk. Voor nieuw houtwerk gebruikt Schildersbedrijf040 de Boonstoppel Garantie Grondlakverf 2000 als basis. Boonstoppel buitenverf is bestand tegen zon, regen en vorst zonder te bladderen of verkleuren.',
    },
    {
      question: 'Kan buitenschilderwerk ook in het najaar uitgevoerd worden?',
      answer: 'Buitenschilderwerk is mogelijk tot in oktober, mits de temperatuur boven 10°C blijft en de luchtvochtigheid onder 85% is. September is zelfs een van de ideale maanden: stabiel weer, minder felle zon en lagere luchtvochtigheid dan in de zomer. Schildersbedrijf040 monitort de weersvoorspelling en plant het werk op de droge dagen. In de wintermaanden (november tot maart) is buitenschilderwerk in Nederland niet aan te raden vanwege de lage temperaturen en hoge luchtvochtigheid.',
    },
    {
      question: 'Hoe bereid ik mijn woning voor op buitenschilderwerk?',
      answer: 'Eigenlijk hoeft u weinig zelf te doen. Schildersbedrijf040 verzorgt de volledige voorbereiding: loszittende verf wordt geschraapt en geschuurd, houtrot wordt behandeld, scheuren worden gevuld en alle oppervlakken worden ontvet. Het helpt als u planten en tuinmeubelen iets van de gevel af plaatst, zodat Schildersbedrijf040 vrij kan werken. De inspectie vooraf maakt duidelijk wat er precies moet gebeuren.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const prijzen = prijsTabel['buitenschilderwerk'].map((r) => ({ dienst: r.wat, prijs: r.prijs }))

  const werkwijzeStappen = [
    {
      nummer: 1,
      titel: 'Inspectie & Houtrot Check',
      beschrijving: 'Schildersbedrijf040 inspecteert alle buitenonderdelen op houtrot, scheuren en loszittende verflagen. U krijgt direct advies over de staat van het houtwerk.',
    },
    {
      nummer: 2,
      titel: 'Offerte op Maat',
      beschrijving: 'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs, inclusief materiaal, eventuele steigerhuur en houtrotreparatie.',
    },
    {
      nummer: 3,
      titel: 'Voorbereiding',
      beschrijving: 'Schrapen, schuren, ontvetten, houtrot behandelen en gronden. De voorbereiding is bij buitenschilderwerk minstens de helft van het werk, en bepalend voor de levensduur.',
    },
    {
      nummer: 4,
      titel: 'Schilderen & Oplevering',
      beschrijving: 'Boonstoppel buitenverf aanbrengen in meerdere lagen, op de juiste weersomstandigheden. Eindcontrole samen met u en garantie op het resultaat.',
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

      <Header />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center bg-[#001B32] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={heroImage}
            alt="Buitenschilderwerk in Eindhoven, kozijnen en gevels professioneel geschilderd door Schildersbedrijf040"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#001B32]/95 via-[#001B32]/60 to-[#0088FF]/15" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,136,255,0.12)_0%,transparent_70%)] rounded-full blur-[60px]" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="max-w-3xl">
            <h1 className="font-bebas text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] mb-6 animate-fade-in-up">
              <span className="text-white">BUITEN</span>
              <span className="text-[#0088FF] block">SCHILDERWERK</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-[560px] mb-10 animate-fade-in-up animation-delay-150">
              Buitenschilderwerk beschermt uw woning tegen regen, zon en vorst, en bepaalt de uitstraling van uw gevel. Schildersbedrijf040 schildert gevels, kozijnen, deuren en boeiboorden in Eindhoven en omgeving met Boonstoppel verf voor een resultaat dat 8 tot 10 jaar meegaat.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,136,255,0.4)] hover:-translate-y-0.5"
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

            <div className="flex items-center gap-6 mt-10 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2.5">
                <GoogleLogo />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <span className="text-sm text-gray-300 font-medium">5,0 uit 41 reviews</span>
              </div>
              <div className="w-px h-7 bg-white/15" />
              <div className="flex items-center gap-2.5">
                <WerkspotLogo />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <span className="text-sm text-gray-300 font-medium">4,9 op Werkspot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wat is Buitenschilderwerk ── */}
      <section id="wat-is-buitenschilderwerk" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Onze Expertise
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
                Waarom is Buitenschilderwerk zo Belangrijk?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Buitenschilderwerk is de eerste verdedigingslinie van uw woning tegen het Nederlandse klimaat. Regen, zon, vorst en wind tasten onbeschermd houtwerk aan, kozijnen zwellen op, verf bladdert en zonder tijdig onderhoud ontstaat houtrot. Een kozijn vervangen kost al snel €500 tot €1.500, terwijl tijdig buitenschilderwerk met Boonstoppel verf uw houtwerk 8 tot 10 jaar beschermt voor een fractie van dat bedrag.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 voert buitenschilderwerk uit voor woningen, appartementen en bedrijfspanden in Eindhoven en omgeving. Elk project begint met een grondige inspectie op houtrot en de staat van bestaande verflagen. Schildersbedrijf040 schraapt, schuurt en grondverf voordat er ook maar één laag aflak aangebracht wordt, want de voorbereiding bepaalt of het buitenschilderwerk 3 jaar of 10 jaar meegaat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Naast bescherming bepaalt buitenschilderwerk de uitstraling van uw woning. Een vers geschilderde gevel verhoogt de waarde en geeft een verzorgde indruk. Schildersbedrijf040 adviseert over kleuren die passen bij de bouwstijl en de omgeving, van klassieke Eindhovense rijtjeswoningen tot vrijstaande villa's in Waalre.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Buitenschilderwerk door Schildersbedrijf040, kozijnen en gevels in Eindhoven"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Levensduur', waarde: '8 tot 10 jaar' },
                  { label: 'Ideale temperatuur', waarde: '15 tot 25°C' },
                  { label: 'Beste maanden', waarde: 'Mei tot sep' },
                  { label: 'BTW woningen 2+ jaar', waarde: '9%' },
                ].map((item, index) => (
                  <div key={index} className="bg-[#F7F8FA] rounded-xl p-5 text-center">
                    <div className="font-bebas text-2xl text-[#0088FF] mb-1">{item.waarde}</div>
                    <div className="text-gray-500 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Soorten Buitenschilderwerk ── */}
      <section id="soorten-buitenschilderwerk" className="py-24 bg-[#F7F8FA]">
        <div className="container">
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
            Diensten
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Soorten Buitenschilderwerk
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Elk buitenoppervlak vraagt een andere aanpak, ander materiaal en specifieke expertise. Schildersbedrijf040 beheerst alle vormen van buitenschilderwerk.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 rounded-2xl overflow-hidden">
            {[
              {
                nummer: '01',
                titel: 'Kozijnen & Deuren',
                beschrijving: 'Houten kozijnen en buitendeuren krijgen de meeste weersinvloeden te verduren. Schildersbedrijf040 schuurt de oude verflaag, repareert eventuele houtrotschade, brengt Boonstoppel Garantie Grondlakverf aan en werkt af met twee lagen Boonstoppel Garantie Zijdeglans. Het resultaat is een weerbestendige, gladde afwerking die niet bladdert of verkleurt.',
                link: '/diensten/houtrot-sanering',
                linkTekst: 'Houtrot? Bekijk sanering',
              },
              {
                nummer: '02',
                titel: 'Gevels & Buitenmuren',
                beschrijving: 'Gestuukte of houten gevels beschermen met buitenmuurverf houdt vocht buiten en voorkomt alg- en schimmelgroei. Schildersbedrijf040 reinigt de gevel, herstelt scheuren in het stucwerk en brengt ademende buitenmuurverf aan die vocht van binnenuit laat ontsnappen maar regenwater buiten houdt.',
                link: '/diensten/latex-spuiten',
                linkTekst: 'Grote gevel? Latex spuiten',
              },
              {
                nummer: '03',
                titel: 'Boeiboorden & Windveren',
                beschrijving: 'Boeiboorden en windveren zitten op het hoogste punt van de gevel en zijn daardoor extra blootgesteld aan wind en regen. Schildersbedrijf040 inspecteert deze onderdelen altijd op houtrot, omdat problemen hier vaak onzichtbaar zijn vanaf de grond. Na reparatie en grondverf brengt Schildersbedrijf040 weerbestendige aflak aan voor langdurige bescherming.',
                link: '/contact',
                linkTekst: 'Inspectie aanvragen',
              },
              {
                nummer: '04',
                titel: 'Dakkapellen',
                beschrijving: 'Een dakkapel heeft kozijnen, boeiboorden én een zinken of houten bekleding die allemaal onderhoud nodig hebben. Schildersbedrijf040 combineert het schilderwerk van de dakkapel met de rest van het buitenwerk, zodat alles in één keer wordt aangepakt. Dat scheelt in steiger- of ladderkosten en levert een uniform eindresultaat op.',
                link: '/contact',
                linkTekst: 'Offerte dakkapel',
              },
              {
                nummer: '05',
                titel: 'Houtrot Behandeling',
                beschrijving: 'Houtrot is de grootste vijand van buitenhoutwerk. Schildersbedrijf040 spoort houtrot op door het hout systematisch af te tikken en te prikken met een priem. Aangetast hout wordt uitgefreesd, behandeld met houtharder en opgebouwd met professionele epoxyvulling. Pas daarna wordt het houtwerk geschilderd, zodat de reparatie onzichtbaar is en het kozijn weer jarenlang meegaat.',
                link: '/diensten/houtrot-sanering',
                linkTekst: 'Meer over houtrot sanering',
              },
              {
                nummer: '06',
                titel: 'Onderhoudscontract',
                beschrijving: 'Regelmatig schilderonderhoud voorkomt grote en dure reparaties. Schildersbedrijf040 biedt onderhoudsadvies aan na elk project: wanneer het houtwerk opnieuw gecontroleerd moet worden en wanneer een nieuwe schilderbeurt nodig is. Zo blijft uw buitenschilderwerk altijd in topconditie en voorkomt u onnodig hoge kosten.',
                link: '/contact',
                linkTekst: 'Vraag advies aan',
              },
            ].map((dienst, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 transition-all duration-350 hover:bg-[#001B32] overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#0088FF] transition-all duration-400 group-hover:h-full" />
                <span className="block font-bebas text-4xl text-gray-200/50 leading-none mb-5 transition-all duration-350 group-hover:text-[#0088FF] group-hover:opacity-100">
                  {dienst.nummer}
                </span>
                <h3 id={`buitenschilderwerk-${dienst.titel.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`} className="font-bebas text-2xl mb-3 transition-colors duration-350 group-hover:text-white">
                  {dienst.titel}
                </h3>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-6 transition-colors duration-350 group-hover:text-gray-300">
                  {dienst.beschrijving}
                </p>
                <Link
                  href={dienst.link}
                  className="inline-flex items-center gap-2 text-[#0088FF] font-semibold text-sm transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  {dienst.linkTekst}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kosten Buitenschilderwerk ── */}
      <section id="kosten-buitenschilderwerk" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Transparante Prijzen
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Wat Kost Buitenschilderwerk?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Buitenschilderwerk kost gemiddeld €35 tot €45 per m² inclusief materiaal en exclusief btw. De uiteindelijke prijs hangt af van drie factoren: de staat van het houtwerk, de bereikbaarheid (ladder of steiger) en de hoeveelheid houtrotreparatie die nodig is. Kozijnen schilderen buiten is duurder per stuk dan muurwerk, omdat elk kozijn individueel geschuurd, geground en gelakt moet worden.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 hanteert een uurtarief van €40 tot €55 voor buitenschilderwerk. Voor een gemiddelde eengezinswoning in Eindhoven bedragen de kosten voor volledig buitenschilderwerk €2.500 tot €6.000, afhankelijk van de grootte en de staat. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                De investering in Boonstoppel verf betaalt zich dubbel terug: het buitenschilderwerk gaat 8 tot 10 jaar mee in plaats van 3 tot 5 jaar bij budgetverf, en u voorkomt dure houtrotreparaties of kozijnvervangingen die ontstaan door slecht onderhoud.
              </p>
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-7 py-3.5 rounded-lg inline-flex items-center gap-2.5 font-bebas text-base tracking-wider hover:bg-[#006ACC] transition-all duration-250"
              >
                Gratis offerte aanvragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
              <div className="bg-gradient-to-br from-[#001B32] to-[#002B4F] px-8 py-7 flex justify-between items-center">
                <h3 className="font-bebas text-2xl text-white">Indicatie Prijzen</h3>
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
                  * Prijzen zijn indicatief, inclusief materiaal, exclusief btw. Steigerhuur wordt apart vermeld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sfeerbeeld Banner ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/binnenschilderwerk-zolder-renovatie.jpg"
            alt="Buitenschilderwerk resultaat, beschermde kozijnen en gevels"
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
              Bescherming & Uitstraling
            </span>
            <h2 className="font-bebas text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-tight mb-4">
              Uw Gevel Verdient Vakmanschap
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Buitenschilderwerk is meer dan een esthetische keuze, het beschermt uw woning tegen de elementen. Schildersbedrijf040 levert buitenschilderwerk dat jarenlang meegaat. Bekijk onze projecten of vraag direct een offerte aan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,136,255,0.4)] hover:-translate-y-0.5"
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
      <section id="werkwijze-buitenschilderwerk" className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
              Hoe Wij Werken
            </span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Ons Werkproces in 4 Stappen
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Buitenschilderwerk vraagt om een zorgvuldige aanpak. Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering, zodat u weet wat u kunt verwachten.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
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

      {/* ── Waarom Schildersbedrijf040 ── */}
      <section id="waarom-schildersbedrijf040" className="py-24 bg-[#F7F8FA]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Waarom Wij
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Waarom Schildersbedrijf040 voor Uw Buitenschilderwerk?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Buitenschilderwerk is een vak apart, het vergt kennis van weersomstandigheden, houtsoorten en verfsystemen. Schildersbedrijf040 combineert die expertise met transparante communicatie en persoonlijke betrokkenheid van eigenaar Jordy Jacobs. Het resultaat: een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { titel: 'Grondige houtrot inspectie inbegrepen', beschrijving: 'Elk buitenschilderproject begint met een systematische controle op houtrot, zodat problemen worden opgelost vóór het schilderen, niet erna.' },
                  { titel: 'Uitsluitend Boonstoppel buitenverf', beschrijving: 'Bestand tegen zon, regen en vorst. 8 tot 10 jaar bescherming, aanzienlijk langer dan budgetverf die na 3 jaar al bladdert.' },
                  { titel: 'Weersafhankelijke planning', beschrijving: 'Schildersbedrijf040 plant buitenschilderwerk op de juiste weersomstandigheden: tussen 15°C en 25°C, luchtvochtigheid onder 85%.' },
                  { titel: 'Vaste prijs, geen verrassingen', beschrijving: 'Gedetailleerde offerte binnen 48 uur met vaste prijs. Inclusief materiaal, voorbereiding en eventuele steigerhuur apart vermeld.' },
                  { titel: 'Ervaring met lokale bouwstijlen', beschrijving: 'Van naoorlogse rijtjeswoningen in Woensel-Zuid tot villa\'s in Waalre. Schildersbedrijf040 kent de bouwstijlen en het houtwerk in de regio Eindhoven.' },
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
                  &ldquo;Buitenschilderwerk top afgeleverd. Kozijnen zien er weer als nieuw uit. Goede voorbereiding en netjes opgeruimd na afloop.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <GoogleLogo />
                  Google Reviews: 41 beoordelingen
                </div>
              </div>

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
                  &ldquo;Heel tevreden. Houtrot netjes gerepareerd en het schilderwerk is perfect. Goede communicatie over de planning.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <WerkspotLogo />
                  Werkspot: Topvakman
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bebas text-xl mb-3">Buitenschilderwerk in Uw Regio</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Schildersbedrijf040 voert buitenschilderwerk uit in Eindhoven en omliggende gemeenten.
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
                      className="text-sm px-3 py-1.5 rounded-lg bg-[#F7F8FA] text-gray-600 hover:bg-[#0088FF]/10 hover:text-[#0088FF] transition-colors"
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
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
            Veelgestelde Vragen
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Vragen over Buitenschilderwerk
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Staat uw vraag er niet bij? Neem gerust contact op. Schildersbedrijf040 helpt u graag verder.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden relative h-[280px]">
                <Image
                  src="/images/lakwerk-voordeur-antraciet.jpg"
                  alt="Buitenschilderwerk resultaat, kozijnen en gevels beschermd door Schildersbedrijf040"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#F7F8FA] rounded-2xl p-8">
                <h3 className="font-bebas text-xl mb-3">Nog vragen?</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Schildersbedrijf040 beantwoordt al uw vragen over buitenschilderwerk. Bel of mail voor persoonlijk advies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+31638903004"
                    className="bg-[#0088FF] text-white px-5 py-2.5 rounded-lg inline-flex items-center gap-2 font-bebas text-sm tracking-wider hover:bg-[#006ACC] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Bel 06-38903004
                  </a>
                  <Link
                    href="/contact"
                    className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg inline-flex items-center gap-2 font-bebas text-sm tracking-wider hover:border-[#0088FF] hover:text-[#0088FF] transition-colors"
                  >
                    Gratis offerte aanvragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:border-[#0088FF] open:shadow-[0_4px_24px_rgba(0,136,255,0.06)]"
                >
                  <summary className="relative flex items-center justify-between cursor-pointer px-7 py-[22px] font-semibold text-[1.05rem] hover:bg-[#F7F8FA] transition-colors list-none [&::-webkit-details-marker]:hidden">
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
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Contact Schildersbedrijf040 voor buitenschilderwerk"
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
                Bescherm Uw Woning Tegen de Elementen
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Wilt u weten wat professioneel buitenschilderwerk voor uw woning kost? Schildersbedrijf040 komt graag langs voor een gratis houtrot inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.
              </p>
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,136,255,0.4)] hover:-translate-y-0.5"
              >
                GRATIS INSPECTIE AANVRAGEN
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
