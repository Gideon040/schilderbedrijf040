# Schildersbedrijf040 - SEO Geoptimaliseerde Website

## 🚀 Wat is geoptimaliseerd?

### SEO Verbeteringen
- ✅ **Metadata op elke pagina** - Unieke titles, descriptions en keywords
- ✅ **Schema markup** - LocalBusiness, Service, FAQPage, BreadcrumbList
- ✅ **Open Graph tags** - Voor social media sharing
- ✅ **Canonical URLs** - Voorkomt duplicate content
- ✅ **Sitemap.xml** - Voor Google indexering
- ✅ **Robots.txt** - Correct geconfigureerd

### Technische Verbeteringen
- ✅ **'use client' verwijderd** waar niet nodig (betere SSR)
- ✅ **Next.js image optimization** - Snellere laadtijden
- ✅ **Vercel-ready configuratie** - Geen static export meer nodig

### Nieuwe Pagina's
- ✅ **8 locatie pagina's** - Eindhoven, Waalre, Veldhoven, Geldrop, Nuenen, Best, Son en Breugel, Helmond
- ✅ **6 diensten pagina's** - Met unieke metadata en schema

## 📦 Installatie

```bash
# Clone of download het project
cd schildersbedrijf040-optimized

# Installeer dependencies
npm install

# Start development server
npm run dev

# Of build voor productie
npm run build
```

## 🌐 Deployment naar Vercel

### Via GitHub (Aanbevolen)
1. Push dit project naar een GitHub repository
2. Ga naar [vercel.com](https://vercel.com)
3. Klik op "Import Project"
4. Selecteer je GitHub repo
5. Klik op "Deploy"

### Via Vercel CLI
```bash
npm i -g vercel
vercel
```

## 📝 Na Deployment

### Google Search Console
1. Voeg je site toe aan Google Search Console
2. Verifieer eigendom
3. Submit de sitemap: `https://schildersbedrijf040.nl/sitemap.xml`

### Google Business Profile
- Voeg de website URL toe aan je Google Business profiel
- Zorg dat NAP (Name, Address, Phone) consistent is

## 🔧 Aanpassingen

### Nieuwe locatie toevoegen
Edit `app/locaties/[city]/data.ts` en voeg een nieuwe stad toe aan `cityData`.

### Metadata aanpassen
Elke pagina heeft een `metadata` export die je kunt aanpassen.

### Schema markup
Schema data staat in elke page component als `schemaData` object.

## 📊 Verwachte Resultaten

Na deployment zou je binnen 2-4 weken moeten zien:
- Betere indexering door Google
- Rich snippets voor FAQ vragen
- Lokale zoekresultaten voor elke stad
- Verbeterde Core Web Vitals

## 🛠 Tech Stack

- Next.js 13.5
- React 18
- Tailwind CSS
- shadcn/ui components
- TypeScript

---

Gemaakt door MIR Media Group
