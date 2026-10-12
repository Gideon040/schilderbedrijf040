# Site-audit en redesign Schildersbedrijf040

Gebaseerd op screenshots van de homepage, /diensten/binnenschilderwerk en /locaties/helmond (29-09-2026). De site is technisch en qua opbouw al goed; dit zijn gerichte verbeteringen, geen nieuwe site. Werk per onderdeel in een kleine, losse wijziging (branch/commit) met een screenshot voor en na.

## Randvoorwaarden

- **Geen URL's wijzigen of verwijderen.** Bestaande tekst die rankt blijft staan (binnen- en buitenpagina ca. 2.800 woorden).
- **Huisstijl behouden:** donkerblauw/navy en helderblauw, het logo, de opbouw van de secties. Verfijnen, niet vervangen.
- **Mobiel eerst:** elke wijziging controleren op 375px breed.
- **Lighthouse** (performance, SEO, accessibility) meten voor en na; mag niet omlaag.
- **Niets live** zonder akkoord van Gideon.
- Onbekende feiten (claims, cijfers, foto's) worden `[JORDY: ...]`.

## Prioriteit 1: fixes (eerst doen)

| # | Wat | Waar | Waarom / wat te doen |
|---|---|---|---|
| 1.1 | **Em dashes (—) uit alle teksten** | Sitebreed (H1 homepage, bodytekst, kaarten, FAQ) | Leest als AI-tekst en is huisregel. Vervang door punt, komma of dubbele punt. Zoek sitebreed op `—` en ` – `. |
| 1.2 | **H1 en title homepage** | `/` | H1 nu "Schildersbedrijf040 — Vakkundig schilderwerk in Eindhoven". Maak: H1 "Schilder in Eindhoven" met subregel "Binnen- en buitenschilderwerk, behangen en latex spuiten". Title: "Schilder Eindhoven \| Schildersbedrijf040", merknaam één keer. |
| 1.3 | **Onbewezen claims in de cijferbalk** | `/` (5+, 100+, 98%, 100%) | "98% klanttevredenheid" en "100% kwaliteitsgarantie" zijn niet te onderbouwen. Vervang door verifieerbare feiten: "5,0 op Google (41 reviews)", "4,9 op Werkspot", "Boonstoppel-verf", "[JORDY: aantal jaren]". "100+ projecten" alleen laten staan als Jordy het bevestigt. |
| 1.4 | **Prijzen consistent** | Dienstpagina's en locatiepagina's | Binnenschilderwerk staat op de dienstpagina per m² (30 tot 35 euro), op /locaties/helmond per uur. Eén bron voor prijzen (config of CMS-veld) en overal dezelfde eenheid en bedragen. `[JORDY: bevestig tabel]` |
| 1.5 | **Afgekapte kaartteksten** | Dienstenkaarten homepage ("...") | Schrijf per kaart een korte, complete zin van max. 2 regels in plaats van ingekorte tekst. |
| 1.6 | **"Meer info"-links** | Kaarten en blokken | Ankertekst beschrijvend maken: "Meer over binnenschilderwerk", "Latex spuiten bekijken". Beter voor SEO en toegankelijkheid. |
| 1.7 | **Schema (JSON-LD)** | Sitebreed | Controleren/aanvullen: LocalBusiness (HousePainter) met adres, telefoon, openingstijden, aggregateRating (5,0 / 41); Service per dienstpagina; FAQPage waar een FAQ-accordeon staat (antwoorden moeten in de HTML staan, niet pas na klikken geladen); BreadcrumbList. Valideren met de Rich Results Test. |
| 1.8 | **CTA-teksten gelijktrekken** | Sitebreed | Nu door elkaar: "Start uw project", "Offerte aanvragen", "Gratis offerte", "Offerte op maat", "Verstuur aanvraag". Kies één primaire CTA: **"Gratis offerte aanvragen"**, secundair **"Bel 06-38903004"**. |
| 1.9 | **Afbeeldingen** | Sitebreed | WebP, juiste afmetingen, `loading="lazy"` onder de vouw, beschrijvende bestandsnaam en alt-tekst met klus en plaats. |
| 1.10 | **Kaart homepage (werkgebied)** | `/` | Google Maps-embed pas laden bij scroll of vervangen door een statische afbeelding met link; scheelt laadtijd. |
| 1.11 | **Metingen** | Formulieren en telefoon | Bronpagina meesturen met het formulier; conversies meten (bedankpagina of event) en klikken op `tel:` meten. |

## Prioriteit 2: redesign (daarna)

**Het ontwerp staat in `plan/design/`** (homepage desktop en mobiel, dienstpagina- en locatiepaginatemplate). Lees eerst `plan/design/LEESMIJ.md`. Waar de tabel hieronder en het ontwerp verschillen, volg je het ontwerp.

| # | Wat | Waar | Voorstel |
|---|---|---|---|
| 2.1 | **Leesbaarheid** | Sitebreed | Bodytekst oogt klein en lichtgrijs. Naar 16 à 17px en donkerder grijs (contrast minimaal 4.5:1). Lange koppen niet volledig in condensed hoofdletters; hoofdletterstijl alleen voor korte labels en H1/H2 van max. 5 woorden. |
| 2.2 | **Hero homepage** | `/` | De stadsfoto (Eindhoven-centrum) zegt niets over schilderwerk. Vervang door een echte projectfoto of Jordy aan het werk `[JORDY: foto]`. Trustregel onder de CTA's zoals op de binnenpagina (5,0 Google, 4,9 Werkspot). Offerteformulier mag blijven. |
| 2.3 | **Seizoensblok** | `/` | Van oktober tot en met februari een blok "Binnenwerk deze winter inplannen" met link naar /diensten/winterschilder (zie briefing 01 en 03). |
| 2.4 | **Echte reviews** | `/`, dienst- en locatiepagina's | Google-reviews koppelen (naam, datum, sterren, link naar het profiel), in plaats van losse quotes zonder bron. |
| 2.5 | **Voor/na-projecten** | Dienstpagina's, locatiepagina's | Een compact blok met 2 of 3 projecten (voor/na) per dienst en, waar beschikbaar, per plaats. Sluit aan op het projectcase-template. |
| 2.6 | **Donkere fotobanners** | "Resultaat waar u trots op bent" e.d. | Achtergrondfoto's zijn donker en vaag. Of een echte, scherpe projectfoto, of een rustige effen variant. Minder van deze banners per pagina (nu 2 tot 3). |
| 2.7 | **Locatiepagina's onderscheiden** | `/locaties/*` | Nu zelfde template, zelfde prijstabel, zelfde secties. Per plaats: eigen hero-afbeelding, het lokale blok uit de briefing, een project uit die plaats, lokale FAQ. Prijstabel niet per plaats herhalen maar linken naar de prijsgids. |
| 2.8 | **Werkproces-stappen** | Dienst- en locatiepagina's | Stappen 1 tot 4 tonen op sommige pagina's alleen cijfers. Altijd titel en korte tekst per stap, ook op mobiel. |
| 2.9 | **Mobiele actiebalk** | Sitebreed, alleen mobiel | Vaste balk onderaan met "Bellen" en "Gratis offerte". |
| 2.10 | **Footer** | Sitebreed | Werkgebied-lijst is lang maar nuttig; groeperen in twee kolommen en nieuwe plaatsen toevoegen zodra die pagina's live zijn. |

## Oplevering

- Per punt: wat is gewijzigd, bestanden, screenshot voor/na (desktop en mobiel).
- Houd de status bij onderaan `voortgang.md` onder "Site-audit".
- Lighthouse-scores voor en na in `rapportages/lighthouse-{datum}.md`.
