# Schildersbedrijf040 - Project Context

## Business
- **Bedrijf:** Schildersbedrijf040 (eigenaar: Jordy Jacobs)
- **Diensten:** Binnenschilderwerk, Buitenschilderwerk, Behangen, Houtrot Sanering, Lakwerk, Latex Spuiten
- **Regio:** Eindhoven en omgeving (Waalre, Veldhoven, Best, Son en Breugel, Geldrop, Nuenen, Helmond)
- **Telefoon:** +31638903004
- **Adres:** Jacob van Campenweg 25, 5624CD Eindhoven
- **Reviews:** 41 Google reviews (5 sterren), 4,9 op Werkspot (19 reviews)

## Tech Stack
- **Framework:** Next.js 13.5.1 (App Router)
- **Taal:** TypeScript
- **Styling:** Tailwind CSS 3.3.3 + custom fonts (Inter, Bebas Neue)
- **UI Components:** Radix UI / shadcn/ui
- **Deploy:** Netlify met `@netlify/plugin-nextjs`
- **Images:** Cloudinary (primair), Unsplash, Google, Wikimedia

## Project Structuur
```
app/
  layout.tsx              # Root layout met metadata, fonts
  page.tsx                # Homepage met PaintingCompany schema
  over-ons/page.tsx       # Over ons pagina
  contact/page.tsx        # Contact pagina
  faq/page.tsx            # FAQ pagina
  projecten/page.tsx      # Projecten portfolio
  blog/
    page.tsx              # Blog overzicht
    [slug]/page.tsx       # Blog detail
    data.ts               # Blog posts data (hardcoded)
  diensten/
    binnenschilderwerk/page.tsx
    buitenschilderwerk/page.tsx
    behangen/page.tsx
    houtrot-sanering/page.tsx
    lakwerk/page.tsx
    latex-spuiten/page.tsx
  locaties/
    [city]/page.tsx       # Dynamische locatiepagina's
    data.ts               # Locatie data per stad
components/
  layout/
    header.tsx            # Header met navigatie
    footer.tsx            # Footer
  sections/
    hero.tsx              # Homepage hero
    services.tsx          # Diensten overzicht
    statistics.tsx        # Statistieken sectie
    process.tsx           # Werkproces
    reviews.tsx           # Reviews (hardcoded)
    about.tsx             # Over ons sectie
    guarantees.tsx        # Garanties
    service-area.tsx      # Google Maps werkgebied
    recent-projects.tsx   # Recente projecten
    callback.tsx          # Terugbel CTA
    social-media.tsx      # Social media feed
    contact-form.tsx      # Contact formulier
    contact-hero.tsx      # Contact hero
    contact-details.tsx   # Contact details
```

## SEO & Content Conventies
- **Metadata:** Next.js Metadata API (`export const metadata`)
- **Structured Data:** JSON-LD via `<script dangerouslySetInnerHTML>` of `<Script>` (next/script)
- **Schema types in gebruik:** PaintingCompany, Service, Article, FAQPage, BreadcrumbList, AboutPage, ContactPage, CollectionPage
- **Canonical URLs:** Via `alternates.canonical` in metadata
- **Sitemap:** Dynamisch via `app/sitemap.ts`
- **Robots:** `public/robots.txt`
- **Images:** Altijd Next.js `<Image>` met `sizes` prop op `fill` mode

## SEO-GEO Framework (SEO-GEO-FRAMEWORK.md)
Het project volgt het MIR Media Group SEO + GEO framework v3.0:
- **5W1H methodologie:** Elke sectie bevat WAT + WAAROM + minstens 1 extra W
- **Prose-stijl:** Geen spec-sheet bullet points, vloeiende paragrafen
- **Entity mapping:** 1 primaire entiteit + 3-6 ondersteunende per pagina
- **Front-loaded antwoorden:** Direct antwoord in eerste zin
- **Anchor IDs:** Kebab-case op elke H2/H3
- **Zelfstandige secties:** Elke H2-sectie op zichzelf begrijpbaar
- **Geen vage verwijzingen:** Herhaal entiteitsnamen, geen "dit/deze"
- **Dienstenpagina structuur:** 1200-1500 woorden, 5 H2-secties, 8 FAQ's
- **Content depth score:** Minimum 6/10, target 8/10 voor dienstenpagina's

## SEO Locatiestrategie
- **Homepage (/)** is de primaire Eindhoven-pagina — geen aparte `/locaties/eindhoven`
- **301 redirect:** `/locaties/eindhoven` → `/` (in `next.config.js`)
- **Locatiepagina's:** Alleen omliggende steden (Waalre, Veldhoven, Best, Son en Breugel, Geldrop, Nuenen, Helmond)
- **Meta title format:** `Op zoek naar een schilder in [Stad]? | Schildersbedrijf040`
- **Meta description format:** `Schildersbedrijf040 is uw vakkundige schilder in [Stad]. Binnenschilderwerk, buitenschilderwerk, behangen, lakwerk & houtrot sanering. ✓ Hoogst beoordeeld ✓ Gratis offerte.`
- **Geen harde review-cijfers in meta** — gebruik tijdloze formuleringen ("Hoogst beoordeeld")

## Bekende Issues / TODO
- Homepage mist expliciete canonical URL
- Google Search Console verificatie uitgecommentarieerd
- Geen security/cache headers in next.config.js
- Diensten pagina's zijn dun qua content (moeten uitgebreid naar framework specs)
