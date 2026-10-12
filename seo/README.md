# Schildersbedrijf040: SEO-uitvoering met Claude Code

## Starten

1. Pak deze map uit **in de repo van de site** als submap `seo/`.
2. Zet de commando's op de plek waar Claude Code ze vindt (in de root van de repo):
   ```bash
   mkdir -p .claude/commands && cp seo/.claude/commands/*.md .claude/commands/
   ```
3. Voeg bovenaan de `CLAUDE.md` in de root van de repo (of maak die aan) deze regel toe:
   ```
   Voor al het SEO-werk: lees en volg seo/CLAUDE.md. Paden in die instructies zijn relatief aan seo/.
   ```
4. Vul in `seo/CLAUDE.md` bovenaan `PAKKET` in (staat op P) en na het gesprek met Jordy de scopecheck-antwoorden.
5. Start Claude Code in de root van de repo:
   ```bash
   claude --model opus
   ```
6. Eerste opdracht:
   ```
   /sitefix
   ```

## Commando's

| Commando | Wat het doet |
|---|---|
| `/volgende` | Pakt de eerstvolgende openstaande pagina (volgorde, pakket en scopecheck worden gerespecteerd). |
| `/pagina <nr of id>` | Werkt één pagina uit volgens de briefing en het template. |
| `/check <bestand>` | Controleert een opgeleverd bestand op richtlijnen, links, feiten en lengte. |
| `/linkcheck` | Controleert de interne links over alle pagina's heen en maakt een lijst met links die nog toegevoegd moeten worden. |
| `/sitefix [punt]` | Voert de fixes en het redesign uit `plan/site-audit-en-redesign.md` uit, punt voor punt. |
| `/maandrapport <maand>` | Maakt het maandrapport voor Jordy op basis van jouw exports. |

## Aanpak

1. Eerst `/sitefix` tot Prioriteit 1 klaar is (fixes aan de huidige site).
2. Dan `/volgende` voor de pagina's uit de planning.
3. Redesign-punten (Prioriteit 2) meenemen bij de pagina waar ze over gaan.

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
