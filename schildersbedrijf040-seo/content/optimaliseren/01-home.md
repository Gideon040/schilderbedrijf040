---
id: home
url: /
title_oud: "Schildersbedrijf040 | Vakkundig Schilderwerk in Eindhoven | Schildersbedrijf040"   # merknaam stond er 2x in
title_nieuw: "Schilder Eindhoven | Schildersbedrijf040"   # 40 tekens
meta_description_oud: "Professioneel schildersbedrijf in Eindhoven voor binnen- en buitenschilderwerk, behangen en houtrot sanering. Meer dan 5 jaar ervaring en 100% kwaliteitsgarantie."
meta_description_nieuw: "Schilder in Eindhoven en omgeving voor binnen- en buitenschilderwerk, behangen en latex spuiten. Boonstoppel-verf, gratis inspectie en een vaste prijs."   # 151 tekens
h1_oud: "Schildersbedrijf040 — Vakkundig schilderwerk in Eindhoven"
h1_nieuw: "Schilder in Eindhoven"
open_punten:
  - "[JORDY: echte Google-reviews koppelen] (4 plekken in het reviewblok)"
  - "[JORDY: plaats] bij het uitgelichte project (binnendeur)"
  - "[JORDY: klopt?] Reactie binnen één werkdag (offerteblok)"
  - "Garantie: niet meer op de homepage tot Jordy de termijn bevestigt (site noemde 1 jaar én 3 tot 7 jaar)"
---

## Samenvatting wijzigingen

- Gebouwd in de code (`app/(site)/page.tsx`, `components/home/*`), samen met het redesign.
- H1 en title volgens briefing en site-audit 1.2; direct antwoord in de hero (schilder in Eindhoven en omgeving, binnen en buiten, 5,0 op Google).
- Seizoensblok "Binnenwerk deze winter?" met link naar `/diensten/winterschilder` (okt t/m feb); vanaf maart wisselt het automatisch naar buitenwerk (`lib/seizoen.ts`, dagelijkse revalidate).
- Tegels naar binnenschilderwerk, buitenschilderwerk, behangen, lakwerk, latex spuiten en houtrot sanering, met prijslabel uit `lib/prices.ts`.
- Werkgebied met links naar alle 17 locatiepagina's, projectmozaïek met link naar `/projecten`, reviewblok, FAQ met zichtbare antwoorden.
- Offerte-CTA boven de vouw (hero) en onderaan (offerteblok met formulier).
- Bestaande teksten behouden: diensten-intro, over ons (2 alinea's), werkwijze-intro, werkgebied-intro, FAQ-antwoorden.
- Weggehaald: "98% klanttevredenheid", "100% kwaliteitsgarantie", "100+ projecten", drie reviews zonder bron, de garantievraag (tegenstrijdig), en de bewering "ook in Den Bosch, Tilburg en Weert".

## Toevoegingen

### 1. Seizoensblok
**Plaats:** direct onder de hero.

**Binnenwerk deze winter?** Buiten koud en nat, binnen gaat het werk gewoon door. Plan nu voor november tot en met maart. [Meer over winterschilderwerk →](/diensten/winterschilder)

### 2. FAQ: kernvraag 9 (GEO)
**Plaats:** FAQ naast het werkgebied.

**Hoe herkent u een goede schilder in Eindhoven?**
Een goede schilder in Eindhoven herkent u aan ervaringen van klanten, een duidelijke offerte en zorgvuldige voorbereiding. Kijk naar reviews: Schildersbedrijf040 heeft een 5,0 op Google uit 41 reviews en een 4,9 op Werkspot. Vraag om een inspectie bij u thuis en een offerte met vaste prijs, en vraag welke verf er wordt gebruikt. Schildersbedrijf040 werkt met Boonstoppel-verf en heeft ruim vijf jaar ervaring in Eindhoven en omgeving.

## Interne links toevoegen in bestaande tekst

| Bestaande zin (fragment) | Nieuwe ankertekst | Link naar |
|---|---|---|
| FAQ "Wat kost een schilder in Eindhoven?" | Bekijk de prijzen voor binnenschilderwerk. | /diensten/binnenschilderwerk |
| FAQ "Kan er het hele jaar door geschilderd worden?" | Lees meer over schilderen in de winter. | /diensten/winterschilder |
| Seizoensblok | Meer over winterschilderwerk | /diensten/winterschilder |
| Dienstkaart | Meer over buitenschilderwerk | /diensten/buitenschilderwerk |
| Projectmozaïek | Alle projecten bekijken | /projecten |
| Werkgebied | Schilder Helmond, Veldhoven, Best, Nuenen, Geldrop, Valkenswaard (+11) | /locaties/* |
| Hero, header, offerteblok | Gratis offerte aanvragen | /contact |

`/kosten/schilderwerk` (prijsgids) staat in de briefing maar bestaat nog niet: link volgt zodra de pagina live is (`PRIJSGIDS.live` in `lib/navigation.ts`).

## Schema

- `HousePainter` sitebreed (layout): adres, telefoon, openingstijden, aggregateRating 5,0 / 41, sameAs.
- `FAQPage` met de vijf zichtbare vragen (`faqSchema(faqs)` in `app/(site)/page.tsx`).
- `WebSite` sitebreed.
