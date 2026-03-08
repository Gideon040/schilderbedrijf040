# SEO + GEO Content Mega Prompt & Quality Checker

*MIR Media Group - Versie 3.0*

---

## Inhoudsopgave

1. De 5W1H Content Methodologie
2. Prose Writing Rules (Shopify / Next.js)
3. Content Depth Scoring
4. **[NIEUW] GEO: Entity & Schema Strategie**
5. **[NIEUW] GEO: Citability & AI-Leesbaarheid**
6. De Mega Content Prompt
7. Content Checklist (Per Sectie) â€” *nu met GEO*
8. Voorbeeld: Slechte vs Goede Content
9. FAQ Quality Framework â€” *nu met GEO*
10. Interne Linking Gids
11. **[NIEUW] Schema Markup Implementatie Gids**
12. Content Audit Scorecard â€” *nu met GEO*
13. Snelle Referentie Prompts â€” *nu met GEO*
14. Shopify Metafield Output Voorbeeld
15. Next.js / Headless Output Voorbeeld
16. Implementatie Checklist â€” *nu met GEO*

---

## Deel 1: De 5W1H Content Methodologie

Elke paragraaf of sectie moet minimaal 3 van deze 6 elementen bevatten:

### Het Framework

| Element | Vraag | Waarom belangrijk voor SEO + GEO |
|---------|-------|----------------------------------|
| **WIE** | Voor wie is dit? Wie gebruikt dit? | Zoekintentie matchen + entity herkenning |
| **WAT** | Wat is het? Wat doet het? | Definitie + keywords + entity definitie |
| **WAAR** | Waar gebruik je het? Waar koop je het? | Lokale SEO + geo-schema + regio-entiteiten |
| **WANNEER** | Wanneer gebruik je het? Hoe vaak? | Timing + frequentie keywords |
| **WAAROM** | Waarom is dit belangrijk? Waarom deze keuze? | Overtuiging + diepgang + AI-citability |
| **HOE** | Hoe werkt het? Hoe gebruik je het? | Instructie + long-tail + HowTo schema |

### De Gouden Regel

```
âŒ SLECHT: "Reinig je sexpop met een toycleaner."

âœ… GOED: "Reinig je sexpop na elk gebruik met een speciale toycleaner.
Waarom? Reguliere zeep kan het materiaal aantasten en laat een residu
achter dat bacteriegroei bevordert. Zonder goede reiniging kan TPE
binnen 6 maanden scheuren en verkleuren. Een toycleaner is pH-neutraal
en speciaal ontwikkeld om siliconen en TPE te beschermen."
```

### Waarom dit ook voor GEO werkt

AI-engines (ChatGPT, Gemini, Perplexity) citeren content die:
- **Directe antwoorden** geeft op vragen (WAT + WAAROM)
- **Specifieke cijfers** noemt (6 maanden, pH-neutraal)
- **Consequenties** benoemt (wat als je het niet doet)

Het 5W1H framework levert dit automatisch. Maar: AI-engines moeten de content ook *technisch* kunnen vinden en begrijpen. Dat is waar Deel 4 en 5 (GEO) bij komen.

---

## Deel 2: Prose Writing Rules

### GEEN Spec-Sheet Stijl

```
âŒ SLECHT (spec-sheet):

Torso's en half-body modellen

Wat: Bovenlichaam of onderlichaam replica, meestal 5-15 kg
Voor wie: Beginners, mensen met beperkte opslagruimte
Waarom kiezen:
â€¢ Makkelijk te hanteren
â€¢ Binnen 5 minuten klaar
â€¢ Prijsklasse â‚¬100-â‚¬400
Nadeel: Minder immersieve ervaring

---

âœ… GOED (prose):

Torso's zijn bovenlichaam of onderlichaam replica's van meestal
5-15 kg. Ze zijn ideaal voor beginners en mensen met beperkte
opslagruimte. Waarom zo populair? Ze zijn makkelijk te hanteren,
binnen 5 minuten klaar voor gebruik Ã©n opgeruimd, en met prijzen
van â‚¬100-â‚¬400 zeer toegankelijk om te ontdekken of een sexpop
bij je past. Het nadeel is dat de ervaring minder immersief is
door ontbrekende lichaamsdelen - maar voor veel gebruikers weegt
het gemak daar ruimschoots tegenop.
```

### Wanneer WEL bullet points gebruiken:

| Situatie | Bullet points OK? |
|----------|-------------------|
| Product type beschrijvingen | âŒ Nee, prose |
| Voor/nadelen opsommen | âŒ Nee, prose |
| Vergelijkingen (A vs B) | âŒ Nee, prose |
| USP's van de webshop | âœ… Ja |
| Stap-voor-stap instructies | âœ… Ja (+ HowTo schema) |
| Lijsten van 5+ concrete items | âœ… Ja |

### Geen tabellen in Shopify Rich Text

Shopify's Rich Text metafield ondersteunt GEEN tabellen. Schrijf vergelijkingen als prose:

```
âŒ GEEN TABELLEN

âœ… PROSE ALTERNATIEF:
"Siliconen voelt steviger en gladder aan, is niet-poreus (dus
hygiÃ«nischer), en kan 10+ jaar meegaan. Het nadeel: siliconen
kost 2-3x meer dan TPE en voelt kouder aan. TPE daarentegen
voelt zachter en huidachtiger aan, neemt lichaamswarmte over,
en is betaalbaarder. Bij goed onderhoud gaat TPE 3-5 jaar mee."
```

---

## Deel 3: Content Depth Scoring

### Score Elke Sectie (0-10 punten)

| Criterium | 0-2 punten | 3-5 punten | 6-8 punten | 9-10 punten |
|-----------|------------|------------|------------|-------------|
| **Diepgang** | Alleen WAT | WAT + HOE | WAT + HOE + WAAROM | Alle 5W1H |
| **Consequenties** | Geen | Vaag benoemd | Specifiek benoemd | Met voorbeelden |
| **Cijfers/Data** | Geen | Schattingen | Specifieke cijfers | Bronvermelding |
| **Voorbeelden** | Geen | 1 voorbeeld | 2-3 voorbeelden | Scenario's |
| **Alternatieven** | Geen | Genoemd | Vergeleken | Pro's/cons |
| **GEO-gereedheid** | Geen structuur | Keyword-only | Entity + anchor IDs | Entity + schema + citeerbaar |

### Minimum Scores per Paginatype

| Paginatype | Minimum Score | Target Score |
|------------|---------------|--------------|
| Productpagina | 5/10 | 7/10 |
| Categoriepagina / Dienstenpagina | 6/10 | 8/10 |
| Blog/Gids | 7/10 | 9/10 |
| FAQ antwoord | 6/10 | 8/10 |
| Homepage (sectie-niveau) | 5/10 | 7/10 |

---

## Deel 4: GEO â€” Entity & Schema Strategie [NIEUW]

### Waarom dit ertoe doet

Traditionele SEO denkt in keywords. GEO denkt in **entiteiten**: herkenbare concepten die AI-modellen aan elkaar koppelen. Een LLM zoekt niet naar "stucwerk Eindhoven" â€” het zoekt naar de *entiteit* "AfbouwZuid" en checkt of die gekoppeld is aan de entiteiten "stucwerk", "Eindhoven", "nieuwbouw afwerking".

### Entity Mapping (per pagina)

Bepaal vÃ³Ã³r het schrijven:

```
PRIMAIRE ENTITEIT (1x):
Het hoofdonderwerp van de pagina. Dit is wat de pagina
IS in de ogen van een AI-engine.

Voorbeeld: "Traditioneel Stucwerk" (dienstenpagina)
Voorbeeld: "AfbouwZuid" (homepage)
Voorbeeld: "Sexpop Onderhoud" (gids-pagina)

ONDERSTEUNENDE ENTITEITEN (3-6x):
Concepten die context geven en de primaire entiteit
verankeren in een kennisnetwerk.

Voorbeeld bij "Traditioneel Stucwerk":
- AfbouwZuid (merk/organisatie)
- Nieuwbouw afwerking (categorie)
- Brabant & Limburg (regio)
- Sausklaar stucwerk (variant)
- Sierpleister (variant)
- Cementgebonden stucwerk (materiaal)
```

### Entity Regels

1. **Primaire entiteit in de eerste 100 woorden** van de pagina
2. **Primaire entiteit in minimaal 1 heading** (H1 of H2)
3. **Consistente benaming**: kies Ã©Ã©n term en gebruik die consequent
   - Goed: "stucwerk" overal, met "stukadoorswerk" als eenmalige variatie
   - Slecht: afwisselen tussen "stucwerk", "pleisterwerk", "stukadoorswerk", "bepleistering"
4. **Ondersteunende entiteiten** natuurlijk verwerken in de eerste 3 alinea's
5. **Organisatie-entiteit** (bedrijfsnaam) minimaal 2x per pagina benoemen met context
   - Goed: "Bij AfbouwZuid werken we uitsluitend met cementgebonden stucwerk"
   - Slecht: "Neem contact op met AfbouwZuid" (geen inhoudelijke koppeling)

### Schema Types per Paginatype

| Paginatype | Verplichte Schema | Optioneel |
|------------|-------------------|-----------|
| **Homepage** | Organization, LocalBusiness, FAQPage | WebSite, SiteNavigationElement |
| **Dienstenpagina** | Service, FAQPage, BreadcrumbList | HowTo (als er stappen zijn) |
| **Categoriepagina** | CollectionPage, FAQPage, BreadcrumbList | Product (als items getoond) |
| **Productpagina** | Product, FAQPage, BreadcrumbList | AggregateRating, Offer |
| **Blog/Gids** | Article, FAQPage, BreadcrumbList | HowTo, VideoObject |
| **Contactpagina** | LocalBusiness, ContactPoint | - |
| **Projecten/Portfolio** | CreativeWork of ImageGallery | - |

### LocalBusiness Schema â€” Basistemplate

Elke bedrijfssite MOET dit bevatten op de homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.bedrijf.nl/#organization",
  "name": "Bedrijfsnaam",
  "description": "Korte beschrijving met primaire entiteit en regio",
  "url": "https://www.bedrijf.nl",
  "telephone": "+31612345678",
  "email": "info@bedrijf.nl",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Straatnaam 1",
    "addressLocality": "Stad",
    "addressRegion": "Provincie",
    "postalCode": "1234 AB",
    "addressCountry": "NL"
  },
  "areaServed": [
    { "@type": "State", "name": "Noord-Brabant" },
    { "@type": "State", "name": "Limburg" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Diensten",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stucwerk" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schilderwerk" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "9.7",
    "ratingCount": "200",
    "bestRating": "10"
  }
}
```

### Service Schema â€” Per Dienstenpagina

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.bedrijf.nl/stucwerk/#service",
  "name": "Traditioneel Stucwerk",
  "description": "Cementgebonden stucwerk voor nieuwbouw en renovatie in Brabant en Limburg",
  "provider": { "@id": "https://www.bedrijf.nl/#organization" },
  "areaServed": [
    { "@type": "State", "name": "Noord-Brabant" },
    { "@type": "State", "name": "Limburg" }
  ],
  "serviceType": "Stucwerk",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "priceCurrency": "EUR",
      "price": "15-35",
      "unitText": "per mÂ²"
    }
  }
}
```

### Stabiele @id Waarden

Gebruik **altijd** een vast `@id` patroon zodat AI-engines dezelfde entiteit herkennen over meerdere pagina's:

```
Organisatie:    https://www.bedrijf.nl/#organization
Service:        https://www.bedrijf.nl/[dienst]/#service
Contactpunt:    https://www.bedrijf.nl/#contact
Website:        https://www.bedrijf.nl/#website
```

Dit voorkomt duplicatie en versterkt de entiteitsherkenning.

---

## Deel 5: GEO â€” Citability & AI-Leesbaarheid [NIEUW]

### Het probleem

Je content kan perfect geschreven zijn voor mensen, maar als een AI-engine het niet kan "knippen" en citeren, besta je niet in AI-zoekresultaten.

### Citability Regels

#### 1. Front-load antwoorden

Elke sectie en elk FAQ-antwoord begint met het directe antwoord in de eerste zin. De uitleg volgt daarna.

```
âŒ SLECHT (begraven antwoord):
"Er zijn veel factoren die meespelen bij de keuze voor stucwerk.
Het hangt af van de staat van je muren, je budget, en het gewenste
eindresultaat. Over het algemeen kost stucwerk tussen de â‚¬15 en â‚¬35 per mÂ²."

âœ… GOED (front-loaded):
"Stucwerk kost gemiddeld â‚¬15 tot â‚¬35 per mÂ², afhankelijk van het type
afwerking en de staat van de ondergrond. Sausklaar stucwerk zit rond
â‚¬15-â‚¬20, sierpleister tussen â‚¬25-â‚¬35. De spreiding komt doordat een
nieuwbouwmuur die al vlak is minder voorbereiding vraagt dan een
renovatiewand met scheuren of oud behang."
```

**Waarom?** AI-engines knippen vaak de eerste 1-2 zinnen als antwoord. Als je antwoord in zin 3 of later staat, wordt een concurrent geciteerd.

#### 2. Anchor IDs op elke sectie

Voeg `id`-attributen toe aan elke H2 en H3 zodat AI-engines naar specifieke fragmenten kunnen verwijzen, niet alleen naar hele pagina's.

```html
<h2 id="stucwerk-kosten">Wat kost stucwerk per mÂ²?</h2>
<h2 id="soorten-stucwerk">Soorten stucwerk</h2>
<h3 id="sausklaar-stucwerk">Sausklaar stucwerk</h3>
<h3 id="sierpleister">Sierpleister</h3>
<section id="faq">...</section>
```

**Patroon:** `[onderwerp]-[aspect]` in kebab-case.

#### 3. Zelfstandige secties

Elke H2-sectie moet op zichzelf begrijpbaar zijn, zonder dat de lezer (of AI) de rest van de pagina heeft gelezen.

```
âŒ SLECHT (context-afhankelijk):
"Zoals hierboven beschreven, is dit ook van toepassing op het materiaal."

âœ… GOED (zelfstandig):
"TPE-materiaal is poreus, waardoor bacteriÃ«n zich in de poriÃ«n
nestelen als je niet binnen 30 minuten na gebruik reinigt."
```

#### 4. Context-woorden vooraan

AI-engines herkennen antwoordtypen sneller als je context-woorden aan het begin plaatst:

| Context-woord | Gebruik bij |
|---------------|------------|
| **Prijs / Kosten** | Prijsvragen ("Stucwerk kost â‚¬15-35 per mÂ²") |
| **Tijdsduur / Doorlooptijd** | Tijdsvragen ("Het stucen van een gemiddelde woning duurt 2-3 dagen") |
| **Verschil** | Vergelijkingsvragen ("Het verschil tussen sausklaar en sierpleister is...") |
| **Voordeel / Nadeel** | Keuzevragen ("Het voordeel van TPE is de zachte aanvoeling") |
| **Stap 1, Stap 2** | Instructievragen |

#### 5. Maximale citeerbare blokken

Houd FAQ-antwoorden tussen 50-150 woorden. Houd prose-paragrafen op maximaal 4-5 zinnen. Elke paragraaf bevat maximaal **Ã©Ã©n kernboodschap** die een AI kan extraheren.

**Vuistregel:** Als je een paragraaf niet kunt samenvatten in Ã©Ã©n zin, splits hem op.

#### 6. Vermijd vage verwijzingen

```
âŒ SLECHT: "Dit product", "deze methode", "het bovenstaande"
âœ… GOED: Herhaal de entiteitsnaam: "Sausklaar stucwerk", "de toycleaner", "airless spuittechniek"
```

AI-engines extraheren fragmenten uit context. Als een fragment "dit product" bevat, is het waardeloos als citatie.

---

## Deel 6: De Mega Content Prompt

### Instructies voor Content Generatie

```markdown
# CONTEXT
Je schrijft SEO + GEO content voor een website/webshop. De content moet:
- Ranken in Google (SEO)
- Geciteerd worden door AI assistants zoals ChatGPT, Gemini, Perplexity (GEO)
- Bezoekers converteren naar klanten
- Echte waarde bieden aan de lezer

# TONE OF VOICE
- Informatief maar toegankelijk
- Professioneel zonder klinisch te zijn
- Behulpzaam en niet oordelend
- Direct, geen wollig taalgebruik
- Nederlands (geen Belgisch)

# 5W1H VERPLICHTING
Elke sectie MOET minimaal bevatten:
1. WAT - Wat is/doet het onderwerp
2. WAAROM - Waarom is dit belangrijk/relevant
3. Plus minimaal 1 van: WIE, WAAR, WANNEER, HOE

# CONSEQUENTIE REGEL
Bij elke instructie of advies, beantwoord:
- "Wat gebeurt er als je dit WEL doet?" (positief)
- "Wat gebeurt er als je dit NIET doet?" (negatief)
- Gebruik specifieke cijfers waar mogelijk (tijdsduur, percentages, euro's)

# GEO VERPLICHTINGEN [NIEUW v3.0]
1. ENTITY MAPPING: Bepaal 1 primaire entiteit + 3-6 ondersteunende entiteiten
2. FRONT-LOADING: Elk antwoord begint met het directe antwoord in zin 1
3. ANCHOR IDS: Elke H2/H3 krijgt een id-attribuut (kebab-case)
4. ZELFSTANDIGHEID: Elke sectie is begrijpelijk zonder de rest van de pagina
5. GEEN VAGE VERWIJZINGEN: Herhaal entiteitsnamen, geen "dit", "deze", "het bovenstaande"
6. CONTEXT-WOORDEN: Front-load met prijs/kosten/tijdsduur/verschil/voordeel

# VOORBEELD FORMAAT

## [H2: Onderwerp met keyword â€” id="onderwerp-keyword"]

[Opening: 1-2 zinnen WAT het is â€” primaire entiteit in eerste zin]

[Uitleg WAAROM dit belangrijk is â€” consequenties noemen]

[HOE je het doet â€” stap voor stap indien nodig]

[WIE dit vooral moet weten / WANNEER dit van toepassing is]

[Eventueel: vergelijking met alternatieven]

# INTERNE LINKS
Verwerk minimaal [X] interne links naar:
- Gerelateerde producten/categorieÃ«n/diensten
- Ondersteunende producten (glijmiddel, cleaner, etc.)
- Contact/advies pagina

Anchor text variatie:
- 30% exact match keyword
- 40% partial match / natuurlijke tekst
- 30% branded of generiek

# STRUCTUUR EISEN

## Voor Dienstenpagina's (bijv. afbouw, installatie, etc.):
- H1: [Dienst] + regio/kwalificatie keyword
- Intro: 150-200 woorden (WAT + VOOR WIE + WAAR)
- H2: Wat is [dienst]? (definitie + entiteit)
- H2: Soorten [dienst] (met H3 per type)
- H2: Hoe kiezen / wanneer inzetten (beslissingscriteria)
- H2: Ons werkproces (HOE + vertrouwen)
- H2: [Dienst] bij [Bedrijfsnaam] (CONVERSIE)
- FAQ: 5-8 vragen met uitgebreide antwoorden
- Schema: Service + FAQPage + BreadcrumbList

## Voor Categoriepagina's (Shopify):
- H1: [Categorie] + koopintentie keyword
- Intro: 150-200 woorden (WAT + VOOR WIE)
- H2: Soorten/Types (WELKE varianten)
- H2: Hoe kies je (BESLISSINGSCRITERIA)
- H2: Gebruik en onderhoud (HOE + WAAROM)
- H2: Kopen bij [Bedrijfsnaam] (CONVERSIE)
- FAQ: 5-8 vragen met uitgebreide antwoorden
- Schema: CollectionPage + FAQPage + BreadcrumbList

## Voor Productpagina's:
- H1: [Productnaam] + eigenschap
- Intro: 100-150 woorden
- H2: Kenmerken/Wat maakt dit product uniek
- H2: Voor wie geschikt
- H2: Hoe te gebruiken
- H2: Specificaties
- FAQ: 3-5 product-specifieke vragen
- Schema: Product + FAQPage + BreadcrumbList

## Voor Blog/Gidsen:
- H1: [Vraag/Onderwerp] + keyword
- Intro: 100-150 woorden met kernantwoord IN ZIN 1 (GEO!)
- H2's: Logische opbouw van onderwerp
- H3's: Subsecties waar nodig
- Conclusie: Samenvatting + CTA
- FAQ: 3-5 vragen die niet in hoofdtekst staan
- Schema: Article + FAQPage + BreadcrumbList

## Voor Homepage's:
- H1: [Bedrijfsnaam] + primaire dienst/product + regio
- Intro: 100-150 woorden (WAT + WIE + WAAR â€” alle entiteiten benoemen)
- Secties: kort maar krachtig (WAT + WAAROM + 1 trust signal per sectie)
- FAQ: 5 vragen (breed, niet dienstspecifiek)
- Schema: Organization + LocalBusiness + FAQPage + WebSite

# CONVERSIE ELEMENTEN
Verwerk natuurlijk in de tekst:
- USP's van het bedrijf
- Trust signals (reviews, ervaring, garantie, certificeringen)
- Urgentie waar gepast (beschikbaarheid, seizoen)
- Duidelijke CTA's

# VERBODEN
- Medische claims zonder nuance
- Overdreven superlatieven ("de allerbeste")
- Keyword stuffing
- Dunne content zonder waarde
- Copy-paste van concurrenten
- Alleen WAT zonder WAAROM
- Vage verwijzingen ("dit", "deze", "het bovenstaande") [NIEUW v3.0]
- Context-afhankelijke secties die niet zelfstandig leesbaar zijn [NIEUW v3.0]
```

---

## Deel 7: Content Checklist (Per Sectie)

### Voor ELKE H2 sectie, check:

```markdown
â–¡ VOLLEDIGHEID
  â–¡ WAT is duidelijk uitgelegd?
  â–¡ WAAROM is benoemd (belang/consequenties)?
  â–¡ Minimaal 1 extra W (wie/waar/wanneer/hoe)?

â–¡ DIEPGANG
  â–¡ Specifieke cijfers/data genoemd?
  â–¡ Concrete voorbeelden gegeven?
  â–¡ Alternatieven/vergelijkingen gemaakt?
  â–¡ Consequenties van WEL/NIET doen?

â–¡ SEO
  â–¡ Target keyword in eerste 100 woorden?
  â–¡ Gerelateerde keywords natuurlijk verwerkt?
  â–¡ Minimaal 1 interne link?
  â–¡ Heading bevat zoekterm?

â–¡ GEO / AI-VINDBAARHEID [NIEUW v3.0]
  â–¡ Primaire entiteit benoemd in eerste 100 woorden?
  â–¡ Anchor ID op H2/H3 (id="onderwerp-aspect")?
  â–¡ Antwoord front-loaded (direct antwoord in eerste zin)?
  â–¡ Sectie is zelfstandig leesbaar zonder context?
  â–¡ Ondersteunende entiteiten (3-6) natuurlijk verwerkt?
  â–¡ Geen vage verwijzingen ("dit", "deze", "het bovenstaande")?
  â–¡ Context-woord aan begin (prijs/tijdsduur/verschil/voordeel)?
  â–¡ Schema type bepaald voor deze pagina?

â–¡ LEESBAARHEID
  â–¡ Zinnen max 20 woorden gemiddeld?
  â–¡ Paragrafen max 4-5 zinnen?
  â–¡ EÃ©n kernboodschap per paragraaf?
  â–¡ Bullet points waar logisch?
  â–¡ Geen jargon zonder uitleg?

â–¡ CONVERSIE
  â–¡ Voordeel voor lezer duidelijk?
  â–¡ Logische link naar product/dienst?
  â–¡ Trust element aanwezig?
```

---

## Deel 8: Voorbeeld â€” Slechte vs Goede Content

### Onderwerp: Onderhoud van een sexpop

---

### âŒ SLECHTE CONTENT (Score: 2/10)

```
## Onderhoud

Maak je sexpop schoon na gebruik. Gebruik een toycleaner.
Berg hem op een droge plek op. Gebruik glijmiddel tijdens gebruik.
```

**Wat mist:**
- âŒ Geen WAAROM
- âŒ Geen consequenties
- âŒ Geen specifieke instructies
- âŒ Geen cijfers/tijden
- âŒ Geen voorbeelden
- âŒ Geen alternatieven
- âŒ Geen anchor ID
- âŒ Geen front-loaded antwoord
- âŒ Niet zelfstandig leesbaar (geen context)
- âŒ Geen entity benoeming

---

### âœ… GOEDE CONTENT (Score: 9/10)

```html
<h2 id="onderhoud-sexpop">Onderhoud en verzorging van je sexpop</h2>

<p>Een goede verzorging verlengt de levensduur van je sexpop met jaren.
Met het juiste onderhoud gaat een kwaliteitsmodel 3-5 jaar mee.
Zonder onderhoud? Dan zie je binnen 6 maanden al scheurtjes,
verkleuring en onaangename geurtjes ontstaan.</p>

<h3 id="reinigen-na-gebruik">Reinigen na gebruik</h3>

<p><strong>Wanneer:</strong> Direct na elk gebruik, binnen 30 minuten.</p>

<p><strong>Waarom reinigen cruciaal is:</strong> Lichaamsvloeistoffen en
glijmiddel trekken in het materiaal als je te lang wacht. TPE is
poreus â€” bacteriÃ«n nestelen zich in de poriÃ«n en zijn dan bijna
niet meer te verwijderen. Dit veroorzaakt niet alleen geurtjes,
maar kan ook huidirritatie of infecties veroorzaken bij hergebruik.</p>

<p><strong>Hoe je je sexpop reinigt:</strong></p>
<ol>
<li>Spoel eerst met lauw water (niet heet â€” dat beschadigt TPE)</li>
<li>Gebruik een <a href="/collections/toycleaner">speciale toycleaner</a> â€”
geen gewone zeep! Zeep laat een residu achter en verstoort de
pH-balans van het materiaal</li>
<li>Dep droog met een pluisvrije doek (geen handdoek â€” pluisjes
blijven plakken)</li>
<li>Laat 2-3 uur drogen voordat je opbergt</li>
</ol>

<p><strong>Tip:</strong> Investeer in een toycleaner spray (â‚¬8-12) in plaats
van de doekjes. Goedkoper per gebruik en grondiger.</p>

<h3 id="opslag-sexpop">Opslag</h3>

<p>De ideale opslagtemperatuur voor je sexpop ligt tussen 15-25Â°C.
TPE en siliconen zijn gevoelig voor UV-licht en warmte. Direct zonlicht
veroorzaakt binnen weken verkleuring. Warmte boven 30Â°C maakt het
materiaal kleverig en versnelt degradatie.</p>

<p>Berg je sexpop liggend of hangend op, nooit opgevouwen â€” dat
veroorzaakt permanente vouwen in het materiaal. Gebruik geen plastic
zak (geen ventilatie = schimmelrisico) en zorg dat de pop niet tegen
andere toys aan ligt, omdat materialen chemisch kunnen reageren.</p>

<h3 id="onderhoud-tussen-gebruik">Onderhoud tussen gebruik door</h3>

<p>Strooi elke 2-4 weken maÃ¯zenapoeder of speciaal renewingpoeder
over het oppervlak van je sexpop. Dit houdt de huid zacht en voorkomt
dat het materiaal kleverig wordt. De behandeling kost 5 minuten maar
verdubbelt de levensduur van het materiaal.</p>

<p><strong>Let op:</strong> Gebruik NOOIT talkpoeder â€” dit bevat stoffen
die schadelijk kunnen zijn bij contact met slijmvliezen.</p>
```

**Wat deze versie goed doet:**
- âœ… WAAROM bij elke instructie
- âœ… Consequenties (positief Ã©n negatief)
- âœ… Specifieke cijfers (30 min, 2-3 uur, 6 maanden, 3-5 jaar)
- âœ… Concrete stappen
- âœ… Alternatieven en vergelijkingen
- âœ… Wat NIET te doen (en waarom)
- âœ… Interne link naar product
- âœ… Prijsindicatie
- âœ… Tips voor besparing/verbetering
- âœ… **Anchor IDs** op elke H2/H3 (GEO)
- âœ… **Front-loaded antwoorden** (GEO)
- âœ… **Zelfstandige secties** â€” elk blok leesbaar zonder context (GEO)
- âœ… **Entiteitsnamen herhaald** â€” "sexpop", "TPE", "toycleaner" (GEO)
- âœ… **Geen vage verwijzingen** (GEO)

---

## Deel 9: FAQ Quality Framework

### Slechte FAQ (Score: 3/10)

```
V: Hoe reinig ik mijn sexpop?
A: Met een toycleaner en water.
```

### Goede FAQ (Score: 8/10, SEO + GEO proof)

```
V: Hoe reinig ik mijn sexpop het beste?

A: Reinig je sexpop binnen 30 minuten na gebruik met lauw water
en een speciale toycleaner. Gebruik nooit gewone zeep â€” dit laat
een residu achter dat bacteriegroei bevordert en het materiaal
aantast. Spoel grondig af, dep droog met een pluisvrije doek,
en laat 2-3 uur volledig drogen voordat je opbergt. Bij modellen
met uitneembare inserts kun je deze apart reinigen, wat het
proces makkelijker maakt.
```

**GEO-check voor deze FAQ:**
- âœ… Direct antwoord in eerste zin ("Reinig je sexpop binnen 30 minuten...")
- âœ… Specifiek cijfer front-loaded ("30 minuten", "2-3 uur")
- âœ… Zelfstandig leesbaar zonder rest van pagina
- âœ… Entiteitsnaam herhaald ("sexpop", "toycleaner")
- âœ… 50-150 woorden (ideale citeerbare lengte)
- âœ… Geen vage verwijzingen

### FAQ Checklist (v3.0)

```markdown
â–¡ Vraag bevat zoekterm/keyword?
â–¡ Antwoord begint met directe beantwoording? (GEO: VERPLICHT)
â–¡ Antwoord bevat WAAROM/consequentie?
â–¡ Specifieke cijfers/tijden genoemd?
â–¡ Praktische tip of alternatief?
â–¡ 50-150 woorden (niet te kort, niet te lang)?
â–¡ Zelfstandig leesbaar zonder pagina-context? (GEO)
â–¡ Entiteitsnamen herhaald, geen "dit/deze"? (GEO)
â–¡ FAQPage schema markup aanwezig? (GEO)
```

### FAQ Schema Markup (JSON-LD)

Bij ELKE FAQ-sectie hoort deze markup in de `<head>` of onderaan de pagina:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoe reinig ik mijn sexpop het beste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reinig je sexpop binnen 30 minuten na gebruik met lauw water en een speciale toycleaner. Gebruik nooit gewone zeep â€” dit laat een residu achter dat bacteriegroei bevordert en het materiaal aantast."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost stucwerk per mÂ²?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stucwerk kost gemiddeld â‚¬15 tot â‚¬35 per mÂ², afhankelijk van het type afwerking en de staat van de ondergrond. Sausklaar stucwerk zit rond â‚¬15-â‚¬20, sierpleister tussen â‚¬25-â‚¬35."
      }
    }
  ]
}
```

---

## Deel 10: Interne Linking Gids

### Link Contextueel, Niet Random

```markdown
âŒ SLECHT:
"Bekijk ook onze andere producten."

âœ… GOED:
"Voor optimaal comfort en bescherming van het materiaal
raden we aan om altijd een [glijmiddel op waterbasis](/collections/glijmiddelen)
te gebruiken. Siliconen-glijmiddelen kunnen namelijk reageren met
siliconen toys en het oppervlak beschadigen."
```

### Link Mapping per Productcategorie (Webshop)

| Categorie | Altijd linken naar | Context |
|-----------|-------------------|---------|
| Sexpoppen | Glijmiddel, Toycleaner, Masturbators | Onderhoud, alternatieven |
| Vibrators | Glijmiddel, Toycleaner, Batterijen | Gebruik, onderhoud |
| Dildo's | Glijmiddel, Harnassen, Zuignap info | Gebruik, combinaties |
| BDSM | Toycleaner, Glijmiddel, Veiligheid | HygiÃ«ne, veilig gebruik |
| Lingerie | Verzorging, Gerelateerde sets | Onderhoud, combineren |

### Link Mapping per Dienstenpagina (Bedrijfssite)

| Dienst | Altijd linken naar | Context |
|--------|-------------------|---------|
| Stucwerk | Schilderwerk, Latexspuiten, Projecten | Vervolg, combinatie |
| Schilderwerk | Stucwerk, Lakwerk, Projecten | Voorbereiding, aanvulling |
| Vloeren | Traprenovatie, Totaalpakket, Contact | Combinatie, upsell |
| Traprenovatie | Vloeren, Schilderwerk, Contact | Combinatie, afwerking |
| Totaalpakket | Alle individuele diensten, Projecten | Overzicht, verdieping |

### Anchor Text Variatie

```markdown
Per 1000 woorden content, streef naar:

â–¡ 2-3 exact match anchors: "stucwerk", "traprenovatie"
â–¡ 2-3 partial match: "professioneel stucwerk in Brabant"
â–¡ 1-2 branded: "bekijk de AfbouwZuid aanpak"
â–¡ 1-2 generiek: "bekijk onze werkwijze", "lees meer"
```

---

## Deel 11: Schema Markup Implementatie Gids [NIEUW]

### Waar plaatsen?

Schema markup wordt altijd als JSON-LD geplaatst in een `<script>` tag:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "...",
  ...
}
</script>
```

**Plaatsing:** In de `<head>` van de pagina, of direct vÃ³Ã³r `</body>`. EÃ©n `<script>` blok per schema type, of alles in een `@graph` array combineren.

### Implementatie per Platform

#### Next.js / Headless

```jsx
// components/SchemaMarkup.tsx
export function SchemaMarkup({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Gebruik in pagina:
<Head>
  <SchemaMarkup data={localBusinessSchema} />
  <SchemaMarkup data={faqSchema} />
</Head>
```

#### Shopify

In Shopify gebruik je Liquid in `theme.liquid` of per template:

```liquid
{% if template contains 'collection' %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "{{ collection.title }}",
  "description": "{{ collection.description | strip_html | escape }}",
  "url": "{{ shop.url }}{{ collection.url }}"
}
</script>
{% endif %}
```

#### WordPress

Gebruik Rank Math of Yoast SEO plugin, of voeg handmatig JSON-LD toe via `wp_head` hook.

### Validatie

Na implementatie ALTIJD valideren:

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema.org Validator:** https://validator.schema.org/
3. **Handmatig testen:** Zoek je eigen pagina in Google, check of rich results verschijnen

### Prioriteit Schema Types (van hoog naar laag)

| Prioriteit | Schema Type | Impact op GEO |
|------------|------------|---------------|
| ðŸ”´ Kritiek | FAQPage | Hoogste citatie-kans in AI-resultaten |
| ðŸ”´ Kritiek | Organization / LocalBusiness | Entiteitsherkenning door AI |
| ðŸŸ  Hoog | Service / Product | Vergelijkingen en aanbevelingen |
| ðŸŸ  Hoog | BreadcrumbList | Sitestructuur begrip |
| ðŸŸ¡ Medium | Article | Blogcontent citatie |
| ðŸŸ¡ Medium | HowTo | Stap-voor-stap citatie |
| ðŸŸ¢ Nice-to-have | AggregateRating | Trust signaal |
| ðŸŸ¢ Nice-to-have | VideoObject | Multimedia indexering |

---

## Deel 12: Content Audit Scorecard (v3.0)

### Gebruik voor bestaande content

```markdown
# Content Audit: [Pagina URL]
Datum: [DATUM]
Auditor: [NAAM]

## Scores (1-10)

### Volledigheid (SEO)
- [ ] WAT uitgelegd: _/10
- [ ] WAAROM benoemd: _/10
- [ ] HOE beschreven: _/10
- [ ] Consequenties: _/10
**Subtotaal:** _/40

### SEO Technisch
- [ ] H1 met keyword: _/10
- [ ] H2 structuur logisch: _/10
- [ ] Meta title optimaal: _/10
- [ ] Meta description: _/10
- [ ] Interne links (min 3): _/10
**Subtotaal:** _/50

### Diepgang
- [ ] Specifieke cijfers: _/10
- [ ] Concrete voorbeelden: _/10
- [ ] Vergelijkingen/alternatieven: _/10
- [ ] Expert-niveau info: _/10
**Subtotaal:** _/40

### Conversie
- [ ] USP's verwerkt: _/10
- [ ] Trust signals: _/10
- [ ] CTA aanwezig: _/10
- [ ] Productlinks/Dienstlinks: _/10
**Subtotaal:** _/40

### GEO / AI-Vindbaarheid [NIEUW v3.0]
- [ ] Entity mapping aanwezig (primair + ondersteunend): _/10
- [ ] Schema markup geÃ¯mplementeerd (juiste types): _/10
- [ ] Antwoorden front-loaded (direct in eerste zin): _/10
- [ ] Anchor IDs op alle H2/H3: _/10
- [ ] Secties zelfstandig leesbaar: _/10
- [ ] Geen vage verwijzingen: _/10
- [ ] FAQ's in citeerbaar formaat (50-150 woorden): _/10
**Subtotaal:** _/70

## TOTAAL: _/240

### Beoordeling
- 200-240: Excellent âœ… (SEO + GEO proof)
- 160-199: Goed, kleine verbeteringen
- 120-159: Matig, revisie nodig (waarschijnlijk GEO-gaps)
- <120: Herschrijven nodig

## Actie Items
1. [Specifieke verbetering]
2. [Specifieke verbetering]
3. [Specifieke verbetering]
```

---

## Deel 13: Snelle Referentie Prompts (v3.0)

### Voor Nieuwe Categorie Content (Shopify Metafields)

```
Schrijf SEO + GEO content voor de categoriepagina: [CATEGORIE]

ENTITY MAPPING:
- Primaire entiteit: [bijv. "vibrators"]
- Ondersteunende entiteiten: [bijv. "clitoris vibrator", "G-spot vibrator",
  "Satisfyer", "Erotheek Hengelo", "seksuele stimulatie"]

VEREISTEN:
- 1000-1500 woorden voor SEO content
- 5 H2 secties (deze worden TOC items)
- H3 subsecties waar logisch
- 8 FAQ vragen met uitgebreide antwoorden
- Minimaal 5 interne links
- Elke sectie bevat WAT + WAAROM + consequenties
- Specifieke cijfers waar mogelijk
- Tone: informatief, behulpzaam, niet oordelend

SCHRIJFSTIJL - CRUCIAAL:
- Schrijf in VLOEIENDE PARAGRAFEN (prose), geen spec-sheets
- NOOIT "Wat: ... / Voor wie: ... / Waarom: ..." format
- GEEN tabellen (Shopify Rich Text ondersteunt dit niet)
- Bullet points ALLEEN voor: stap-voor-stap instructies, USP lijsten
- Verwerk vergelijkingen in prose, niet in lijsten
- Elke H3 sectie is minimaal 2-3 alinea's vloeiende tekst

GEO VEREISTEN [v3.0]:
- Primaire entiteit in eerste 100 woorden + minimaal 1 heading
- Front-load elk antwoord (direct antwoord in zin 1)
- Anchor IDs op alle H2's en H3's (id="kebab-case")
- Elke sectie moet zelfstandig leesbaar zijn
- Herhaal entiteitsnamen, GEEN "dit", "deze", "het bovenstaande"
- Context-woorden aan begin: prijs/kosten/tijdsduur/verschil/voordeel
- FAQ-antwoorden 50-150 woorden (citeerbare lengte)

STRUCTUUR SEO CONTENT:
1. H2: Wat zijn [categorie]?
2. H2: Soorten [categorie] (met H3 per type)
3. H2: Hoe kies je de juiste [categorie]? (met H3 per criterium)
4. H2: Gebruik en onderhoud (met H3 per fase)
5. H2: [Categorie] kopen bij [Bedrijfsnaam]

FAQ VERDELING (8 vragen):
- 2x WAT vragen (definitie, verschil tussen types)
- 2x HOE vragen (gebruik, onderhoud, reiniging)
- 2x WAAROM vragen (materiaalkeuze, belang van onderhoud)
- 2x PRAKTISCH (verzending, retour, geschiktheid)

SCHEMA MARKUP NODIG:
- CollectionPage schema
- FAQPage schema (alle 8 FAQ's)
- BreadcrumbList schema

LINK NAAR:
- [Gerelateerde categorie 1]
- [Gerelateerde categorie 2]
- [Ondersteunend product zoals glijmiddel/toycleaner]
- [Contact pagina]

USP'S TE VERWERKEN:
- Fysieke winkel + jarenlange ervaring
- Discrete verzending
- 30 dagen bedenktijd
- Persoonlijk advies
- Eigen merk (indien relevant)

===================
OUTPUT FORMAAT
===================

Geef output als pure HTML code:
- <h2 id="kebab-case"> voor hoofdsecties (worden TOC items + GEO anchor)
- <h3 id="kebab-case"> voor subsecties
- <p> voor paragrafen (PROSE, geen spec-sheets!)
- <strong> voor belangrijke termen
- <a href="/collections/xxx"> voor interne links
- <ul><li> ALLEEN voor stap-voor-stap of USP's
- GEEN tabellen, GEEN "Wat:/Voor wie:/Waarom:" format

**SECTIE 1: SEO CONTENT (custom.seo_content)**

[Pure HTML hier]

**SECTIE 2: FAQ METAFIELDS (8x)**

FAQ 1:
Vraag: [Platte tekst]
Antwoord: <p>[HTML antwoord 50-150 woorden]</p>

[etc. voor FAQ 2-8]

**SECTIE 3: SCHEMA MARKUP [NIEUW v3.0]**

[FAQPage JSON-LD]
[CollectionPage JSON-LD]
[BreadcrumbList JSON-LD]
```

### Voor Nieuwe Dienstenpagina (Next.js / Bedrijfssite)

```
Schrijf SEO + GEO content voor de dienstenpagina: [DIENST]
Bedrijf: [BEDRIJFSNAAM]
Regio: [WERKGEBIED]

ENTITY MAPPING:
- Primaire entiteit: [bijv. "Traditioneel Stucwerk"]
- Ondersteunende entiteiten: [bijv. "AfbouwZuid", "nieuwbouw afwerking",
  "Brabant", "sausklaar stucwerk", "sierpleister", "cementgebonden stucwerk"]

VEREISTEN:
- 1200-1500 woorden
- 5 H2 secties met H3 subsecties
- 8 FAQ vragen met uitgebreide antwoorden
- Minimaal 5 interne links naar andere diensten
- Elke sectie bevat WAT + WAAROM + consequenties
- Specifieke cijfers: prijsindicaties, doorlooptijden, levensduur
- Tone: professioneel, vakkundig, toegankelijk

GEO VEREISTEN [v3.0]:
- Primaire entiteit in eerste 100 woorden + minimaal 1 heading
- Bedrijfsnaam minimaal 2x met inhoudelijke context
- Regio-entiteiten verwerken (steden, provincies)
- Front-load elk antwoord
- Anchor IDs op alle H2's en H3's
- Zelfstandig leesbare secties
- Context-woorden vooraan

STRUCTUUR:
1. H2: Wat is [dienst]?
2. H2: Soorten [dienst] (met H3 per type/variant)
3. H2: Wanneer kies je voor [dienst]?
4. H2: Hoe werkt [Bedrijfsnaam]?
5. H2: [Dienst] door [Bedrijfsnaam]

FAQ VERDELING (8 vragen):
- 2x WAT (definitie, verschil types)
- 2x HOE (werkproces, doorlooptijd)
- 2x WAAROM (materiaalkeuze, belang kwaliteit)
- 2x PRAKTISCH (kosten, offerte, garantie)

SCHEMA MARKUP:
- Service schema met areaServed
- FAQPage schema
- BreadcrumbList schema

===================
OUTPUT FORMAAT
===================

**SECTIE 1: PAGINA CONTENT**
[Pure HTML met anchor IDs]

**SECTIE 2: FAQ's (8x)**
FAQ 1:
Vraag: [tekst]
Antwoord: <p>[50-150 woorden]</p>

**SECTIE 3: SCHEMA MARKUP**
[Service JSON-LD]
[FAQPage JSON-LD]
[BreadcrumbList JSON-LD]
```

### Voor Content Verbetering (v3.0)

```
Verbeter de volgende content volgens het 5W1H + GEO framework:

HUIDIGE CONTENT:
[PLAK CONTENT]

ENTITY MAPPING:
- Primaire entiteit: [invullen]
- Ondersteunende entiteiten: [invullen]

VERBETER DOOR:
1. Voeg WAAROM toe aan elke instructie
2. Noem consequenties (wat als je het wel/niet doet)
3. Voeg specifieke cijfers/tijden toe
4. Geef concrete voorbeelden
5. Voeg vergelijkingen toe waar relevant
6. Maak interne links contextueel
7. [NIEUW] Front-load alle antwoorden (direct antwoord in zin 1)
8. [NIEUW] Voeg anchor IDs toe aan H2/H3 tags
9. [NIEUW] Maak secties zelfstandig leesbaar
10. [NIEUW] Vervang vage verwijzingen door entiteitsnamen
11. [NIEUW] Voeg ontbrekende schema markup toe

OUTPUT: Verbeterde versie + schema markup + GEO-score
```

### Voor FAQ Generatie (v3.0)

```
Genereer 8 FAQ's voor [ONDERWERP/CATEGORIE]

ENTITY MAPPING:
- Primaire entiteit: [invullen]
- Bedrijfsnaam: [invullen]

VEREISTEN PER FAQ:
- Vraag bevat zoekterm
- Antwoord 50-150 woorden (citeerbare lengte voor AI)
- EERSTE ZIN = direct antwoord (GEO verplicht)
- Bevat WAAROM/consequentie
- Noemt specifieke cijfers waar mogelijk
- Eindigt met praktische tip of link
- Herhaal entiteitsnamen, geen "dit/deze"
- Zelfstandig leesbaar zonder pagina-context

VERDELING:
- 2x WAT vragen (definitie, verschil)
- 2x HOE vragen (gebruik, onderhoud)
- 2x WAAROM vragen (keuze, belang)
- 2x PRAKTISCH (verzending/offerte, retour/garantie, advies)

EXTRA OUTPUT: FAQPage JSON-LD schema markup voor alle 8 FAQ's
```

---

## Deel 14: Shopify Metafield Output Voorbeeld

### Zo ziet de output eruit:

**SECTIE 1: SEO CONTENT (custom.seo_content)**

```html
<h2 id="wat-zijn-vibrators">Wat zijn vibrators?</h2>

<p>Een vibrator is een seksspeeltje dat trillingen produceert voor seksuele stimulatie. Maar waarom is de vibrator al decennia het populairste seksspeeltje ter wereld? Het antwoord: consistente stimulatie die met de hand moeilijk te evenaren is.</p>

<p>Vibrators zijn geschikt voor vrouwen die hun lichaam willen verkennen, koppels die hun seksleven willen verrijken, en mensen die moeite hebben met klaarkomen tijdens penetratie. Bij Erotheek Hengelo vind je vibrators van topmerken zoals <a href="/collections/satisfyer">Satisfyer</a> en <a href="/collections/lelo">LELO</a>. Twijfel je welk type vibrator bij je past? <a href="/pages/contact">Vraag ons om advies</a>.</p>

<h2 id="soorten-vibrators">Soorten vibrators</h2>

<p>Het aanbod aan vibrators is enorm. Om je te helpen kiezen, bespreken we de belangrijkste types vibrators.</p>

<h3 id="clitoris-vibrators">Clitoris vibrators</h3>

<p>Clitoris vibrators zijn ontworpen voor uitwendige stimulatie van de clitoris. Ze zijn compact, vaak niet groter dan een lippenstift, en focussen op gerichte trillingen. Waarom clitoris vibrators zo populair zijn? De clitoris bevat meer dan 8.000 zenuwuiteinden â€” meer dan enig ander lichaamsdeel. Gerichte stimulatie hier leidt voor veel vrouwen sneller tot een orgasme dan inwendige stimulatie. Een clitoris vibrator is perfect voor beginners die nog niet klaar zijn voor penetratie, maar ook voor ervaren gebruikers als finishing touch.</p>

<h3 id="g-spot-vibrators">G-spot vibrators</h3>

<p>G-spot vibrators hebben een gebogen vorm die specifiek ontworpen is om de G-spot te bereiken â€” een gevoelig gebied aan de voorwand van de vagina, ongeveer 5-7cm naar binnen. De curve van een G-spot vibrator zorgt ervoor dat de trillingen precies op de juiste plek terechtkomen. Veel vrouwen beschrijven G-spot orgasmes als intenser en "dieper" dan clitorale orgasmes. Het vinden van je G-spot kan even oefening vragen, maar een goede vibrator maakt het zoeken een stuk aangenamer.</p>
```

**Let op de GEO-verbeteringen:**
- âœ… Anchor IDs op elke heading (`id="wat-zijn-vibrators"`)
- âœ… Entiteitsnamen herhaald ("vibrator", "clitoris vibrator", "G-spot vibrator")
- âœ… Geen "dit product" of "deze" â€” altijd de naam van het type
- âœ… Zelfstandig leesbare secties
- âœ… Front-loaded informatie

**SECTIE 2: FAQ METAFIELDS**

```
FAQ 1:
Vraag: Wat is de beste vibrator voor beginners?
Antwoord: <p>De beste vibrator voor beginners is een clitoris vibrator of bullet vibrator. Deze vibrators zijn compact, niet-intimiderend, en focussen op externe stimulatie. Je hoeft niets in te brengen, wat voor veel vrouwen comfortabeler voelt bij de eerste keer. Kwaliteitsvibrators voor beginners zijn verkrijgbaar vanaf â‚¬20. Start simpel â€” je kunt altijd upgraden als je weet wat je fijn vindt.</p>

FAQ 2:
Vraag: Hoe reinig ik mijn vibrator na gebruik?
Antwoord: <p>Reinig je vibrator voor Ã©n na elk gebruik met een speciale toycleaner of milde zeep en lauw water. Waarom vÃ³Ã³r gebruik? Tijdens opslag kan stof of bacteriÃ«n zich ophopen op de vibrator. Waarom erna? Lichaamsvloeistoffen die opdrogen zijn lastiger te verwijderen en kunnen bacteriegroei veroorzaken. Dompel alleen waterdichte vibrators volledig onder â€” controleer altijd de IPX-rating in de specificaties van je vibrator.</p>

[... FAQ 3-8 ...]
```

**SECTIE 3: SCHEMA MARKUP [NIEUW v3.0]**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is de beste vibrator voor beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De beste vibrator voor beginners is een clitoris vibrator of bullet vibrator. Deze vibrators zijn compact, niet-intimiderend, en focussen op externe stimulatie. Je hoeft niets in te brengen, wat voor veel vrouwen comfortabeler voelt bij de eerste keer. Kwaliteitsvibrators voor beginners zijn verkrijgbaar vanaf â‚¬20."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe reinig ik mijn vibrator na gebruik?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reinig je vibrator voor Ã©n na elk gebruik met een speciale toycleaner of milde zeep en lauw water. Tijdens opslag kan stof of bacteriÃ«n zich ophopen. Lichaamsvloeistoffen die opdrogen zijn lastiger te verwijderen en kunnen bacteriegroei veroorzaken. Dompel alleen waterdichte vibrators volledig onder."
      }
    }
  ]
}
</script>
```

### Waar plak je dit in Shopify?

1. **SEO Content** â†’ Collection â†’ Metafields â†’ `custom.seo_content` (Tekst met opmaak)
2. **FAQ 1 Vraag** â†’ `custom.faq_1_question` (Tekst Ã©Ã©n regel)
3. **FAQ 1 Antwoord** â†’ `custom.faq_1_answer` (Tekst met opmaak)
4. Herhaal voor FAQ 2-8
5. **Schema Markup** â†’ In je theme.liquid of collection template (Liquid)

---

## Deel 15: Next.js / Headless Output Voorbeeld [NIEUW]

Voor bedrijfssites gebouwd in Next.js:

### Pagina Structuur

```
/diensten/stucwerk/page.tsx     â†’ Content component + schema
/diensten/stucwerk/schema.ts    â†’ JSON-LD generatie
/components/FAQ.tsx             â†’ FAQ component met schema
/components/SchemaMarkup.tsx    â†’ Generieke schema wrapper
```

### Content Component Voorbeeld

```tsx
// /diensten/stucwerk/page.tsx
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { FAQ } from '@/components/FAQ';
import { stucwerkSchema, stucwerkFAQSchema } from './schema';

export const metadata = {
  title: 'Stucwerk | AfbouwZuid â€” Vakmanschap in Brabant & Limburg',
  description: 'Professioneel stucwerk door AfbouwZuid. Sausklaar, sierpleister en dunpleister voor nieuwbouw en renovatie. 15+ jaar ervaring in Zuid-Nederland.',
};

export default function StucwerkPage() {
  return (
    <>
      <SchemaMarkup data={stucwerkSchema} />
      <SchemaMarkup data={stucwerkFAQSchema} />

      <section>
        <h1>Stucwerk door AfbouwZuid â€” vakmanschap voor nieuwbouw en renovatie</h1>

        <h2 id="wat-is-stucwerk">Wat is stucwerk?</h2>
        <p>Stucwerk is een cement- of gipsgebonden afwerklaag die...</p>

        <h2 id="soorten-stucwerk">Soorten stucwerk</h2>
        <h3 id="sausklaar-stucwerk">Sausklaar stucwerk</h3>
        <p>Sausklaar stucwerk is een gladde...</p>

        {/* etc. */}

        <FAQ items={stucwerkFAQItems} />
      </section>
    </>
  );
}
```

---

## Deel 16: Implementatie Checklist (v3.0)

### Voor Nieuwe Content

```markdown
â–¡ PRE-WRITING
  â–¡ Keyword research gedaan
  â–¡ Zoekintentie bepaald (informational/commercial/transactional)
  â–¡ Concurrentie content geanalyseerd
  â–¡ Interne link targets bepaald
  â–¡ USP's en trust signals verzameld
  â–¡ [NIEUW] Entity mapping gedaan (1 primair + 3-6 ondersteunend)
  â–¡ [NIEUW] Schema types per pagina bepaald
  â–¡ [NIEUW] Anchor ID structuur gepland

â–¡ WRITING
  â–¡ 5W1H framework per sectie
  â–¡ Consequenties bij instructies
  â–¡ Specifieke cijfers verwerkt
  â–¡ Voorbeelden gegeven
  â–¡ Interne links contextueel geplaatst
  â–¡ [NIEUW] Primaire entiteit in eerste 100 woorden
  â–¡ [NIEUW] Antwoorden front-loaded (direct in zin 1)
  â–¡ [NIEUW] Secties zelfstandig leesbaar
  â–¡ [NIEUW] Geen vage verwijzingen
  â–¡ [NIEUW] Context-woorden vooraan (prijs/tijd/verschil)

â–¡ POST-WRITING
  â–¡ Content Audit Scorecard ingevuld (min 160/240)
  â–¡ Spelling/grammar check
  â–¡ Leesbaarheid check
  â–¡ Alle links werken
  â–¡ Heading hiÃ«rarchie klopt
  â–¡ [NIEUW] Alle H2/H3 hebben anchor IDs
  â–¡ [NIEUW] Alle secties zelfstandig leesbaar gecontroleerd

â–¡ TECHNICAL
  â–¡ Meta title geoptimaliseerd
  â–¡ Meta description geschreven
  â–¡ Images met alt tekst
  â–¡ Canonical URL correct
  â–¡ [NIEUW] FAQPage schema geÃ¯mplementeerd + gevalideerd
  â–¡ [NIEUW] Service/Product schema geÃ¯mplementeerd + gevalideerd
  â–¡ [NIEUW] Organization/LocalBusiness schema op homepage
  â–¡ [NIEUW] BreadcrumbList schema op alle pagina's
  â–¡ [NIEUW] Schema gevalideerd via Google Rich Results Test
  â–¡ [NIEUW] Google Business Profile consistent met site-entiteiten

â–¡ GEO MONITORING (doorlopend) [NIEUW]
  â–¡ Test je pagina in ChatGPT/Perplexity â€” word je geciteerd?
  â–¡ Check Google AI Overviews voor je keywords
  â–¡ Monitor welke FAQ's en secties geciteerd worden
  â–¡ Update content minimaal elk kwartaal (recency signaal)
```

---

## Bijlage A: Externe Autoriteit (buiten het framework)

Dit framework richt zich op **on-site** optimalisatie. Maar GEO-succes hangt ook af van **externe signalen** die buiten het schrijfproces vallen:

### Per klant beoordelen:

| Signaal | Actie | Impact |
|---------|-------|--------|
| Google Business Profile | Volledig invullen, foto's, reviews verzamelen | ðŸ”´ Kritiek |
| Google Reviews | Actief verzamelen (9.0+ score) | ðŸ”´ Kritiek |
| Branchevermeldingen | Kvk, branchesites, leverancierslijsten | ðŸŸ  Hoog |
| Lokale media | Persberichten, lokale nieuwssites | ðŸŸ  Hoog |
| Social media mentions | Consistent posten, merknaam gebruiken | ðŸŸ¡ Medium |
| Backlinks | Gastblogs, samenwerkingen, PR | ðŸŸ¡ Medium |
| Wikipedia/Wikidata | Alleen voor grotere merken relevant | ðŸŸ¢ Bonus |

**Vuistregel:** AI-engines citeren merken die niet alleen op hun eigen site, maar ook door *derden* als autoriteit worden erkend. Schema + goede content + externe vermeldingen = GEO-succes.

---

*Versie 3.0 â€” Februari 2025*
*MIR Media Group*

**Wijzigingslog:**
- v3.0: Toegevoegd GEO framework (entity mapping, schema markup, citability regels), GEO checklist items, schema implementatie gids, Next.js output voorbeeld, dienstenpagina prompt template, externe autoriteit bijlage, scoring uitgebreid naar /240
- v2.0: Toegevoegd 5W1H framework, consequentie regel, scoring systeem
- v1.0: InitiÃ«le versie met basis structuur
