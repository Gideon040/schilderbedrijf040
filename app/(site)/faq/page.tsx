import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'
import { Offerte } from '@/components/site/offerte'

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen | Schildersbedrijf Eindhoven',
  description: 'Antwoorden op veelgestelde vragen over schilderwerk in Eindhoven. Wat kost een schilder? Hoe lang duurt schilderwerk? Welke garantie? Lees hier alle antwoorden.',
  keywords: ['schilder vragen', 'schilderwerk kosten', 'schilderwerk duur', 'schilder garantie', 'schilder eindhoven faq'],
  openGraph: {
    title: 'Veelgestelde Vragen | Schildersbedrijf040',
    description: 'Antwoorden op veelgestelde vragen over schilderwerk in Eindhoven.',
    url: 'https://schildersbedrijf040.nl/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/faq',
  },
}

const faqs = [
  {
    question: "Wat kost een schilder per m2 in Eindhoven?",
    answer: "De kosten voor schilderwerk variëren van €15 tot €35 per m2, afhankelijk van het type werk, de staat van de ondergrond en het aantal verflagen. Binnenschilderwerk is over het algemeen goedkoper dan buitenschilderwerk. Wij maken graag een vrijblijvende offerte op maat."
  },
  {
    question: "Hoe lang duurt een schilderproject gemiddeld?",
    answer: "De duur van een schilderproject hangt af van verschillende factoren zoals de grootte van het project, het type werk en de weersomstandigheden. Een gemiddeld binnenschilderproject voor één kamer duurt ongeveer 1-2 dagen, terwijl een volledig huis buitenschilderwerk 1-2 weken kan duren."
  },
  {
    question: "Welke garantie bieden jullie op het schilderwerk?",
    answer: "Wij bieden 1 jaar garantie op al ons schilderwerk. Deze garantie dekt gebreken in het schilderwerk die te wijten zijn aan de uitvoering of gebruikte materialen. Bij goed onderhoud gaat kwalitatief schilderwerk echter veel langer mee."
  },
  {
    question: "Werken jullie met hoogwaardige materialen?",
    answer: "Ja, wij werken uitsluitend met hoogwaardige verfproducten van Boonstoppel, een gerenommeerd Nederlands A-merk. Dit garandeert niet alleen een mooi eindresultaat, maar ook een langere levensduur van het schilderwerk."
  },
  {
    question: "Kan er het hele jaar door geschilderd worden?",
    answer: "Voor binnenschilderwerk kan het hele jaar door, mits de ruimte goed geventileerd en verwarmd is. Voor buitenschilderwerk zijn we afhankelijk van de weersomstandigheden. De ideale periode hiervoor is van april tot oktober, bij temperaturen boven 10°C en droog weer."
  },
  {
    question: "Hoe bereiden jullie de ondergrond voor?",
    answer: "Een goede voorbereiding is essentieel voor een duurzaam resultaat. We schuren het oppervlak, repareren beschadigingen, behandelen eventuele houtrot en zorgen voor een schone, droge ondergrond voordat we beginnen met schilderen. Dit kost extra tijd maar garandeert het beste resultaat."
  },
  {
    question: "Maken jullie gebruik van steigers bij buitenschilderwerk?",
    answer: "Ja, waar nodig maken we gebruik van professionele steigers of hoogwerkers om veilig te kunnen werken. Dit is inclusief in onze offerte en wordt door gecertificeerde partners geleverd. Veiligheid staat bij ons altijd voorop."
  },
  {
    question: "Hoe gaan jullie om met meubilair en vloerbedekking?",
    answer: "We dekken al uw meubilair en vloeren zorgvuldig af met beschermende materialen. Na afloop van de werkzaamheden ruimen we alles netjes op en laten we de ruimte schoon achter. U hoeft zelf niets te doen."
  },
  {
    question: "Bieden jullie kleuradvies aan?",
    answer: "Ja, we bieden professioneel kleuradvies aan. We kunnen u helpen bij het kiezen van de juiste kleuren die passen bij uw interieur of exterieur en kunnen kleurstalen op locatie demonstreren. Dit advies is geheel vrijblijvend."
  },
  {
    question: "In welke plaatsen zijn jullie actief?",
    answer: "Wij zijn actief in Eindhoven en de gehele regio, waaronder Waalre, Veldhoven, Geldrop, Nuenen, Son en Breugel, Best en Helmond. Neem contact met ons op om te kijken of wij ook in uw omgeving werkzaam zijn."
  }
]

export default function FAQPage() {
  // FAQPage schema for rich snippets in Google
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://schildersbedrijf040.nl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Veelgestelde Vragen',
        item: 'https://schildersbedrijf040.nl/faq'
      }
    ]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <section className="dp-hero" style={{ padding: 0 }}>
        <div className="wrap pg-hero">
          <div>
            <nav className="crumbs" aria-label="Kruimelpad">
              <Link href="/">Home</Link>
              <span>/</span>
              <b aria-current="page">Veelgestelde vragen</b>
            </nav>
            <h1 className="disp pg-lang">
              <span className="w">
                <span>Veelgestelde</span>
              </span>
              <br />
              <span className="w">
                <span className="paint">vragen</span>
              </span>
            </h1>
            <p className="lead">Hier vindt u antwoorden op de meest gestelde vragen over onze diensten en werkwijze.</p>
          </div>
          <div className="pg-foto">
            <Image
              src="/images/buitenschilderwerk-vrijstaande-woning-wit.jpg"
              alt="Veelgestelde vragen over schilderwerk - Schildersbedrijf040"
              fill
              sizes="(max-width: 980px) 100vw, 420px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--white)' }}>
        <div className="wrap two">
          <div className="rv">
            <div className="ask">
              <h3>Nog vragen?</h3>
              <span>Heeft u nog andere vragen? Neem gerust contact met ons op.</span>
              <span>
                Bel of app Jordy: <a href={site.phoneHref}>{site.phone}</a>
              </span>
              <Link className="btn btn-blue" href="/contact" style={{ alignSelf: 'flex-start' }}>
                Stel uw vraag <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="rv">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <h2 className="faq-q">{faq.question}</h2>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Offerte />
    </main>
  )
}
