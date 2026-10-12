# Lighthouse nulmeting (voor de wijzigingen)

_12-10-2026, branch `seo-redesign` op commit `c892894` (gelijk aan main). Productiebuild (`next build` + `next start`) lokaal, Lighthouse 12 in headless Chromium. Mediaan van 3 runs per pagina en apparaat. Mobiel = Lighthouse-standaard (Moto G-emulatie, 4G-throttling); desktop = desktopconfig._

| Pagina | Apparaat | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| `/` | mobiel | 96 | 82 | 100 | 100 | 2,74 s | 0 | 31 ms |
| `/` | desktop | 100 | 87 | 100 | 100 | 0,77 s | 0,002 | 0 ms |
| `/diensten/binnenschilderwerk` | mobiel | 98 | 86 | 100 | 100 | 2,16 s | 0 | 20 ms |
| `/diensten/binnenschilderwerk` | desktop | 100 | 92 | 100 | 100 | 0,49 s | 0 | 0 ms |
| `/locaties/helmond` | mobiel | 97 | 86 | 100 | 100 | 2,56 s | 0 | 5 ms |
| `/locaties/helmond` | desktop | 100 | 92 | 100 | 100 | 0,81 s | 0 | 0 ms |

## Wat Accessibility omlaag trekt

| Audit | `/` | dienst | locatie |
|---|---|---|---|
| Te laag kleurcontrast | 37 elementen | 27 | 25 |
| Knop zonder naam (hamburgermenu) | 1 | 1 | 1 |
| Link zonder naam (social-iconen in footer) | 4 | 2 | 2 |
| Iframe zonder title (Google Maps) | 1 | | |
| Koppen niet in volgorde | 1 | | |
| Overbodige alt-tekst | 3 | | |

## Kanttekening

Een lokale meting is geen veldmeting: de absolute performance-cijfers liggen hoger dan op Netlify met echte bezoekers. De vergelijking voor/na is gedaan met exact dezelfde opzet (zie `lighthouse-na.md`).
