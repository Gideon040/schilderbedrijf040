import Link from 'next/link'
import { huidigSeizoen } from '@/lib/seizoen'

function Vlok() {
  return (
    <svg className="fl" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v20M4.9 6l14.2 12M19.1 6L4.9 18M9 3.5l3 2.5 3-2.5M9 20.5l3-2.5 3 2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Schuine blauwe ticker over de overgang onder de hero. Oktober t/m februari winterwerk, daarna buitenwerk.
export function Winterband({ label }: { label?: string }) {
  const s = huidigSeizoen()
  const items = s.ticker
  const rij = [...items, ...items]
  return (
    <div className="tk-wrap">
      <Link className="ticker win" href={s.link} aria-label={label ?? `${s.kop} ${s.tekst}`}>
        <div className="row" aria-hidden="true">
          {rij.map((t, i) => (
            <span key={i} className={i % 3 === 1 ? 'o' : undefined}>
              {t}
              <Vlok />
            </span>
          ))}
        </div>
      </Link>
    </div>
  )
}
