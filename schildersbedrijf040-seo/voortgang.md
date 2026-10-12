# Voortgang

Status: `todo` → `concept` → `review Jordy` → `live`. Houd dit bestand bij na elke pagina (ook `data/pages.json` veld `voortgang`).

| # | Maand | Pakket | Pagina | URL | Status | Opmerking |
|---|---|---|---|---|---|---|
| 1 | Oktober | B | Homepage | `/` | concept | Gebouwd met het redesign. `content/optimaliseren/01-home.md`. 1.059 woorden. Open: reviews, projectplaats, reactietermijn. |
| 2 | Oktober | B | Binnenschilderwerk (hub) | `/diensten/binnenschilderwerk` | concept | `content/optimaliseren/02-binnen.md`. 2.015 woorden. Link prijsgids volgt zodra die live is. |
| 3 | Oktober | B | Winterschilder: binnenwerk in de winter | `/diensten/winterschilder` | concept | Nieuw. `content/nieuw/03-winter.md`. 1.260 woorden. GEO 1 en 2. Open: wachttijd, winteractie, feestdagen. |
| 4 | Oktober | B | Latex spuiten | `/diensten/latex-spuiten` | concept | `content/optimaliseren/04-latex.md`. 2.016 woorden. GEO 4. Open: m² per dag. |
| 5 | November | B | Wat kost schilderwerk? (prijsgids) | `/kosten/schilderwerk` | todo | scopecheck |
| 6 | November | B | Lakwerk | `/diensten/lakwerk` | todo |  |
| 7 | November | B | Behangen | `/diensten/behangen` | todo |  |
| 8 | November | B | Veldhoven, Valkenswaard, Helmond, Best, Geldrop, Nuenen | `/locaties/ (6 plaatsen)` | todo |  |
| 9 | November | B | Hoe lang duurt binnenschilderwerk? | `/blog/hoe-lang-duurt-binnenschilderwerk` | todo |  |
| 10 | November | M | Latex spuiten Helmond en Veldhoven | `/diensten/latex-spuiten/[plaats] (2)` | todo |  |
| 11 | December | B | Projecten | `/projecten` | todo |  |
| 12 | December | B | Bestaande binnenblogs bijwerken | `/blog/ (5 bestaande)` | todo |  |
| 13 | December | B | Overige 11 locatiepagina's | `/locaties/ (11 plaatsen)` | todo |  |
| 14 | December | P | Latex spuiten of rollen? | `/blog/latex-spuiten-of-rollen` | todo |  |
| 15 | December | M | Wijkpagina's Woensel en Stratum | `/locaties/eindhoven-[wijk] (2)` | todo |  |
| 16 | Januari | B | Buitenschilderwerk (hub) | `/diensten/buitenschilderwerk` | todo |  |
| 17 | Januari | B | Kozijnen schilderen | `/diensten/kozijnen-schilderen` | todo |  |
| 18 | Januari | B | Houtrot herstellen | `/diensten/houtrot-sanering` | todo |  |
| 19 | Januari | P | Drie nieuwe plaatsen (keuze Jordy) | `/locaties/ (3 nieuwe plaatsen)` | todo | scopecheck |
| 20 | Februari | B | Kitwerk en kitnaden vervangen | `/diensten/kitwerk` | todo | scopecheck |
| 21 | Februari | B | Gevel schilderen | `/diensten/gevel-schilderen` | todo |  |
| 22 | Februari | B | Wanneer kun je het beste buiten schilderen? | `/blog/wanneer-buiten-schilderen` | todo |  |
| 23 | Februari | P | Onderhoudsschilderwerk | `/diensten/onderhoudsschilderwerk` | todo | scopecheck |
| 24 | Februari | M | Overige drie nieuwe plaatsen | `/locaties/ (3 nieuwe plaatsen)` | todo | scopecheck |
| 25 | Maart | B | Hoe vaak moet je buitenschilderwerk laten doen? | `/blog/hoe-vaak-buitenschilderwerk` | todo |  |
| 26 | Maart | P | Kitnaden vervangen: zelf doen of laten doen? | `/blog/kitnaden-vervangen` | todo |  |
| 27 | Maart | P | Beitsen of lakken: wat past bij je kozijnen? | `/blog/beitsen-of-lakken` | todo |  |
| 28 | Maart | M | Gevel reinigen en impregneren | `/diensten/gevelreiniging-impregneren` | todo | scopecheck |
| 29 | Maart | M | Buitenschilderwerk Helmond, Veldhoven, Best | `/diensten/buitenschilderwerk/[plaats] (3)` | todo | scopecheck |
| 30 | Maart | M | Houtrot herkennen en voorkomen | `/blog/houtrot-herkennen-voorkomen` | todo |  |

## Site-audit

Branch `seo-redesign`, gestart 12-10-2026. Nulmeting in `rapportages/codestructuur.md` en `rapportages/lighthouse-voor.md`. Screenshots per stap in `rapportages/screenshots/` (prefix = stap).

| Punt | Status | Bestanden | Open punten |
|---|---|---|---|
| 1.1 | klaar | 18 bestanden in `app/`, `components/` (312 vervangen); `scripts/fix-dashes-sanity.mjs` | Blogteksten in Sanity (63 dashes, 5 posts) niet aangepast: dat wijzigt de live blog. Script staat klaar, proefrun gedraaid. Na akkoord: `node scripts/fix-dashes-sanity.mjs --write`. |
| 1.2 | klaar | `app/(site)/page.tsx`, `components/sections/hero.tsx`, `app/(site)/locaties/[city]/page.tsx` | H1 "Schilder in Eindhoven" + subregel; title "Schilder Eindhoven \| Schildersbedrijf040". Ook opgelost: merknaam stond 2x in de title van home en alle 17 locatiepagina's. |
| 1.3 | klaar | `components/sections/statistics.tsx`, `lib/site.ts` (nieuw: bedrijfsfeiten op één plek) | Cijferbalk nu: 5,0 Google (41 reviews), 4,9 Werkspot, 5+ jaar ervaring, Boonstoppel. "100+ projecten", "98%" en "100%" weg. Andere claims elders op de site staan op de Jordy-lijst. |
| 1.4 | klaar | `lib/prices.ts` (nieuw), 6 dienstpagina's, `locaties/[city]/page.tsx` + 3 databestanden, `faq-section.tsx` | Alle prijstabellen lezen nu uit `lib/prices.ts`. Locatiepagina's en homepage-FAQ niet meer per uur (€35 tot €55) maar per m², gelijk aan de dienstpagina's (36 zinnen). Uurtarieven per dienst in de lopende tekst van dienstpagina's blijven staan. [JORDY: bevestig tabel] |
| 1.5 | klaar | `components/sections/services.tsx` | Zes korte, complete zinnen (tekst uit het ontwerp), `line-clamp-3` weg. De lange teksten stonden alleen op deze kaarten; de dienstpagina's zelf zijn niet aangepast. |
| 1.6 | klaar | `services.tsx`, `recent-projects.tsx`, `locaties/[city]/page.tsx`, `blog/page.tsx`, `blog/[slug]/page.tsx`, `footer.tsx`, `header.tsx` | "Meer info" werd "Meer over binnenschilderwerk" / "Latex spuiten bekijken"; locaties "Meer over lakwerk in Helmond"; blog "Lees het artikel". Social-iconen in de footer en de menuknop kregen een toegankelijke naam. |
| 1.7 | klaar | `lib/schema.ts`, `components/json-ld.tsx` (nieuw), `app/(site)/layout.tsx`, homepage, 6 dienstpagina's, locatietemplate, contact/over-ons/projecten, blog, `components/ui/accordion.tsx` | HousePainter (adres, telefoon, openingstijden, 5,0/41, sameAs) sitebreed in de layout; pagina's verwijzen via @id. Ongeldige types PaintingCompany/PaintingContractor weg. Homepage-schema stond via next/script alleen client-side: nu in de HTML. FAQ-accordeon (home en /faq) rendert antwoorden nu altijd in de HTML. Service-offers met min/max per m²/stuk uit `lib/prices.ts` (was ongeldig "35-45 per uur"). Breadcrumbs wezen naar /diensten en /locaties (404): tussenstap weg. Lokaal gevalideerd op alle 34 URL's; Rich Results Test online nog doen vóór live. |
| 1.8 | klaar | 14 bestanden (header, hero, process, quote-form, 6 dienstpagina's, locatietemplate, over-ons, blog) | 41 knoppen naar "Gratis offerte aanvragen" (was: Start uw project, Offerte op maat, Gratis offerte, Offerte aanvragen, Verstuur aanvraag, Contact). Belknoppen: "Bel 06-38903004". Contactformulier houdt "Verstuur bericht" (geen offerteformulier). Lopende tekst niet aangepast. |
| 1.9 | klaar | `public/images/` (13 foto's + logo + deelafbeelding), `lib/images.ts` (nieuw), `next.config.js` (AVIF), 26 bestanden met afbeeldings-URL's | Foto's lokaal met beschrijvende bestandsnamen (bijv. `latex-spuiten-benedenverdieping-blixembosch-eindhoven.jpg`), Google-foto's in hogere resolutie. next/image levert AVIF/WebP; lazy onder de vouw (priority weg bij callback). Generieke/Engelse alt-teksten vervangen. Gevonden: og:image en schema-logo gaven 404 (deelafbeelding bij delen op social was kapot): nieuwe 1200x630 deelafbeelding. Latex-foto stond scheef (ca. 38°): rechtgezet. [JORDY: plaatsnamen bij de foto's] |
| 1.10 | klaar | `components/werkgebied-kaart.tsx` (nieuw), `service-area.tsx`, `contact-details.tsx` | Google Maps-iframe op home vervangen door statische SVG-kaart (uit het ontwerp) met link naar Google Maps. Gevonden: de kaart op /contact wees nog naar het oude adres (Jacob van Campenweg 25): nu Straatsburglaan 26, met title-attribuut. |
| 1.11 | klaar (meting nog aansluiten) | `lib/tracking.ts`, `components/tracking-listener.tsx` (nieuw), `app/(site)/layout.tsx`, 4 formulieren (hero, contact, terugbellen, offerte) | Elk formulier stuurt `bronpagina` en `formulier` mee naar Formspree. Na verzenden: dataLayer-event `generate_lead`; klik op telefoon/e-mail: `phone_click` / `email_click` (getest met onderschept formulier, er is niets verstuurd). Gekozen voor events i.p.v. een bedankpagina: geen nieuwe URL. **Gideon:** GTM/GA4-container toevoegen en de events als conversie markeren; uploadveld voor foto's niet gebouwd (Formspree-bestanden vragen een betaald plan, eerst checken). |
| 2.1 | klaar | `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx` | Barlow/Barlow Condensed, body 17px, tekst #2E3A48/#3B4755; grijstinten donkerder; oud blauw #0088FF (3,6:1) vervangen. Koppen in gewone hoofdletters. |
| 2.2 | klaar | `components/home/hero.tsx` | Navy hero met foto Jordy op de ladder, kaartje en 5,0-badge, trustrij. Offerteformulier verhuisd naar het offerteblok onderaan (volgens ontwerp). |
| 2.3 | klaar | `lib/seizoen.ts`, `components/home/sections.tsx` | Winterband okt t/m feb, daarna buitenwerk; homepage revalideert dagelijks. |
| 2.4 | deels (wacht op Jordy) | `lib/reviews.ts`, homepage, dienst- en locatietemplate | Bronloze quotes weg (homepage 3 namen, dienst- en locatiepagina's 2 quotes). Plekken staan klaar met [JORDY: echte Google-review koppelen]. |
| 2.5 | deels (wacht op Jordy) | `components/site/voor-na.tsx` | Voor/na-blok op dienst- en locatiepagina's; voor-foto's en projectgegevens [JORDY]. |
| 2.6 | klaar | dienst- en locatietemplate | Donkere fotobanners ('Resultaat waar u trots op bent', contact-CTA met foto) vervangen door rustige effen blokken. |
| 2.7 | deels | `app/(site)/locaties/[city]/*` | Template klaar: eigen hero (tijdelijk wisselende foto), lokaal blok, geen prijstabel, project/review, lokale FAQ, buurplaatsen. Wijkkaarten alleen Helmond (geverifieerd); andere plaatsen volgen met briefing 08/13. |
| 2.8 | klaar | dienst- en locatietemplate, homepage | Stappen altijd met titel en tekst, ook op mobiel. |
| 2.9 | klaar | `components/layout/mobile-action-bar.tsx` | Vaste balk Bellen / Gratis offerte onder 768px. |
| 2.10 | klaar | `components/layout/footer.tsx`, `lib/navigation.ts` | Werkgebied in twee kolommen; nieuwe plaatsen via `lib/navigation.ts`. |

## Open punten voor Jordy

| Waar | Vraag |
|---|---|
| Homepage, cijferbalk | Hoeveel projecten heeft u ongeveer gedaan? "100+ projecten" is weggehaald tot u het bevestigt. |
| Sitebreed (diensten, locaties, werkwijze) | Klopt "offerte binnen 48 uur" na de inspectie en "reactie binnen 24 uur" (of "binnen één werkdag")? Staat op ca. 40 plekken. |
| Garantie (homepage en /faq) | Welke garantie geeft u precies? De site spreekt zichzelf tegen: /faq zegt "1 jaar", de homepage zei "binnen 3 tot 5 jaar, buiten 5 tot 7 jaar" en "100% kwaliteitsgarantie". Garantie staat tot uw antwoord niet meer op de nieuwe homepage. |
| Homepage, blok Garanties | Klopt "gediplomeerde schilders", "gecertificeerd" en "regelmatig bijscholing"? Werkt u met personeel of alleen? Tot bevestiging niet overnemen in het redesign. |
| Dienst- en locatiepagina's | Heeft u op Werkspot het label "Topvakman"? Zo niet, dan halen we het weg. |
| Houtrot sanering | Waar komt "tot 70% goedkoper dan vervangen" vandaan? Graag bevestigen of afzwakken. |
| Google-reviews | Link naar uw Google-bedrijfsprofiel (de reviewpagina), voor alle knoppen "Alle reviews op Google". |
| Prijzen (lib/prices.ts) | Klopt de prijstabel? Twee dingen spraken elkaar tegen en zijn gelijkgetrokken: binnenkozijn lakken (€40 tot €55, lakwerkpagina zei €35 tot €75) en binnendeur lakken (€80 tot €120, lakwerkpagina zei €100 tot €150). Latex spuiten: muren €8 tot €12 per m² (tekst zei ook €7,50), meta zegt "vanaf €7". |
| Schema (sameAs) | Wat is de link naar uw Werkspot-profiel? Die komt in de bedrijfsgegevens voor Google. |
| Foto's | Bij welke plaats/wijk hoort elke foto (binnendeur, tuinhuis, villa, dakkapel, zolder, voordeur, kozijnen, houtrot)? Dan kan de plaats in de alt-tekst en bij de projecten. |
| Projecten homepage | Het project "Binnenwerk Restaria, Oude Gracht, Eindhoven": klopt die locatie, en mag de naam van de zaak genoemd worden? |
| Projecten (dienst- en locatiepagina's) | Voor-foto's en gegevens (plaats, wijk, m²) bij de projectfoto's; per plaats graag één project met foto, vooral Helmond, Veldhoven, Best. |
| Binnenschilderwerk, doorlooptijd | Hoe lang duurt een woonkamer? De dienstpagina zegt 1 tot 2 werkdagen, de homepage-FAQ 2 tot 3 dagen. |
| Winterschilder | Hoe snel kunt u in de winter beginnen (wachttijd)? En zijn de prijzen in de winter gelijk, of wilt u een winteractie (scopecheckvraag 1)? |
| Winterschilder, feestdagen | Werkt u tussen kerst en oud en nieuw? Tot wanneer kunt u een klus aannemen die vóór de feestdagen klaar moet zijn? |
| Latex spuiten | Hoeveel m² spuit u gemiddeld per dag? (komt in het eerste antwoord op de pagina) |
| Binnenschilderwerk, FAQ prijs | De FAQ zegt "woonkamer van 20 m² = €250 tot €400 voor muren en plafond"; dat past niet bij €30 tot €35 per m² en de tabelregel "complete kamer (20 m²) €500 tot €900". Welk bedrag klopt? |
| Homepage, offerteblok | Klopt "reactie binnen één werkdag"? |

## Ideeën

- Google-reviews automatisch tonen via de Google Places API (nu handmatig in `lib/reviews.ts`), zodat naam, datum en sterren altijd kloppen.
- Prijsgids `/kosten/schilderwerk` (november, scopecheck): zet daarna `PRIJSGIDS.live = true` in `lib/navigation.ts`; de links op dienst- en locatiepagina's verschijnen dan vanzelf.
- Wijkkaarten voor de overige 16 plaatsen bij briefing 08 en 13, met dezelfde bronvermelding als Helmond (`data-lokaal.ts`).
- De componenten van /contact (`quote-form`, `contact-hero`, `contact-details`) bij een volgende ronde in de nieuwe stijl zetten; /contact, /over-ons, /faq, /projecten en /blog hebben nu de nieuwe kleuren, fonts, header en footer maar nog hun oude opbouw.
