// Menu's en werkgebied. Nieuwe pagina's hier toevoegen zodra ze live zijn.

export const diensten = [
  { name: 'Binnenschilderwerk', href: '/diensten/binnenschilderwerk' },
  { name: 'Buitenschilderwerk', href: '/diensten/buitenschilderwerk' },
  { name: 'Behangen', href: '/diensten/behangen' },
  { name: 'Lakwerk', href: '/diensten/lakwerk' },
  { name: 'Latex spuiten', href: '/diensten/latex-spuiten' },
  { name: 'Houtrot sanering', href: '/diensten/houtrot-sanering' },
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
