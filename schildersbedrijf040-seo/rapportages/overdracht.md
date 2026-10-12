# Overdracht: SEO-fixes, redesign en oktoberpagina's

_12-10-2026 · branch `seo-redesign` (niet gepusht, niet gedeployed) · basis: `main` op `c892894`_

Klaar: Prioriteit 1 (1.1 t/m 1.11), het redesign (gedeelde onderdelen, homepage, template dienstpagina's, template locatiepagina's) en de oktoberpagina's 1 t/m 4 uit `data/pages.json`. Daarmee is het stoppunt bereikt: de volgende pagina (nr. 5, prijsgids) is november en wacht op de scopecheck.

## Wat er is gedaan (per commit)

| Commit | Wat |
|---|---|
| `b9fa803` | SEO-map (plan, briefings, data) in de repo gezet |
| `b64e823` | Site-audit en goedgekeurd ontwerp toegevoegd |
| `257c3c3` | Nulmeting: codestructuur, Lighthouse, screenshots |
| `35ec77d` | **1.1** 312 em/en dashes uit `app/` en `components/`; script voor de blogteksten in Sanity (alleen proefrun) |
| `40275ce` | Jouw bijgewerkte CLAUDE.md en README vastgelegd |
| `8c1fa16` | **1.2** H1 "Schilder in Eindhoven" + subregel, title "Schilder Eindhoven \| Schildersbedrijf040". Bug: merknaam stond 2x in de title van home en alle 17 locatiepagina's |
| `fac1c17` | Voortgang: site-audit in jouw tabel |
| `a721dc4` | **1.3** Cijferbalk: 98%, 100% en 100+ weg; bedrijfsfeiten in `lib/site.ts` |
| `225e5e4` | **1.1** Latex spuiten: `—`, `€` e.d. stonden letterlijk op de live pagina (escapes in JSX). Opgelost |
| `9ce0a01` | **1.4** Alle prijzen uit `lib/prices.ts`; locatiepagina's en homepage-FAQ van uurtarief naar m² |
| `46e1cf0` | **1.5** Dienstkaarten homepage: korte, complete zinnen |
| `1b093fc` | **1.6** Beschrijvende linkteksten; namen voor menuknop en social-iconen |
| `887f4f3` | **1.7** Schema: HousePainter sitebreed via @id; homepage-schema stond alleen client-side; FAQ-antwoorden nu in de HTML; geldige offers; breadcrumbs zonder 404-stappen |
| `12b501d` | **1.8** 41 knoppen naar "Gratis offerte aanvragen", belknoppen "Bel 06-38903004" |
| `f11f255` | **1.9** Foto's lokaal met beschrijvende namen, AVIF/WebP, alt-teksten. Bug: og:image en schema-logo gaven 404. Scheve latex-foto rechtgezet |
| `34d556c` | Voortgang: vraag over projectlocatie neutraal geformuleerd |
| `762f83f` | **1.10** Statische werkgebiedkaart op home. Bug: kaart op /contact wees naar het oude adres |
| `8fce2f4` | **1.11** Formulieren sturen de bronpagina mee; dataLayer-events `generate_lead`, `phone_click`, `email_click` |
| `e125d90` | Redesign: header met topbar |
| `06abcb5` | Redesign: footer, werkgebied in twee kolommen |
| `fd2e852` | Redesign: mobiele actiebalk; header in de layout |
| `3c6aee4` | Redesign: kleuren, Barlow-fonts, knoppen, leesbaarheid |
| `b647a2f` | Redesign: homepage volgens ontwerp |
| `3f2567f` | Oude homepage-secties verwijderd |
| `305da29` | Redesign: template dienstpagina's, zes pagina's omgezet (alle bestaande tekst behouden) |
| `5cbffcb` | Redesign: template locatiepagina's |
| `b44d7da` | Voortgang redesign |
| `4b45df9` | Linkstijl in lopende tekst, FAQ-links in template, scheve woonkamerfoto rechtgezet |
| `ad19375` | **Pagina 2** binnenschilderwerk geoptimaliseerd |
| `c94270b` | **Pagina 3** nieuwe pagina `/diensten/winterschilder` |
| `fd4ad52` | **Pagina 4** latex spuiten geoptimaliseerd |
| `f99691a` | **Pagina 1** homepage review-exemplaar |
| `7415e40` | Winterschilder aangevuld tot 1.260 woorden |
| `8bbb5b2`, `93a6027` | Voortgang en `pages.json` (nr. 1 t/m 4 op `concept`) |

Details per punt: `voortgang.md` (sectie Site-audit). Review-exemplaren: `content/optimaliseren/01-home.md`, `02-binnen.md`, `04-latex.md`, `content/nieuw/03-winter.md`.

## Lighthouse voor en na

Mediaan van 3 runs, lokaal, zelfde opzet (details in `lighthouse-voor.md` en `lighthouse-na.md`).

| Pagina | Apparaat | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|---|
| `/` | mobiel | 96 → 98 | 82 → 100 | 100 → 100 | 100 → 100 |
| `/` | desktop | 100 → 100 | 87 → 100 | 100 → 100 | 100 → 100 |
| `/diensten/binnenschilderwerk` | mobiel | 98 → 98 | 86 → 100 | 100 → 100 | 100 → 100 |
| `/diensten/binnenschilderwerk` | desktop | 100 → 100 | 92 → 100 | 100 → 100 | 100 → 100 |
| `/locaties/helmond` | mobiel | 97 → 98 | 86 → 100 | 100 → 100 | 100 → 100 |
| `/locaties/helmond` | desktop | 100 → 100 | 92 → 100 | 100 → 100 | 100 → 100 |

Nieuw: `/diensten/winterschilder` 99/100/100/100 (mobiel), `/diensten/latex-spuiten` 99/100/100/100 (mobiel). Niets is omlaag gegaan.

## Checken voordat het live gaat

1. **Alle [JORDY: ...]-plekken invullen of weghalen.** Ze staan zichtbaar op de site (bewust, zodat niets verzonnen wordt). Zoeken: `grep -rn "JORDY" app components lib`. Placeholders zitten o.a. in: reviewblok homepage (4x), reviews op dienst- en locatiepagina's, voor/na-projecten, hero-label op locatiepagina's, winterpagina (wachttijd, winteractie, feestdagen), latex (m² per dag), offerteblok (reactietermijn).
2. **Reviews koppelen.** `lib/reviews.ts` is leeg; vul echte Google-reviews in (naam, datum, tekst, plaats, dienst). De oude quotes zijn weg omdat ze geen aantoonbare bron hadden.
3. **Preview-deploy op Netlify** van de branch bekijken (desktop en telefoon): vooral de nieuwe fonts, de mobiele actiebalk en de afbeeldingen via de Netlify Image CDN.
4. **Rich Results Test** (search.google.com/test/rich-results) op `/`, `/diensten/binnenschilderwerk`, `/diensten/winterschilder` en `/locaties/helmond`. Lokaal gevalideerd: geldige JSON, geldige types, FAQ-antwoorden in de HTML, breadcrumbs zonder 404.
5. **Formulier één keer echt testen** op de preview (komt de mail binnen bij Jordy, met `bronpagina` en `formulier`). Het offerteblok stuurt nu `Accept: application/json` mee naar Formspree.
6. **Metingen aansluiten:** GTM- of GA4-container toevoegen en `generate_lead`, `phone_click` en `email_click` als conversie instellen. Zonder container doen de events niets.
7. **Sanity:** na akkoord `node scripts/fix-dashes-sanity.mjs --write` voor de 63 dashes in de 5 blogposts (eerst de proefrun lezen; zonder `--write` verandert er niets).
8. **Na livegang:** `/diensten/winterschilder` aanmelden in Search Console en de sitemap opnieuw indienen.
9. **Seizoensblok:** de homepage revalideert dagelijks (`revalidate = 86400`), zodat het blok op 1 maart naar buitenwerk wisselt. Controleer of ISR op Netlify werkt (anders wisselt het pas bij de volgende deploy).
10. **Foto's:** de Google- en Cloudinary-foto's staan nu in `public/images`. De oude Cloudinary-URL's worden niet meer gebruikt; laat ze bestaan (oude deellinks).

## Open punten voor Jordy (klaar om te sturen)

Hoi Jordy, voor de nieuwe site hebben we nog een paar dingen van je nodig. Alles wat we niet zeker weten, hebben we niet ingevuld.

**Reviews en foto's**
1. De link naar je Google-bedrijfsprofiel (reviewpagina) en 4 tot 8 Google-reviews die we op de site mogen tonen (naam zoals op Google, datum, tekst, en waar mogelijk plaats en soort klus).
2. De link naar je Werkspot-profiel. En: heb je daar het label "Topvakman"? Zo niet, dan halen we het weg.
3. Bij welke plaats of wijk horen de foto's op de site (binnendeur, tuinhuis, witte vrijstaande woning, dakkapel, zolder, antraciet voordeur, witte kozijnen, houtrotkozijn)?
4. Voor-foto's bij die projecten, en per project de plaats en ongeveer de m².
5. Per plaats graag één project met foto, vooral Helmond, Veldhoven en Best.
6. Het project "Binnenwerk Restaria, Oude Gracht, Eindhoven": klopt die locatie, en mogen we de naam van de zaak noemen?

**Prijzen en doorlooptijden**
7. Klopt de prijstabel? Twee bedragen spraken elkaar tegen en zijn gelijkgetrokken: binnenkozijn lakken €40 tot €55 (lakwerkpagina zei €35 tot €75) en binnendeur lakken €80 tot €120 (lakwerkpagina zei €100 tot €150).
8. Latex spuiten: muren €8 tot €12 per m², plafonds €5,50 tot €7, nieuwbouw vanaf €3,50. Klopt dat? (Er stond ook "vanaf €7" en "€7,50".)
9. Hoeveel m² latex spuit je gemiddeld per dag?
10. Binnenschilderwerk: de site zegt "woonkamer van 20 m² = €250 tot €400" en ook "complete kamer (20 m²) €500 tot €900". Welk bedrag klopt?
11. Hoe lang duurt een woonkamer schilderen: 1 tot 2 werkdagen of 2 tot 3 dagen? (Beide staan op de site.)

**Afspraken en beloftes**
12. Klopt "offerte binnen 48 uur na de inspectie" en "reactie binnen één werkdag"?
13. Welke garantie geef je? De site zei op de ene plek 1 jaar, op de andere 3 tot 5 jaar binnen en 5 tot 7 jaar buiten. Tot je antwoord staat er geen termijn op de homepage.
14. Werk je met personeel? Klopt "gediplomeerde schilders", "gecertificeerd" en "regelmatig bijscholing"?
15. Ongeveer hoeveel projecten heb je gedaan? ("100+" hebben we weggehaald tot je het bevestigt.)
16. Waar komt "houtrot herstellen is tot 70% goedkoper dan vervangen" vandaan? Mogen we dat laten staan?

**Winter**
17. Hoe snel kun je deze winter beginnen?
18. Zijn je prijzen in de winter gelijk, of wil je een winteractie?
19. Werk je tussen kerst en oud en nieuw? Tot wanneer kun je een klus aannemen die vóór de feestdagen klaar moet zijn?

## Beslissingen die ik zelf heb genomen

| Beslissing | Waarom |
|---|---|
| Blogteksten in Sanity niet aangepast, wel een script klaargezet | Sanity is de live blog; schrijven daar is publiceren. Dat mag niet zonder jouw akkoord. |
| Links naar pagina's die nog niet bestaan (prijsgids, blogs "hoe lang duurt binnenschilderwerk", "latex spuiten of rollen") weggelaten | Een link naar een 404 kost meer dan hij oplevert. Prijsgidslinks komen vanzelf terug via `PRIJSGIDS.live` in `lib/navigation.ts`. "Prijzen" staat daarom ook (nog) niet in het menu, anders dan in het ontwerp. |
| Bronloze reviews verwijderd en vervangen door zichtbare [JORDY]-plekken | Harde regel: reviews alleen als ze aantoonbaar van Google komen. De namen en datums op de oude homepage waren niet te herleiden. |
| Garantietermijn van de homepage gehaald | De site sprak zichzelf tegen (1 jaar vs. 3 tot 7 jaar). Liever niets dan een verkeerde belofte. |
| "Ook in Den Bosch, Tilburg en Weert" uit de FAQ gehaald | Niet onderbouwd, en die plaatsen hebben (nog) geen pagina; de schemaversie van dezelfde FAQ noemde ze al niet. |
| Bestaande claims elders (48 uur, Topvakman, 70% goedkoper) laten staan maar op de Jordy-lijst | Het is bestaande, rankende tekst; zonder antwoord van Jordy verwijder ik geen inhoud, en ik voeg er niets aan toe. |
| Foto's van Google/Cloudinary naar `public/images` met beschrijvende namen | Audit 1.9 vraagt beschrijvende bestandsnamen; dat kan alleen door ze zelf te hosten. Twee scheve foto's rechtgezet. |
| Deelafbeelding (og:image) nieuw gemaakt uit de foto van Jordy | De oude gaf een 404, dus delen op social liet geen afbeelding zien. |
| Prijsconflicten opgelost door de waarde van de binnenschilderwerkpagina te nemen | Dat is de hub en die waarden staan ook in het ontwerp. Gemarkeerd als [JORDY: bevestig tabel]. |
| Uurtarieven op locatiepagina's vervangen door m²-prijzen | Audit 1.4: één eenheid. De uurtarieven per dienst in de lopende tekst van de dienstpagina's staan er nog (die zijn per dienst consistent). |
| Metingen via dataLayer-events, geen bedankpagina | Geen nieuwe URL nodig; werkt zodra GTM/GA4 erop staat. Uploadveld voor foto's niet gebouwd: Formspree-bestanden vragen een betaald plan. |
| Header in de site-layout gezet in plaats van per pagina | Eén header voor alle pagina's; voorkomt dat een nieuwe pagina hem vergeet. |
| Dienstpagina's omgezet naar één template met data | Zes kopieën van 830 regels waren niet consistent te herontwerpen. Alle tekst, FAQ's, ID's en schema zijn letterlijk overgenomen (koppen in gewone zinsopbouw). |
| Wijkkaarten alleen voor Helmond, met bronnen | Lokale feiten moeten kloppen. Helmond (het ontwerpvoorbeeld) is nagezocht; de andere plaatsen tonen hun wijken als lijst tot briefing 08/13. |
| Locatie-hero: wisselende foto's van de site per plaats, met [JORDY]-label | Er is nog geen foto per plaats. Zo heeft niet elke pagina dezelfde hero, en de alt-tekst noemt geen plaats die niet klopt. |
| Seizoensblok op basis van de datum met dagelijkse revalidate | Briefing: oktober tot en met februari winter, daarna buitenwerk, zonder dat iemand eraan hoeft te denken. Tekst voor het voorjaar zelf geschreven met bestaande feiten (15 tot 25 °C). |
| `/diensten/winterschilder` gebouwd op het dienstpagina-template, met de prijstabel van binnenschilderwerk | Geen eigen prijzen voor de winter (scopecheck); zo blijft er één bron. |
| FAQ-antwoorden met een [JORDY]-gat niet in het FAQPage-schema | Placeholdertekst hoort niet in data voor Google. |
| Directe antwoorden in de hero met prijs en duur uit de eigen tekst van elke dienstpagina | Briefing en ontwerp vragen prijs en duur; ik heb alleen cijfers gebruikt die al op die pagina stonden. |
| Testserver op poort 3456 | Op poort 3100 draaide ook een ander project van jou (zorgbaar-radar). Dat heb ik niet aangeraakt; desktopscreenshots van stap 01 t/m 08 waren daardoor van die app en zijn verwijderd. |

## Nog niet gedaan (bewust)

- Volgende pagina's uit `pages.json` (nr. 5 en verder): november of later, en nr. 5 wacht op de scopecheck.
- /contact, /over-ons, /faq, /projecten en /blog hebben de nieuwe huisstijl (kleuren, fonts, header, footer, actiebalk) maar nog hun oude opbouw; het ontwerp bevatte die pagina's niet.
- Niets gepusht of gedeployed.
