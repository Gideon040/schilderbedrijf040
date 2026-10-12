// Seizoensblok en winterband (briefing 01, ontwerp v2): oktober tot en met februari binnenwerk, maart tot en met september buitenwerk.
// De homepage wordt dagelijks opnieuw opgebouwd (revalidate), dus het blok wisselt vanzelf.

export type Seizoensblok = { kop: string; tekst: string; link: string; linkTekst: string; label: string; ticker: string[] }

const winter: Seizoensblok = {
  label: 'Nu inplannen: binnenschilderwerk deze winter',
  kop: 'Binnenwerk deze winter?',
  tekst: 'Buiten koud en nat, binnen gaat het werk gewoon door. Plan nu voor november tot en met maart.',
  link: '/diensten/winterschilder',
  linkTekst: 'Meer over winterschilderwerk',
  ticker: ['Winterschilderwerk', 'Binnen gaat het werk gewoon door', 'Nu inplannen: november t/m maart'],
}

const voorjaar: Seizoensblok = {
  label: 'Nu inplannen: buitenschilderwerk dit voorjaar',
  kop: 'Buitenwerk dit jaar?',
  tekst: 'Buitenschilderwerk doen we bij droog weer tussen 15 en 25 graden. Plan nu, dan staat u op tijd in de planning.',
  link: '/diensten/buitenschilderwerk',
  linkTekst: 'Meer over buitenschilderwerk',
  ticker: ['Buitenschilderwerk', 'Bij droog weer tussen 15 en 25 graden', 'Nu inplannen voor het voorjaar'],
}

export function huidigSeizoen(datum = new Date()): Seizoensblok {
  const maand = datum.getMonth() + 1
  return maand >= 10 || maand <= 2 ? winter : voorjaar
}
