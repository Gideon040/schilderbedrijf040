import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, Clock, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Houtrot Sanering Eindhoven | Kozijnen Repareren met Epoxy — Vakkundig & Duurzaam',
  description: 'Houtrot sanering door Schildersbedrijf040 in Eindhoven. Kozijnen, deuren en boeiboorden vakkundig gerepareerd met epoxy. ✓ Gratis inspectie ✓ 70% goedkoper dan vervangen.',
  keywords: [
    'houtrot sanering eindhoven',
    'houtrot reparatie eindhoven',
    'kozijnen repareren eindhoven',
    'epoxy houtrot',
    'houtrot kozijnen',
    'schildersbedrijf eindhoven',
    'houtrot sanering kosten',
  ],
  openGraph: {
    title: 'Houtrot Sanering Eindhoven | Schildersbedrijf040',
    description: 'Houtrot sanering in Eindhoven en omgeving. Kozijnen, deuren en boeiboorden vakkundig gerepareerd met epoxy — 70% goedkoper dan volledig vervangen.',
    url: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering',
  },
}

const heroImage = 'https://lh3.googleusercontent.com/p/AF1QipNXyfpYcsRHyYj-UkgdSInfmglcLJzMdNdm5g_1=s680-w680-h510'
const faqImage = 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873387/WhatsApp_Image_2025-03-27_at_08.02.10_b2hjuj.jpg'

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

export default function HoutrotSaneringPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://schildersbedrijf040.nl/diensten/houtrot-sanering/#service',
    name: 'Houtrot Sanering',
    description: 'Professionele houtrot sanering voor kozijnen, deuren en boeiboorden in Eindhoven en omgeving. Vakkundige houtrot reparatie met epoxy — tot 70% goedkoper dan volledig vervangen.',
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
    serviceType: 'Houtrot Sanering',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '45-55',
        unitText: 'per uur',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Houtrot sanering diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Kozijnen houtrot reparatie met epoxy' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Deurkozijnen houtrot sanering' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Boeiboorden en windveren reparatie' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Kozijn volledig vervangen' },
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
      { '@type': 'ListItem', position: 3, name: 'Houtrot Sanering', item: 'https://schildersbedrijf040.nl/diensten/houtrot-sanering' },
    ],
  }

  const faqs = [
    {
      question: 'Hoe herken ik houtrot in mijn kozijnen?',
      answer: 'Houtrot in kozijnen is te herkennen aan verfblaren, verkleuring van het hout, een zachte of sponsachtige structuur en zichtbare scheuren waarin vocht binnendringt. De eenvoudigste test is een schroevendraaier in het hout drukken: gaat de punt moeiteloos naar binnen, dan is het hout aangetast door houtrot. Schildersbedrijf040 voert een grondige houtrot inspectie uit waarbij ook verborgen houtrot wordt opgespoord — bijvoorbeeld achter kitvoegen of onder verflagen die er aan de buitenkant nog goed uitzien.',
    },
    {
      question: 'Wat kost houtrot sanering per kozijn?',
      answer: 'Houtrot sanering kost gemiddeld €150 tot €250 per klein kozijn en €300 tot €450 per groot kozijn, inclusief epoxy reparatie en exclusief btw. Een kleine epoxy reparatie op een enkele plek kost €80 tot €180. Moet een kozijn gedeeltelijk vervangen worden, dan liggen de kosten tussen €200 en €500. Volledig vervangen van een kozijn kost €600 tot €1.500. Bij woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%. Schildersbedrijf040 biedt 10 tot 20% korting wanneer u drie of meer kozijnen tegelijk laat repareren.',
    },
    {
      question: 'Is epoxy houtrot reparatie net zo sterk als nieuw hout?',
      answer: 'Epoxy houtrot reparatie levert een resultaat op dat in veel gevallen sterker is dan het originele hout. Epoxyhars dringt diep in de houtporiën en creëert na uitharding een keihard, waterafstotend blok dat niet meer krimpt of uitzet. Schildersbedrijf040 gebruikt professionele tweecombinente epoxy die speciaal ontwikkeld is voor buitenhoutwerk. Na het schuren en schilderen is de reparatie onzichtbaar en gaat het gerepareerde kozijn weer 15 tot 20 jaar mee.',
    },
    {
      question: 'Wanneer is houtrot repareren niet meer mogelijk en moet het kozijn vervangen worden?',
      answer: 'Houtrot reparatie met epoxy is mogelijk zolang de constructieve kern van het kozijn nog intact is. Wanneer meer dan 40 tot 50% van het kozijnhout is aangetast, of wanneer het kozijn structureel is verzwakt en niet meer goed sluit, is volledig vervangen verstandiger. Schildersbedrijf040 beoordeelt dit tijdens de gratis inspectie en adviseert altijd de meest kostenefficiënte oplossing. In de praktijk kan circa 80% van de houtrot gevallen gerepareerd worden zonder het kozijn te vervangen.',
    },
    {
      question: 'In welk seizoen kan houtrot sanering het beste worden uitgevoerd?',
      answer: 'Houtrot sanering wordt bij voorkeur uitgevoerd in het droge seizoen, tussen april en oktober. Epoxyhars heeft een omgevingstemperatuur van minimaal 10°C nodig voor een goede uitharding, en het hout moet droog zijn voor optimale hechting. Schildersbedrijf040 plant houtrot sanering daarom in de lente of zomer. Urgente reparaties — bijvoorbeeld wanneer vocht via een aangetast kozijn naar binnen lekt — kunnen ook in de winter worden uitgevoerd met aangepaste werkmethoden.',
    },
    {
      question: 'Hoe voorkom ik houtrot aan mijn kozijnen?',
      answer: 'Houtrot voorkomen begint met goed schilderonderhoud: buitenschilderwerk vernieuwen elke 5 tot 7 jaar beschermt het hout tegen vocht. Daarnaast is het belangrijk dat kitvoegen intact blijven, dat regenwater goed afloopt van dorpels en onderdorpels, en dat ventilatieopeningen niet geblokkeerd zijn. Schildersbedrijf040 brengt bij elke houtrot sanering een preventieve houtprimer aan die het hout beschermt tegen schimmels en vochtopname. Regelmatig een visuele inspectie uitvoeren — vooral aan de onderzijde van kozijnen en op plekken waar hout en steen samenkomen — helpt om houtrot vroegtijdig te signaleren.',
    },
    {
      question: 'Hoe lang duurt houtrot sanering?',
      answer: 'Een houtrot inspectie duurt 30 tot 60 minuten. De reparatie zelf kost gemiddeld 1 tot 3 werkdagen, afhankelijk van het aantal aangetaste kozijnen en de ernst van de houtrot. Epoxyhars heeft een droogtijd van 24 uur voordat het geschuurd en geschilderd kan worden. Schildersbedrijf040 combineert houtrot sanering vaak met buitenschilderwerk, zodat het kozijn direct na reparatie wordt afgewerkt en beschermd — dat bespaart tijd en kosten.',
    },
    {
      question: 'Combineert Schildersbedrijf040 houtrot sanering met schilderwerk?',
      answer: 'Schildersbedrijf040 combineert houtrot sanering standaard met schilderwerk. Na de epoxy reparatie wordt het kozijn geschuurd, gegrond en afgelakt met duurzame buitenlak. Dit is niet alleen esthetisch beter, maar ook functioneel noodzakelijk: onbehandelde epoxy is gevoelig voor UV-straling en moet beschermd worden door een dekkende verflaag. Het schilderwerk na houtrot reparatie kost €75 tot €300 extra per kozijn, afhankelijk van de grootte. Door reparatie en schilderwerk te combineren bespaart u op de totale arbeidskosten.',
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
    { dienst: 'Klein kozijn repareren', prijs: '€150 – €250 /stuk' },
    { dienst: 'Groot kozijn repareren', prijs: '€300 – €450 /stuk' },
    { dienst: 'Deurkozijn houtrot', prijs: '€200 – €400 /stuk' },
    { dienst: 'Dorpel vervangen', prijs: '€150 – €350 /stuk' },
    { dienst: 'Boeiboord reparatie', prijs: '€20 – €40 /m¹' },
    { dienst: 'Kozijn volledig vervangen', prijs: '€600 – €1.500 /stuk' },
  ]

  const werkwijzeStappen = [
    {
      nummer: 1,
      titel: 'Inspectie',
      beschrijving: 'Schildersbedrijf040 inspecteert alle kozijnen, deuren en boeiboorden op houtrot. Verborgen aantastingen worden opgespoord en de ernst van de schade wordt vastgesteld.',
    },
    {
      nummer: 2,
      titel: 'Offerte',
      beschrijving: 'U ontvangt een gedetailleerde offerte met vaste prijs — per kozijn uitgesplitst, inclusief materiaal en schilderwerk na reparatie.',
    },
    {
      nummer: 3,
      titel: 'Reparatie',
      beschrijving: 'Aangetast hout wordt verwijderd, het gezonde hout behandeld met houtprimer en de reparatie opgebouwd met professionele tweecombinente epoxy.',
    },
    {
      nummer: 4,
      titel: 'Schilderwerk & Oplevering',
      beschrijving: 'Na 24 uur droogtijd wordt de epoxy geschuurd, gegrond en afgelakt met duurzame buitenlak. Het resultaat is onzichtbaar en jarenlang beschermd.',
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
            alt="Houtrot sanering in Eindhoven — kozijnen vakkundig gerepareerd met epoxy door Schildersbedrijf040"
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
              <span className="text-white">HOUTROT</span>
              <span className="text-[#0088FF] block">SANERING</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed max-w-[560px] mb-10 animate-fade-in-up animation-delay-150">
              Houtrot sanering door Schildersbedrijf040 herstelt aangetaste kozijnen, deuren en boeiboorden in Eindhoven en omgeving. Met professionele epoxy reparatie is houtrot sanering tot 70% goedkoper dan volledig vervangen — en het resultaat gaat 15 tot 20 jaar mee.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,136,255,0.4)] hover:-translate-y-0.5"
              >
                GRATIS INSPECTIE AANVRAGEN
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

      {/* ── Wat is Houtrot en Waarom is Sanering Urgent? ── */}
      <section id="wat-is-houtrot-en-waarom-is-sanering-urgent" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Onze Expertise
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">
                Wat Is Houtrot en Waarom Is Sanering Urgent?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Houtrot is een aantasting van hout door schimmels die gedijen op vocht. Kozijnen, deurkozijnen, dorpels en boeiboorden zijn het meest kwetsbaar omdat deze onderdelen direct blootgesteld zijn aan regen, condensatie en temperatuurverschillen. Zodra houtrot begint, breidt de schimmel zich uit naar het gezonde hout eromheen — en dat proces versnelt naarmate er meer vocht binnendringt via scheurtjes in de verflaag.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 voert houtrot sanering uit voor woningeigenaren in Eindhoven en omgeving. Houtrot reparatie met epoxy is tot 70% goedkoper dan het volledig vervangen van een kozijn en biedt een even duurzaam resultaat. Door houtrot vroegtijdig te saneren voorkomt u dat de aantasting zich uitbreidt naar het draagconstructie van het kozijn, wat de reparatiekosten verveelvoudigt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Houtrot sanering is geen cosmetische ingreep maar een noodzakelijke reparatie. Onbehandelde houtrot leidt tot tocht, vochtproblemen in de woning en uiteindelijk tot kozijnen die niet meer goed sluiten of structureel onveilig worden. Schildersbedrijf040 combineert houtrot sanering altijd met schilderwerk, zodat het kozijn na reparatie direct beschermd is tegen nieuwe aantasting.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Houtrot sanering door Schildersbedrijf040 — kozijnen gerepareerd met epoxy in Eindhoven"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Reparatie vs vervangen', waarde: '70% goedkoper' },
                  { label: 'Inspectietijd', waarde: '30–60 min' },
                  { label: 'Droogtijd epoxy', waarde: '24 uur' },
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

      {/* ── Soorten Houtrot Sanering ── */}
      <section id="soorten-houtrot-sanering" className="py-24 bg-[#F7F8FA]">
        <div className="container">
          <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
            Diensten
          </span>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            Soorten Houtrot Sanering
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Houtrot treft verschillende onderdelen van uw woning. Elk type houtrot sanering vraagt een specifieke aanpak, van epoxy reparatie tot volledig vervangen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 rounded-2xl overflow-hidden">
            {[
              {
                nummer: '01',
                titel: 'Kozijnen Repareren',
                beschrijving: 'Kozijnen zijn het meest getroffen door houtrot, vooral aan de onderzijde waar regenwater blijft staan. Schildersbedrijf040 verwijdert het aangetaste hout, behandelt het gezonde hout met houtprimer en bouwt het kozijn weer op met tweecombinente epoxy. Na uitharding en schuren is de reparatie onzichtbaar en minstens zo sterk als het originele hout. Een klein kozijn repareren kost €150 tot €250.',
                link: '/diensten/buitenschilderwerk',
                linkTekst: 'Bekijk buitenschilderwerk',
              },
              {
                nummer: '02',
                titel: 'Deurkozijnen',
                beschrijving: 'Deurkozijnen zijn extra gevoelig voor houtrot omdat ze dagelijks mechanisch belast worden door het openen en sluiten van de deur. Houtrot in een deurkozijn tast niet alleen het hout aan, maar zorgt er ook voor dat de deur gaat klemmen of niet meer goed afsluit. Schildersbedrijf040 repareert deurkozijnen met epoxy en herstelt de pasvorm, zodat de deur weer soepel draait en het kozijn tocht- en vochtdicht is.',
                link: '/contact',
                linkTekst: 'Inspectie aanvragen',
              },
              {
                nummer: '03',
                titel: 'Boeiboorden & Windveren',
                beschrijving: 'Boeiboorden en windveren zitten op de overgang van gevel naar dakrand — een plek waar vocht zich gemakkelijk ophoopt. Houtrot in boeiboorden is vaak pas zichtbaar als de schade al fors is, omdat deze onderdelen minder goed bereikbaar zijn voor visuele inspectie. Schildersbedrijf040 repareert aangetaste boeiboorden met epoxy of vervangt secties waar het hout te ver is aangetast.',
                link: '/diensten/buitenschilderwerk',
                linkTekst: 'Meer over buitenschilderwerk',
              },
              {
                nummer: '04',
                titel: 'Dorpels & Onderdorpels',
                beschrijving: 'Dorpels en onderdorpels zijn de horizontale onderdelen van het kozijn waar regenwater direct op terechtkomt. Door hun horizontale positie blijft vocht langer liggen, waardoor houtrot hier het snelst optreedt. Schildersbedrijf040 vervangt of repareert dorpels zodat water weer goed afloopt en het kozijn beschermd blijft tegen nieuwe houtrot aantasting.',
                link: '/diensten/lakwerk',
                linkTekst: 'Meer over lakwerk',
              },
              {
                nummer: '05',
                titel: 'Preventieve Behandeling',
                beschrijving: 'Voorkomen is goedkoper dan genezen. Schildersbedrijf040 biedt preventieve houtrot behandeling aan voor kozijnen die nog niet aangetast zijn maar wel kwetsbaar zijn door hun leeftijd of positie. Een preventieve behandeling bestaat uit het aanbrengen van houtprimer op kwetsbare plekken, het vernieuwen van kitvoegen en het controleren van de verflaag op scheuren en gebreken.',
                link: '/diensten/buitenschilderwerk',
                linkTekst: 'Preventief schilderwerk',
              },
              {
                nummer: '06',
                titel: 'Kozijn Vervangen',
                beschrijving: 'Wanneer meer dan 40 tot 50% van het kozijnhout is aangetast of het kozijn structureel is verzwakt, adviseert Schildersbedrijf040 om het kozijn volledig te vervangen. Schildersbedrijf040 plaatst nieuwe hardhouten of kunststof kozijnen op maat, inclusief beglazing, kitwerk en schilderwerk. Volledig vervangen van een kozijn kost €600 tot €1.500, afhankelijk van het type en de afmetingen.',
                link: '/contact',
                linkTekst: 'Offerte aanvragen',
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
                <h3 id={`houtrot-${dienst.titel.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`} className="font-bebas text-2xl mb-3 transition-colors duration-350 group-hover:text-white">
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

      {/* ── Kosten Houtrot Sanering ── */}
      <section id="kosten-houtrot-sanering" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
                Transparante Prijzen
              </span>
              <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Wat Kost Houtrot Sanering?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Houtrot sanering kost gemiddeld €150 tot €450 per kozijn, afhankelijk van de grootte van het kozijn en de ernst van de aantasting. Een kleine epoxy reparatie op een enkele plek begint bij €80, terwijl het volledig vervangen van een kozijn €600 tot €1.500 kost. In de meeste gevallen is reparatie met epoxy de meest kostenefficiënte oplossing — tot 70% goedkoper dan volledig vervangen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Schildersbedrijf040 hanteert een uurtarief van €45 tot €55 voor houtrot sanering, inclusief materiaal. Voor woningen ouder dan 2 jaar geldt het verlaagde btw-tarief van 9%, wat een merkbaar verschil maakt op de eindfactuur. Bij drie of meer kozijnen biedt Schildersbedrijf040 een korting van 10 tot 20% op de totale reparatiekosten.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Het schilderwerk na houtrot reparatie kost €75 tot €300 extra per kozijn. Schildersbedrijf040 raadt aan om houtrot sanering en schilderwerk altijd te combineren: onbehandelde epoxy is gevoelig voor UV-straling en moet beschermd worden door een dekkende verflaag. Door beide werkzaamheden in een keer uit te voeren, bespaart u op de totale arbeidskosten.
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
            alt="Houtrot sanering resultaat — kozijnen gerepareerd met epoxy door Schildersbedrijf040"
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
              Repareren Is Slimmer dan Vervangen
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Houtrot sanering door Schildersbedrijf040 bespaart u duizenden euro&apos;s ten opzichte van volledig vervangen. Bekijk onze projecten of vraag direct een gratis inspectie aan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#0088FF] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2.5 font-bebas text-lg tracking-wider hover:bg-[#006ACC] transition-all duration-250 shadow-[0_4px_24px_rgba(0,136,255,0.3)] hover:shadow-[0_8px_32px_rgba(0,136,255,0.4)] hover:-translate-y-0.5"
              >
                GRATIS INSPECTIE
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
      <section id="werkwijze-houtrot-sanering" className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block font-bebas text-sm tracking-[0.15em] text-[#0088FF] mb-3 uppercase">
              Hoe Wij Werken
            </span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Ons Werkproces in 4 Stappen
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Elk houtrot sanering project bij Schildersbedrijf040 volgt een vast werkproces — van inspectie tot oplevering. Zo weet u precies wat u kunt verwachten.
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
                Waarom Schildersbedrijf040 voor Uw Houtrot Sanering?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Schildersbedrijf040 onderscheidt zich door vakmanschap, eerlijk advies en het combineren van houtrot sanering met professioneel schilderwerk. Eigenaar Jordy Jacobs is persoonlijk betrokken bij elk project — van de eerste inspectie tot de eindcontrole. Dat vertaalt zich in een klantbeoordeling van 5 sterren op Google en een 4,9 op Werkspot.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { titel: 'Gratis houtrot inspectie', beschrijving: 'Schildersbedrijf040 inspecteert uw kozijnen, deuren en boeiboorden gratis en vrijblijvend. U weet vooraf exact welke kozijnen aangetast zijn en wat de reparatie kost.' },
                  { titel: 'Repareren waar mogelijk, vervangen waar nodig', beschrijving: 'Schildersbedrijf040 adviseert altijd de meest kostenefficiënte oplossing. In circa 80% van de gevallen is epoxy reparatie mogelijk — tot 70% goedkoper dan volledig vervangen.' },
                  { titel: 'Houtrot sanering én schilderwerk in één', beschrijving: 'Schildersbedrijf040 combineert houtrot reparatie met buitenschilderwerk, zodat het kozijn direct beschermd is. Dat bespaart tijd, kosten en een tweede steigeropbouw.' },
                  { titel: 'Vaste prijs — geen verrassingen', beschrijving: 'Gedetailleerde offerte per kozijn uitgesplitst, inclusief materiaal en schilderwerk. Geen verborgen kosten achteraf.' },
                  { titel: 'Persoonlijke betrokkenheid', beschrijving: 'Eigenaar Jordy Jacobs is bij elk houtrot sanering project betrokken — u hebt altijd een vast aanspreekpunt dat uw woning kent.' },
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
                  &ldquo;Houtrot in meerdere kozijnen vakkundig gerepareerd. Eerlijk advies over wat gerepareerd kon worden en wat vervangen moest. Top resultaat!&rdquo;
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
                  &ldquo;Alle kozijnen geïnspecteerd en de houtrot plekken perfect gerepareerd met epoxy. Netjes afgeschilderd en je ziet niets meer. Aanrader!&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <WerkspotLogo />
                  Werkspot — Topvakman
                </div>
              </div>

              {/* Werkgebied link */}
              <div className="p-7 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bebas text-xl mb-3">Houtrot Sanering in Uw Regio</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Schildersbedrijf040 voert houtrot sanering uit in Eindhoven en omliggende gemeenten.
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
            Vragen over Houtrot Sanering
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
            Staat uw vraag er niet bij? Neem gerust contact op — Schildersbedrijf040 helpt u graag verder.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden relative h-[280px]">
                <Image
                  src={faqImage}
                  alt="Houtrot sanering resultaat — kozijnen gerepareerd met epoxy door Schildersbedrijf040 in Eindhoven"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#F7F8FA] rounded-2xl p-8">
                <h3 className="font-bebas text-xl mb-3">Nog vragen?</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Schildersbedrijf040 beantwoordt al uw vragen over houtrot sanering. Bel of mail voor persoonlijk advies.
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
            alt="Contact Schildersbedrijf040 voor houtrot sanering"
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
                Houtrot Ontdekt? Wacht Niet Langer
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Houtrot breidt zich uit als het niet wordt aangepakt. Schildersbedrijf040 komt graag langs voor een gratis inspectie en vrijblijvende offerte. Bel, mail of vul het contactformulier in — u ontvangt binnen 48 uur een offerte op maat.
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
