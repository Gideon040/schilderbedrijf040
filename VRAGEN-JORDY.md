# Vragen voor Jordy

Opgesteld 13 november 2026 bij de branch `seo-conversie-nov-2026`. Alles wat hieronder staat, staat op de site als `[INVULLEN: ...]` of `[JORDY: ...]`. Die open punten zijn op de preview zichtbaar en in productie automatisch verborgen. Werkafspraak vanaf 14-11-2026: ontbrekende antwoorden houden het werk niet tegen; prijzen volgen de dienstkaarten en blokken zonder antwoord worden weggelaten. Een antwoord van één regel per vraag is genoeg.

## Bedrijfsgegevens en profielen

1. **Link naar het Google-bedrijfsprofiel** (bijvoorbeeld `https://maps.app.goo.gl/...`). Komt in de structured data (`sameAs`) en achter de knop "Schrijf een review".
2. **Link naar het Werkspot-profiel.** Komt in `sameAs` en bij de Werkspot-score.
3. **Directe link om een Google-review te schrijven** (`https://search.google.com/local/writereview?placeid=...`, te vinden in het Google-bedrijfsprofiel onder "Meer reviews krijgen"). Tot die tijd linkt de knop op `/reviews` naar de Google-zoekresultaten.

## Reviews (`data/reviews.json`)

4. **Plaats en type klus per review.** Bijna alle reviews hebben nog geen plaats. Makkelijkst: `node scripts/reviews-csv.mjs export` maakt `reviews-aanvullen.csv` (opent in Excel). Vul de kolommen `plaats` en `diensten` in, sla op en draai `node scripts/reviews-csv.mjs import`. Zodra een review een plaats heeft, verschijnt hij als "Review uit de buurt" op de pagina van die plaats.
5. **Ingekorte reviews:** g38 (Frans Vogels) en w03 (Werkspot, trappenhuis) zijn afgekapt overgenomen. Graag de volledige tekst; tot die tijd worden ze niet getoond.
6. **Toestemming klantfoto's:** mogen de foto's die klanten bij hun Google-review plaatsten (Niki van het Hof, Danielle Wildemast, Alexis Barron, S B) op de site? Tot een bevestiging staan ze er niet op.
7. **Werkspot-reviews:** er zijn er 29, maar er staan er 3 in het bestand. Wil je er meer laten overnemen (tekst, jaar, dienst)?

## Projecten (`data/projecten.ts`)

8. **Toestemming bewoners:** hebben de bewoners van alle vijf projecten (Witte Dorp, Fluwijnstraat, Driehoeksbos, badkamer Best, bungalow Best) toestemming gegeven voor publicatie van foto's en straatnaam? Zonder akkoord niet live zetten.
9. **Per project:** maand en jaar (alleen bij Witte Dorp bekend: oktober 2026), aantal werkdagen, wijk (Fluwijnstraat, Driehoeksbos, beide in Best), staat van het werk vooraf, voorbereiding, en of er een Google-review bij hoort (welke naam).
10. **Exacte productnaam van de Boonstoppel-lak** bij het Witte Dorp (genoteerd als "exuad'or") en bij het Driehoeksbos.
11. **Witte Dorp:** was er afstemming met gemeente of monumentencommissie over kleuren? Hoe is voorbereid?
12. **Fluwijnstraat:** welke onderdelen hadden houtrot en hoe is het hersteld (epoxy, inzetstukken)? Welke verf is gebruikt?
13. **Driehoeksbos:** welke delen zijn gelakt en welke gebeitst (bijvoorbeeld de garagedeuren)?
14. **Zijn badkamer Best en bungalow Best dezelfde woning?** Foto 08 en 09 van de bungalow tonen dezelfde badkamer als het badkamerproject. Nu zijn het twee projecten; samenvoegen kan in één regel.
15. **Bij welk project hoort de foto van de antracietgrijze hoogglans deur** (`fluwijnstraat/04-...CONTROLEREN`)? Die foto staat er niet op; er is ook een schilder in de spiegeling zichtbaar.
16. **Foto's niet gebruikt** (personen zichtbaar of persoonlijke spullen): badkamer `01-wastafel` en `02-bad` (verzorgingsproducten, verhuisdozen, spiegeling; vervangen door de lege badkamer uit de bungalowmap), bungalow `03`, `04`, `05`, `06`, `10`, `11`, `13` (mensen buiten zichtbaar; bij `04` en `05` ook, die stonden niet in de lijst). Bungalow `09` en `12` en Fluwijnstraat `01` zijn bijgesneden. Heb je van de bungalow foto's zonder mensen, of foto's van het eindresultaat met vloer?
17. **Oude Instagram-projecten** (afgelakte deur, houtrotreparatie, vrijstaande woning, binnen- en buitenwerk renovatie, Blixembosch, Restaria Oude Gracht): die hebben nu een eigen pagina, maar staan op `noindex` omdat er alleen een titel en een foto van bekend is. Lever per project plaats, wat er gedaan is en materialen aan, dan gaan ze in de sitemap. Waar hoort de houtrotreparatie, de vrijstaande woning en de renovatie?

## Prijzen (`lib/prices.ts`)

Alle pagina's lezen hun bedragen nu uit `lib/prices.ts`. Tot je antwoord staan overal de bedragen van de dienstkaarten (jouw prijslijst van 16-10-2026). Op de site stonden daarnaast andere bedragen; kies per regel één waarde of bandbreedte:

| Onderdeel | Nu op de site (dienstkaart, prijslijst) | Stond ook op de site |
|---|---|---|
| Binnenschilderwerk, muren en plafonds | €10 tot €25 per m² | €30 tot €35 per m² (homepage-FAQ, alle 17 locatiepagina's, winterpagina), €32 tot €38 per m² voor plafonds |
| Buitenschilderwerk / gevel | €25 tot €50 per m² | €35 tot €45 per m² (buitenschilderwerk, gevel, locatiepagina's) |
| Kozijnen buiten | €45 tot €120 per m² (lakwerk buiten) | €50 tot €100 per kozijn (kozijnen, buitenschilderwerk, lakwerk, locatiepagina's, blog beitsen of lakken) |
| Kozijnen binnen | €30 tot €75 per m² | €35 tot €75 per kozijn, €40 tot €55 per binnenkozijn |
| Latex spuiten | €10 tot €20 per m² | muren €8 tot €12, plafonds €5,50 tot €7, nieuwbouw vanaf €3,50, renovatie €8 tot €13 per m² |
| Behangen | €15 tot €25 per m² | €15 tot €30 gemiddeld, glasvezel €18 tot €30, fotobehang €25 tot €40 per m² |
| Deur lakken | vanaf €80 per deur | binnendeur €80 tot €120, buitendeur €100 tot €150 |
| Trap | vanaf €350 | €350 tot €600 |
| Houtrot herstellen | vanaf €100 | kleine epoxyreparatie €80 tot €180 |
| Voorbehandelen muren (behangen) | voorstrijken €4, schuren €3 per m² | €8 tot €12 per m² |
| Schilderwerk na houtrotherstel | €45 tot €120 per m² (lakwerk buiten) | €75 tot €300 per kozijn |
| Dakkapel schilderen | geen bedrag (de plek was leeg) | [INVULLEN] |

18. **Bedragen die niet op je prijslijst staan** maar wel op de site (nu verzameld onder `teBevestigen` in `lib/prices.ts`): uurtarieven (binnen €35 tot €45, buiten €40 tot €55, behangen €35 tot €50, houtrot €45 tot €55, lakwerk €40 tot €50, latex €35 tot €50), houtrot klein kozijn €150 tot €250 en groot kozijn €300 tot €450, kozijn gedeeltelijk vervangen €200 tot €500, kozijn vervangen €600 tot €1.500, complete buitenschilderbeurt €2.500 tot €6.000, oud behang verwijderen €5 tot €10 per m², keukenkasten spuiten €150 tot €300 per strekkende meter, radiator lakken €80 tot €120. Kloppen deze, of moeten ze weg?
19. **Prijs dakkapel schilderen** (indicatie).

## Claims en bedrijfsgegevens

20. **Winterkorting "tot 20%":** de actie loopt volgens de site tot en met 31 januari 2027 op binnenschilderwerk. Welke voorwaarden gelden (wanneer 10% en wanneer 20%, minimale opdracht, ook voor latex spuiten en behangen, geldt de datum voor opdracht of uitvoering)? Besluit Gideon (14-11-2026): de badge staat live; de voorwaarden worden toegevoegd zodra je ze doorgeeft.
21. **Korting houtrot:** op de houtrotpagina stond "10 tot 20% korting bij drie of meer kozijnen". Die zin is weggehaald. Klopt die korting, en onder welke voorwaarden?
22. **Certificaten of keurmerken:** "Gecertificeerd" is gewijzigd in "Gediplomeerde schilders". Heb je een concreet certificaat of keurmerk (bijvoorbeeld Erkend Schilder, OnderhoudNL)? Op /faq staat ook "gecertificeerde partners" voor steigers en hoogwerkers: welke partner?
23. **Garantie:** hoeveel jaar op binnen- en op buitenschilderwerk, en wat valt eronder? Op de homepage stond "3 tot 5 jaar binnen, 5 tot 7 jaar buiten" zonder bron; die getallen zijn weg tot je bevestigt. Komt in `site.garantie`.
24. **Termijnen:** reageer je op werkdagen binnen 24 uur op een aanvraag, en volgt de offerte binnen 48 uur na de inspectie? Op de contactpagina stond "offerte binnen 24 uur", in de popup "binnen 2 werkdagen". Nu staat overal: reactie binnen 24 uur, offerte binnen 48 uur na inspectie.
25. **KvK-nummer** voor de footer.
26. **Boonstoppel-ambassadeur:** Facebook noemt je "Officieel ambassadeur van Boonstoppel". Klopt dat? Dan zetten we het op de homepage en de dienstpagina's.
27. **Bijscholing:** op de homepage staat "Elke medewerker volgt regelmatig bijscholing in de nieuwste verftechnieken". Klopt dat?

## Conversie

28. **WhatsApp:** heeft 06-38903004 WhatsApp (of WhatsApp Business)? De knop "App Jordy" staat nu naast elke belknop en in de mobiele balk en linkt naar `wa.me/31638903004`.
29. **Stucwerk, keukens spuiten, VvE en zakelijk werk:** levert Schildersbedrijf040 dit? "Traditioneel stucwerk" en "Exclusief stucdesign" zijn uit het formulier gehaald. Let op: in reviews noemen klanten wel stucwerk (Niki van het Hof: "De zolder gestuucd + geverfd"), en op de lakwerkpagina staat keukenkasten spuiten.
30. **Foto-upload in het formulier:** getest na livegang (14-11-2026): Formspree weigert bijlagen op het huidige abonnement ("File Uploads Not Permitted"). Het formulier stuurt de aanvraag dan automatisch zonder foto's, met de notitie hoeveel foto's de klant wilde meesturen, en vraagt de klant ze via WhatsApp te sturen. Wil je foto's direct in de aanvraag? Dan is een Formspree-abonnement met bestandsuploads nodig.
31. **Metingen:** er staat nu geen Google Analytics of Tag Manager op de site (ook niet live). De site stuurt wel events naar `dataLayer`: `generate_lead` (offerteformulier, offerteblok en afspraak-popup), `phone_click`, `whatsapp_click` en `email_click`. Lever een GTM-container-ID aan (in Netlify als `NEXT_PUBLIC_GTM_ID`), dan worden ze gemeten. Is er een cookiemelding nodig voor jouw instellingen?

## Btw en teksten

32. **Btw op houtrotherstel en kitwerk:** volgens de Belastingdienst valt houtrot herstellen met nieuwe houten inzetstukken of onderdorpels, constructief kitwerk en glas plaatsen onder 21%, en het behang zelf ook. Op de houtrot- en behangpagina en op enkele locatiepagina's staat nu "9% btw voor woningen ouder dan 2 jaar" zonder die uitzondering, en op een paar plekken "9% op het arbeidsloon" (het is 9% op arbeid én de gebruikte materialen). Hoe factureer je dit nu? Dan zetten we de teksten gelijk. De blog over het btw-tarief is al bijgewerkt (14-11-2026).

## Nieuwe pagina's (fase 7, live sinds 14-11-2026)

Deze pagina's zijn gebouwd met alleen bestaande feiten en de prijslijst. Graag bevestigen of aanvullen:

33. **VvE en zakelijk** (`/diensten/vve-en-zakelijk`): wil je dit werk doen? Zo niet, dan halen we de pagina weg. Heb je referenties (zonder namen) die we mogen noemen?
34. **Deuren spuiten** (sectie op `/diensten/lakwerk`): spuit je ook deuren, of alleen keukenkasten? De tekst zegt nu dat Jordy per deur adviseert of spuiten of lakken past.
35. **Trap** (`/diensten/trap-schilderen`): klopt "2 tot 3 dagen" en "om en om werken" (stond al op de site)? Neem je kitwerk langs de trap mee (zoals in de review van Marlie S)?
36. **Dakkapel** (`/diensten/dakkapel-schilderen`): een vaste prijsindicatie per dakkapel (zie ook vraag 19) en of kitwerk rond de kozijnen in de prijs zit.
37. **Latex spuiten nieuwbouw**: was de bungalow in Best nieuwbouw? Dan noemen we dat op de projectpagina.
38. **Fotobehang** (sectie op `/diensten/behangen`): bestel jij het behang of de klant? Zit het behang in de prijs per m²?
39. **Helmond**: heb je een project of een review uit Helmond? Dan komt die op de pagina (nu staat er geen projectblok).

## Besluiten zonder antwoord (werkafspraak 14-11-2026)

- Prijzen: overal de waarden van de dienstkaarten.
- Blokken en zinnen zonder antwoord zijn weggelaten; er staat nergens `[INVULLEN]` op de live site.
- Winterkorting-badge "Tot 20% korting" staat live; de voorwaardenzin verschijnt zodra vraag 20 is beantwoord.
- Review w03 (trap, Werkspot) staat niet op de trappagina, omdat de tekst is ingekort (vraag 5).
