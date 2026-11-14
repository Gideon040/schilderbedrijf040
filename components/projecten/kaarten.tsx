import Image from 'next/image'
import Link from 'next/link'
import { jordy } from '@/lib/jordy'
import { dienstNaam, plaatsLabel, type Project } from '@/lib/projecten'

// Projectkaarten met de hoofdfoto, linkend naar de eigen projectpagina
export function ProjectKaart({ p, groot = false }: { p: Project; groot?: boolean }) {
  const f = p.fotos[0]
  return (
    <Link
      href={`/projecten/${p.slug}`}
      className={`pk rv${groot ? ' pk-groot' : ''}`}
      data-diensten={p.diensten.join(' ')}
      data-plaats={jordy(p.plaats)}
    >
      <div className="pk-img">
        <Image src={f.src} alt={f.alt} fill sizes={groot ? '(max-width: 980px) 92vw, 760px' : '(max-width: 980px) 92vw, 380px'} />
      </div>
      <div className="pk-txt">
        <small>{jordy(plaatsLabel(p)).toUpperCase() || 'PROJECT'}</small>
        <h3>{p.kaartTitel}</h3>
        <span className="pk-d">{p.diensten.map(dienstNaam).join(' · ')}</span>
        <span className="pk-l">Bekijk het project →</span>
      </div>
    </Link>
  )
}

export function ProjectKaarten({ projecten, eersteGroot = false }: { projecten: Project[]; eersteGroot?: boolean }) {
  return (
    <div className="pkaarten">
      {projecten.map((p, i) => (
        <ProjectKaart key={p.slug} p={p} groot={eersteGroot && i === 0} />
      ))}
    </div>
  )
}
