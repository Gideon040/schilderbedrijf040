import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lakwerk Eindhoven | Kozijnen, Deuren & Trappen Vakkundig Gelakt',
  description: 'Lakwerk door Schildersbedrijf040 in Eindhoven. Kozijnen, deuren en trappen professioneel gelakt met Boonstoppel lak. ✓ Hoogglans & zijdeglans ✓ Gratis offerte.',
  keywords: [
    'lakwerk eindhoven',
    'kozijnen lakken eindhoven',
    'deuren lakken eindhoven',
    'trappen lakken',
    'lakwerk kosten',
    'schildersbedrijf eindhoven',
    'houtwerk lakken',
  ],
  openGraph: {
    title: 'Lakwerk Eindhoven | Schildersbedrijf040',
    description: 'Professioneel lakwerk in Eindhoven en omgeving. Kozijnen, deuren en trappen vakkundig gelakt met Boonstoppel lak door Schildersbedrijf040.',
    url: 'https://schildersbedrijf040.nl/diensten/lakwerk',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/lakwerk',
  },
}

const heroImage = 'https://lh3.googleusercontent.com/p/AF1QipPXaEJ8_nFLFo8wrT1CHm7dEM7yNx9IWh1V0DFw=s680-w680-h510'

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

export default function LakwerkPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/lakwerk/#service',
    name: 'Lakwerk',
    description: 'Professioneel lakwerk voor kozijnen, deuren, trappen en houtwerk in Eindhoven en omgeving. Vakkundig gelakt met Boonstoppel lak door Schildersbedrijf040.',
    provider: {
      '@type': 'PaintingContractor',
      '@id': 'https://schildersbedrijf040.nl/#organization',
      name: 'Schildersbedrijf040',
      telephone: '+31638903004',
      url: 'https://schildersbedrijf040.nl',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jacob van Campenweg 25',
        addressLocality: 'Eindhoven',
        postalCode: '5624CD',
        addressCountry: 'NL',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Eindhoven' },
      { '@type': 'City', name: 'Veldhoven' },
      { '@type': 'City', name: 'Waalre' },
      { '@type': 'City', name: 'Best' },
      { '@type': 'City', name: 'Nuenen' },
      { '@type': 'City', name: 'Geldrop' },
      { '@type': 'City', name: 'Helmond' },
    ],
    serviceType: 'Lakwerk',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '40-50',
        unitText: 'per uur',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Lakwerk diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Kozijnen lakken' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Deuren lakken' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Trappen lakken' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Radiatoren en leidingen lakken' },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
      { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://schildersbedrijf040.nl/diensten' },
      { '@type': 'ListItem', position: 3, name: 'Lakwerk', item: 'https://schildersbedrijf040.nl/diensten/lakwerk' },
    ],
  }

  const faqs = [
    {
      question: 'Wat is het verschil tussen hoogglans, zijdeglans en mat lakwerk?',
      answer: 'Hoogglans lak reflecteert het meeste licht en geeft kozijnen en deuren een strakke, klassieke uitstraling. Zijdeglans heeft een subtiele glans die minder vuil aantrekt en kleine oneffenheden beter verbergt dan hoogglans. Matte lak wordt vooral toegepast op meubels en decoratief houtwerk voor een moderne, ingetogen look. Schildersbedrijf040 adviseert zijdeglans voor de meeste kozijnen en deuren in Eindhoven, omdat het de beste balans biedt tussen uitstraling en onderhoud.',
    },
    {
      question: 'Hoe lang duurt het voordat lakwerk volledig gedroogd is?',
      answer: 'Lakwerk heeft een droogtijd van 16 tot 24 uur per laag, afhankelijk van de temperatuur en luchtvochtigheid. Na het aanbrengen is de lak stofdroog na 4 tot 6 uur, maar volledig uitharden duurt 5 tot 7 dagen. Schildersbedrijf040 adviseert om deuren en kozijnen in die periode voorzichtig te behandelen en niet af te sluiten. Boonstoppel Interieurlak droogt sneller dan traditionele oplosmiddelhoudende lakken, waardoor het lakwerk eerder belastbaar is.',
    },
    {
      question: 'Welke voorbereiding is nodig voor kozijnen lakken?',
      answer: 'Kozijnen lakken begint altijd met grondige voorbereiding: de oude laklaag wordt geschuurd om hechting te garanderen, loszittende verf wordt verwijderd, en scheuren of beschadigingen worden gevuld met professionele plamuur. Bij kaal hout brengt Schildersbedrijf040 eerst een grondlaag aan om het hout te beschermen tegen vocht. Deze voorbereiding neemt circa 60% van de totale werktijd in beslag, maar bepaalt hoe lang het lakwerk meegaat.',
    },
    {
      question: 'Wat is beter: watergedragen of oplosmiddelhoudende lak?',
      answer: 'Watergedragen lak is tegenwoordig de standaard voor binnenwerk: vrijwel geurloos, sneller droog en beter voor de luchtkwaliteit. Boonstoppel Garantie Interieurlak is een watergedragen lak die qua dekking en hardheid vergelijkbaar is met traditionele oplosmiddelhoudende lakken. Schildersbedrijf040 gebruikt watergedragen lak voor al het binnenlakwerk. Voor buitenhoutwerk zet Schildersbedrijf040 de Boonstoppel Garantie Zijdeglans SB in — een hybride lak die extra bestendig is tegen weersinvloeden.',
    },
    {
      question: 'Hoeveel kost het om kozijnen te laten lakken in Eindhoven?',
      answer: 'Kozijnen lakken kost gemiddeld €35 tot €75 per kozijn voor binnenwerk en €50 tot €100 per kozijn voor buitenwerk, inclusief materiaal en exclusief btw. De prijs hangt af van de staat van het houtwerk, het aantal lagen en de bereikbaarheid. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%. Schildersbedrijf040 maakt altijd een offerte op maat na inspectie ter plaatse.',
    },
    {
      question: 'Hoe vaak moeten kozijnen en deuren opnieuw gelakt worden?',
      answer: 'Binnenkozijnen en binnendeuren die gelakt zijn met Boonstoppel Interieurlak gaan 8 tot 10 jaar mee voordat overlakken nodig is. Buitenkozijnen zijn meer blootgesteld aan weer en wind en vragen elke 5 tot 7 jaar om onderhoud. Regelmatig controleren op beschadigingen en deze tijdig bijwerken verlengt de levensduur aanzienlijk. Schildersbedrijf040 adviseert klanten in Eindhoven en omgeving over het juiste onderhoudsinterval.',
    },
    {
      question: 'Kan Schildersbedrijf040 ook radiatoren en leidingen lakken?',
      answer: 'Schildersbedrijf040 lakt radiatoren, verwarmingsbuizen en waterleidingen met speciale hittebestendige lak die niet verkleurt door warmte. De radiator wordt eerst geschuurd en ontvet, waarna een hechtprimer en twee lagen lakverf worden aangebracht. Een radiator lakken kost gemiddeld €80 tot €120 per stuk. Het lakwerk wordt uitgevoerd wanneer de verwarming uit staat, zodat de lak gelijkmatig droogt.',
    },
    {
      question: 'Geeft Schildersbedrijf040 garantie op lakwerk?',
      answer: 'Schildersbedrijf040 geeft garantie op al het uitgevoerde lakwerk, zowel binnen als buiten. De garantie dekt het vakmanschap en de gebruikte materialen. Door te werken met Boonstoppel lak — die 8 tot 10 jaar bescherming biedt op binnenwerk — is de kans op problemen binnen de garantieperiode minimaal. Mocht er onverhoopt een gebrek optreden, dan herstelt Schildersbedrijf040 dit kosteloos.',
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

  const prijzen = [
    { dienst: 'Kozijnen lakken (binnen)', prijs: '€35 – €75 /stuk' },
    { dienst: 'Kozijnen lakken (buiten)', prijs: '€50 – €100 /stuk' },
    { dienst: 'Deuren lakken', prijs: '€100 – €150 /stuk' },
    { dienst: 'Trap lakken', prijs: '€350 – €600' },
    { dienst: 'Radiator lakken', prijs: '€80 – €120 /stuk' },
    { dienst: 'Keukenkasten spuiten', prijs: '€150 – €300 /m¹' },
  ]

  const werkwijzeStappen = [
    {
      nummer: 1,
      titel: 'Inspectie & Advies',
      beschrijving: 'Schildersbedrijf040 beoordeelt de staat van het houtwerk, controleert op houtrot en adviseert over de juiste glansgraad en laksoort voor uw kozijnen, deuren of trappen.',
    },
    {
      nummer: 2,
      titel: 'Offerte op Maat',
      beschrijving: 'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs — inclusief voorbereiding, materialen en het aantal laklagen.',
    },
    {
      nummer: 3,
      titel: 'Voorbereiding & Gronden',
      beschrijving: 'Oude laklagen schuren, loszittende verf verwijderen, beschadigingen plamuren en een grondlaag aanbrengen — de basis voor duurzaam lakwerk.',
    },
    {
      nummer: 4,
      titel: 'Lakken & Oplevering',
      beschrijving: 'Meerdere lagen Boonstoppel lak aanbrengen, tussentijds schuren voor optimale hechting, eindcontrole samen met u en een schone werkplek achterlaten.',
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
            alt="Professioneel lakwerk in Eindhoven — kozijnen en deuren vakkundig gelakt door Schildersbedrijf040"
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
              <span className="text-white">PROFESSIONEEL</span>
              <span className="text-[#0088FF] block">LAKWERK</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-[560px] mb-10 animate-fade-in-up animation-delay-150">
              Lakwerk van Schildersbedrijf040 beschermt en verfraait uw kozijnen, deuren en trappen in Eindhoven en omgeving. Schildersbedrijf040 lakt met Boonstoppel lak voor een strakke, duurzame afwerking in hoogglans, zijdeglans of mat.
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

      {/* ── Wat is Professioneel Lakwerk ── */}
      <section id="wat-is-professioneel-lakwerk" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Onze Expertise
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
                Wat is Professioneel Lakwerk?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Lakwerk is het aanbrengen van lakverf op houtwerk zoals kozijnen, deuren, trappen, plinten en radiatoren. Professioneel lakwerk verschilt van zelf lakken doordat de voorbereiding — schuren, plamuren, gronden — minstens 60% van de totale werktijd in beslag neemt. Die voorbereiding bepaalt of het lakwerk 8 tot 10 jaar meegaat of al na 2 tot 3 jaar bladdert en loslaat. Schildersbedrijf040 werkt uitsluitend met Boonstoppel Interieurlak voor binnenwerk en Boonstoppel Garantie Zijdeglans SB voor buitenhoutwerk.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 voert lakwerk uit voor woningen en bedrijfspanden in Eindhoven en omgeving. Of het gaat om een enkel kozijn of het complete houtwerk van een woning — elk lakproject begint met een inspectie van het houtwerk, advies over glansgraden en een gedetailleerde offerte met vaste prijs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Naast de esthetische verbetering beschermt lakwerk uw houtwerk tegen vocht, slijtage en UV-straling. Ongelakt of slecht onderhouden houtwerk droogt uit, gaat scheuren en is vatbaar voor houtrot. Tijdig lakwerk voorkomt kostbare houtrot sanering op termijn.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Professioneel lakwerk door Schildersbedrijf040 — kozijnen en deuren lakken in Eindhoven"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Levensduur', waarde: '8–10 jaar' },
                  { label: 'Droogtijd lak', waarde: '16–24 uur' },
                  { label: 'Glansgraden', waarde: '3 opties' },
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

      {/* ── Soorten Lakwerk ── */}
      <section id="soorten-lakwerk" className="py-24 bg-[#F7F8FA]">
        <div className="container">
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
            Diensten
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Soorten Lakwerk
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Lakwerk omvat meer dan alleen een laagje lak op een kozijn. Elk type houtwerk vraagt een specifieke aanpak, andere materialen en een passende glansgraad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 rounded-2xl overflow-hidden">
            {[
              {
                nummer: '01',
                titel: 'Kozijnen Lakken',
                beschrijving: 'Kozijnen lakken is het meest gevraagde lakwerk bij Schildersbedrijf040. Binnenkozijnen worden gelakt met Boonstoppel Garantie Interieurlak in zijdeglans of hoogglans. De oude laklaag wordt geschuurd, beschadigingen geplamurd en een grondlaag aangebracht voordat twee afwerklagen worden opgebracht. Kozijnen lakken kost €35 tot €75 per stuk voor binnenwerk.',
                link: '/diensten/binnenschilderwerk',
                linkTekst: 'Bekijk binnenschilderwerk',
              },
              {
                nummer: '02',
                titel: 'Deuren Lakken',
                beschrijving: 'Deuren lakken vraagt extra precisie vanwege de grote vlakken waarin elke oneffenheid zichtbaar is. Schildersbedrijf040 schuurt de deur volledig, vult gaatjes en beschadigingen op en brengt meerdere lagen Boonstoppel lak aan. Deuren lakken kost €100 tot €150 per deur. Bij paneeldeuren besteedt Schildersbedrijf040 extra aandacht aan de profileringen voor een strak eindresultaat.',
                link: '/contact',
                linkTekst: 'Vraag een offerte aan',
              },
              {
                nummer: '03',
                titel: 'Trappen Lakken',
                beschrijving: 'Een trap is een intensief belopen oppervlak dat extra slijtvaste lak nodig heeft. Schildersbedrijf040 schuurt de trap volledig kaal, brengt een hechtingsgrondlaag aan en werkt af met meerdere lagen slijtvaste lak. Een trap lakken kost €350 tot €600, afhankelijk van het aantal treden en de staat van het hout. Schildersbedrijf040 werkt om en om, zodat u de trap tussendoor kunt blijven gebruiken.',
                link: '/projecten',
                linkTekst: 'Bekijk projecten',
              },
              {
                nummer: '04',
                titel: 'Radiatoren & Leidingen',
                beschrijving: 'Radiatoren en verwarmingsbuizen vragen om hittebestendige lak die niet verkleurt door warmte. Schildersbedrijf040 schuurt en ontvet de radiator, brengt een hechtprimer aan en lakt af met twee lagen speciale radiatorlak. Het lakwerk wordt uitgevoerd wanneer de verwarming uit staat, zodat de lak gelijkmatig droogt en optimaal hecht.',
                link: '/contact',
                linkTekst: 'Vraag een offerte aan',
              },
              {
                nummer: '05',
                titel: 'Keukenkasten & Meubels',
                beschrijving: 'Keukenkasten en meubels lakken geeft uw interieur een compleet nieuwe uitstraling zonder de kosten van vervanging. Schildersbedrijf040 spuit keukenkasten met Boonstoppel lak voor een fabrieksmatige, gladde afwerking zonder kwaststrepen. Keukenkasten spuiten kost €150 tot €300 per strekkende meter — een fractie van de kosten van een nieuwe keuken.',
                link: '/diensten/latex-spuiten',
                linkTekst: 'Bekijk latex spuiten',
              },
              {
                nummer: '06',
                titel: 'Buitenhoutwerk Lakken',
                beschrijving: 'Buitenkozijnen, boeidelen en dakgoten van hout vragen om weerbestendige lak die beschermt tegen regen, UV-straling en temperatuurwisselingen. Schildersbedrijf040 gebruikt Boonstoppel Garantie Zijdeglans SB voor buitenhoutwerk — een hybride lakverf met uitstekende hechting en duurzaamheid. Buitenkozijnen lakken kost €50 tot €100 per stuk.',
                link: '/diensten/buitenschilderwerk',
                linkTekst: 'Meer over buitenschilderwerk',
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
                <h3 id={`lakwerk-${dienst.titel.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`} className="font-bebas text-2xl mb-3 transition-colors duration-350 group-hover:text-white">
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

      {/* ── Kosten Lakwerk ── */}
      <section id="kosten-lakwerk" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Transparante Prijzen
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Wat Kost Lakwerk?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Lakwerk kost gemiddeld €35 tot €75 per kozijn voor binnenwerk en €50 tot €100 per kozijn voor buitenwerk, inclusief materiaal en exclusief btw. De uiteindelijke prijs hangt af van de staat van het houtwerk, het aantal lagen lak en de bereikbaarheid. Deuren lakken is duurder per stuk dan kozijnen lakken, omdat deuren grotere vlakken hebben die een feilloze afwerking vereisen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 hanteert een uurtarief van €40 tot €50 voor lakwerk, inclusief materiaal. Voor woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%, wat een merkbaar verschil maakt op de eindfactuur. Bij een lakproject van €2.000 bespaart u daarmee ruim €200 ten opzichte van het standaard btw-tarief van 21%.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Schildersbedrijf040 werkt altijd met een vaste offerte — geen verrassingen achteraf. De investering in Boonstoppel lak betaalt zich terug: doordat het lakwerk 8 tot 10 jaar meegaat in plaats van 3 jaar bij budgetlak, zijn de kosten per jaar aanzienlijk lager.
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
            alt="Lakwerk resultaat — strak gelakte kozijnen en deuren door Schildersbedrijf040"
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
              Lakwerk Waar U Trots Op Bent
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Van voorbereiding tot de laatste laklaag — Schildersbedrijf040 levert lakwerk dat jarenlang beschermt en er strak uitziet. Bekijk onze projecten of vraag direct een offerte aan.
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

      {/* ── Werkwijze ── */}
      <section id="werkwijze-lakwerk" className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
              Hoe Wij Werken
            </span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Ons Werkproces in 4 Stappen
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Elk lakproject bij Schildersbedrijf040 volgt een vast werkproces — van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.
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
                Waarom Schildersbedrijf040 voor Uw Lakwerk?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Schildersbedrijf040 onderscheidt zich door vakmanschap, transparantie en het gebruik van uitsluitend Boonstoppel A-merk lak. Eigenaar Jordy Jacobs is persoonlijk betrokken bij elk lakproject — van de eerste inspectie tot de eindcontrole. Dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { titel: 'Hoogst beoordeeld in de regio', beschrijving: '5 sterren op Google en 4,9 op Werkspot — gebaseerd op 60+ beoordelingen van woningeigenaren in Eindhoven en omgeving.' },
                  { titel: 'Uitsluitend Boonstoppel A-merk lak', beschrijving: 'Boonstoppel Interieurlak Zijdeglans en Hoogglans voor binnenwerk, Garantie Zijdeglans SB voor buitenwerk. 8 tot 10 jaar bescherming.' },
                  { titel: 'Vaste prijs — geen verrassingen', beschrijving: 'Gedetailleerde offerte binnen 48 uur met vaste prijs. Inclusief materiaal, voorbereiding en oplevering.' },
                  { titel: 'Grondige voorbereiding', beschrijving: 'Schuren, plamuren en gronden vormen 60% van het werk. Die investering in voorbereiding bepaalt de levensduur van het lakwerk.' },
                  { titel: 'Persoonlijke betrokkenheid', beschrijving: 'Eigenaar Jordy Jacobs is bij elk project betrokken — u hebt altijd een vast aanspreekpunt dat uw wensen kent.' },
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
                  &ldquo;Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader voor lakwerk.&rdquo;
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
                  &ldquo;Heel tevreden met het lakwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd. Aanrader!&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <WerkspotLogo />
                  Werkspot — Topvakman
                </div>
              </div>

              {/* Werkgebied link */}
              <div className="p-7 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bebas text-xl mb-3">Lakwerk in Uw Regio</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Schildersbedrijf040 voert lakwerk uit in Eindhoven en omliggende gemeenten.
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
            Vragen over Lakwerk
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Staat uw vraag er niet bij? Neem gerust contact op — Schildersbedrijf040 helpt u graag verder.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden relative h-[280px]">
                <Image
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.53.08_myzeda.jpg"
                  alt="Lakwerk resultaat — strak gelakte kozijnen en deuren door Schildersbedrijf040"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#F7F8FA] rounded-2xl p-8">
                <h3 className="font-bebas text-xl mb-3">Nog vragen?</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Schildersbedrijf040 beantwoordt al uw vragen over lakwerk. Bel of mail voor persoonlijk advies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+31638903004"
                    className="bg-[#0088FF] text-white px-5 py-2.5 rounded-lg inline-flex items-center gap-2 font-bebas text-sm tracking-wider hover:bg-[#006ACC] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    06-38903004
                  </a>
                  <Link
                    href="/contact"
                    className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg inline-flex items-center gap-2 font-bebas text-sm tracking-wider hover:border-[#0088FF] hover:text-[#0088FF] transition-colors"
                  >
                    CONTACT
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
            alt="Contact Schildersbedrijf040 voor professioneel lakwerk"
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
                Klaar voor Strak Lakwerk?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Wilt u weten wat professioneel lakwerk voor uw kozijnen, deuren of trappen kost? Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in — u ontvangt binnen 48 uur een offerte op maat.
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
