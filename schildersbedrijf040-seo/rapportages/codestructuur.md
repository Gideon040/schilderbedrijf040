# Codestructuur schildersbedrijf040.nl

_Stand: 12-10-2026, branch `seo-redesign`, vóór de wijzigingen._

## Stack

| Onderdeel | Wat |
|---|---|
| Framework | Next.js 13.5.1, App Router, TypeScript 5.2 |
| Styling | Tailwind CSS 3.3.3, `app/globals.css` (klassen `btn-primary`, `btn-secondary`, `container`) |
| Fonts | `next/font/google`: Inter (body) en Bebas Neue (alle koppen, via `h1..h6 { font-bebas }`) |
| UI | shadcn/ui-componenten in `components/ui/` (47 bestanden, Radix) |
| CMS | Sanity (alleen blog). Studio op `/studio` (`app/(studio)`), schema in `sanity/schema/blogPost.ts` |
| Formulieren | Formspree (`formspree.io/f/mkgovyya` offerte, `formspree.io/f/xdkalqlq` contact), client-side `fetch` + `alert()` |
| Afbeeldingen | `next/image`, remote: Cloudinary, Google Business (`lh3.googleusercontent.com`), Wikimedia, Unsplash, Sanity CDN |
| Hosting | Netlify met `@netlify/plugin-nextjs` (`netlify.toml`) |
| Redirects | `next.config.js`: `/locaties/eindhoven` → `/` (301) |

## Routes

| URL | Bestand | Opbouw |
|---|---|---|
| `/` | `app/(site)/page.tsx` | Losse secties uit `components/sections/` + 3 JSON-LD-blokken (PaintingCompany, FAQPage, WebSite) via `next/script` |
| `/diensten/{binnenschilderwerk, buitenschilderwerk, behangen, lakwerk, latex-spuiten, houtrot-sanering}` | `app/(site)/diensten/*/page.tsx` | Zes losse bestanden van ca. 830 regels, elk met eigen hero, tekst, prijstabel, banner, werkwijze, USP's, FAQ (`<details>`), contact-CTA. Inline `StarIcon`, `GoogleLogo`, `WerkspotLogo` per bestand. JSON-LD: Service, BreadcrumbList, FAQPage |
| `/locaties/[city]` | `app/(site)/locaties/[city]/page.tsx` | Eén template voor 17 plaatsen. Data in `data.ts` (7 plaatsen) + `data-batch1.ts` + `data-batch2.ts` (5+5), type in `types.ts`. JSON-LD: PaintingContractor, BreadcrumbList, FAQPage. Prijstabel per uur, hard-coded in het template |
| `/blog`, `/blog/[slug]` | `app/(site)/blog/` | Sanity (`sanity/fetch.ts`, `sanity/queries.ts`), Portable Text via `components/blog/portable-text.tsx` |
| `/projecten`, `/over-ons`, `/contact`, `/faq` | `app/(site)/*/page.tsx` | Losse pagina's met eigen secties |
| `/sitemap.xml` | `app/sitemap.ts` | Statisch + diensten + `cityData` + Sanity-posts |
| `/robots.txt` | `public/robots.txt` | Statisch |

## Layout

- `app/layout.tsx`: `<html lang="nl">`, fonts, standaard-metadata (title-template `%s | Schildersbedrijf040`).
- `app/(site)/layout.tsx`: voegt `<Footer />` toe onder elke pagina.
- **De `<Header />` zit niet in de layout** maar wordt per pagina geïmporteerd (home, diensten, locaties, enz.).
- `components/layout/header.tsx` (client): topbar (Google-sterren, telefoon, FAQ, e-mail), sticky header met logo (Cloudinary), dropdown Diensten, mobiel menu.
- `components/layout/footer.tsx` (client): contact, diensten, snelle links, 18 werkgebieden in één kolom, social.

## Homepage-secties (`components/sections/`)

`hero` (stadsfoto Wikimedia + offerteformulier) → `services` (6 kaarten, donkere overlay, `line-clamp-3`) → `statistics` (5+, 100+, 98%, 100%) → `process` (foto Jordy + 4 stappen) → `about` → `guarantees` → `reviews` (3 quotes zonder bron) → `service-area` (Google Maps-iframe + 18 plaatsen) → `faq-section` (Radix-accordeon) → `recent-projects` → `callback` → `social-media` → `contact-form`.

Niet gebruikt op home: `quote-form.tsx`, `contact-hero.tsx`, `contact-details.tsx` (wel op /contact).

## Bevindingen die het werk sturen

- Em dashes in ca. 230 regels (diensten, locaties, secties). Blogteksten staan in Sanity en vallen buiten de repo.
- Prijzen staan op drie plekken los van elkaar: dienstpagina's (per m²/stuk), locatie-template (per uur), homepage-FAQ (per uur).
- Schema-type wisselt: `PaintingCompany` (home, bestaat niet in schema.org), `PaintingContractor` (diensten/locaties, bestaat ook niet). Geldig is `HousePainter` (subtype van `HomeAndConstructionBusiness` → `LocalBusiness`).
- Homepage-FAQ gebruikt Radix-accordeon: antwoorden staan pas na klikken in de DOM. Diensten/locaties gebruiken `<details>`: antwoorden staan wel in de HTML.
- Breadcrumbs verwijzen naar `/diensten` en `/locaties`, die niet bestaan (404).
- Alle 17 locatiepagina's gebruiken dezelfde hero-foto.
- Elke dienstpagina is een kopie met kleine verschillen; een gedeelde set componenten maakt het redesign beheersbaar.
- Er is geen meting van formulieren of `tel:`-klikken; geen analytics-script in de repo.
