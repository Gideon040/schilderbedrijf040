// Open punten voor Jordy staan in de tekst als [JORDY: ...]. In productie worden ze niet getoond;
// in development en op de Netlify deploy preview wel (NEXT_PUBLIC_TOON_JORDY=true), zodat ze te controleren zijn.
export const TOON_JORDY = process.env.NEXT_PUBLIC_TOON_JORDY === 'true'

const PATROON = /\s*\[JORDY[^\]]*\]/g

export const heeftJordy = (s?: string | null) => !!s && /\[JORDY/.test(s)

// Haalt [JORDY: ...] uit een tekst als die niet getoond mag worden
export function jordy(s: string): string {
  return TOON_JORDY ? s : s.replace(PATROON, '').replace(/\s+([.,;:!?])/g, '$1').trim()
}

// Toont een blok alleen als het geen open punt is (of als open punten getoond worden)
export function toonBlok(...teksten: (string | undefined | null)[]): boolean {
  return TOON_JORDY || !teksten.some(heeftJordy)
}
