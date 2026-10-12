// Kleine bouwstenen van redesign v2 (zie seo/plan/design-v2/LEESMIJ.md)
import Link from 'next/link'
import type { ReactNode } from 'react'
import { site } from '@/lib/site'

// Onzichtbare afbreekpunten (zacht koppelteken) in lange samengestelde woorden, zodat een kop als
// "Binnenschilderwerk" op een smal scherm netjes als "Binnen-schilderwerk" afbreekt in plaats van buiten
// de kolom te lopen. De tekst zelf verandert niet: het zachte koppelteken is alleen zichtbaar bij afbreken.
const ZACHT = String.fromCharCode(0xad) // zacht koppelteken
export function afbreek(t: string): string {
  return t
    .replace(/(binnen|buiten)(schilder|werk|muren|deuren)/gi, `$1${ZACHT}$2`)
    .replace(/(schilders?)(werk|bedrijf|diensten)/gi, `$1${ZACHT}$2`)
    .replace(/(onderhouds)(contract|schilderwerk)/gi, `$1${ZACHT}$2`)
    .replace(/(kozijn|houtrot)(en)?(sanering|reparatie|schilderen)/gi, `$1$2${ZACHT}$3`)
}

// Tekst met interne links in de vorm [ankertekst](/pad), voor lopende tekst uit databestanden
export function MetLinks({ tekst }: { tekst: string }) {
  const delen = tekst.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {delen.map((d, i) => {
        const m = d.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        return m ? (
          <Link key={i} href={m[2]}>
            {m[1]}
          </Link>
        ) : (
          d
        )
      })}
    </>
  )
}

// Penseelstreek achter één woord in een H2 (tekent bij in beeld scrollen)
export function Streek({ children }: { children: ReactNode }) {
  return <span className="p2">{typeof children === 'string' ? afbreek(children) : children}</span>
}

// Kop met de penseelstreek op het laatste woord, zonder de tekst te veranderen
export function StreekKop({ tekst, streek }: { tekst: string; streek?: string }) {
  const s = streek ?? tekst.split(' ').slice(-1)[0]
  const i = tekst.lastIndexOf(s)
  if (i < 0) return <>{afbreek(tekst)}</>
  return (
    <>
      {afbreek(tekst.slice(0, i))}
      <Streek>{s}</Streek>
      {afbreek(tekst.slice(i + s.length))}
    </>
  )
}

export function Pijl() {
  return (
    <span className="arr" aria-hidden="true">
      →
    </span>
  )
}

export function KnopOfferte({ children = 'Gratis offerte aanvragen', className = '' }: { children?: ReactNode; className?: string }) {
  return (
    <Link className={`btn btn-blue ${className}`} href="/contact">
      {children} <Pijl />
    </Link>
  )
}

export function KnopBel({ className = '' }: { className?: string }) {
  return (
    <a className={`btn btn-line ${className}`} href={site.phoneHref}>
      Bel {site.phone}
    </a>
  )
}

export function Sterren({ className = '' }: { className?: string }) {
  return (
    <span className={`stars ${className}`} aria-hidden="true">
      ★★★★★
    </span>
  )
}

export function Eyebrow({ children, className = '', style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`eyebrow ${className}`} style={style}>
      {children}
    </div>
  )
}

// Staalkleuren per dienst (040-01 t/m 06)
export const staal: Record<string, { c: string; code: string; label: string; donker?: boolean }> = {
  binnenschilderwerk: { c: 'var(--sw1)', code: '040-01', label: 'BINNEN' },
  behangen: { c: 'var(--sw2)', code: '040-02', label: 'BEHANG' },
  'latex-spuiten': { c: 'var(--sw3)', code: '040-03', label: 'LATEX' },
  'houtrot-sanering': { c: 'var(--sw5)', code: '040-04', label: 'HOUTROT', donker: true },
  buitenschilderwerk: { c: 'var(--sw4)', code: '040-05', label: 'BUITEN', donker: true },
  lakwerk: { c: 'var(--sw6)', code: '040-06', label: 'LAKWERK', donker: true },
  winterschilder: { c: 'var(--sw4)', code: '040-07', label: 'WINTER', donker: true },
  'kozijnen-schilderen': { c: 'var(--sw6)', code: '040-08', label: 'KOZIJNEN', donker: true },
  'gevel-schilderen': { c: 'var(--sw4)', code: '040-09', label: 'GEVEL', donker: true },
}
