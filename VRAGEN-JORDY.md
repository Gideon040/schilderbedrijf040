# Vragen voor Jordy

Opgesteld 13 november 2026 bij de branch `seo-conversie-nov-2026`. Alles wat hieronder staat, staat op de site als `[INVULLEN: ...]` of `[JORDY: ...]`. Die open punten zijn op de preview zichtbaar en in productie automatisch verborgen. Een antwoord van één regel per vraag is genoeg.

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
