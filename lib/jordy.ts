// Open punten voor Jordy staan in de tekst als [JORDY: ...] of [INVULLEN: ...]. In productie worden ze niet getoond;
// in development en op de Netlify deploy preview wel (NEXT_PUBLIC_TOON_JORDY=true), zodat ze te controleren zijn.
// Alle open punten staan verzameld in VRAGEN-JORDY.md.
export const TOON_JORDY = process.env.NEXT_PUBLIC_TOON_JORDY === 'true'

const PATROON = /\s*\[(?:JORDY|INVULLEN)[^\]]*\]/g

export const heeftJordy = (s?: string | null) => !!s && /\[(?:JORDY|INVULLEN)/.test(s)

// Haalt [JORDY: ...] en [INVULLEN: ...] uit een tekst als die niet getoond mag worden
export function jordy(s: string): string {
  return TOON_JORDY ? s : s.replace(PATROON, '').replace(/\s+([.,;:!?])/g, '$1').trim()
}

// Toont een blok alleen als het geen open punt is (of als open punten getoond worden)
export function toonBlok(...teksten: (string | undefined | null)[]): boolean {
  return TOON_JORDY || !teksten.some(heeftJordy)
}
