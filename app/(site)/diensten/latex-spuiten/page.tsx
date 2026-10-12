import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Image from 'next/image'
import Link from 'next/link'
import { prijzen as prijsTabel } from '@/lib/prices'
import { ChevronDown, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Latex Spuiten Eindhoven | Muren & Plafonds Snel en Egaal Afgewerkt',
  description: 'Latex spuiten door Schildersbedrijf040 in Eindhoven. Muren en plafonds 3-5x sneller en 100% egaal met airless spuittechniek. ✓ Vanaf €7/m² ✓ Gratis offerte.',
  keywords: [
    'latex spuiten eindhoven',
    'airless spuiten eindhoven',
    'muren spuiten eindhoven',
    'plafond spuiten',
    'latex spuiten kosten',
    'schildersbedrijf eindhoven',
    'latex spuiten prijs per m2',
  ],
  openGraph: {
    title: 'Latex Spuiten Eindhoven | Schildersbedrijf040',
    description: 'Professioneel latex spuiten in Eindhoven en omgeving. Muren en plafonds 3-5x sneller en 100% egaal met airless spuittechniek.',
    url: 'https://schildersbedrijf040.nl/diensten/latex-spuiten',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/latex-spuiten',
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

export default function LatexSpuitenPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/latex-spuiten/#service',
    name: 'Latex Spuiten',
    description: 'Professioneel latex spuiten voor woningen en bedrijfspanden in Eindhoven en omgeving. Muren en plafonds 3-5x sneller en 100% egaal afgewerkt met airless spuittechniek.',
    provider: {
      '@type': 'PaintingContractor',
      '@id': 'https://schildersbedrijf040.nl/#organization',
      name: 'Schildersbedrijf040',
      telephone: '+31638903004',
      url: 'https://schildersbedrijf040.nl',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Straatsburglaan 26',
        addressLocality: 'Eindhoven',
        postalCode: '5627DB',
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
    serviceType: 'Latex Spuiten',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '7-12',
        unitText: 'per m²',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Latex spuiten diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Muren spuiten' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Plafond spuiten' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Nieuwbouw spuiten' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Renovatie spuitwerk' },
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
      { '@type': 'ListItem', position: 3, name: 'Latex Spuiten', item: 'https://schildersbedrijf040.nl/diensten/latex-spuiten' },
    ],
  }

  const faqs = [
    {
      question: 'Wat is het verschil tussen latex spuiten en rollen?',
      answer: 'Latex spuiten met een airless spuitmachine brengt de verf onder hoge druk aan als een fijne nevel, waardoor het resultaat 100% egaal is zonder rolstrepen of structuurverschillen. Latex spuiten is 3 tot 5 keer sneller dan rollen, wat vooral bij grote oppervlakken een aanzienlijk tijd- en kostenvoordeel oplevert. Schildersbedrijf040 in Eindhoven adviseert airless spuiten voor nieuwbouw, renovatieprojecten en ruimtes met veel muur- en plafondoppervlak.',
    },
    {
      question: 'Maakt latex spuiten veel rommel of overspray?',
      answer: 'Bij professioneel latex spuiten is overspray minimaal, mits de voorbereiding goed is. Schildersbedrijf040 plakt alle randen, kozijnen, vloeren en niet te spuiten oppervlakken volledig af met professioneel afdekmateriaal en folie. De airless spuitmachines die Schildersbedrijf040 gebruikt werken met lage druk en een gecontroleerde sproeihoek, waardoor de nevel gericht blijft. Na afloop wordt alles netjes opgeruimd en de werkplek schoon opgeleverd.',
    },
    {
      question: 'Welke oppervlakken zijn geschikt voor latex spuiten?',
      answer: 'Latex spuiten is geschikt voor vrijwel alle binnenwanden en plafonds: gestucte muren, gipsplaten, betonplafonds, houtvezelplaten en eerder geschilderde oppervlakken. Schildersbedrijf040 beoordeelt bij de inspectie of de ondergrond geschikt is en welke voorbereiding nodig is. Oppervlakken met veel scheuren of loszittende verf worden eerst hersteld, zodat het spuitwerk optimaal hecht.',
    },
    {
      question: 'Hoe lang duurt het voordat gespoten latex droog is?',
      answer: 'Gespoten latex muurverf is stofdroog binnen 30 tot 60 minuten en overschilderbaar na 4 tot 6 uur, afhankelijk van de temperatuur en ventilatie in de ruimte. Schildersbedrijf040 zorgt voor goede ventilatie tijdens en na het spuiten, waardoor de droogtijd optimaal blijft. Een volledige kamer met muren en plafond kan doorgaans op dezelfde dag meerdere lagen ontvangen.',
    },
    {
      question: 'Wat kost latex spuiten per m²?',
      answer: 'Latex spuiten kost gemiddeld €8 tot €12 per m² voor muren, inclusief afplakken, primer en latex. Plafond spuiten is voordeliger: €5,50 tot €7 per m². Nieuwbouw compleet spuiten begint vanaf €3,50 per m², omdat nieuwe ondergronden minder voorbereiding vragen. Schildersbedrijf040 werkt altijd met een vaste offerte, zodat u vooraf precies weet wat de investering is. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%.',
    },
    {
      question: 'Is latex spuiten goedkoper dan rollen?',
      answer: 'Bij grotere oppervlakken is latex spuiten doorgaans voordeliger dan rollen, ondanks de hogere materiaalkosten van de spuitmachine. De reden is dat airless spuiten 3 tot 5 keer sneller gaat, waardoor de arbeidskosten aanzienlijk lager uitvallen. Voor een enkele kleine kamer kan rollen voordeliger zijn, maar bij complete woningen, nieuwbouwprojecten of bedrijfspanden is latex spuiten door Schildersbedrijf040 de meest kostenefficiënte keuze.',
    },
    {
      question: 'Moet ik zelf de kamer leegruimen voor het spuiten?',
      answer: 'Schildersbedrijf040 neemt de volledige voorbereiding voor zijn rekening. Meubels worden verplaatst of volledig afgedekt, vloeren worden beschermd met afdekfolie en alle randen worden strak afgeplakt. U hoeft alleen breekbare of waardevolle items van tevoren in veiligheid te brengen. Na het spuiten wordt alles teruggeplaatst en de werkplek schoon achtergelaten.',
    },
    {
      question: 'Kan Schildersbedrijf040 ook in bewoonde woningen latex spuiten?',
      answer: 'Latex spuiten in bewoonde woningen is goed mogelijk. Schildersbedrijf040 werkt kamer voor kamer, zodat u de rest van de woning gewoon kunt blijven gebruiken. De watergedragen latex die Schildersbedrijf040 gebruikt is oplosmiddelvrij en nagenoeg geurloos, wat het comfort verhoogt. Gemiddeld is een kamer binnen een halve tot een hele dag volledig gespoten en droog genoeg om weer in gebruik te nemen.',
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

  const prijzen = prijsTabel['latex-spuiten'].map((r) => ({ dienst: r.wat, prijs: r.prijs }))

  const werkwijzeStappen = [
    {
      nummer: 1,
      titel: 'Inspectie & Advies',
      beschrijving: 'Schildersbedrijf040 beoordeelt de ondergrond, meet de oppervlakken op en adviseert of airless spuiten de beste methode is voor uw situatie.',
    },
    {
      nummer: 2,
      titel: 'Offerte op Maat',
      beschrijving: 'Binnen 48 uur ontvangt u een gedetailleerde offerte met vaste prijs, inclusief afplakken, primer, latex en oplevering.',
    },
    {
      nummer: 3,
      titel: 'Afplakken & Voorbereiden',
      beschrijving: 'Alle randen, kozijnen, vloeren en meubels worden volledig afgedekt. Scheuren worden gevuld, de ondergrond geschuurd en een hechtprimer aangebracht.',
    },
    {
      nummer: 4,
      titel: 'Spuiten & Oplevering',
      beschrijving: 'Professioneel airless spuiten van muren en plafonds, controle samen met u, werkplek netjes achterlaten en garantie op het resultaat.',
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
            alt="Latex spuiten in Eindhoven, muren en plafonds professioneel gespoten door Schildersbedrijf040"
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
              <span className="text-white">LATEX</span>
              <span className="text-[#0088FF] block">SPUITEN</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-[560px] mb-10 animate-fade-in-up animation-delay-150">
              Latex spuiten door Schildersbedrijf040 levert een 100% egaal resultaat op muren en plafonds in Eindhoven en omgeving. Airless spuiten is 3 tot 5 keer sneller dan rollen en ideaal voor nieuwbouw, renovatie en grote oppervlakken.
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

      {/* ── Wat is Latex Spuiten ── */}
      <section id="wat-is-latex-spuiten" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Onze Expertise
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
                Wat is Latex Spuiten?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Latex spuiten is een professionele schildertechniek waarbij muurverf met een airless spuitmachine onder hoge druk als fijne nevel op muren en plafonds wordt aangebracht. Het resultaat van airless spuiten is een volkomen egaal oppervlak zonder rolstrepen, kwaststreken of structuurverschillen. Schildersbedrijf040 in Eindhoven past latex spuiten toe bij nieuwbouw, renovatie en bestaande woningen waar een strak, modern resultaat gewenst is.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Het grootste voordeel van latex spuiten ten opzichte van rollen is de snelheid: airless spuiten gaat 3 tot 5 keer sneller dan traditioneel rolwerk. Een complete woonkamer met muren en plafond is binnen enkele uren gespoten, waar rollen een hele dag kost. Die snelheid vertaalt zich in lagere arbeidskosten en minder overlast in uw woning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Schildersbedrijf040 gebruikt professionele airless spuitmachines van Graco en Titan, gecombineerd met hoogwaardige watergedragen latex muurverf. Watergedragen latex is oplosmiddelvrij, nagenoeg geurloos en droogt snel op. Daarmee is latex spuiten niet alleen sneller en egaler, maar ook comfortabeler voor bewoners.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Professioneel latex spuiten door Schildersbedrijf040, airless spuittechniek voor muren en plafonds in Eindhoven"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Snelheid', waarde: '3 tot 5x sneller' },
                  { label: 'Prijs', waarde: 'vanaf €7/m²' },
                  { label: 'Resultaat', waarde: '100% egaal' },
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

      {/* ── Soorten Latex Spuitwerk ── */}
      <section id="soorten-latex-spuitwerk" className="py-24 bg-[#F7F8FA]">
        <div className="container">
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
            Diensten
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Soorten Latex Spuitwerk
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Latex spuiten is veelzijdig inzetbaar. Van nieuwbouw tot renovatie, van woonkamers tot kantoorpanden. Schildersbedrijf040 past airless spuittechniek toe in uiteenlopende situaties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 rounded-2xl overflow-hidden">
            {[
              {
                nummer: '01',
                titel: 'Muren Spuiten',
                beschrijving: 'Muren spuiten met airless techniek levert een strak, egaal resultaat zonder rolstrepen. Schildersbedrijf040 spuit binnenmuren in elke gewenste kleur en afwerking, van mat tot zijdeglans. Ideaal voor woonkamers, slaapkamers en hallen waar een moderne uitstraling gewenst is.',
                link: '/diensten/binnenschilderwerk',
                linkTekst: 'Bekijk binnenschilderwerk',
              },
              {
                nummer: '02',
                titel: 'Plafonds Spuiten',
                beschrijving: 'Plafond spuiten is de snelste manier om een egaal wit plafond te realiseren. Airless spuiten voorkomt de typische rolstrepen en druipers die bij plafondwerk vaak optreden. Schildersbedrijf040 spuit plafonds in nieuwbouw en bestaande bouw in Eindhoven en omgeving, met minimale overlast.',
                link: '/contact',
                linkTekst: 'Vraag offerte aan',
              },
              {
                nummer: '03',
                titel: 'Nieuwbouw Spuiten',
                beschrijving: 'Nieuwbouw spuiten is de meest kostenefficiënte manier om een nieuwbouwwoning af te werken. Omdat nieuwe muren en plafonds doorgaans glad en schoon zijn, is minder voorbereiding nodig. Schildersbedrijf040 spuit complete nieuwbouwwoningen in Eindhoven vanaf €3,50 per m², snel, egaal en betaalbaar.',
                link: '/projecten',
                linkTekst: 'Bekijk projecten',
              },
              {
                nummer: '04',
                titel: 'Renovatie Spuitwerk',
                beschrijving: 'Bij renovatie spuitwerk bereidt Schildersbedrijf040 de bestaande ondergrond grondig voor: oude verflagen worden geschuurd, scheuren gevuld en een hechtprimer aangebracht. Daarna wordt de latex gespoten voor een resultaat dat niet onderdoet voor nieuwbouw. Renovatie spuiten kost meer voorbereiding, maar het eindresultaat is even egaal.',
                link: '/diensten/binnenschilderwerk',
                linkTekst: 'Meer over binnenschilderwerk',
              },
              {
                nummer: '05',
                titel: 'Kantoren & Bedrijfspanden',
                beschrijving: 'Kantoren en bedrijfspanden hebben vaak grote muur- en plafondoppervlakken die met airless spuiten snel en efficiënt afgewerkt worden. Schildersbedrijf040 plant het spuitwerk buiten kantooruren of in het weekend, zodat de bedrijfsvoering niet verstoord wordt.',
                link: '/contact',
                linkTekst: 'Plan een afspraak',
              },
              {
                nummer: '06',
                titel: 'Trappenhuizen & Hallen',
                beschrijving: 'Trappenhuizen en entreehal len zijn lastig bereikbaar met roller en kwast. Airless spuiten bereikt elke hoek en rand moeiteloos en levert een uniform resultaat over de volledige hoogte. Schildersbedrijf040 heeft ervaring met trappenhuizen in appartementsgebouwen en VvE-complexen in Eindhoven.',
                link: '/diensten/buitenschilderwerk',
                linkTekst: 'Bekijk buitenschilderwerk',
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
                <h3 id={`latex-spuiten-${dienst.titel.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`} className="font-bebas text-2xl mb-3 transition-colors duration-350 group-hover:text-white">
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

      {/* ── Kosten Latex Spuiten ── */}
      <section id="kosten-latex-spuiten" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Transparante Prijzen
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Wat Kost Latex Spuiten?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Latex spuiten kost gemiddeld €8 tot €12 per m² voor muren, inclusief afplakken, primer en latex muurverf. Plafond spuiten is voordeliger: €5,50 tot €7 per m², omdat plafonds doorgaans minder voorbereiding vragen. Bij nieuwbouw begint de all-in prijs vanaf €3,50 per m², omdat nieuwe ondergronden glad en schoon zijn.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 hanteert een uurtarief van €35 tot €50 voor latex spuitwerk, maar werkt bij voorkeur met een vaste prijs per m², zodat u vooraf precies weet wat de investering is. Voor woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9% in plaats van 21%, wat een merkbaar verschil maakt op de eindfactuur.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hoewel de materiaalkosten bij airless spuiten iets hoger liggen dan bij rollen (door de spuitmachine en het hogere verfverbruik), zijn de totale kosten bij grotere oppervlakken lager. Airless spuiten is 3 tot 5 keer sneller, waardoor de arbeidskosten fors dalen. Schildersbedrijf040 adviseert altijd eerlijk welke methode, spuiten of rollen, het beste bij uw project past.
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
                  * Prijzen zijn indicatief, inclusief afplakken en materiaal, exclusief btw. Altijd een offerte op maat.
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
            alt="Latex spuiten resultaat, egaal gespoten muren en plafonds"
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
              Sneller, Egaler, Voordeliger
            </span>
            <h2 className="font-bebas text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-tight mb-4">
              Muren en Plafonds in Recordtijd Afgewerkt
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Airless latex spuiten door Schildersbedrijf040 combineert snelheid met een foutloos resultaat. Bekijk eerdere projecten of vraag direct een vrijblijvende offerte aan.
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
      <section id="werkwijze-latex-spuiten" className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
              Hoe Wij Werken
            </span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Ons Werkproces in 4 Stappen
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Elk latex spuitproject bij Schildersbedrijf040 volgt een vast werkproces, van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.
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
                Waarom Schildersbedrijf040 voor Latex Spuiten?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Schildersbedrijf040 onderscheidt zich door vakmanschap, professionele airless spuitapparatuur en transparante prijzen. Eigenaar Jordy Jacobs is persoonlijk betrokken bij elk spuitproject, van de eerste inspectie tot de eindcontrole. Dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { titel: 'Professionele airless spuitapparatuur', beschrijving: 'Schildersbedrijf040 werkt met Graco en Titan airless spuitmachines, industriestandaard voor egaal en efficiënt spuitwerk zonder overspray.' },
                  { titel: 'Hoogst beoordeeld in de regio', beschrijving: '5 sterren op Google en 4,9 op Werkspot, gebaseerd op 60+ beoordelingen van woningeigenaren in Eindhoven en omgeving.' },
                  { titel: '3-5x sneller dan rollen', beschrijving: 'Airless latex spuiten bespaart u dagen wachttijd. Een complete woning is in 1 tot 2 dagen gespoten, waar rollen een week kost.' },
                  { titel: 'Vaste prijs, geen verrassingen', beschrijving: 'Gedetailleerde offerte binnen 48 uur met vaste prijs per m². Inclusief afplakken, primer, latex en oplevering.' },
                  { titel: 'Nette afplak- en afdekwerkzaamheden', beschrijving: 'Professioneel afplakken en afdekken voorkomt overspray. Schildersbedrijf040 levert de werkplek schoon en netjes op.' },
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
                  &ldquo;Uitstekend werk geleverd! Zeer netjes, punctueel en het resultaat is prachtig. Absoluut een aanrader voor schilderwerk.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <GoogleLogo />
                  Google Reviews: 41 beoordelingen
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
                  &ldquo;Heel tevreden met het spuitwerk. Goede communicatie, netjes afgewerkt en op tijd opgeleverd. Aanrader!&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <WerkspotLogo />
                  Werkspot: Topvakman
                </div>
              </div>

              {/* Werkgebied link */}
              <div className="p-7 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bebas text-xl mb-3">Latex Spuiten in Uw Regio</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Schildersbedrijf040 voert latex spuitwerk uit in Eindhoven en omliggende gemeenten.
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
            Vragen over Latex Spuiten
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Staat uw vraag er niet bij? Neem gerust contact op. Schildersbedrijf040 helpt u graag verder.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden relative h-[280px]">
                <Image
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_08.02.00_o5xgwd.jpg"
                  alt="Latex spuiten resultaat, egaal gespoten muren en plafonds door Schildersbedrijf040"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#F7F8FA] rounded-2xl p-8">
                <h3 className="font-bebas text-xl mb-3">Nog vragen?</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Schildersbedrijf040 beantwoordt al uw vragen over latex spuiten. Bel of mail voor persoonlijk advies.
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
            alt="Contact Schildersbedrijf040 voor latex spuiten"
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
                Klaar voor een Egaal Resultaat?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Wilt u weten wat latex spuiten voor uw woning of bedrijfspand kost? Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in, u ontvangt binnen 48 uur een offerte op maat.
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
