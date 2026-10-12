# Schildersbedrijf040: SEO-uitvoering met Claude Code

## Starten

1. Pak deze map uit, bij voorkeur **in de repo van de site** (bijv. als submap `seo/`), of los.
2. Open `CLAUDE.md` en vul bovenaan in: `PAKKET` (B/P/M), `SITE_REPO` (ja/nee) en na het gesprek met Jordy de scopecheck-antwoorden.
3. Start Claude Code in deze map (of in de repo-root):
   ```bash
   claude --model opus
   ```
4. Eerste opdracht, bijvoorbeeld:
   ```
   /volgende
   ```
   of gericht:
   ```
   /pagina 3
   ```

## Commando's

| Commando | Wat het doet |
|---|---|
| `/volgende` | Pakt de eerstvolgende openstaande pagina (volgorde, pakket en scopecheck worden gerespecteerd). |
| `/pagina <nr of id>` | Werkt één pagina uit volgens de briefing en het template. |
| `/check <bestand>` | Controleert een opgeleverd bestand op richtlijnen, links, feiten en lengte. |
| `/linkcheck` | Controleert de interne links over alle pagina's heen en maakt een lijst met links die nog toegevoegd moeten worden. |
| `/maandrapport <maand>` | Maakt het maandrapport voor Jordy op basis van jouw exports. |

## Volgorde oktober (Plus)

1. Homepage (optimaliseren)
2. Binnenschilderwerk (optimaliseren)
3. Winterschilder (nieuw)
4. Latex spuiten (optimaliseren)

Daarna november: prijsgids, lakwerk, behangen, zes locaties, blog "hoe lang duurt binnenschilderwerk". Het volledige overzicht staat in `voortgang.md`.

## Tips

- Laat Claude Code per sessie één of twee pagina's doen en review ze voordat je verder gaat; dan blijft de kwaliteit hoog en zie je snel of de toon klopt.
- Alles met `[JORDY: ...]` verzamel je en stuur je in één keer naar Jordy.
- Werk je in de repo: laat Claude Code eerst één bestaande dienstpagina analyseren ("hoe is /diensten/binnenschilderwerk opgebouwd?") voordat hij nieuwe pagina's in de code zet.
