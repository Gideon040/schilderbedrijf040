# SEO Changelog — Februari 2026

## Overzicht

**Totaal nieuwe/herschreven pagina's: 12**

- 1 homepage (verbeterd)
- 3 blogartikelen (nieuw)
- 8 locatiepagina's (herschreven)

---

## Homepage (`/`)

De homepage heeft de volgende SEO-verbeteringen gekregen:

- **Canonical URL** toegevoegd (`https://schildersbedrijf040.nl`)
- **AggregateRating schema** toegevoegd (5.0 sterren, 41 Google reviews)
- **FAQPage schema** toegevoegd met 5 veelgestelde vragen
- **WebSite schema** toegevoegd
- **FAQ sectie** toegevoegd als zichtbaar component op de pagina (accordion)
- **areaServed** uitgebreid met alle 8 steden (Eindhoven, Waalre, Veldhoven, Best, Son en Breugel, Geldrop, Nuenen, Helmond)
- **OfferCatalog schema** met alle 6 diensten
- **OpenGraph + Twitter Card** metadata compleet ingevuld

> **Let op:** Homepage schema en FAQ-sectie noemen nog Sikkens/Sigma i.p.v. Boonstoppel — moet volgende maand worden bijgewerkt.

---

## Blogartikelen (3 pagina's)

Drie nieuwe SEO-geoptimaliseerde blogartikelen toegevoegd met FAQ-secties en JSON-LD Article + FAQPage schema's.

| # | URL | Titel | Doelzoekwoord |
|---|-----|-------|---------------|
| 1 | `/blog/btw-tarief-schilderwerk` | BTW Tarief Schilderwerk: Alle Regels voor 2025 | btw tarief schilderwerk |
| 2 | `/blog/hoe-schilder-je-een-deur` | Hoe Schilder je een Deur? Stappenplan Zonder Strepen | hoe schilder je een deur |
| 3 | `/blog/hoe-verf-je-een-muur` | Hoe Verf je een Muur? Complete Handleiding van A tot Z | hoe verf je een muur |

---

## Locatiepagina's (8 pagina's)

Alle locatiepagina's zijn volledig herschreven volgens het SEO-GEO framework v3.0 (5W1H methodologie, prose-stijl, entity mapping, front-loaded antwoorden).

### Data (`data.ts`)

- Verfmerk overal gewijzigd van **Sikkens/Sigma/Wijzonol → Boonstoppel**
- Per stad unieke content geschreven voor: intro, kosten, diensten (6x), waarom, werkwijze, contact, faqs (5x)
- Wijknamen per stad toegevoegd

### Herschreven steden

| # | URL | Stad | Wijken |
|---|-----|------|--------|
| 1 | `/locaties/eindhoven` | Eindhoven | Strijp, Woensel, Stratum, Gestel, Tongelre |
| 2 | `/locaties/waalre` | Waalre | Aalst, Waalre-Dorp, De Voldijn |
| 3 | `/locaties/veldhoven` | Veldhoven | Veldhoven-Dorp, Oerle, Meerveldhoven |
| 4 | `/locaties/geldrop` | Geldrop | Geldrop-Centrum, Mierlo, Zesgehuchten |
| 5 | `/locaties/nuenen` | Nuenen | Nuenen-Centrum, Gerwen, Nederwetten |
| 6 | `/locaties/best` | Best | Best-Centrum, De Vleut, Naastenbest |
| 7 | `/locaties/son-en-breugel` | Son en Breugel | Son-Centrum, Breugel, Ekkersrijt |
| 8 | `/locaties/helmond` | Helmond | Brandevoort, Helmond-West, Binnenstad, Rijpelberg |

### Paginastructuur (per locatie)

| Sectie | Anchor ID | Inhoud |
|--------|-----------|--------|
| Hero | — | H1 + intro + dubbele CTA (offerte + bellen) |
| H2 #1 | `#diensten` | 6 diensten-kaarten met doorlinks naar dienstenpagina's |
| H2 #2 | `#kosten-schilder` | Kostenparagraaf + prijsindicatie tabel |
| H2 #3 | `#waarom-schildersbedrijf040` | USP checklist + rating/werkgebied kaarten |
| H2 #4 | `#werkwijze` | 4-stappen visueel proces |
| H2 #5 | `#veelgestelde-vragen` | 5 unieke FAQ's per stad (accordion) |
| CTA | `#contact` | Donker thema met bel/mail/bereikbaarheid |

### Technische SEO-verbeteringen locatiepagina's

| Verbetering | Was | Nu |
|---|---|---|
| Verfmerk | Sikkens / Sigma / Wijzonol | Boonstoppel (consistent) |
| JSON-LD schema's | PaintingContractor + BreadcrumbList | PaintingContractor + BreadcrumbList + **FAQPage** |
| AggregateRating | Ontbrak | **Toegevoegd** (5.0 / 41 Google reviews) |
| Metadata description | Generiek | Specifiek met Boonstoppel + 5 sterren rating |
| Anchor ID's op H2's | Geen | Kebab-case per sectie |
| displayName | Handmatige capitalisatie | `displayName` veld (fix voor "Son en Breugel") |
| Footer | Ontbrak op locatiepagina's | Toegevoegd |
| Content diepte | ~200 woorden per stad | ~800+ woorden per stad |

---

## Nog te doen (volgende maand)

- [ ] Homepage schema + FAQ: Sikkens/Sigma vervangen door Boonstoppel
- [ ] Dienstenpagina's uitbreiden naar SEO-GEO framework (1200-1500 woorden, 5 H2's, 8 FAQ's)
- [ ] Statische sitemap omzetten naar dynamische sitemap
- [ ] Security/cache headers in next.config.js
- [ ] Google Search Console verificatie activeren
