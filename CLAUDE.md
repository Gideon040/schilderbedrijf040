# Schildersbedrijf040 - Project Context

## Business
- **Bedrijf:** Schildersbedrijf040 (eigenaar: Jordy Jacobs)
- **Diensten:** Binnenschilderwerk, Buitenschilderwerk, Behangen, Houtrot Sanering, Lakwerk, Latex Spuiten
- **Regio:** Eindhoven en omgeving (18 locatiepagina's live)
- **Telefoon:** +31638903004
- **Adres:** Straatsburglaan 26, 5627DB Eindhoven
- **Reviews:** 41 Google reviews (5 sterren), 4,9 op Werkspot (19 reviews)

## Tech Stack
- **Framework:** Next.js 13.5.1 (App Router)
- **Taal:** TypeScript
- **Styling:** Tailwind CSS 3.3.3 + custom fonts (Inter, Bebas Neue)
- **UI Components:** Radix UI / shadcn/ui
- **CMS:** Sanity (blogposts) — schema in `sanity/schema/blogPost.ts`
- **Deploy:** Netlify met `@netlify/plugin-nextjs`
- **Images:** Cloudinary (primair), Google Business Photos

## Project Structuur
```
app/
  layout.tsx              # Root layout met metadata, fonts
  sitemap.ts              # Dynamische sitemap (locaties + diensten + blog)
  page.tsx                # Homepage — TARGET: "schildersbedrijf eindhoven" #1
  over-ons/page.tsx
  contact/page.tsx
  faq/page.tsx
  projecten/page.tsx
  blog/
    page.tsx              # Blog overzicht (Sanity)
    [slug]/page.tsx       # Blog detail (Sanity)
  diensten/
    binnenschilderwerk/page.tsx   # ✅ Volledig herschreven (SEO-GEO v4.0)
    buitenschilderwerk/page.tsx   # ✅ Volledig herschreven
    behangen/page.tsx             # ✅ Volledig herschreven
    houtrot-sanering/page.tsx     # ✅ Volledig herschreven
    lakwerk/page.tsx              # ✅ Volledig herschreven
    latex-spuiten/page.tsx        # ✅ Volledig herschreven
  locaties/
    [city]/page.tsx       # Dynamische locatiepagina's (design template)
    [city]/types.ts       # Gedeelde TypeScript types
    [city]/data.ts        # Locatie data — importeert batch1 + batch2
    [city]/data-batch1.ts # Fase 1: Valkenswaard, Oirschot, Heeze, Mierlo, Meerhoven
    [city]/data-batch2.ts # Fase 1: Deurne, Beek en Donk, Eersel, Bergeijk, Maarheeze
components/
  layout/
    header.tsx
    footer.tsx            # Bevat werkgebieden met alle 18 locaties
  sections/
    service-area.tsx      # Werkgebied op homepage — alle 18 locaties met links
    hero.tsx, services.tsx, statistics.tsx, process.tsx,
    reviews.tsx, about.tsx, guarantees.tsx, recent-projects.tsx,
    callback.tsx, social-media.tsx, contact-form.tsx,
    contact-hero.tsx, contact-details.tsx
sanity/
  schema/blogPost.ts      # Blog schema (title, slug, metaTitle, metaDescription, content, faq, etc.)
  queries.ts              # GROQ queries
  client.ts, fetch.ts, image.ts, env.ts, types.ts
```

## SEO & Content Conventies
- **Metadata:** Next.js Metadata API (`export const metadata`)
- **Structured Data:** JSON-LD via `<script dangerouslySetInnerHTML>`
- **Schema types in gebruik:** PaintingContractor, Service, FAQPage, BreadcrumbList, Article
- **Canonical URLs:** Via `alternates.canonical` in metadata
- **Sitemap:** Dynamisch via `app/sitemap.ts` (locaties + diensten + Sanity blog)
- **Images:** Altijd Next.js `<Image>` met `sizes` prop op `fill` mode

## SEO-GEO Framework v4.0 (SEO-GEO-FRAMEWORK.md)
Het project volgt het MIR Media Group SEO + GEO framework **v4.0**:
- **Paginahierarchie:** Verplichte differentiatie-check VOOR het schrijven (Niveau A/B/C/D)
- **5W1H methodologie:** Elke sectie bevat WAT + WAAROM + minstens 1 extra W
- **Prose-stijl:** Geen spec-sheet bullet points, vloeiende paragrafen
- **Entity mapping:** 1 primaire entiteit + 3-6 ondersteunende per pagina
- **Front-loaded antwoorden:** Direct antwoord in eerste zin
- **Anchor IDs:** Kebab-case op elke H2/H3
- **Zelfstandige secties:** Elke H2-sectie op zichzelf begrijpbaar
- **Geen vage verwijzingen:** Herhaal entiteitsnamen, geen "dit/deze"
- **FAQ deduplicatie:** Geen twee pagina's in dezelfde silo mogen dezelfde FAQ beantwoorden
- **Content depth score:** Minimum 7/10 voor diensten- en locatiepagina's

## SEO Locatiestrategie
- **Homepage (/)** is de primaire Eindhoven-pagina — TARGET: #1 voor "schildersbedrijf eindhoven"
- **301 redirect:** `/locaties/eindhoven` → `/` (in `next.config.js`)
- **Elke locatiepagina linkt terug** naar homepage met anchor text "schilder Eindhoven"
- **Meta title format:** `Op zoek naar een schilder in [Stad]? | Schildersbedrijf040`
- **Geen harde review-cijfers in meta** — gebruik tijdloze formuleringen ("Hoogst beoordeeld")

## Locatiepagina's — Status
Alle locatiedata zit in `app/(site)/locaties/[city]/data.ts` (+ batch bestanden).

### Live (7 origineel):
Veldhoven, Waalre, Geldrop, Nuenen, Best, Son en Breugel, Helmond

### Fase 1 — ✅ Aangemaakt (10 nieuw):
Valkenswaard, Oirschot, Heeze, Mierlo, Meerhoven, Deurne, Beek en Donk, Eersel, Bergeijk, Maarheeze

### Fase 2 — ❌ Nog te doen (11 steden):
Stiphout, Lieshout, Nederwetten, Someren, Asten, Gemert, Bladel, Budel, Boxtel, Veghel, Rosmalen

### Fase 3 — ❌ Nog te doen (14 steden):
Den Bosch, Waalwijk, Oosterhout, Tilburg, Breda, Weert, Venlo, Roermond, Sittard, Heerlen, Kerkrade, Landgraaf, Geleen, Venray, Dongen

## Databronnen voor Nieuwe Content

### Locatiepagina's
- **CSV:** `schildersbedrijf040-locatiepaginas.csv` in project root
  - Bevat per stad: primair keyword, volume, KD, unieke content hook, woningtype/bouwperiode, monumenten/erfgoed, dienst-focus, interne links
- **Bestaande steden als template:** Gebruik Waalre in `data.ts` als referentie voor structuur en toon
- **Feiten verifiëren:** Gebruik WebSearch voor lokale feiten (monumenten, wijken, bouwstijlen) — NOOIT verzinnen
- **Design:** Locatiepagina template in `app/(site)/locaties/[city]/page.tsx`
- **Aanpak:** Nieuwe steden toevoegen als data-batch bestanden, importeren in `data.ts`, types in `types.ts`

### Blogposts
- **CSV:** `schildersbedrijf040-blog-content.csv` in project root
  - Bevat per keyword: volume, KD, status, URL slug, H1, bestaande pagina?, actie
- **CMS:** Blog draait op Sanity — posts aanmaken via Sanity MCP of migratiescripts
- **Schema:** `sanity/schema/blogPost.ts` — velden: title, slug, metaTitle, metaDescription, excerpt, coverImage, date, readTime, category, keywords, author, content (Portable Text), faq, relatedPosts
- **Categorieën:** BTW & Kosten, How-To, Tips & Advies, Materialen, Inspiratie
- **Prioriteit high-volume keywords:**
  1. "wat kost een schilder per uur" (1400 vol, KD19) → `/blog/wat-kost-een-schilder-per-uur`
  2. "kozijnen schilderen" (1300 vol, KD2) → `/blog/kozijnen-schilderen`
  3. "kunststof kozijnen schilderen" (800 vol, KD0) → `/blog/kunststof-kozijnen-schilderen`
  4. "houtrot reparatie" (800 vol, KD2) → optimaliseer `/diensten/houtrot-sanering`
  5. "kozijnen verven" (700 vol, KD1) → `/blog/kozijnen-verven` of merge met kozijnen schilderen

### Dienstenpagina's
- **Alle 6 zijn herschreven** volgens SEO-GEO v4.0 met:
  - Prose content, 8 FAQ's, Service + FAQPage + BreadcrumbList schema
  - Geverifieerde prijzen (via WebSearch)
  - Boonstoppel productlijn per dienst
  - Interne links naar locaties en andere diensten
- **Nog te doen:** Nieuwe dienstenpagina `/diensten/monumentaal-schilderwerk` (volume 200, KD0)

### Prijzen & Feiten (geverifieerd)
- Binnenschilderwerk: €30-35/m², €35-45/uur
- Buitenschilderwerk: €35-45/m², €40-55/uur
- Behangen: €15-30/m², €35-50/uur
- Houtrot sanering: €150-450/kozijn, €45-55/uur
- Lakwerk: €35-150/stuk, €40-50/uur
- Latex spuiten: vanaf €7/m²
- Boonstoppel verf: 8-10 jaar bescherming
- BTW: 9% voor woningen ouder dan 2 jaar
- Ideale buitenschilderwerk temp: 15-25°C (mei, juni, september)

## Design Systeem (Dienstenpagina's & Locatiepagina's)
Alle diensten- en locatiepagina's gebruiken hetzelfde design:
- **Kleuren:** `#001B32` (navy), `#0088FF` (blauw), `#F7F8FA` (lichtgrijs)
- **Fonts:** `font-bebas` voor headings, Inter voor body
- **Secties:** Hero → Content → Diensten grid → Kosten/prijstabel → CTA banner → Werkwijze → Waarom/USPs + Reviews → FAQ (img links, accordion rechts) → Contact CTA
- **Componenten:** StarIcon, GoogleLogo, WerkspotLogo (inline SVG per pagina)

## Interne Linking Strategie
- **Homepage als hub:** Elke locatie- en dienstenpagina linkt terug naar homepage
- **Locatiepagina's:** Linken naar relevante dienstenpagina's (per CSV dienst-focus kolom)
- **Dienstenpagina's:** Linken naar gerelateerde diensten + alle locatiepagina's
- **Blog:** Link naar relevante diensten + contact pagina
- **Footer:** Alle 18 locaties + alle 6 diensten + snelle links

## Bekende Issues / TODO
- [ ] Homepage mist expliciete canonical URL
- [ ] Google Search Console verificatie uitgecommentarieerd
- [ ] Geen security/cache headers in next.config.js
- [ ] Nieuwe dienstenpagina: `/diensten/monumentaal-schilderwerk`
- [ ] Fase 2 locatiepagina's (11 steden)
- [ ] Fase 3 locatiepagina's (14 steden)
- [ ] High-volume blogposts via Sanity
- [ ] Footer wordt lang met 18 locaties — overweeg collapsible of 2-koloms layout
