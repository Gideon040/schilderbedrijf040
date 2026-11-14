import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow, Streek } from '@/components/site/v2'
import { Offerte } from '@/components/site/offerte'
import { ProjectFilter } from '@/components/projecten/filter'
import { diensten as dienstMenu } from '@/lib/navigation'
import { TOON_JORDY, jordy } from '@/lib/jordy'
import { indexeerbaar, projecten } from '@/lib/projecten'
import { ProjectKaarten } from '@/components/projecten/kaarten'

export const metadata: Metadata = {
  title: 'Projecten | Ons Schilderwerk in Beeld',
  description: 'Bekijk onze afgeronde schilderprojecten in Eindhoven en omgeving. Van binnenschilderwerk tot complete renovaties. Volg ons op Instagram voor dagelijkse updates.',
  keywords: ['schilderwerk projecten', 'schilder portfolio', 'schilderwerk eindhoven', 'schilderwerk voorbeelden'],
  openGraph: {
    title: 'Projecten | Schildersbedrijf040',
    description: 'Bekijk onze afgeronde schilderprojecten in Eindhoven en omgeving.',
    url: 'https://schildersbedrijf040.nl/projecten',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schildersbedrijf040.nl/projecten',
  },
}

// Projecten uit data/projecten.ts: eerst de projecten met eigen pagina, daarna de oudere Instagram-projecten
const lijst = [...projecten.filter(indexeerbaar), ...projecten.filter((p) => !indexeerbaar(p))]

export default function ProjectenPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://schildersbedrijf040.nl/projecten',
    name: 'Projecten - Schildersbedrijf040',
    description: 'Portfolio van afgeronde schilderprojecten in Eindhoven en omgeving',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projecten.filter(indexeerbaar).map((p, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://schildersbedrijf040.nl/projecten/${p.slug}`,
        name: jordy(p.titel),
      }))
    },
    provider: {
      '@type': 'HousePainter',
      '@id': 'https://schildersbedrijf040.nl/#organization',
      name: 'Schildersbedrijf040',
      url: 'https://schildersbedrijf040.nl'
    }
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
        name: 'Projecten',
        item: 'https://schildersbedrijf040.nl/projecten'
      }
    ]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
              <b aria-current="page">Projecten</b>
            </nav>
            <h1 className="disp">
              <span className="w">
                <span>Onze</span>
              </span>
              <br />
              <span className="w">
                <span className="paint">projecten</span>
              </span>
            </h1>
            <p className="lead">
              Projecten van Schildersbedrijf040 in Eindhoven en omgeving, met per klus de situatie, de aanpak, de gebruikte materialen en foto&apos;s
              van het resultaat.
            </p>
          </div>
          <div className="pg-foto">
            <Image
              src={projecten[0].fotos[0].src}
              alt={projecten[0].fotos[0].alt}
              fill
              sizes="(max-width: 980px) 100vw, 420px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head rv">
            <div>
              <Eyebrow>Uit ons werk</Eyebrow>
              <h2 id="laatste-projecten" className="disp">
                Laatste <Streek>Projecten</Streek>
              </h2>
            </div>
            <p>Filter op dienst of plaats. Elk project heeft een eigen pagina met de aanpak en meer foto&apos;s.</p>
          </div>
          <ProjectFilter
            diensten={dienstMenu.filter((d) => lijst.some((p) => p.diensten.includes(d.href.split('/').pop() as string))).map((d) => ({ slug: d.href.split('/').pop() as string, naam: d.name }))}
            plaatsen={lijst.map((p) => jordy(p.plaats)).filter((p, i, a): p is string => !!p && a.indexOf(p) === i)}
          />
          <ProjectKaarten projecten={lijst} />
          <div className="rv" style={{ marginTop: 28 }}>
            <p style={{ margin: 0, color: 'var(--muted)' }}>
              Meer foto&apos;s en werk in uitvoering staan op{' '}
              <a href="https://www.instagram.com/schildersbedrijf040/" target="_blank" rel="noopener noreferrer">
                Instagram (@schildersbedrijf040)
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-2)' }}>
        <div className="wrap two">
          <div className="rv">
            <Eyebrow>Per dienst en plaats</Eyebrow>
            <h2 id="projecten-per-dienst-en-plaats" className="disp">
              Ons werk in <Streek>de regio</Streek>
            </h2>
          </div>
          <div className="lopend rv">
            <p>
              Schildersbedrijf040 werkt vanuit Eindhoven voor particulieren en bedrijven in de hele regio. De projecten op deze pagina laten
              zien wat dat in de praktijk betekent: buitenwerk zoals vier monumentale woningen in het Witte Dorp en een woning met
              houtrotherstel aan de Fluwijnstraat, en binnenwerk zoals een volledig gespoten bungalow in Best en een gelatexte
              benedenverdieping in Blixembosch. Met de filter hierboven ziet u alleen de projecten van één dienst of één plaats.
            </p>
            <p>
              Meer over de aanpak per klus leest u op de pagina&apos;s over <Link href="/diensten/binnenschilderwerk">binnenschilderwerk</Link>{' '}
              en <Link href="/diensten/buitenschilderwerk">buitenschilderwerk laten doen</Link>. Woont u buiten Eindhoven? Schildersbedrijf040
              werkt onder meer in <Link href="/locaties/helmond">Helmond</Link>, <Link href="/locaties/veldhoven">Veldhoven</Link>,{' '}
              <Link href="/locaties/best">Best</Link>, <Link href="/locaties/geldrop">Geldrop</Link>, <Link href="/locaties/nuenen">Nuenen</Link>{' '}
              en <Link href="/locaties/valkenswaard">Valkenswaard</Link>. Vraag via <Link href="/contact">de contactpagina</Link> een gratis
              inspectie aan, dan bekijkt Jordy Jacobs uw project ter plekke.
            </p>
            {TOON_JORDY && (
              <p className="ph-label">
                [JORDY: projectcases aanleveren via WhatsApp: plaats, woningtype, ruimtes, wat er gedaan is, minimaal drie foto&apos;s (voor,
                tijdens, na) en een quote met voornaam en toestemming. Ook de plaats bij de houtrot-, buitenwerk- en zolderprojecten.]
              </p>
            )}
          </div>
        </div>
      </section>

      <Offerte />
    </main>
  )
}
