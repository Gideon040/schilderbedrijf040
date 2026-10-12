// Kleine bouwstenen van redesign v2 (zie seo/plan/design-v2/LEESMIJ.md)
import Link from 'next/link'
import type { ReactNode } from 'react'
import { site } from '@/lib/site'

// Penseelstreek achter één woord in een H2 (tekent bij in beeld scrollen)
export function Streek({ children }: { children: ReactNode }) {
  return <span className="p2">{children}</span>
}

// Kop met de penseelstreek op het laatste woord, zonder de tekst te veranderen
export function StreekKop({ tekst, streek }: { tekst: string; streek?: string }) {
  const s = streek ?? tekst.split(' ').slice(-1)[0]
  const i = tekst.lastIndexOf(s)
  if (i < 0) return <>{tekst}</>
  return (
    <>
      {tekst.slice(0, i)}
      <Streek>{s}</Streek>
      {tekst.slice(i + s.length)}
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
}
