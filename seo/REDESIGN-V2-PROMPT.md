Je werkt autonoom aan ronde 2 van het redesign van schildersbedrijf040.nl, op de bestaande branch `seo-redesign`. Ronde 1 (fixes, SEO, oktoberpagina's) blijft staan; alleen de vormgeving wordt vervangen door het nieuwe ontwerp. Stel geen vragen, neem zelf de meest redelijke beslissing en noteer die.

LEES EERST
1. seo/plan/design-v2/LEESMIJ.md (volledig)
2. seo/plan/design-v2/prototype.html (open in Playwright en bekijk elke pagina via de balk linksonder, desktop en 375px)
3. seo/CLAUDE.md en seo/rapportages/overdracht-*.md uit ronde 1

HET ALLERBELANGRIJKSTE
Alle SEO-teksten blijven behouden. Elke bestaande alinea, kop, FAQ-vraag en -antwoord, interne link, alt-tekst, meta en schema komt letterlijk terug. Niets inkorten, samenvatten of herschrijven. Maak VOOR je begint per pagina een woordtelling en een koppenlijst, en DAARNA opnieuw (seo/rapportages/tekstcontrole-v2.md). Daalt een pagina in woorden of mist er een kop: eerst herstellen voordat je verder gaat.

Zet deze regel ook bovenaan seo/CLAUDE.md, zodat hij voor al het toekomstige werk geldt:
"ALLE BESTAANDE SEO-TEKSTEN BLIJVEN LETTERLIJK BEHOUDEN. Design en code mogen veranderen, tekst, koppen, FAQ's, links, meta en schema niet (behalve em dashes vervangen)."

TWEEDE PUNT
De bestaande reviews moeten terug (Peter van der Berg, Maria Jansen, Johan Smits en de Google/Werkspot-quotes op dienst- en locatiepagina's). Haal ze letterlijk uit de git-historie van main (c892894) en zet ze in lib/reviews.ts. Toon ze in het reviewblok volgens het prototype.

VOLGORDE
1. Gedeelde basis: tokens, Archivo + JetBrains Mono via next/font, knoppen, header, footer, mobiele actiebalk, winterband, kwastrand, penseelstreek-component, useReveal-hook.
2. Homepage.
3. Dienstpagina-template (alle 6 diensten + winterschilder).
4. Locatiepagina-template (alle plaatsen; routekaartje per plaats).
5. Over ons (alleen Jordy, geen andere teamleden of namen; 8+ vaste collega's).
6. Blogoverzicht en blogartikel-template (Sanity-inhoud ongewijzigd).
7. Contact, daarna /projecten en /faq met dezelfde bouwstenen.

PER STAP
- Kleine commits in het Nederlands.
- Build draaien, desktop en 375px screenshots naar seo/rapportages/screenshots-v2/, vergelijken met het prototype.
- Tekstcontrole voor die pagina bijwerken.
- seo/voortgang.md bijwerken.

HARDE REGELS
- Geen URL's wijzigen. Geen tekst verwijderen. Niets verzinnen: ontbrekende feiten blijven [JORDY: ...] en worden in productie niet getoond (zoals in ronde 1).
- Geen em dashes. Animaties uit bij prefers-reduced-motion. Alles leesbaar zonder JavaScript.
- Lighthouse mag niet omlaag ten opzichte van seo/rapportages/lighthouse-na.md.
- Niet naar main pushen of deployen. Push wel de branch als je klaar bent, zodat Netlify een deploy preview maakt.

AFRONDEN
Schrijf seo/rapportages/overdracht-v2.md met: wat er is gedaan per commit, de tekstcontrole (woorden voor en na per pagina), Lighthouse voor en na, de preview-URL, wat ik moet checken, en je eigen beslissingen.
