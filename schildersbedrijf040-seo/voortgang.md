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

Branch `seo-redesign`, gestart 12-10-2026. Nulmeting in `rapportages/codestructuur.md` en `rapportages/lighthouse-voor.md`. Screenshots per stap in `rapportages/screenshots/` (prefix = stap).

| Punt | Status | Bestanden | Open punten |
|---|---|---|---|
| 1.1 | klaar | 18 bestanden in `app/`, `components/` (312 vervangen); `scripts/fix-dashes-sanity.mjs` | Blogteksten in Sanity (63 dashes, 5 posts) niet aangepast: dat wijzigt de live blog. Script staat klaar, proefrun gedraaid. Na akkoord: `node scripts/fix-dashes-sanity.mjs --write`. |
| 1.2 | klaar | `app/(site)/page.tsx`, `components/sections/hero.tsx`, `app/(site)/locaties/[city]/page.tsx` | H1 "Schilder in Eindhoven" + subregel; title "Schilder Eindhoven \| Schildersbedrijf040". Ook opgelost: merknaam stond 2x in de title van home en alle 17 locatiepagina's. |
| 1.3 | klaar | `components/sections/statistics.tsx`, `lib/site.ts` (nieuw: bedrijfsfeiten op één plek) | Cijferbalk nu: 5,0 Google (41 reviews), 4,9 Werkspot, 5+ jaar ervaring, Boonstoppel. "100+ projecten", "98%" en "100%" weg. Andere claims elders op de site staan op de Jordy-lijst. |
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

## Open punten voor Jordy

| Waar | Vraag |
|---|---|
| Homepage, cijferbalk | Hoeveel projecten heeft u ongeveer gedaan? "100+ projecten" is weggehaald tot u het bevestigt. |
| Sitebreed (diensten, locaties, werkwijze) | Klopt "offerte binnen 48 uur" na de inspectie en "reactie binnen 24 uur" (of "binnen één werkdag")? Staat op ca. 40 plekken. |
| Homepage-FAQ, garanties | Welke garantie geeft u precies? Nu staat er binnen 3 tot 5 jaar en buiten 5 tot 7 jaar, en "100% kwaliteitsgarantie". |
| Homepage, blok Garanties | Klopt "gediplomeerde schilders", "gecertificeerd" en "regelmatig bijscholing"? Werkt u met personeel of alleen? Tot bevestiging niet overnemen in het redesign. |
| Dienst- en locatiepagina's | Heeft u op Werkspot het label "Topvakman"? Zo niet, dan halen we het weg. |
| Houtrot sanering | Waar komt "tot 70% goedkoper dan vervangen" vandaan? Graag bevestigen of afzwakken. |
| Google-reviews | Link naar uw Google-bedrijfsprofiel (de reviewpagina), voor alle knoppen "Alle reviews op Google". |

## Ideeën

-
