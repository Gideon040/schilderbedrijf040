// Helpers rond data/projecten.ts
import { projecten, type Project } from '@/data/projecten'
import { diensten } from '@/lib/navigation'
import { cityData } from '@/app/(site)/locaties/[city]/data'

export type { Project }
export { projecten }

// Projecten met volledige gegevens. Oude Instagram-kaarten krijgen wel een pagina, maar noindex.
export const indexeerbaar = (p: Project) => !p.instagram

export const project = (slug: string) => projecten.find((p) => p.slug === slug)

export const projectenMetDienst = (dienst: string) => projecten.filter((p) => indexeerbaar(p) && p.diensten.includes(dienst))

export const projectenUit = (plaats: string) => projecten.filter((p) => indexeerbaar(p) && p.plaats.toLowerCase() === plaats.toLowerCase())

export const uitgelicht = () => project('witte-dorp-burghplein-eindhoven') as Project

export const dienstNaam = (slug: string) => diensten.find((d) => d.href === `/diensten/${slug}`)?.name ?? slug

// Eindhoven is de homepage; andere plaatsen hebben een eigen locatiepagina (als die bestaat)
export function plaatsLink(plaats: string): { href: string; tekst: string } | null {
  if (plaats.toLowerCase() === 'eindhoven') return { href: '/', tekst: 'Schilder Eindhoven' }
  const slug = Object.keys(cityData).find((k) => cityData[k].displayName.toLowerCase() === plaats.toLowerCase())
  return slug ? { href: `/locaties/${slug}`, tekst: `Schilder ${cityData[slug].displayName}` } : null
}

export const plaatsLabel = (p: Project) => [p.wijk, p.plaats].filter(Boolean).join(', ')
