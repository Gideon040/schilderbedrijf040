---
description: Controleer een opgeleverd contentbestand tegen de richtlijnen
argument-hint: <pad naar bestand in content/>
---

Controleer **$ARGUMENTS** en rapporteer per punt OK of wat er mis is. Herstel daarna wat mis is.

1. **Frontmatter** compleet; title max. 60 tekens; meta 140 tot 160 tekens (tel ze).
2. **Direct antwoord** in de eerste 40 tot 60 woorden, met prijsindicatie of doorlooptijd waar de briefing dat vraagt.
3. **Opbouw** komt overeen met de briefing (elke H2 uit de briefing aanwezig).
4. **Tussenkoppen** in vraagvorm waar mogelijk, met zelfstandig antwoord eronder.
5. **Interne links:** exact de links uit de briefing (`linkt_naar`), niet meer en niet minder; eigen hub in de eerste alinea en de CTA; ankerteksten gevarieerd; geen links naar URL's die niet in `data/sitemap-24-09-2026.txt` of `data/pages.json` staan.
6. **Feiten:** alleen feiten uit `CLAUDE.md`; verzonnen cijfers, projecten of reviews = fout. Open punten staan als `[JORDY: ...]` en in de frontmatter.
7. **Stijl:** u-vorm, geen em dashes (—), geen onderbouwde superlatieven, tabellen/lijsten voor prijzen en stappen.
8. **Lokaal** (locatiepagina's): minimaal 40 procent plaatsspecifiek, geen tekst die letterlijk op een andere locatiepagina staat (vergelijk met bestaande bestanden in `content/`).
9. **GEO:** hoort er een kernvraag bij (zie `plan/uitvoeringsplan.md`)? Staat het antwoord letterlijk en compleet op de pagina?
10. **Schema:** juiste JSON-LD-types, geldige JSON.
11. **Afsluiting:** "Gratis offerte aanvragen" met link naar /contact en klikbaar telefoonnummer.
12. **Lengte** binnen de range uit `CLAUDE.md`.
