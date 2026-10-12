import type { Metadata } from 'next'
import Image from 'next/image'
import { Instagram, ExternalLink } from 'lucide-react'

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
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/buitenschilderwerk-dakkapel-wit-geschilderd.jpg"
            alt="Schilderprojecten Eindhoven - Schildersbedrijf040"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Onze</span><br />
              <span className="text-[#7FB2FF]">projecten</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Bekijk onze meest recente projecten en volg ons op Instagram voor dagelijkse updates.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Laatste Projecten</h2>
              <p className="text-gray-600">Volg ons op Instagram voor dagelijkse updates</p>
            </div>
            <a
              href="https://www.instagram.com/schildersbedrijf040/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@schildersbedrijf040</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square group overflow-hidden rounded-xl"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center p-4">{project.title}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/schildersbedrijf040/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center group"
            >
              Volg ons op Instagram
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
