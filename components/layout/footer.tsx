import Link from 'next/link'
import { diensten, plaatsen } from '@/lib/navigation'
import { site } from '@/lib/site'

const snelleLinks = [
  { name: 'Projecten', href: '/projecten' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Veelgestelde vragen', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div>
          <div className="brand">Schildersbedrijf040</div>
          <p>Vakkundig schilderwerk in Eindhoven en omgeving. Eigenaar {site.owner}.</p>
          <p style={{ color: '#fff' }}>
            <span aria-hidden="true">★</span> {site.google.rating} op Google ({site.google.reviewCount}) · {site.werkspot.rating} op Werkspot
          </p>
          <p className="social">
            <a href={site.sameAs[0]} target="_blank" rel="noopener noreferrer" aria-label="Schildersbedrijf040 op Facebook">
              Facebook
            </a>
            <a href={site.sameAs[1]} target="_blank" rel="noopener noreferrer" aria-label="Schildersbedrijf040 op Instagram">
              Instagram
            </a>
          </p>
        </div>
        <div>
          <h2>Diensten</h2>
          {diensten.map((d) => (
            <Link key={d.href} href={d.href}>
              {d.name}
            </Link>
          ))}
          <h2 style={{ marginTop: 22 }}>Snel naar</h2>
          {snelleLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.name}
            </Link>
          ))}
        </div>
        <div>
          <h2>Werkgebied</h2>
          <div className="cols">
            {plaatsen.map((p) => (
              <Link key={p.href} href={p.href}>
                Schilder {p.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2>Contact</h2>
          <address style={{ fontStyle: 'normal', margin: 0 }}>
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </address>
          <a href={site.phoneHref} style={{ color: '#fff', marginTop: 10 }}>
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p style={{ margin: '10px 0 0' }}>
            {site.openingHours.days} {site.openingHours.opens} tot {site.openingHours.closes}
            <br />
            Za en zo gesloten
          </p>
        </div>
      </div>
      <div className="copy">
        <div className="wrap">
          © {new Date().getFullYear()} Schildersbedrijf040. Alle rechten voorbehouden. Website gemaakt door{' '}
          <a href="https://www.gostack.nl" target="_blank" rel="noopener noreferrer">
            GOSTACK
          </a>
        </div>
      </div>
    </footer>
  )
}
