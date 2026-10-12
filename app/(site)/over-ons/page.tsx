import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { Offerte } from '@/components/site/offerte'
import { Eyebrow, KnopOfferte, Streek } from '@/components/site/v2'
import { images } from '@/lib/images'
import { TOON_JORDY, jordy } from '@/lib/jordy'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Over Ons | Ervaren Schildersbedrijf Eindhoven',
  description: 'Leer Schildersbedrijf040 kennen. Meer dan 5 jaar ervaring in Eindhoven. Vakkundig, betrouwbaar en persoonlijk. Ontdek onze geschiedenis en werkwijze.',
  keywords: ['over schildersbedrijf040', 'schilder eindhoven', 'ervaren schilder', 'betrouwbaar schildersbedrijf'],
  openGraph: {
    title: 'Over Ons | Schildersbedrijf040',
    description: 'Leer Schildersbedrijf040 kennen. Meer dan 5 jaar ervaring in vakkundig schilderwerk.',
    url: 'https://schildersbedrijf040.nl/over-ons',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/over-ons',
  },
}

const benefits = [
  { titel: 'Meer dan 5 jaar ervaring', tekst: 'Vakmanschap uit de regio Eindhoven.' },
  { titel: 'Alles onder één dak', tekst: 'Schilderen, behang, latex, houtherstel, timmer- en stucwerk.' },
  { titel: 'Vakkundig en betrouwbaar', tekst: 'Afspraak is afspraak.' },
  { titel: 'Persoonlijke aanpak', tekst: 'Eén aanspreekpunt van inspectie tot oplevering.' },
  { titel: 'Flexibele planning', tekst: 'Binnenwerk ook in de winter.' },
  { titel: 'Kwaliteitsgarantie', tekst: 'Op al het schilderwerk, met Boonstoppel-verf.' },
]

// Vakken uit de bestaande tekst ("Wij hebben alles onder één dak ...")
const vakken = [
  { naam: 'Schilderen', c: 'var(--sw1)' },
  { naam: 'Latex spuiten', c: 'var(--sw3)' },
  { naam: 'Renovlies en behang', c: 'var(--sw2)' },
  { naam: 'Houtherstel', c: 'var(--sw5)' },
  { naam: 'Timmer- en stucwerk', c: 'var(--sw4)' },
  { naam: 'Wrappen', c: 'var(--sw6)' },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://schildersbedrijf040.nl/over-ons',
  mainEntity: {
    '@type': 'HousePainter',
    '@id': 'https://schildersbedrijf040.nl/#organization',
    name: 'Schildersbedrijf040',
    description: 'Professioneel schildersbedrijf in Eindhoven met meer dan 5 jaar ervaring in binnen- en buitenschilderwerk, behangen en houtrot sanering.',
    foundingDate: '2019',
    founder: {
      '@type': 'Person',
      name: 'Jordy Jacobs',
      jobTitle: 'Eigenaar',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Straatsburglaan 26',
      addressLocality: 'Eindhoven',
      postalCode: '5627DB',
      addressCountry: 'NL',
    },
    areaServed: 'Eindhoven en omgeving',
    knowsAbout: ['Binnenschilderwerk', 'Buitenschilderwerk', 'Behangen', 'Houtrot sanering', 'Latex spuiten', 'Lakwerk'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schildersbedrijf040.nl' },
    { '@type': 'ListItem', position: 2, name: 'Over Ons', item: 'https://schildersbedrijf040.nl/over-ons' },
  ],
}

export default function OverOnsPage() {
  return (
    <main>
      <JsonLd data={schemaData} />
      <JsonLd data={breadcrumbSchema} />

      <section className="dp-hero" style={{ padding: 0 }}>
        <div className="wrap grid">
          <div>
            <nav className="crumbs" aria-label="Kruimelpad">
              <Link href="/">Home</Link>
              <span>/</span>
              <b aria-current="page">Over ons</b>
            </nav>
            <h1 className="disp lang">
              <span className="w">
                <span>Over</span>
              </span>{' '}
              <br />
              <span className="w">
                <span className="paint">Schilders</span>
              </span>
              <span className="w">
                <span>bedrijf040</span>
              </span>
            </h1>
            <p className="sub">Meer dan een schildersbedrijf</p>
            <p className="lead">
              Schildersbedrijf040 is opgericht door Jordy Jacobs, vanuit passie voor het vak. Inmiddels werken we met een vast team van meer dan acht
              collega&apos;s in Eindhoven en omgeving, en u heeft altijd één aanspreekpunt.
            </p>
            <div className="cta-row">
              <KnopOfferte>Plan een kennismaking</KnopOfferte>
            </div>
          </div>
          <div className="staal">
            <div className="staal-card">
              <div className="img">
                <Image
                  src={images.jordy.src}
                  alt="Jordy Jacobs - Eigenaar Schildersbedrijf040 Eindhoven"
                  fill
                  priority
                  sizes="(max-width: 980px) 92vw, 560px"
                  style={{ objectPosition: '55% 35%' }}
                />
              </div>
              <div className="staal-label">
                <div>
                  <small>EIGENAAR</small>
                  <b>Jordy Jacobs</b>
                </div>
                <span>{jordy('[JORDY: sinds jaar]')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof" style={{ paddingTop: 56 }}>
        <div className="wrap">
          <div className="grid rv counters">
            <div>
              <div className="big">
                <span data-to="8">8</span>+
              </div>
              <small>vaste collega&apos;s</small>
            </div>
            <div>
              <div className="big">
                <span data-to="5">5</span>+
              </div>
              <small>jaar ervaring</small>
            </div>
            <div>
              <div className="big" data-to="5.0" data-dec="1">
                {site.google.rating}
              </div>
              <small>op Google, {site.google.reviewCount} reviews</small>
            </div>
            <div>
              <div className="big blue" data-to="4.9" data-dec="1">
                {site.werkspot.rating}
              </div>
              <small>op Werkspot</small>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap story">
          <div className="rv lopend">
            <Eyebrow>Onze geschiedenis</Eyebrow>
            <h2 id="onze-geschiedenis" className="disp dp-h2">
              Onze <Streek>geschiedenis</Streek>
            </h2>
            <p>
              Ons schildersbedrijf is opgericht vanuit passie voor het schildersvak. Na jarenlang ervaring op te hebben gedaan te midden van ervaren
              mensen, was het voor Jordy Jacobs tijd voor een nieuwe stap. En dat is uitgegroeid tot meer dan een schildersbedrijf.
            </p>
            <p>
              Wij hebben alles onder één dak, of het nu gaat om schilderen, wrappen, (renovlies) behangen, latex spuiten, houtherstel of timmer- of
              stukadoorswerk. Deze passie en dit vakmanschap hebben geleid tot een grote tevreden klantenkring.
            </p>
            <p>
              Bij ons is afspraak ook echt afspraak, en u hoeft zich geen seconde druk te maken of we wel doen wat we zeggen. Want dat doen we altijd.
              Wilt u ook kiezen voor goed en betrouwbaar schilderwerk? Onze schilders en andere vakmannen in Eindhoven en omstreken komen graag langs!
            </p>
          </div>
          <figure className="rv story-img">
            <Image
              src={images.horeca.src}
              alt="Over Schildersbedrijf040 - Uw schilder in Eindhoven"
              width={images.horeca.width}
              height={images.horeca.height}
              sizes="(max-width: 980px) 92vw, 560px"
            />
            <figcaption>
              <small>PROJECT{TOON_JORDY ? ' · [JORDY: naam en plaats]' : ''}</small>
              Lambrisering en kozijnen
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ba-sec on-dark quote-band">
        <div className="wrap">
          <blockquote className="rv">
            <span className="mark" aria-hidden="true">
              &ldquo;
            </span>
            Bij ons is afspraak ook echt afspraak, en u hoeft zich geen seconde druk te maken of we wel doen wat we zeggen. Want dat doen we altijd.
            <cite>Jordy Jacobs, eigenaar</cite>
          </blockquote>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Alles onder één dak</Eyebrow>
              <h2 id="een-team-elk-vak" className="disp">
                Eén team, <Streek>elk vak</Streek>
              </h2>
            </div>
            <p>U hoeft niet zelf verschillende vakmensen te regelen. Wij stemmen alles op elkaar af.</p>
          </div>
          <div className="vakken">
            {vakken.map((v) => (
              <div key={v.naam} className="rv" style={{ ['--c' as string]: v.c }}>
                <i />
                {v.naam}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Het team</Eyebrow>
              <h2 id="het-team" className="disp">
                De mensen achter de <Streek>kwast</Streek>
              </h2>
            </div>
            <p>Een vast team van meer dan acht collega&apos;s, met Jordy Jacobs als uw aanspreekpunt.</p>
          </div>
          <div className="team2">
            <figure className="rv">
              <Image src={images.jordy.src} alt={images.jordy.alt} width={images.jordy.width} height={images.jordy.height} sizes="(max-width: 980px) 92vw, 520px" />
              <figcaption>
                <b>Jordy Jacobs</b>
                <span>Eigenaar en uw aanspreekpunt</span>
              </figcaption>
            </figure>
            <div className="rv team-txt counters">
              <div className="big">
                <span data-to="8">8</span>+
              </div>
              <h3>Vaste collega&apos;s</h3>
              <p>
                Jordy werkt met een vast team van meer dan acht schilders en vakmensen. U heeft één aanspreekpunt van inspectie tot oplevering.
                {jordy(' [JORDY: doet Jordy zelf de inspectie?]')}
              </p>
              <KnopOfferte className="self-start">Plan een kennismaking</KnopOfferte>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Waarom wij</Eyebrow>
              <h2 id="waarom-kiezen" className="disp">
                Waarom kiezen voor <Streek>Schildersbedrijf040?</Streek>
              </h2>
            </div>
          </div>
          <ul className="why why-ul">
            {benefits.map((b) => (
              <li key={b.titel} className="rv">
                <h3>{b.titel}</h3>
                <span>{b.tekst}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Offerte
        eyebrow="Gratis offerte"
        titel="Klaar voor uw project?"
        streek="project?"
        tekst="Wij denken graag met u mee over uw schilderproject. Neem contact met ons op voor een vrijblijvende offerte."
      />
    </main>
  )
}
