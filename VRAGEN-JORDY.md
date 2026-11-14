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
