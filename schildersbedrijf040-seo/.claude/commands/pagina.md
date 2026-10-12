---
description: Werk één pagina uit volgens de briefing (gebruik: /pagina <nummer of id>)
argument-hint: <nummer of id, bijv. 3 of winter>
---

Werk de pagina **$ARGUMENTS** uit.

1. Zoek de pagina op in `data/pages.json` (op `nr` of `id`) en lees `briefings/` met hetzelfde nummer.
2. Controleer in `CLAUDE.md`:
   - valt het pakket binnen `PAKKET`? Zo niet: stop en meld dat.
   - staat `alleen_na_scopecheck: true` en is `SCOPECHECK_GEDAAN` niet "ja"? Stop en noem welke scopecheckvraag eerst beantwoord moet worden.
3. Status `optimaliseren`: haal de huidige pagina op (live of uit de repo) en noteer title, meta, H1 en koppen. Lever alleen toevoegingen volgens `templates/optimalisatie.md`.
   Status `nieuw`: schrijf de volledige pagina volgens `templates/nieuwe-pagina.md`.
   Groepspagina's (met `urls`): werk ze één voor één af, elk in een eigen bestand (`NN-id-plaats.md`).
4. Gebruik alleen feiten uit `CLAUDE.md` en de briefing. Onbekend: `[JORDY: ...]`.
5. Voer daarna `/check` uit op het nieuwe bestand en verwerk de bevindingen.
6. Werk `voortgang.md` en `data/pages.json` (`voortgang: "concept"`) bij.
7. Geef een korte samenvatting: bestand(en), woordenaantal, open punten voor Jordy.
