# CLAUDE.md: SEO/GEO-uitvoering Schildersbedrijf040

Je voert het SEO- en GEO-traject uit voor **Schildersbedrijf040** (schildersbedrijf040.nl), oktober 2026 tot en met maart 2027. Regie: Gideon. Klant: Jordy Jacobs. Alles in het Nederlands.

## Instellingen (door Gideon in te vullen)

```
PAKKET: P            # B = Basis (750), P = Plus (1.000), M = Maximaal (1.500). Werk alleen pagina's met pakket <= PAKKET.
SITE_REPO: ja        # deze map staat in (of naast) de code van de site. Je mag pagina's direct in de code bouwen en de site fiksen/verbeteren.
SCOPECHECK_GEDAAN: nee   # Pagina's met alleen_na_scopecheck: true pas bouwen als dit "ja" is en de antwoorden hieronder staan.
```

## Waar alles staat

| Pad | Inhoud |
|---|---|
| `data/pages.json` | **Bron van waarheid.** Alle pagina's in volgorde van uitvoering: URL, status (nieuw/optimaliseren), pakket, maand, target, zoeker, opbouw, interne links, voortgang. |
| `briefings/NN-id.md` | Dezelfde briefing per pagina, leesbaar. Werk altijd vanuit de briefing. |
| `plan/uitvoeringsplan.md` | Strategie, zoekvolumes, linkbuilding, GEO-kernvragen, techniek, meting. |
| `plan/voorstel.md` | Wat aan Jordy is beloofd (pakketten, prognose). Beloof niets wat daar niet staat. |
| `plan/site-audit-en-redesign.md` | **Fixes en redesign** van de bestaande site, met prioriteiten en randvoorwaarden. Uitvoeren met `/sitefix`. |
| `plan/design/` | **Goedgekeurd ontwerp** van het redesign (4 schermen, kleuren, fonts). Zie `plan/design/LEESMIJ.md`. |
| `plan/paginabriefings-overzicht.md` | Alle briefings plus de complete linktabel. |
| `data/ahrefs-binnen-zoekwoorden.tsv` | Ahrefs-export binnentermen (volume, KD, SV-trend). |
| `data/ahrefs-volume-historie-buiten.csv` | Volumehistorie buitentermen top 5. |
| `data/sitemap-24-09-2026.txt` | Bestaande URL's van de site (34). |
| `templates/` | Outputformat voor nieuwe pagina's, optimalisaties en projectcases. |
| `content/` | Jouw output: `nieuw/`, `optimaliseren/`, `cases/`. |
| `voortgang.md` | Statusoverzicht. Bijwerken na elke pagina. |
| `rapportages/` | Maandrapporten. |

## Bedrijfsfeiten (alleen deze gebruiken, niets verzinnen)

- Schildersbedrijf040, eigenaar Jordy Jacobs, Straatsburglaan 26, 5627 DB Eindhoven
- Telefoon 06-38903004, info@schildersbedrijf040.nl
- 5,0 op Google (41 reviews, stand september 2026), 4,9 op Werkspot
- Werkt met Boonstoppel-verf; 5+ jaar ervaring; werkgebied Eindhoven en omgeving
- Prijzen die al op de site staan: binnenschilderwerk 30 tot 35 euro per m²; gevel 35 tot 45 euro per m²; kozijnen buiten 50 tot 100 euro per kozijn. Nieuwe prijzen alleen na akkoord Jordy, altijd als bandbreedte en "indicatief".
- Diensten: binnenschilderwerk, buitenschilderwerk, behangen, houtrot sanering, lakwerk, latex spuiten. Kitwerk, onderhoudsschilderwerk en gevelreiniging: pas na scopecheck.

Ontbreekt een feit (projectdetails, foto, prijs, claim)? Zet een duidelijke placeholder `[JORDY: ...]` in de tekst en noteer het in `voortgang.md`. Nooit invullen met iets wat plausibel klinkt.

## Fixes en redesign (toegestaan)

Gideon geeft toestemming om de site te fiksen en waar nodig te herontwerpen, volgens `plan/site-audit-en-redesign.md`. Volgorde:
1. Eerst Prioriteit 1 (fixes: em dashes, H1/title, claims, prijzen, schema, CTA's, afbeeldingen).
2. Daarna de pagina's uit `data/pages.json` (oktober: homepage, binnenschilderwerk, winterschilder, latex spuiten).
3. Prioriteit 2 (redesign) tussendoor, per onderdeel, als de pagina waar het over gaat toch wordt aangepakt.

Randvoorwaarden: geen URL's wijzigen, huisstijl behouden (verfijnen, niet vervangen), mobiel testen, Lighthouse niet omlaag, kleine losse wijzigingen, niets live zonder akkoord van Gideon.

## Werkwijze per pagina

1. Lees `briefings/NN-id.md` en de regel in `data/pages.json`.
2. **Status "optimaliseren":** haal de huidige pagina op (live URL of bestand in de repo). De bestaande tekst blijft staan. Je voegt alleen toe wat de briefing noemt: blokken, H2's, FAQ, interne links, betere title en meta. Niet herschrijven.
3. **Status "nieuw":** schrijf de volledige pagina volgens de opbouw in de briefing.
4. Lever op volgens het template in `templates/`. Is `SITE_REPO: ja`, volg dan de structuur en componenten van de repo (bekijk eerst hoe bestaande dienst-, locatie- en blogpagina's zijn opgebouwd) en maak daarnaast het markdownbestand in `content/` als review-exemplaar.
5. Controleer met `/check` en werk `voortgang.md` en het veld `voortgang` in `data/pages.json` bij naar `concept`.
6. Na publicatie: voeg op de pagina's in "Krijgt links van" die al live zijn een contextuele link toe (dat is ook een optimalisatie; lever als los bestand of diff).

## Schrijfrichtlijnen

- **Direct antwoord** in de eerste 40 tot 60 woorden: wat, voor wie, prijsindicatie of doorlooptijd. Dit fragment nemen AI Overviews en ChatGPT over.
- **Tussenkoppen in de vraagvorm van de klant** ("Kun je in de winter binnen laten schilderen?"), elk met een kort zelfstandig antwoord eronder.
- **U-vorm**, zoals de huidige site. Nuchter en vakkundig. Geen superlatieven die niet te onderbouwen zijn ("beste schilder van Eindhoven").
- **Geen em dashes (—).** Gebruik een punt, komma of dubbele punt.
- Prijzen, stappen en vergelijkingen in **tabellen of genummerde lijsten**.
- **Bewijs** op elke pagina: projectfoto (placeholder), Google-reviews, 5,0 op Google.
- **Eindig altijd** met "Gratis offerte aanvragen" (naar /contact) en het klikbare telefoonnummer.
- **Lokale pagina's:** minimaal 40 procent plaatsspecifiek (kernen, wijken, woningtypes, bouwjaren, project). Nooit alleen de plaatsnaam wisselen.
- **Interne links:** alleen de links uit de briefing, contextueel in de lopende tekst, ankertekst variëren. Eigen hub altijd in de eerste alinea en de CTA.
- **Schema (JSON-LD):** LocalBusiness/HousePainter sitebreed, Service per dienstpagina, FAQPage bij FAQ, BreadcrumbList overal, Article voor blogs en cases.
- **Lengte:** dienstpagina's 1.200 tot 1.800 woorden, locatiepagina's 1.200 tot 1.600, blogs 900 tot 1.400, cases 300 tot 500.

## GEO: 12 kernvragen

Elke vraag heeft één antwoordpagina die het volledige antwoord geeft. Zie `plan/uitvoeringsplan.md` (sectie GEO). Controleer bij elke pagina of er een kernvraag bij hoort en of het antwoord letterlijk en compleet op de pagina staat.

## Scopecheck: open vragen (antwoorden hier invullen)

- Winteractie op de winterpagina? →
- Prijsbandbreedtes publiceren voor de prijsgids? →
- Kitwerk ook als losse klus? →
- Wat houdt een onderhoudscontract in (ook VvE)? →
- Welke nieuwe plaatsen (Veghel, Uden, Boxtel, Someren, Asten, Gemert)? →
- Gevelreiniging/impregneren zelf of via partner? →
- Projecten met foto's in Helmond, Veldhoven, Best? →
- Verdiende links (clubs, vereniging, leveranciers)? →

## Wat je niet doet

- Geen pagina's buiten `data/pages.json` bedenken. Nieuwe ideeën noteer je onderaan `voortgang.md` onder "Ideeën".
- Geen bestaande URL's wijzigen of verwijderen.
- Geen claims, cijfers, reviews of projecten verzinnen.
- Niets publiceren of pushen zonder akkoord van Gideon.
- Geen budgetverdeling, linkaantallen of prijzen per plaatsing noemen in teksten voor Jordy.
