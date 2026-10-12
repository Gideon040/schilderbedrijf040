# Redesign v2: designspecificatie

`prototype.html` is het goedgekeurde ontwerp (één bestand, open het in de browser). Linksonder zit een balk om te wisselen tussen Homepage, Dienst, Locatie, Over ons, Blog, Artikel en Contact. Dit vervangt het eerdere ontwerp in `plan/design/`.

## REGEL 1: ALLE SEO-TEKSTEN BLIJVEN BEHOUDEN

**Dit is het belangrijkste punt van de hele opdracht.** Het design is alleen de verpakking.

- Elke bestaande tekst, alinea, H1/H2/H3, FAQ-vraag en -antwoord, interne link, alt-tekst, meta-title, meta-description en elk JSON-LD-schema op de huidige pagina's komt **letterlijk** terug in het nieuwe design. Er gaat niets verloren.
- Het prototype bevat de zichtbare teksten uit screenshots. Waar het prototype en de code verschillen, is **de code leidend** voor de tekst en het prototype voor de vormgeving.
- Op de plekken met `[bestaand antwoord overnemen]` haal je het antwoord letterlijk uit de huidige code.
- Toegestaan: em dashes vervangen door punt, komma of dubbele punt, en koppen in gewone zinsopbouw in plaats van hoofdletters in de bron (CSS mag ze in hoofdletters tonen).
- Niet toegestaan: tekst inkorten, samenvatten, herschrijven, verplaatsen naar een andere pagina of achter een "lees meer" verstoppen waardoor hij niet in de HTML staat.
- **Controle verplicht:** maak voor en na het redesign per pagina een woordtelling en een lijst van alle koppen (`seo/rapportages/tekstcontrole-v2.md`). Het aantal woorden mag niet dalen en elke kop moet terugkomen. Zo niet: eerst herstellen.

## REGEL 2: De bestaande reviews komen terug

In de eerste ronde zijn de reviews weggehaald. Die waren echt en moeten terug. Haal ze uit de git-historie (`main`, commit `c892894`) en zet ze in `lib/reviews.ts`:
- Peter van der Berg, Eindhoven Centrum (binnenschilderwerk)
- Maria Jansen, Strijp, Eindhoven (behangwerk)
- Johan Smits, Woensel, Eindhoven (buitenschilderwerk en houtrot)
- de Google- en Werkspot-quotes op de dienst- en locatiepagina's ("Uitstekend werk geleverd! ..." en "Heel tevreden met het schilderwerk. ...")

Neem tekst, naam, plaats en datum letterlijk over uit de oude code.

## Huisstijl (tokens)

| Token | Waarde | Gebruik |
|---|---|---|
| paper | `#F5F3EE` | basisachtergrond |
| paper-2 | `#ECE8E0` | afwisselende sectie |
| ink | `#0A1626` | koppen, donkere banden |
| ink-2 / footer | `#060E19` | footer, topbar `#0A1626` |
| text | `#2A3647` | lopende tekst |
| muted | `#5B6676` | bijschriften |
| line | `#D9D4CA` | lijnen |
| blue | `#1A5BFF` | knoppen, penseelstreek, winterband |
| star | `#F2B632` | sterren, badge (spaarzaam) |
| staalkleuren | `#E9E4DA` `#C9B79C` `#8A9483` `#1E3A5F` `#B5674D` `#1A5BFF` | één per dienst (040-01 t/m 06) |

- **Fonts:** Archivo (variabel, `wdth` 62 tot 125, `wght` 400 tot 900) en JetBrains Mono 500 voor kleine codes en labels. Via `next/font/google`, self-hosted.
- **Koppen:** `font-stretch:112%`, gewicht 850, uppercase via CSS, letter-spacing -0.02em, line-height 0.92.
- **Hoeken:** recht (geen radius), behalve ronde badges en stappen-bolletjes.
- **Knoppen:** blauw met een donkere vulling die van links inschuift bij hover, en een pijl die 5px opschuift.

## Signatuur-elementen (moeten erin)

1. **Verfroller-onthulling** van de hero-foto: clip-path van boven naar beneden, met een rollerbalk die meeloopt.
2. **Penseelstreek** achter één woord in de H1 en in elke H2. De H1 tekent direct, de H2's tekenen bij het in beeld scrollen (`.p2`).
3. **Kleurwaaier** met zes stalen onder de hero-foto op de homepage. Elke staal hoort bij een dienst en heeft een code.
4. **Winterband:** een schuine blauwe ticker (-1.2deg) die precies over de overgang tussen hero en volgende sectie valt en breder is dan het scherm. Klikbaar naar `/diensten/winterschilder`. Van maart tot en met september dezelfde band met de buitenwerk-tekst.
5. **Kwastrand:** een ruwe rand boven elke donkere of blauwe band, in de kleur van die band zelf (SVG-mask).
6. **Dienstrijen als stalenkaart** op de homepage, met een foto die met de cursor meezweeft (alleen desktop).
7. **Voor/na-slider** die één keer zelf heen en weer schuift als hij in beeld komt.
8. **Tellers** die oplopen (5,0, 8+, 4,9 en dergelijke).
9. **Werkwijze-lijn** die zich vult, met een verfrollertje dat meerijdt.
10. **Kaarten** (soorten werk, diensten per plaats) waarvan de kleurstaal bij hover de hele kaart "verft".
11. **Prijs-"kleurenkaart"** die meescrolt op de dienstpagina (sticky), met een staal per prijsregel.
12. **Locatiepagina:** een routekaartje waarop de lijn van Eindhoven naar de plaats wordt getekend, met daarna een vallende pin.
13. **Artikel:** een leesvoortgangsbalk bovenaan (penseelstreek), een sticky inhoudsopgave die meeloopt, een auteurskaart en een hulpkaart.
14. **Contact:** dienst-checkboxes als kleurstalen die het vak vullen als ze aangevinkt zijn.

## Pagina's en templates

| Template | Geldt voor | Voorbeeld in prototype |
|---|---|---|
| Homepage | `/` | Homepage |
| Dienstpagina | alle 6 diensten + `/diensten/winterschilder` | Dienst (binnenschilderwerk) |
| Locatiepagina | alle `/locaties/*` | Locatie (Helmond) |
| Over ons | `/over-ons` | Over ons (alleen Jordy, geen andere teamleden of namen) |
| Blogoverzicht | `/blog` | Blog (categorie-filter, uitgelicht artikel) |
| Blogartikel | `/blog/[slug]` (Sanity) | Artikel |
| Contact | `/contact` | Contact (geen offerteblok eronder, het formulier staat al bovenaan) |

/projecten en /faq krijgen dezelfde bouwstenen (hero met penseelstreek, kaarten, FAQ-stijl).

## Techniek

- Animaties met CSS plus één kleine `useReveal`-hook (IntersectionObserver). Geen animatielibraries.
- Alles is zichtbaar zonder JavaScript. De reveal-klasse wordt pas met JS toegevoegd en alleen voor elementen onder de vouw.
- Bij `prefers-reduced-motion: reduce` gaan alle animaties uit.
- Foto's: de originelen uit `public/images` (AVIF/WebP via `next/image`). De foto's in het prototype zijn zachte uitsneden en alleen bedoeld als voorbeeld.
- De FAQ-antwoorden staan in de HTML (`<details>`), niet pas na een klik geladen.
- Lighthouse mag niet omlaag ten opzichte van `lighthouse-na.md` uit ronde 1.
