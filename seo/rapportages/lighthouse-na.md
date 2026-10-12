# Lighthouse na de wijzigingen

_12-10-2026, branch `seo-redesign`, na Prioriteit 1, het redesign en de oktoberpagina's. Zelfde opzet als de nulmeting (`lighthouse-voor.md`): productiebuild lokaal, Lighthouse 12, headless Chromium, mediaan van 3 runs._

## Voor en na

| Pagina | Apparaat | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|---|
| `/` | mobiel | 96 → **98** | 82 → **100** | 100 → 100 | 100 → 100 | 2,74 → 2,34 s | 0 → 0 |
| `/` | desktop | 100 → 100 | 87 → **100** | 100 → 100 | 100 → 100 | 0,77 → 0,59 s | 0,002 → 0,001 |
| `/diensten/binnenschilderwerk` | mobiel | 98 → 98 | 86 → **100** | 100 → 100 | 100 → 100 | 2,16 → 2,24 s | 0 → 0 |
| `/diensten/binnenschilderwerk` | desktop | 100 → 100 | 92 → **100** | 100 → 100 | 100 → 100 | 0,49 → 0,55 s | 0 → 0 |
| `/locaties/helmond` | mobiel | 97 → **98** | 86 → **100** | 100 → 100 | 100 → 100 | 2,56 → 2,23 s | 0 → 0,001 |
| `/locaties/helmond` | desktop | 100 → 100 | 92 → **100** | 100 → 100 | 100 → 100 | 0,81 → 0,56 s | 0 → 0,004 |

Geen enkele score is omlaag gegaan. De LCP van binnenschilderwerk ligt 0,06 tot 0,08 s hoger (binnen de meetruis van lokale runs; de score is gelijk).

## Nieuwe en geoptimaliseerde oktoberpagina's

| Pagina | Apparaat | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|---|
| `/diensten/winterschilder` (nieuw) | mobiel | 99 | 100 | 100 | 100 | 1,94 s | 0,003 |
| `/diensten/winterschilder` (nieuw) | desktop | 100 | 100 | 100 | 100 | 0,55 s | 0,001 |
| `/diensten/latex-spuiten` | mobiel | 99 | 100 | 100 | 100 | 1,95 s | 0 |
| `/diensten/latex-spuiten` | desktop | 100 | 100 | 100 | 100 | 0,45 s | 0 |

## Tussenmetingen

- Na Prioriteit 1 (oude homepage): `/` mobiel performance 91 door CLS 0,157 in de oude hero (grotere H1 die bij het laden van het font verspringt). Opgelost doordat het redesign de hero vervangt.
- Na het redesign, vóór de winterpagina: best practices `/` 96 door een 404 op de prefetch van `/diensten/winterschilder`. Opgelost toen de pagina er was.

## Wat het verschil maakt

- Accessibility: contrast (oud blauw #0088FF en lichtgrijze tekst), namen voor menuknop en social-iconen, iframe zonder titel weg, kopvolgorde.
- Performance: Google Maps-iframe weg op home, foto's lokaal en in AVIF/WebP, fonts via `next/font` (self-hosted, `display: swap`), minder client-side code op de homepage (secties zijn servercomponenten).
