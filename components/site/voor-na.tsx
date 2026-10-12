import Image from 'next/image'
import type { SiteImage } from '@/lib/images'

// Voor/na-projectkaart (2.5). Ontbrekende foto's of gegevens blijven zichtbaar als [JORDY: ...].
export type Project = { titel: string; label: string; na: SiteImage; voor?: SiteImage; tekst?: string }

function Foto({ img, label, kleur }: { img?: SiteImage; label: string; kleur: string }) {
  return (
    <div className="relative flex-1">
      {img ? (
        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 330px" className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[repeating-linear-gradient(135deg,#E4E0D8_0_14px,#ECE9E3_14px_28px)] p-4 text-center text-sm font-semibold text-[#5B5548]">
          [JORDY: voor-foto]
        </div>
      )}
      <span className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-bold text-white ${kleur}`}>{label}</span>
    </div>
  )
}

export function VoorNaKaart({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[14px] border border-lijn">
      <div className="flex h-[220px] gap-[3px] bg-white md:h-[280px]">
        <Foto img={project.voor} label="VOOR" kleur="bg-navy" />
        <Foto img={project.na} label="NA" kleur="bg-brand" />
      </div>
      <div className="flex flex-col gap-1.5 px-6 py-5">
        <span className="text-sm font-semibold text-link">{project.label}</span>
        <h3 className="font-heading text-[24px] font-bold text-navy md:text-[25px]">{project.titel}</h3>
        {project.tekst && <p className="text-[17px] leading-relaxed text-tekst-zacht">{project.tekst}</p>}
      </div>
    </article>
  )
}
