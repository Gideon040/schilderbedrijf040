import type { SiteImage } from '@/lib/images'
import { images } from '@/lib/images'
import { lokaal08 } from './data-lokaal-08'
import { lokaal13 } from './data-lokaal-13'

// Lokaal blok per plaats (2.7). Alleen geverifieerde feiten, met bron.
// Plaatsen zonder lokaal blok tonen hun wijken als lijst; de wijkkaarten volgen met briefing 08 (november) en 13 (december).
export type Lokaal = {
  tekst: string
  wijken: { label: string; naam: string; tekst: string }[]
  bronnen: string[]
  // Briefing 08/13: extra alinea's onder de wijkkaarten (200 tot 300 woorden samen met tekst).
  // Interne links als [ankertekst](/pad).
  alineas?: string[]
  // Unieke meta description per plaats (140 tot 160 tekens). De title volgt het vaste format.
  metaDescription?: string
}

const basis: Record<string, Lokaal> = {
  helmond: {
    tekst:
      'Helmond groeide in een paar golven: in de jaren tachtig kwamen er als groeistad duizenden woningen bij in het oosten van de stad, in de jaren negentig volgde Dierdonk en vanaf 1997 Brandevoort. Daardoor staan er in Helmond woningen van heel verschillende leeftijd naast elkaar. Dat vraagt per wijk een andere aanpak: bij jongere woningen gaat het vaak om strak binnenwerk, bij woningen van rond de veertig jaar oud om onderhoud van kozijnen en ander buitenhoutwerk.',
    wijken: [
      {
        label: 'Gebouwd vanaf 1997',
        naam: 'Brandevoort',
        tekst:
          'Vinex-wijk met in het hart De Veste, gebouwd in een traditionele stijl met veel detail in gevels, deuren en kozijnen. Juist dat houtwerk vraagt zorgvuldig lakwerk. Binnen zijn de woningen geschikt voor latex spuiten.',
      },
      {
        label: 'Ontwikkeld vanaf de jaren negentig',
        naam: 'Dierdonk',
        tekst:
          'Woonwijk die begin jaren negentig werd gepland. De woningen zijn nu ruim dertig jaar oud; regelmatig onderhoud van het buitenschilderwerk houdt kozijnen en deuren in goede staat.',
      },
      {
        label: 'Gebouwd 1980 tot 1990',
        naam: 'Brouwhuis en Rijpelberg',
        tekst:
          'De grote uitbreidingswijken aan de oostkant van Helmond uit de groeistadperiode. Bij deze woningen zijn een frisse binnenkant en een controle van de buitenkozijnen op houtrot vaak de eerste stap.',
      },
    ],
    bronnen: [
      'https://www.helmond.nl (Feiten en cijfers 2018: Rijpelberg en Brouwhuis 1980 tot 1990)',
      'https://commissiemer.nl/docs/mer/p04/p0470/470-066masterplan.pdf (Masterplan Dierdonk 1991)',
      'https://en.wikipedia.org/wiki/Brandevoort (bouw vanaf ca. 1997, De Veste)',
    ],
  },
}

// Briefing 08 (zes belangrijkste plaatsen) en 13 (overige elf) staan in eigen bestanden.
export const lokaal: Record<string, Lokaal> = { ...basis, ...lokaal08, ...lokaal13 }

// Buurplaatsen (blok "Ook actief rond ...")
export const buren: Record<string, string[]> = {
  waalre: ['veldhoven', 'valkenswaard', 'heeze', 'bergeijk'],
  veldhoven: ['meerhoven', 'waalre', 'oirschot', 'eersel', 'best'],
  geldrop: ['heeze', 'mierlo', 'nuenen', 'helmond', 'maarheeze'],
  nuenen: ['son-en-breugel', 'helmond', 'geldrop', 'mierlo', 'beek-en-donk'],
  best: ['son-en-breugel', 'oirschot', 'meerhoven', 'veldhoven'],
  'son-en-breugel': ['best', 'nuenen', 'beek-en-donk'],
  helmond: ['mierlo', 'nuenen', 'geldrop', 'deurne', 'beek-en-donk'],
  valkenswaard: ['waalre', 'bergeijk', 'heeze', 'eersel'],
  oirschot: ['best', 'veldhoven', 'meerhoven', 'eersel'],
  heeze: ['geldrop', 'maarheeze', 'waalre', 'valkenswaard', 'mierlo'],
  mierlo: ['helmond', 'geldrop', 'nuenen', 'heeze', 'deurne'],
  meerhoven: ['veldhoven', 'best', 'oirschot'],
  deurne: ['helmond', 'mierlo', 'beek-en-donk'],
  'beek-en-donk': ['helmond', 'nuenen', 'son-en-breugel', 'deurne'],
  eersel: ['bergeijk', 'veldhoven', 'valkenswaard', 'oirschot'],
  bergeijk: ['eersel', 'valkenswaard', 'waalre'],
  maarheeze: ['heeze', 'geldrop', 'valkenswaard'],
}

// Tot er per plaats een eigen projectfoto is: wisselende foto's van de site, zodat niet elke pagina dezelfde hero heeft.
// De foto's zijn niet in die plaats gemaakt; de alt-tekst noemt daarom geen plaats. [JORDY: per plaats een eigen foto]
const heroRotatie: SiteImage[] = [images.villa, images.dakkapel, images.tuinhuis, images.lakKozijnen, images.voordeur, images.woonkamer, images.binnendeur, images.houtrot]

export function heroFoto(slug: string): SiteImage {
  const keys = Object.keys(buren)
  return heroRotatie[Math.max(0, keys.indexOf(slug)) % heroRotatie.length]
}
