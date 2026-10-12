Je werkt autonoom aan de SEO, de fixes en het redesign van schildersbedrijf040.nl. Gideon is er niet bij, dus stel geen vragen maar neem zelf de meest redelijke beslissing en noteer die.

**Lees eerst**
1. `seo/CLAUDE.md` (regels, bedrijfsfeiten, wat je niet doet)
2. `seo/plan/site-audit-en-redesign.md`
3. `seo/plan/design/LEESMIJ.md` en de vier ontwerpen in `seo/plan/design/`
4. `seo/voortgang.md`

**Voorbereiding**
- Maak een nieuwe git-branch `seo-redesign-<datum>` en werk alleen daar. Nooit naar main pushen, nooit deployen of publiceren.
- Breng de codestructuur in kaart en schrijf die naar `seo/rapportages/codestructuur.md`.
- Start de site lokaal en meet Lighthouse (mobiel en desktop) als nulmeting in `seo/rapportages/lighthouse-voor.md`.

**Volgorde**
1. Alle punten van Prioriteit 1 (1.1 t/m 1.11), één voor één.
2. Het redesign volgens `seo/plan/design/`: eerst de gedeelde onderdelen (kleuren, fonts, header, footer, knoppen, mobiele actiebalk), dan de homepage, dan het dienstpaginatemplate, dan het locatiepaginatemplate.
3. Daarna de pagina's uit `seo/data/pages.json` in volgorde met `/volgende`, alleen pakket P en lager. Pagina's met `alleen_na_scopecheck: true` sla je over.

**Werkwijze per stap**
- Kleine, losse commits met een duidelijke boodschap in het Nederlands.
- Na elke stap: build draaien, desktop en mobiel (375px) controleren met Playwright, screenshots naar `seo/rapportages/screenshots/`.
- Werk na elke stap `seo/voortgang.md` bij (status, bestanden, open punten).
- Gaat iets mis of loopt de build stuk: herstel het of draai die commit terug, noteer het en ga door met het volgende punt.

**Harde regels**
- Geen URL's wijzigen of verwijderen; bestaande tekst die rankt blijft staan.
- Geen feiten, cijfers, prijzen, reviews of projecten verzinnen. Wat ontbreekt wordt `[JORDY: ...]` en komt in de lijst in `voortgang.md`.
- Geen em dashes in teksten.
- Lighthouse mag niet omlaag.

**Afronden**
Stop wanneer Prioriteit 1, het redesign en de oktoberpagina's klaar zijn (of als je vastloopt). Meet Lighthouse opnieuw (`lighthouse-na.md`) en schrijf `seo/rapportages/overdracht-<datum>.md` met:
- wat er is gedaan (per commit, kort)
- Lighthouse voor en na
- wat Gideon moet checken voordat het live gaat
- alle open `[JORDY: ...]`-punten in één lijst, klaar om naar Jordy te sturen
- beslissingen die je zelf hebt genomen en waarom
