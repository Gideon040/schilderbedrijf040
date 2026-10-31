// Menu's en werkgebied. Nieuwe pagina's hier toevoegen zodra ze live zijn.

export const diensten = [
  { name: 'Latex spuiten', href: '/diensten/latex-spuiten' },
  { name: 'Binnenschilderwerk', href: '/diensten/binnenschilderwerk' },
  { name: 'Buitenschilderwerk', href: '/diensten/buitenschilderwerk' },
  { name: 'Kozijnen schilderen', href: '/diensten/kozijnen-schilderen' },
  { name: 'Gevel schilderen', href: '/diensten/gevel-schilderen' },
  { name: 'Behangen', href: '/diensten/behangen' },
  { name: 'Lakwerk', href: '/diensten/lakwerk' },
  { name: 'Houtrot sanering', href: '/diensten/houtrot-sanering' },
  { name: 'Schilderen in de winter', href: '/diensten/winterschilder' },
]

// Eindhoven = homepage. Volgorde: grootste/belangrijkste plaatsen eerst.
export const plaatsen = [
  { name: 'Eindhoven', href: '/' },
  { name: 'Helmond', href: '/locaties/helmond' },
  { name: 'Veldhoven', href: '/locaties/veldhoven' },
  { name: 'Best', href: '/locaties/best' },
  { name: 'Nuenen', href: '/locaties/nuenen' },
  { name: 'Geldrop', href: '/locaties/geldrop' },
  { name: 'Valkenswaard', href: '/locaties/valkenswaard' },
  { name: 'Waalre', href: '/locaties/waalre' },
  { name: 'Son en Breugel', href: '/locaties/son-en-breugel' },
  { name: 'Meerhoven', href: '/locaties/meerhoven' },
  { name: 'Oirschot', href: '/locaties/oirschot' },
  { name: 'Heeze', href: '/locaties/heeze' },
  { name: 'Mierlo', href: '/locaties/mierlo' },
  { name: 'Deurne', href: '/locaties/deurne' },
  { name: 'Beek en Donk', href: '/locaties/beek-en-donk' },
  { name: 'Eersel', href: '/locaties/eersel' },
  { name: 'Bergeijk', href: '/locaties/bergeijk' },
  { name: 'Maarheeze', href: '/locaties/maarheeze' },
]

// Prijsgids (/kosten/schilderwerk) staat gepland voor november en wacht op de scopecheck.
// Zet live op true zodra de pagina bestaat; dan verschijnen de links op dienst- en locatiepagina's.
export const PRIJSGIDS = { href: '/kosten/schilderwerk', live: false }

// Nieuwe blogs staan als concept klaar (scripts/create-blog-*.mjs) en zijn nog niet gepubliceerd in Sanity.
// Zet een blog op true zodra hij live staat; dan worden de links ernaartoe op dienstpagina's zichtbaar.
export const BLOGS_LIVE: Record<string, boolean> = {
  'hoe-lang-duurt-binnenschilderwerk': true,
  'latex-spuiten-of-rollen': true,
  'wanneer-buiten-schilderen': true,
  'hoe-vaak-buitenschilderwerk': true,
  'kitnaden-vervangen': true,
  'beitsen-of-lakken': true,
}

// false voor een link naar een geplande blog die nog niet live staat; anders true
export function linkLive(href: string): boolean {
  return !(href.startsWith('/blog/') && BLOGS_LIVE[href.slice(6)] === false)
}
