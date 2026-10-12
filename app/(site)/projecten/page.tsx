import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow, Pijl, Streek } from '@/components/site/v2'
import { Offerte } from '@/components/site/offerte'

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

const projects = [
  {
    href: "https://www.instagram.com/p/C4kHvkXIkR_/",
    src: "/images/lakwerk-voordeur-antraciet.jpg",
    alt: "Afgelakte deur project Eindhoven",
    title: "Afgelakte deur 🚪"
  },
  {
    href: "https://www.instagram.com/p/C4kHt5mo3xR/",
    src: "/images/buitenschilderwerk-dakkapel-wit-geschilderd.jpg",
    alt: "Houtrot reparatie met schilderwerk",
    title: "Houtrot reparatie met schilderwerk 🔨"
  },
  {
    href: "https://www.instagram.com/p/C4h2XkSI5Rw/",
    src: "/images/buitenschilderwerk-vrijstaande-woning-wit.jpg",
    alt: "Complete vrijstaande woning buitenschilderwerk",
    title: "Complete vrijstaande woning buitenschilderwerk 🏠"
  },
  {
    href: "https://www.instagram.com/p/C4h2V4-I1R4/",
    src: "/images/binnenschilderwerk-zolder-renovatie.jpg",
    alt: "Binnen- en buitenschilderwerk project",
    title: "Binnen- en buitenschilderwerk project afgerond! ✨"
  },
  {
    href: "https://www.instagram.com/p/C4h2UPyI3R2/",
    src: "/images/latex-spuiten-benedenverdieping-blixembosch-eindhoven.jpg",
    alt: "Latex spuiten project Blixembosch",
    title: "Latex spuiten project in Blixembosch 🎨"
  },
  {
    href: "https://www.instagram.com/p/C4h2SoUI1Rz/",
    src: "/images/binnenschilderwerk-lambrisering-horeca-eindhoven.jpg",
    alt: "Binnenwerk Restaria Oude Gracht",
    title: "Binnenwerk Restaria Oude Gracht 🚪"
  }
]

export default function ProjectenPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://schildersbedrijf040.nl/projecten',
    name: 'Projecten - Schildersbedrijf040',
    description: 'Portfolio van afgeronde schilderprojecten in Eindhoven en omgeving',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          image: project.src,
          url: project.href
        }
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
            <p className="lead">Bekijk onze meest recente projecten en volg ons op Instagram voor dagelijkse updates.</p>
          </div>
          <div className="pg-foto">
            <Image
              src="/images/buitenschilderwerk-dakkapel-wit-geschilderd.jpg"
              alt="Schilderprojecten Eindhoven - Schildersbedrijf040"
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
              <Eyebrow>Instagram</Eyebrow>
              <h2 id="laatste-projecten" className="disp">
                Laatste <Streek>Projecten</Streek>
              </h2>
            </div>
            <p>
              Volg ons op Instagram voor dagelijkse updates{' '}
              <a href="https://www.instagram.com/schildersbedrijf040/" target="_blank" rel="noopener noreferrer">
                <span>@schildersbedrijf040</span>
              </a>
            </p>
          </div>
          <div className="collage proj">
            {projects.map((project) => (
              <a key={project.href} className="rv" href={project.href} target="_blank" rel="noopener noreferrer">
                <figure>
                  <Image src={project.src} alt={project.alt} fill sizes="(max-width: 980px) 50vw, 400px" />
                  <figcaption>
                    <small>INSTAGRAM</small>
                    <p>{project.title}</p>
                  </figcaption>
                </figure>
              </a>
            ))}
          </div>
          <div className="rv" style={{ marginTop: 28 }}>
            <a className="btn btn-line" href="https://www.instagram.com/schildersbedrijf040/" target="_blank" rel="noopener noreferrer">
              Volg ons op Instagram <Pijl />
            </a>
          </div>
        </div>
      </section>

      <Offerte />
    </main>
  )
}
