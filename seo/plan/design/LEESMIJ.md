# Designreferentie redesign

Goedgekeurd ontwerp voor het redesign (zie `plan/site-audit-en-redesign.md`, Prioriteit 2). Vier schermen:

| Bestand | Scherm |
|---|---|
| `homepage-desktop.html` | Homepage, 1440px |
| `dienstpagina-binnenschilderwerk.html` | Template voor alle dienstpagina's |
| `locatiepagina-helmond.html` | Template voor alle locatiepagina's |
| `homepage-mobiel.html` | Homepage mobiel, 390px, met vaste actiebalk |

Het zijn designbestanden (inline styles plus een klein script met de data in `renderVals()`), geen productiecode. Lees ze als specificatie:

- **Kleuren:** navy `#0B1B30`, donkerder `#07121F` (topbar/footer), blauw `#1668E3` (knoppen), linkblauw `#1561D6`, verfgeel accent `#F2B632` (spaarzaam: sterren, labels, badge), warm licht `#F5F3EF` (sectieachtergrond), winterband `#FDF3DC`, tekst `#2E3A48` / `#3B4755`.
- **Fonts:** Barlow Condensed 600/700 voor koppen (gewone hoofdletters, geen volledige caps), Barlow 400 tot 700 voor tekst. Bodytekst 17 tot 19px.
- **Radius:** kaarten 14 tot 16px, knoppen 8px, pills 999px.
- **Foto's in `images/`** zijn uitsneden uit screenshots en dus te zacht voor productie. Gebruik de originele bestanden uit de site (zelfde foto's) of `[JORDY: foto]`.
- Bouw het na in de bestaande stack en componenten van de site. Neem structuur, volgorde van secties, kleuren, typografie en teksten over; pixel-perfect hoeft niet.
- Alles met `[JORDY: ...]` blijft een placeholder.
