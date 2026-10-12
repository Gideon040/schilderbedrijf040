---
description: Controleer de interne linkstructuur over alle opgeleverde pagina's
---

1. Lees alle bestanden in `content/` en `data/pages.json`.
2. Maak per pagina een overzicht: welke links staan erin, welke hadden erin moeten staan (`linkt_naar`), wat ontbreekt, wat is extra.
3. Controleer de andere kant: voor elke pagina met status `concept` of `live`, staan de links vanaf `krijgt_links_van` al in die (bestaande of nieuwe) pagina's? Zo niet, maak per bronpagina een lijstje "link toevoegen" met een voorgestelde zin en ankertekst.
4. Signaleer pagina's met minder dan 3 inkomende interne links.
5. Schrijf het resultaat naar `rapportages/linkcheck-{datum}.md` en geef een samenvatting.
