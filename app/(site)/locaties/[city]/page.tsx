import type { Metadata } from 'next'
import { cityData } from './data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buren, heroFoto, lokaal } from './data-lokaal'
import { JsonLd } from '@/components/json-ld'
import { Stappen } from '@/components/home/v2'
import { Offerte } from '@/components/site/offerte'
import { VoorNa } from '@/components/site/voor-na'
import { Winterband } from '@/components/site/winterband'
import { afbreek, Eyebrow, KnopBel, KnopOfferte, Pijl, Streek, staal } from '@/components/site/v2'
import { TOON_JORDY } from '@/lib/jordy'
import { PRIJSGIDS } from '@/lib/navigation'
import { prijzen } from '@/lib/prices'
import { bronLabel, locatieQuotes } from '@/lib/reviews'
import { orgRef } from '@/lib/schema'
import { site } from '@/lib/site'

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
    title: `Op zoek naar een schilder in ${data.displayName}?`,
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

export default function LocationPage({ params }: { params: { city: string } }) {
  const city = params.city
  const data = cityData[city]

  if (!data) {
    notFound()
  }

  // Lokale dienst; het bedrijf zelf (HousePainter) staat sitebreed in de layout
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://schildersbedrijf040.nl/locaties/${city}#service`,
    name: `Schilderwerk in ${data.displayName}`,
    serviceType: 'Schilderwerk',
    url: `https://schildersbedrijf040.nl/locaties/${city}`,
    provider: orgRef,
    areaServed: {
      '@type': 'City',
      name: data.displayName,
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

  const lok = lokaal[city]
  const foto = heroFoto(city)
  const buurplaatsen = (buren[city] ?? []).filter((b) => cityData[b])
  const X = data.displayName

  // Teksten van het live template (main), letterlijk, em dashes vervangen
  const usps = [
    { titel: 'Hoogst beoordeeld in de regio', beschrijving: '5 sterren op Google en 4,9 op Werkspot met 41+ beoordelingen.' },
    { titel: 'Premium Boonstoppel verf', beschrijving: '8 tot 10 jaar bescherming, de beste keuze voor langdurig resultaat.' },
    { titel: 'Garantie op elk project', beschrijving: 'Kwaliteitsgarantie op al het schilderwerk, u bent altijd verzekerd.' },
    { titel: 'Korte reistijd, lage kosten', beschrijving: `Gevestigd in Eindhoven, minimale voorrijkosten voor ${X}.` },
    { titel: 'Kennis van lokale bouwstijlen', beschrijving: `Ervaring met woningen in ${data.wijken.join(', ')}.` },
  ]
  const stappen = [
    { titel: 'Contact', tekst: `Bel, mail of vul het formulier in voor een vrijblijvend gesprek over uw schilderproject in ${X}.` },
    { titel: 'Inspectie', tekst: `Wij komen langs bij uw woning in ${X} voor een inspectie en bespreking.` },
    { titel: 'Offerte', tekst: 'Binnen 48 uur een gedetailleerde offerte met vaste prijs, zonder verborgen kosten.' },
    { titel: 'Uitvoering', tekst: 'Netjes, op tijd en samen controleren wij het eindresultaat.' },
  ]
  const kleuren = ['var(--sw1)', 'var(--sw4)', 'var(--sw2)', 'var(--sw5)', 'var(--sw6)', 'var(--sw3)']

  return (
    <main>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero met foto */}
      <section className="dp-hero" style={{ padding: 0 }}>
        <div className="wrap grid">
          <div>
            <nav className="crumbs" aria-label="Kruimelpad">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/#werkgebied">Werkgebied</Link>
              <span>/</span>
              <b aria-current="page">{X}</b>
            </nav>
            <h1 className="disp">
              <span className="w">
                <span>Schilder in</span>
              </span>{' '}
              <br />
              <span className="w">
                <span className="paint">{X}</span>
              </span>
            </h1>
            <p className="lead">{data.intro}</p>
            <div className="cta-row">
              <KnopOfferte />
              <KnopBel />
            </div>
            <div className="trust">
              <div>
                <span className="n">{site.google.rating}</span>
                <span className="stars" aria-hidden="true">
                  ★★★★★
                </span>
                <small>
                  {site.google.rating} uit {site.google.reviewCount} reviews
                </small>
              </div>
              <div>
                <span className="n">{site.werkspot.rating}</span>
                <small>{site.werkspot.rating} op Werkspot</small>
              </div>
              <div>
                <span className="n">040</span>
                <small>Gevestigd in Eindhoven</small>
              </div>
            </div>
          </div>
          <div className="loc-visual">
            <div className="photo">
              <div className="img">
                <Image src={foto.src} alt={`Schildersbedrijf in ${X}. Schildersbedrijf040`} fill priority sizes="(max-width: 980px) 92vw, 560px" />
              </div>
            </div>
            {TOON_JORDY && <span className="ph-label">[JORDY: foto van een project in {X}]</span>}
          </div>
        </div>
      </section>

      <Winterband />

      {/* Lokaal blok */}
      <section>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Lokaal</Eyebrow>
              <h2 id="schilderwerk-lokaal" className="disp">
                Binnen- en buitenschilderwerk in <Streek>{X}</Streek>
              </h2>
            </div>
            {lok && <p>{lok.tekst}</p>}
          </div>
          {lok ? (
            <div className="wijken">
              {lok.wijken.map((w, i) => (
                <article key={w.naam} className="rv" style={{ ['--c' as string]: kleuren[(i + 2) % kleuren.length] }}>
                  <i />
                  <small>{w.label.toUpperCase()}</small>
                  <h3>{w.naam}</h3>
                  <p>{w.tekst}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="places rv" style={{ marginTop: 0 }}>
              <span className="pl-label">Actief in onder andere:</span>
              {data.wijken.map((w) => (
                <span key={w} className="pl">
                  {w}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Diensten in deze plaats */}
      <section style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Onze diensten in {X}</Eyebrow>
              <h2 id="diensten" className="disp">
                Schilderdiensten in <Streek>{X}</Streek>
              </h2>
            </div>
            <p>Van binnenschilderwerk tot houtrot sanering, elk project wordt vakkundig uitgevoerd met Boonstoppel verf en jarenlange ervaring.</p>
          </div>
          <div className="deck">
            {data.diensten.map((dienst) => {
              const st = staal[dienst.slug] ?? staal.binnenschilderwerk
              return (
                <Link key={dienst.slug} className="card rv" href={`/diensten/${dienst.slug}`} style={{ ['--c' as string]: st.c }}>
                  <i />
                  <small>{st.code}</small>
                  <h3>{afbreek(dienst.title)}</h3>
                  <p>{dienst.description}</p>
                  <span>
                    Meer over {dienst.title.toLowerCase()} in {X} →
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="pricebar rv">
            <div style={{ maxWidth: '72ch' }}>
              <small className="pb-label">Indicatie tarieven</small>
              <h3 id="kosten-schilder" className="pb-h">
                Wat kost een schilder in {X}?
              </h3>
              <p>{data.kosten}</p>
              <p>
                <b>Prijzen in {X}</b> zijn gelijk aan Eindhoven. Binnenschilderwerk vanaf {prijzen.binnenschilderwerk[0].prijs.split(' tot ')[0]} per m²,
                indicatief.
              </p>
            </div>
            {PRIJSGIDS.live ? (
              <Link className="btn btn-line" href={PRIJSGIDS.href}>
                Bekijk de prijsgids <Pijl />
              </Link>
            ) : (
              <Link className="btn btn-line" href="/diensten/binnenschilderwerk#kosten-binnenschilderwerk">
                Bekijk de prijzen voor binnenschilderwerk <Pijl />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Project en review uit de plaats, met de bannertekst van de live pagina */}
      <section className="ba-sec on-dark">
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow style={{ color: '#7FA3FF' }}>Project in {X}</Eyebrow>
              <h2 id="project" className="disp">
                Resultaat waar u trots op <Streek>bent</Streek>
              </h2>
            </div>
            <p>Van voorbereiding tot de laatste kwaststreek, wij leveren schilderwerk dat jarenlang meegaat. Bekijk onze projecten of vraag direct een offerte aan.</p>
          </div>
          <VoorNa
            na={foto}
            feiten={[
              ['Wijk', '[JORDY: wijk]'],
              ['Werk', `[JORDY: project in ${X}]`],
              ['Oppervlak', '[JORDY: m²]'],
            ]}
            extra={
              <div className="buurt-review">
                <h3 id="review">Review uit de buurt</h3>
                <p className="bq">
                  &ldquo;{locatieQuotes.google}&rdquo;
                  <span className="rr">
                    <span aria-hidden="true">★★★★★</span> <span className="m">{bronLabel.google}</span>
                  </span>
                </p>
              </div>
            }
            knop={{ href: '/projecten', tekst: 'Bekijk projecten' }}
          />
        </div>
      </section>

      {/* Waarom, met de USP's en reviews van het live template */}
      <section style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Waarom wij</Eyebrow>
              <h2 id="waarom-schildersbedrijf040" className="disp">
                Waarom Schildersbedrijf040 in <Streek>{`${X}?`}</Streek>
              </h2>
            </div>
            <p>{data.waarom}</p>
          </div>
          <div className="why">
            {usps.map((u) => (
              <div key={u.titel} className="rv">
                <h3>{afbreek(u.titel)}</h3>
                <span>{u.beschrijving}</span>
              </div>
            ))}
          </div>
          <div className="rev-strip">
            <figure className="rv">
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <h3 className="rq">5,0 op Google</h3>
              <blockquote>&ldquo;{locatieQuotes.google}&rdquo;</blockquote>
              <figcaption>{bronLabel.google}</figcaption>
            </figure>
            <figure className="rv">
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <h3 className="rq">4,9 op Werkspot</h3>
              <blockquote>&ldquo;{locatieQuotes.werkspot}&rdquo;</blockquote>
              <figcaption>{bronLabel.werkspot}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Werkwijze (live template) */}
      <section>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Zo werken we in {X}</Eyebrow>
              <h2 id="werkwijze" className="disp">
                Onze werkwijze in 4 <Streek>stappen</Streek>
              </h2>
            </div>
            <p>{data.werkwijze}</p>
          </div>
          <Stappen stappen={stappen} />
        </div>
      </section>

      {/* Lokale FAQ en buurplaatsen */}
      <section style={{ background: 'var(--white)' }}>
        <div className="wrap two">
          <div className="rv">
            <Eyebrow>Veelgestelde vragen</Eyebrow>
            <h2 id="veelgestelde-vragen" className="disp dp-h2">
              Vragen over schilderwerk in <Streek>{X}</Streek>
            </h2>
            <p style={{ margin: '0 0 18px', color: 'var(--muted)' }}>Staat uw vraag er niet bij? Neem gerust contact op, wij helpen u graag.</p>
            <div className="faq-img">
              <Image src={heroFoto(buurplaatsen[0] ?? city).src} alt={`Schilderwerk in ${X}`} fill sizes="(max-width: 980px) 92vw, 480px" />
            </div>
            <h2 id="omgeving" className="mini-h2">
              Ook actief rond {X}
            </h2>
            <div className="places" style={{ marginTop: 12 }}>
              <Link href="/">Schilder Eindhoven</Link>
              {buurplaatsen.map((b) => (
                <Link key={b} href={`/locaties/${b}`}>
                  Schilder {cityData[b].displayName}
                </Link>
              ))}
            </div>
          </div>
          <div className="rv">
            {data.faqs.map((faq, i) => (
              <details key={faq.question} open={i === 0}>
                <summary>
                  <h3>{faq.question}</h3>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Offerte
        eyebrow={`Schilder nodig in ${X}?`}
        titel="Klaar voor een frisse start?"
        streek="start?"
        tekst={data.contact}
        extra={
          <div className="q-extra">
            <dl className="q-contact">
              <div>
                <dt>Bel ons direct</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Stuur een e-mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Bereikbaarheid</dt>
                <dd>Ma t/m vr: 08:00 tot 17:30</dd>
              </div>
            </dl>
            <div className="q-foto">
              <Image src={foto.src} alt={`Contact Schildersbedrijf040 ${X}`} fill sizes="320px" />
            </div>
          </div>
        }
      />
    </main>
  )
}
