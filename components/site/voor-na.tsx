import Image from 'next/image'
import Link from 'next/link'
import type { SiteImage } from '@/lib/images'
import { TOON_JORDY, jordy, toonBlok } from '@/lib/jordy'
import { Pijl } from '@/components/site/v2'

// Voor/na-slider (ontwerp v2). Zonder echte voor-foto: in productie alleen de na-foto;
// op de preview een nagebootste voor-foto met het label DEMO, zodat de werking te zien is.
export type Project = { titel: string; label: string; na: SiteImage; voor?: SiteImage; tekst?: string }

export function VoorNa({
  na,
  voor,
  feiten,
  knop,
  extra,
}: {
  na: SiteImage
  voor?: SiteImage
  feiten: [string, string][]
  knop?: { href: string; tekst: string }
  extra?: React.ReactNode
}) {
  const slider = !!voor || TOON_JORDY
  return (
    <div className="ba-grid">
      <div className="rv">
        {slider ? (
          <div className="ba" style={{ ['--x' as string]: '50%' }}>
            <Image className="before" src={(voor ?? na).src} alt={voor ? voor.alt : `Voor: ${na.alt}`} fill sizes="(max-width: 980px) 100vw, 700px" />
            <Image className="after" src={na.src} alt={`Na: ${na.alt}`} fill sizes="(max-width: 980px) 100vw, 700px" />
            <span className="tag l">VOOR</span>
            <span className="tag r">NA</span>
            <div className="handle">
              <b aria-hidden="true">⇆</b>
            </div>
            <input type="range" min="0" max="100" defaultValue="50" aria-label="Schuif tussen voor en na" />
          </div>
        ) : (
          <div className="ba ba-na">
            <Image src={na.src} alt={na.alt} fill sizes="(max-width: 980px) 100vw, 700px" />
            <span className="tag r">NA</span>
          </div>
        )}
        {!voor && TOON_JORDY && <div className="demo">DEMO · de voor-foto is nagebootst. [JORDY: echte voor/na-foto&apos;s]</div>}
      </div>
      <dl className="facts rv">
        {feiten
          .filter(([, w]) => toonBlok(w))
          .map(([k, w]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{jordy(w)}</dd>
            </div>
          ))}
        {extra}
        {knop && (
          <div style={{ border: 0, paddingTop: 28 }}>
            <Link className="btn btn-line" href={knop.href}>
              {knop.tekst} <Pijl />
            </Link>
          </div>
        )}
      </dl>
    </div>
  )
}

// Compacte kaart (oude templates)
export function VoorNaKaart({ project }: { project: Project }) {
  return (
    <article className="vn-kaart">
      <VoorNa na={project.na} voor={project.voor} feiten={[['Project', project.titel], ['Plaats', project.label]]} />
      {project.tekst && <p>{jordy(project.tekst)}</p>}
    </article>
  )
}
