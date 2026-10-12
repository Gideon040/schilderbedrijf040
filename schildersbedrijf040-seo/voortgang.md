# Voortgang

Status: `todo` → `concept` → `review Jordy` → `live`. Houd dit bestand bij na elke pagina (ook `data/pages.json` veld `voortgang`).

| # | Maand | Pakket | Pagina | URL | Status | Opmerking |
|---|---|---|---|---|---|---|
| 1 | Oktober | B | Homepage | `/` | todo |  |
| 2 | Oktober | B | Binnenschilderwerk (hub) | `/diensten/binnenschilderwerk` | todo |  |
| 3 | Oktober | B | Winterschilder: binnenwerk in de winter | `/diensten/winterschilder` | todo |  |
| 4 | Oktober | B | Latex spuiten | `/diensten/latex-spuiten` | todo |  |
| 5 | November | B | Wat kost schilderwerk? (prijsgids) | `/kosten/schilderwerk` | todo | scopecheck |
| 6 | November | B | Lakwerk | `/diensten/lakwerk` | todo |  |
| 7 | November | B | Behangen | `/diensten/behangen` | todo |  |
| 8 | November | B | Veldhoven, Valkenswaard, Helmond, Best, Geldrop, Nuenen | `/locaties/ (6 plaatsen)` | todo |  |
| 9 | November | B | Hoe lang duurt binnenschilderwerk? | `/blog/hoe-lang-duurt-binnenschilderwerk` | todo |  |
| 10 | November | M | Latex spuiten Helmond en Veldhoven | `/diensten/latex-spuiten/[plaats] (2)` | todo |  |
| 11 | December | B | Projecten | `/projecten` | todo |  |
| 12 | December | B | Bestaande binnenblogs bijwerken | `/blog/ (5 bestaande)` | todo |  |
| 13 | December | B | Overige 11 locatiepagina's | `/locaties/ (11 plaatsen)` | todo |  |
| 14 | December | P | Latex spuiten of rollen? | `/blog/latex-spuiten-of-rollen` | todo |  |
| 15 | December | M | Wijkpagina's Woensel en Stratum | `/locaties/eindhoven-[wijk] (2)` | todo |  |
| 16 | Januari | B | Buitenschilderwerk (hub) | `/diensten/buitenschilderwerk` | todo |  |
| 17 | Januari | B | Kozijnen schilderen | `/diensten/kozijnen-schilderen` | todo |  |
| 18 | Januari | B | Houtrot herstellen | `/diensten/houtrot-sanering` | todo |  |
| 19 | Januari | P | Drie nieuwe plaatsen (keuze Jordy) | `/locaties/ (3 nieuwe plaatsen)` | todo | scopecheck |
| 20 | Februari | B | Kitwerk en kitnaden vervangen | `/diensten/kitwerk` | todo | scopecheck |
| 21 | Februari | B | Gevel schilderen | `/diensten/gevel-schilderen` | todo |  |
| 22 | Februari | B | Wanneer kun je het beste buiten schilderen? | `/blog/wanneer-buiten-schilderen` | todo |  |
| 23 | Februari | P | Onderhoudsschilderwerk | `/diensten/onderhoudsschilderwerk` | todo | scopecheck |
| 24 | Februari | M | Overige drie nieuwe plaatsen | `/locaties/ (3 nieuwe plaatsen)` | todo | scopecheck |
| 25 | Maart | B | Hoe vaak moet je buitenschilderwerk laten doen? | `/blog/hoe-vaak-buitenschilderwerk` | todo |  |
| 26 | Maart | P | Kitnaden vervangen: zelf doen of laten doen? | `/blog/kitnaden-vervangen` | todo |  |
| 27 | Maart | P | Beitsen of lakken: wat past bij je kozijnen? | `/blog/beitsen-of-lakken` | todo |  |
| 28 | Maart | M | Gevel reinigen en impregneren | `/diensten/gevelreiniging-impregneren` | todo | scopecheck |
| 29 | Maart | M | Buitenschilderwerk Helmond, Veldhoven, Best | `/diensten/buitenschilderwerk/[plaats] (3)` | todo | scopecheck |
| 30 | Maart | M | Houtrot herkennen en voorkomen | `/blog/houtrot-herkennen-voorkomen` | todo |  |

## Site-audit

| Punt | Status | Bestanden | Open punten |
|---|---|---|---|
| 1.1 | todo |  |  |
| 1.2 | todo |  |  |
| 1.3 | todo |  |  |
| 1.4 | todo |  |  |
| 1.5 | todo |  |  |
| 1.6 | todo |  |  |
| 1.7 | todo |  |  |
| 1.8 | todo |  |  |
| 1.9 | todo |  |  |
| 1.10 | todo |  |  |
| 1.11 | todo |  |  |
| 2.1 | todo |  |  |
| 2.2 | todo |  |  |
| 2.3 | todo |  |  |
| 2.4 | todo |  |  |
| 2.5 | todo |  |  |
| 2.6 | todo |  |  |
| 2.7 | todo |  |  |
| 2.8 | todo |  |  |
| 2.9 | todo |  |  |
| 2.10 | todo |  |  |

## Ideeën

- 

## Site-audit (branch `seo-redesign`, start 12-10-2026)

Status per punt uit `plan/site-audit-en-redesign.md`. Screenshots in `rapportages/screenshots/` (prefix = stapnummer).

| # | Punt | Status | Bestanden | Opmerking |
|---|---|---|---|---|
| 0 | Nulmeting | klaar | `rapportages/codestructuur.md`, `rapportages/lighthouse-voor.md` | Screenshots `00-voor-*` |
| 1.1 | Em dashes | klaar | 18 bestanden in `app/` en `components/` (312 vervangen), `scripts/fix-dashes-sanity.mjs` | Blogteksten staan in Sanity (63 dashes in 5 posts): script klaar, proefrun gedraaid, **niet** uitgevoerd omdat het de live blog aanpast. Gideon: `node scripts/fix-dashes-sanity.mjs --write` na akkoord. |
| 1.2 | H1 en title homepage | klaar | `app/(site)/page.tsx`, `components/sections/hero.tsx`, `app/(site)/locaties/[city]/page.tsx` | H1 "Schilder in Eindhoven" + subregel; title "Schilder Eindhoven \| Schildersbedrijf040" (absolute, merknaam 1x); meta zonder "100% kwaliteitsgarantie". Bug gevonden en opgelost: merknaam stond 2x in de title van home en alle 17 locatiepagina's (layout-template plus eigen suffix). |

## Open punten voor Jordy

| Waar | Vraag |
|---|---|

## Ideeën
