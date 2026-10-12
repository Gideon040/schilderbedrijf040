# Tekstcontrole redesign v2

Gemeten met `textContent` van de pagina zonder header, footer en mobiele balk (dus zonder CSS-hoofdletters), op een productiebuild. `[JORDY: ...]`-tekst telt niet mee: die wordt in productie niet getoond. Een tekst geldt als aanwezig als hij (genormaliseerd: alleen letters en cijfers) letterlijk op de nieuwe pagina staat, in de zichtbare tekst, een alt-tekst of het schema.

- **main** = de live site (commit `c892894`)
- **voor** = branch `seo-redesign` na ronde 1, vóór v2
- **na** = na redesign v2

## Woorden per pagina

| Pagina | main | voor | na | Status |
|---|---|---|---|---|
| `/` | 909 | 921 | 1704 | in orde |
| `/over-ons` | 161 | 168 | 366 | in orde |
| `/contact` | 60 | 67 | 71 | nog oud ontwerp |
| `/faq` | 82 | 442 | 446 | nog oud ontwerp |
| `/projecten` | 48 | 54 | 58 | nog oud ontwerp |
| `/diensten/binnenschilderwerk` | 1651 | 1850 | 2015 | in orde |
| `/diensten/buitenschilderwerk` | 1687 | 1669 | 1846 | in orde |
| `/diensten/behangen` | 1680 | 1649 | 1823 | in orde |
| `/diensten/houtrot-sanering` | 1891 | 1868 | 2050 | in orde |
| `/diensten/lakwerk` | 1698 | 1687 | 1861 | in orde |
| `/diensten/latex-spuiten` | 1613 | 1847 | 2019 | in orde |
| `/diensten/winterschilder` | - | 1079 | 1172 | in orde |
| `/locaties/waalre` | 1166 | 1019 | 1284 | in orde |
| `/locaties/veldhoven` | 1100 | 956 | 1220 | in orde |
| `/locaties/geldrop` | 1063 | 910 | 1174 | in orde |
| `/locaties/nuenen` | 1087 | 942 | 1206 | in orde |
| `/locaties/best` | 1077 | 930 | 1195 | in orde |
| `/locaties/son-en-breugel` | 1155 | 1024 | 1300 | in orde |
| `/locaties/helmond` | 1099 | 1118 | 1383 | in orde |
| `/locaties/valkenswaard` | 1200 | 1054 | 1321 | in orde |
| `/locaties/oirschot` | 1185 | 1036 | 1302 | in orde |
| `/locaties/heeze` | 1160 | 1016 | 1280 | in orde |
| `/locaties/mierlo` | 1192 | 1048 | 1313 | in orde |
| `/locaties/meerhoven` | 1186 | 1038 | 1304 | in orde |
| `/locaties/deurne` | 1191 | 1045 | 1310 | in orde |
| `/locaties/beek-en-donk` | 1205 | 1080 | 1357 | in orde |
| `/locaties/eersel` | 1172 | 1026 | 1291 | in orde |
| `/locaties/bergeijk` | 1156 | 1009 | 1274 | in orde |
| `/locaties/maarheeze` | 1153 | 1007 | 1271 | in orde |
| `/blog` | 213 | 223 | 227 | nog oud ontwerp |
| `/blog/btw-tarief-schilderwerk` | 1072 | 1080 | 1084 | nog oud ontwerp |
| `/blog/hoe-schilder-je-een-deur` | 1624 | 1632 | 1636 | nog oud ontwerp |
| `/blog/hoe-verf-je-een-muur` | 1398 | 1406 | 1410 | nog oud ontwerp |
| `/blog/plafond-schilderen` | 2123 | 2132 | 2136 | nog oud ontwerp |
| `/blog/verven-na-behang` | 1952 | 1960 | 1964 | nog oud ontwerp |

## Bewuste uitzonderingen

Teksten die niet letterlijk terugkomen, met de reden. Alles hierbuiten moet terug.

| Pagina | Tekst (begin) | Reden |
|---|---|---|
| `*` | Lichttoren Eindhoven | Alt van de oude stadsfoto (ronde 1, 1.2/2.2): die foto staat niet meer op de site. |
| `*` | Schilderwerk achtergrond - statistieken | Alt van een stockfoto-achtergrond die in ronde 1 (1.9) is weggehaald. |
| `*` | Professional painting tools | Engelse, onjuiste alt; in ronde 1 (1.9) vervangen. |
| `*` | Interior background | Engelse, onjuiste alt; in ronde 1 (1.9) vervangen. |
| `*` | Callback background | Engelse, onjuiste alt; in ronde 1 (1.9) vervangen. |
| `*` | Contact Hero | Engelse, onjuiste alt; in ronde 1 (1.9) vervangen. |
| `*` | tussen €35 en €55 per uur | Ronde 1, 1.4: prijzen overal per m² in plaats van per uur (bewuste feitencorrectie). |
| `*` | Prijzen zijn indicatief. Altijd een offerte op maat voor uw woning in | Hoorde bij de uurtarieventabel die in ronde 1 (1.4/2.7) verviel; vervangen door de prijsnoot. |
| `*` | Dagelijkse updates van onze projecten | Staat er letterlijk; alleen het cijfer ervoor is nu nummering van de lijst. |
| `*` | Voor en na transformaties | Idem, nummering. |
| `*` | Tips en tricks voor onderhoud | Idem, nummering. |
| `*` | Exclusieve aanbiedingen | Idem, nummering. |
| `*` | Reactie binnen één werkdag | Open punt [JORDY: klopt?] uit ronde 1; in productie verborgen tot Jordy het bevestigt. |
| `*` | [Naam] · [datum] · Google | Lege reviewplekken uit ronde 1; vervangen door de reviews van de live site. |
| `/` | SCHILDERSBEDRIJF040 — VAKKUNDIG SCHILDERWERKIN EINDHOVEN | Ronde 1, 1.2: H1 bewust gewijzigd naar 'Schilder in Eindhoven'. |
| `/` | Muren, plafonds, kozijnen, deuren en trappen, strak geschilderd en schoon opgeleverd. | Korte kaartzin uit ronde 1 (1.5) was een samenvatting van de live dienstekst; die live tekst staat er weer volledig. |
| `/` | Gevels, kozijnen en boeidelen, goed beschermd tegen weer en houtrot. | Idem. |
| `/` | Behang plaatsen of verwijderen, los of samen met het schilderwerk. | Idem. |
| `/` | Deuren, trappen en kozijnen gelakt in zijdeglans of hoogglans. | Idem. |
| `/` | Muren en plafonds snel en egaal gespoten, ideaal bij nieuwbouw of na stucwerk. | Idem. |
| `/` | Rot hout vakkundig herstellen of vervangen voordat we gaan schilderen. | Idem. |
| `/` | Binnen- en buitenschilderwerk, behangen en latex spuiten in Eindhoven en omgeving. Vakwerk | Hero-tekst uit ronde 1 (samenvatting van de live hero-tekst); de live hero-tekst staat er weer. |
| `/` | In vier stappen geschilderd | Kop uit ronde 1 boven dezelfde werkwijze; vervangen door de live kop 'Onze werkwijze'. |
| `/` | We komen gratis langs om de ondergrond te bekijken en te adviseren. | Ronde-1-samenvatting van de werkwijze; de vier live stappen staan er weer. |
| `/` | Werk, materialen en planning duidelijk op een rij. | Idem. |
| `/` | Afdekken, schuren, repareren en schilderen met Boonstoppel-verf. | Idem. |
| `/` | Samen nalopen, alles opruimen en pas klaar als u tevreden bent. | Idem. |
| `/` | Aanvraag en inspectie | Idem (staptitel). |
| `/` | Voorbereiden en schilderen | Idem (staptitel). |
| `/` | Schone oplevering | Idem (staptitel). |
| `/` | Schildersbedrijf040 voert binnenschilderwerk, buitenschilderwerk, behangen, lakwerk, latex | Ronde-1-herschrijving van de live alinea 'Het team van Schildersbedrijf040 voert ...'; de live alinea staat er weer. |
| `/` | Binnenschilderwerk · [JORDY: plaats]Binnendeur en kozijn strak gelakt | Zelfde gegevens staan in de feitenlijst bij de voor/na-foto (Project, Dienst); plaats is een open punt. |
| `/` | [JORDY: echte Google-review koppelen] | Lege reviewplekken uit ronde 1; vervangen door de echte reviews van de live site (LEESMIJ regel 2). |
| `/` | Jordy Jacobs, eigenaar van Schildersbedrijf040, op een ladder met een verfblik | Alt van dezelfde herofoto; de live alt ('Jordy Jacobs - Eigenaar Schildersbedrijf040') staat er weer. |
| `/` | Woonkamer met donker behang als accentwand rond de haard | Ronde-1-alt van de dienstkaartfoto; in v2 zweeft die foto alleen mee met de cursor (decoratief). |
| `/` | Benedenverdieping in Blixembosch, Eindhoven, met latex gespoten muren en plafond | Ronde-1-alt; de foto heeft nu het bijschrift 'Benedenverdieping latex gespoten, Blixembosch' als alt. |
| `/` | [Naam] · [wijk] | Lege reviewplekken uit ronde 1; vervangen door de reviews van de live site. |
| `/diensten/latex-spuiten` | Latex spuiten kost gemiddeld €7,50 tot €12 | Ronde 1, 1.4: muren €8 tot €12, gelijk aan de prijstabel (feitencorrectie). |
| `/locaties/waalre` | SCHILDER WAALRE | Ronde 1 (2.7): H1 werd 'Schilder in Waalre'. |
| `/locaties/waalre` | [Naam] · Waalre · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/veldhoven` | SCHILDER VELDHOVEN | Ronde 1 (2.7): H1 werd 'Schilder in Veldhoven'. |
| `/locaties/veldhoven` | [Naam] · Veldhoven · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/geldrop` | SCHILDER GELDROP | Ronde 1 (2.7): H1 werd 'Schilder in Geldrop'. |
| `/locaties/geldrop` | [Naam] · Geldrop · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/geldrop` | Wat kost een schilder in Geldrop per uur? | Ronde 1 (1.4): vraag zonder 'per uur', omdat de prijzen per m² zijn. |
| `/locaties/nuenen` | SCHILDER NUENEN | Ronde 1 (2.7): H1 werd 'Schilder in Nuenen'. |
| `/locaties/nuenen` | [Naam] · Nuenen · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/best` | SCHILDER BEST | Ronde 1 (2.7): H1 werd 'Schilder in Best'. |
| `/locaties/best` | [Naam] · Best · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/son-en-breugel` | SCHILDER SON EN BREUGEL | Ronde 1 (2.7): H1 werd 'Schilder in Son en Breugel'. |
| `/locaties/son-en-breugel` | [Naam] · Son en Breugel · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/helmond` | SCHILDER HELMOND | Ronde 1 (2.7): H1 werd 'Schilder in Helmond'. |
| `/locaties/helmond` | [Naam] · Helmond · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/valkenswaard` | SCHILDER VALKENSWAARD | Ronde 1 (2.7): H1 werd 'Schilder in Valkenswaard'. |
| `/locaties/valkenswaard` | [Naam] · Valkenswaard · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/oirschot` | SCHILDER OIRSCHOT | Ronde 1 (2.7): H1 werd 'Schilder in Oirschot'. |
| `/locaties/oirschot` | [Naam] · Oirschot · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/heeze` | SCHILDER HEEZE | Ronde 1 (2.7): H1 werd 'Schilder in Heeze'. |
| `/locaties/heeze` | [Naam] · Heeze · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/mierlo` | SCHILDER MIERLO | Ronde 1 (2.7): H1 werd 'Schilder in Mierlo'. |
| `/locaties/mierlo` | [Naam] · Mierlo · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/meerhoven` | SCHILDER MEERHOVEN | Ronde 1 (2.7): H1 werd 'Schilder in Meerhoven'. |
| `/locaties/meerhoven` | [Naam] · Meerhoven · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/deurne` | SCHILDER DEURNE | Ronde 1 (2.7): H1 werd 'Schilder in Deurne'. |
| `/locaties/deurne` | [Naam] · Deurne · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/beek-en-donk` | SCHILDER BEEK EN DONK | Ronde 1 (2.7): H1 werd 'Schilder in Beek en Donk'. |
| `/locaties/beek-en-donk` | [Naam] · Beek en Donk · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/eersel` | SCHILDER EERSEL | Ronde 1 (2.7): H1 werd 'Schilder in Eersel'. |
| `/locaties/eersel` | [Naam] · Eersel · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/bergeijk` | SCHILDER BERGEIJK | Ronde 1 (2.7): H1 werd 'Schilder in Bergeijk'. |
| `/locaties/bergeijk` | [Naam] · Bergeijk · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |
| `/locaties/maarheeze` | SCHILDER MAARHEEZE | Ronde 1 (2.7): H1 werd 'Schilder in Maarheeze'. |
| `/locaties/maarheeze` | [Naam] · Maarheeze · Google | Lege reviewplek uit ronde 1; vervangen door de reviewquotes van het live template. |

## Nog te controleren

Geen: elke kop en elk tekstblok van main en voor staat op de nieuwe pagina's, en geen pagina is in woorden gedaald.

## Koppen per pagina (na)

<details><summary><code>/</code> (46 koppen)</summary>

- H1 Schilderin Eindhoven
- H2 Wat kunnen we voor u schilderen?
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Lakwerk
- H3 Latex spuiten
- H3 Houtrot sanering
- H2 Uit ons werk
- H2 Recente projecten
- H2 Een schildersbedrijf uit Eindhoven, met een vast aanspreekpunt
- H2 Onze werkwijze
- H3 Contact
- H3 Inspectie & offerte
- H3 Uitvoering
- H3 Oplevering
- H2 Binnenwerk deze winter?
- H3 Ideaal voor de winter
- H2 Klantenervaringen
- H2 Over Schildersbedrijf040
- H3 Schildersbedrijf in Eindhoven
- H3 Onze garanties
- H4 Kwaliteitsgarantie
- H4 Gecertificeerd
- H4 Op tijd
- H4 Tevreden klanten
- H2 Actief in Eindhoven en de regio
- H3 Serviceregio's
- H2 Veelgestelde vragen
- H3 Wat kost een schilder in Eindhoven?
- H3 Hoe herkent u een goede schilder in Eindhoven?
- H3 Welke garantie geeft Schildersbedrijf040 op schilderwerk?
- H3 Kan er het hele jaar door geschilderd worden?
- H3 Werkt Schildersbedrijf040 ook buiten Eindhoven?
- H3 Hoe lang duurt een schilderproject?
- H2 Volg onze projecten
- H3 @schildersbedrijf040
- H3 Schildersbedrijf040
- H3 Blijf op de hoogte van onze projecten
- H2 Benieuwd wat uw klus kost?
- H2 Contact
- H3 Contactgegevens
- H2 Bel mij terug
- H3 Doen we graag!
- H3 Stuur ons een bericht
- H3 Vraag een offerte aan

</details>

<details><summary><code>/over-ons</code> (14 koppen)</summary>

- H1 Over Schildersbedrijf040
- H2 Onze geschiedenis
- H2 Eén team, elk vak
- H2 De mensen achter de kwast
- H3 Vaste collega's
- H2 Waarom kiezen voor Schildersbedrijf040?
- H3 Meer dan 5 jaar ervaring
- H3 Alles onder één dak
- H3 Vakkundig en betrouwbaar
- H3 Persoonlijke aanpak
- H3 Flexibele planning
- H3 Kwaliteitsgarantie
- H2 Klaar voor uw project?
- H3 Offerte aanvragen

</details>

<details><summary><code>/contact</code> (7 koppen)</summary>

- H1 Neemcontact op
- H2 Vraag direct een offerte aan
- H2 Contactgegevens
- H3 TELEFOON
- H3 EMAIL
- H3 ADRES
- H3 OPENINGSTIJDEN

</details>

<details><summary><code>/faq</code> (11 koppen)</summary>

- H1 Veelgesteldevragen
- H3 Wat kost een schilder per m2 in Eindhoven?
- H3 Hoe lang duurt een schilderproject gemiddeld?
- H3 Welke garantie bieden jullie op het schilderwerk?
- H3 Werken jullie met hoogwaardige materialen?
- H3 Kan er het hele jaar door geschilderd worden?
- H3 Hoe bereiden jullie de ondergrond voor?
- H3 Maken jullie gebruik van steigers bij buitenschilderwerk?
- H3 Hoe gaan jullie om met meubilair en vloerbedekking?
- H3 Bieden jullie kleuradvies aan?
- H3 In welke plaatsen zijn jullie actief?

</details>

<details><summary><code>/projecten</code> (2 koppen)</summary>

- H1 Onzeprojecten
- H2 Laatste Projecten

</details>

<details><summary><code>/diensten/binnenschilderwerk</code> (45 koppen)</summary>

- H1 Binnenschilderwerk in Eindhoven
- H2 Wat is professioneel binnenschilderwerk?
- H2 Wat kost binnenschilderwerk?
- H2 Binnenwerk in de winter
- H2 Liever een deel zelf doen?
- H3 Prijzen binnenschilderwerk
- H2 Soorten binnenschilderwerk
- H3 Muren & plafonds
- H3 Kozijnen & deuren lakken
- H3 Trappen & balustrades
- H3 Houtwerk voorbehandelen
- H3 Kleuradvies
- H3 Schilderwerk bedrijfspanden
- H3 Behangen
- H3 Schilderen in de winter
- H2 Resultaat waar u trots op bent
- H2 Ons werkproces in 4 stappen
- H3 Inspectie & advies
- H3 Offerte op maat
- H3 Voorbereiding
- H3 Schilderwerk & oplevering
- H2 Waarom Schildersbedrijf040 voor uw binnenschilderwerk?
- H3 Hoogst beoordeeld in de regio
- H3 Uitsluitend Boonstoppel A-merk verf
- H3 Vaste prijs, geen verrassingen
- H3 Nette en schone werkplek
- H3 Persoonlijke betrokkenheid
- H3 Binnenschilderwerk in uw regio
- H2 Klanten over ons binnenschilderwerk
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Vragen over binnenschilderwerk
- H3 Nog vragen?
- H3 Wat kost binnenschilderwerk per m² in Eindhoven?
- H3 Hoe lang duurt het om een kamer te schilderen?
- H3 Welke verf gebruikt Schildersbedrijf040 voor binnenschilderwerk?
- H3 Moet ik mijn meubels zelf verplaatsen voor het schilderwerk?
- H3 Kan binnenschilderwerk ook in de winter uitgevoerd worden?
- H3 Wat is het verschil tussen latex en acrylaat muurverf?
- H3 Hoe bereid ik mijn woning voor op binnenschilderwerk?
- H3 Geeft Schildersbedrijf040 garantie op binnenschilderwerk?
- H2 Combineer met
- H2 Binnenschilderwerk bij u in de buurt
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/diensten/buitenschilderwerk</code> (41 koppen)</summary>

- H1 Buitenschilderwerk in Eindhoven
- H2 Waarom is buitenschilderwerk zo belangrijk?
- H2 Wat kost buitenschilderwerk?
- H3 Prijzen buitenschilderwerk
- H2 Soorten buitenschilderwerk
- H3 Kozijnen & deuren
- H3 Gevels & buitenmuren
- H3 Boeiboorden & windveren
- H3 Dakkapellen
- H3 Houtrot behandeling
- H3 Onderhoudscontract
- H2 Uw gevel verdient vakmanschap
- H2 Ons werkproces in 4 stappen
- H3 Inspectie & houtrot check
- H3 Offerte op maat
- H3 Voorbereiding
- H3 Schilderen & oplevering
- H2 Waarom Schildersbedrijf040 voor uw buitenschilderwerk?
- H3 Grondige houtrot inspectie inbegrepen
- H3 Uitsluitend Boonstoppel buitenverf
- H3 Weersafhankelijke planning
- H3 Vaste prijs, geen verrassingen
- H3 Ervaring met lokale bouwstijlen
- H3 Buitenschilderwerk in uw regio
- H2 Klanten over ons buitenschilderwerk
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Vragen over buitenschilderwerk
- H3 Nog vragen?
- H3 Wat kost buitenschilderwerk per m² in 2026?
- H3 Wanneer is het beste seizoen voor buitenschilderwerk?
- H3 Hoe lang gaat buitenschilderwerk mee?
- H3 Controleert Schildersbedrijf040 op houtrot voor het schilderen?
- H3 Is steigerhuur inbegrepen in de offerte?
- H3 Welke verf gebruikt Schildersbedrijf040 voor buitenschilderwerk?
- H3 Kan buitenschilderwerk ook in het najaar uitgevoerd worden?
- H3 Hoe bereid ik mijn woning voor op buitenschilderwerk?
- H2 Combineer met
- H2 Buitenschilderwerk bij u in de buurt
- H2 Bescherm uw woning tegen de elementen
- H3 Offerte aanvragen

</details>

<details><summary><code>/diensten/behangen</code> (41 koppen)</summary>

- H1 Behangen in Eindhoven
- H2 Wat is professioneel behangen?
- H2 Wat kost behangen?
- H3 Prijzen behangen
- H2 Soorten behang
- H3 Vliesbehang
- H3 Glasvezelbehang
- H3 Vinylbehang
- H3 Fotobehang
- H3 Textiel & natuurbehang
- H3 Overschilderbaar behang
- H2 Behangwerk waar u trots op bent
- H2 Ons werkproces in 4 stappen
- H3 Inspectie & advies
- H3 Offerte op maat
- H3 Voorbereiding
- H3 Behangen & oplevering
- H2 Waarom Schildersbedrijf040 voor uw behangwerk?
- H3 Hoogst beoordeeld in de regio
- H3 Advies over het juiste behangtype
- H3 Vaste prijs, geen verrassingen
- H3 Zorgvuldige voorbereiding
- H3 Persoonlijke betrokkenheid
- H3 Behangen in uw regio
- H2 Klanten over ons behangen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Vragen over behangen
- H3 Nog vragen?
- H3 Wat kost behangen per m² in Eindhoven?
- H3 Welk type behang is het beste voor mijn woning?
- H3 Moet oud behang eerst verwijderd worden?
- H3 Hoe lang duurt het behangen van een kamer?
- H3 Kan Schildersbedrijf040 ook glasvezelbehang aanbrengen en overschilderen?
- H3 Moet de muur voorbehandeld worden voor behangen?
- H3 Wat is het verschil tussen vliesbehang en vinylbehang?
- H3 Geeft Schildersbedrijf040 garantie op behangwerk?
- H2 Combineer met
- H2 Behangen bij u in de buurt
- H2 Klaar voor een nieuwe wand?
- H3 Offerte aanvragen

</details>

<details><summary><code>/diensten/houtrot-sanering</code> (41 koppen)</summary>

- H1 Houtrot sanering in Eindhoven
- H2 Wat is houtrot en waarom is sanering urgent?
- H2 Wat kost houtrot sanering?
- H3 Prijzen houtrot sanering
- H2 Soorten houtrot sanering
- H3 Kozijnen repareren
- H3 Deurkozijnen
- H3 Boeiboorden & windveren
- H3 Dorpels & onderdorpels
- H3 Preventieve behandeling
- H3 Kozijn vervangen
- H2 Repareren is slimmer dan vervangen
- H2 Ons werkproces in 4 stappen
- H3 Inspectie
- H3 Offerte
- H3 Reparatie
- H3 Schilderwerk & oplevering
- H2 Waarom Schildersbedrijf040 voor uw houtrot sanering?
- H3 Gratis houtrot inspectie
- H3 Repareren waar mogelijk, vervangen waar nodig
- H3 Houtrot sanering én schilderwerk in één
- H3 Vaste prijs, geen verrassingen
- H3 Persoonlijke betrokkenheid
- H3 Houtrot sanering in uw regio
- H2 Klanten over ons houtrot sanering
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Vragen over houtrot sanering
- H3 Nog vragen?
- H3 Hoe herken ik houtrot in mijn kozijnen?
- H3 Wat kost houtrot sanering per kozijn?
- H3 Is epoxy houtrot reparatie net zo sterk als nieuw hout?
- H3 Wanneer is houtrot repareren niet meer mogelijk en moet het kozijn vervangen worden?
- H3 In welk seizoen kan houtrot sanering het beste worden uitgevoerd?
- H3 Hoe voorkom ik houtrot aan mijn kozijnen?
- H3 Hoe lang duurt houtrot sanering?
- H3 Combineert Schildersbedrijf040 houtrot sanering met schilderwerk?
- H2 Combineer met
- H2 Houtrot sanering bij u in de buurt
- H2 Houtrot ontdekt? Wacht niet langer
- H3 Offerte aanvragen

</details>

<details><summary><code>/diensten/lakwerk</code> (41 koppen)</summary>

- H1 Lakwerk in Eindhoven
- H2 Wat is professioneel lakwerk?
- H2 Wat kost lakwerk?
- H3 Prijzen lakwerk
- H2 Soorten lakwerk
- H3 Kozijnen lakken
- H3 Deuren lakken
- H3 Trappen lakken
- H3 Radiatoren & leidingen
- H3 Keukenkasten & meubels
- H3 Buitenhoutwerk lakken
- H2 Lakwerk waar u trots op bent
- H2 Ons werkproces in 4 stappen
- H3 Inspectie & advies
- H3 Offerte op maat
- H3 Voorbereiding & gronden
- H3 Lakken & oplevering
- H2 Waarom Schildersbedrijf040 voor uw lakwerk?
- H3 Hoogst beoordeeld in de regio
- H3 Uitsluitend Boonstoppel A-merk lak
- H3 Vaste prijs, geen verrassingen
- H3 Grondige voorbereiding
- H3 Persoonlijke betrokkenheid
- H3 Lakwerk in uw regio
- H2 Klanten over ons lakwerk
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Vragen over lakwerk
- H3 Nog vragen?
- H3 Wat is het verschil tussen hoogglans, zijdeglans en mat lakwerk?
- H3 Hoe lang duurt het voordat lakwerk volledig gedroogd is?
- H3 Welke voorbereiding is nodig voor kozijnen lakken?
- H3 Wat is beter: watergedragen of oplosmiddelhoudende lak?
- H3 Hoeveel kost het om kozijnen te laten lakken in Eindhoven?
- H3 Hoe vaak moeten kozijnen en deuren opnieuw gelakt worden?
- H3 Kan Schildersbedrijf040 ook radiatoren en leidingen lakken?
- H3 Geeft Schildersbedrijf040 garantie op lakwerk?
- H2 Combineer met
- H2 Lakwerk bij u in de buurt
- H2 Klaar voor strak lakwerk?
- H3 Offerte aanvragen

</details>

<details><summary><code>/diensten/latex-spuiten</code> (44 koppen)</summary>

- H1 Latex spuiten in Eindhoven
- H2 Wat is latex spuiten?
- H2 Wat kost latex spuiten?
- H2 Plafond spuiten
- H2 Spuiten of rollen?
- H3 Prijzen latex spuiten
- H2 Soorten latex spuitwerk
- H3 Muren spuiten
- H3 Plafonds spuiten
- H3 Nieuwbouw spuiten
- H3 Renovatie spuitwerk
- H3 Kantoren & bedrijfspanden
- H3 Trappenhuizen & hallen
- H2 Muren en plafonds in recordtijd afgewerkt
- H2 Ons werkproces in 4 stappen
- H3 Inspectie & advies
- H3 Offerte op maat
- H3 Afplakken & voorbereiden
- H3 Spuiten & oplevering
- H2 Waarom Schildersbedrijf040 voor latex spuiten?
- H3 Professionele airless spuitapparatuur
- H3 Hoogst beoordeeld in de regio
- H3 3-5x sneller dan rollen
- H3 Vaste prijs, geen verrassingen
- H3 Nette afplak- en afdekwerkzaamheden
- H3 Latex spuiten in uw regio
- H2 Klanten over ons latex spuiten
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Vragen over latex spuiten
- H3 Nog vragen?
- H3 Wat is het verschil tussen latex spuiten en rollen?
- H3 Maakt latex spuiten veel rommel of overspray?
- H3 Welke oppervlakken zijn geschikt voor latex spuiten?
- H3 Hoe lang duurt het voordat gespoten latex droog is?
- H3 Wat kost latex spuiten per m²?
- H3 Is latex spuiten goedkoper dan rollen?
- H3 Moet ik zelf de kamer leegruimen voor het spuiten?
- H3 Kan latex spuiten ook in de winter?
- H3 Kan Schildersbedrijf040 ook in bewoonde woningen latex spuiten?
- H2 Combineer met
- H2 Latex spuiten bij u in de buurt
- H2 Klaar voor een egaal resultaat?
- H3 Offerte aanvragen

</details>

<details><summary><code>/diensten/winterschilder</code> (36 koppen)</summary>

- H1 Winterschilder in Eindhoven
- H2 Kun je in de winter binnen laten schilderen?
- H2 Is een schilder in de winter goedkoper of sneller beschikbaar?
- H2 Waarom de winter een goed moment is voor binnenwerk
- H2 Hoe bereidt u uw woning voor op binnenwerk in de winter?
- H2 Binnen en buiten combineren
- H3 Prijzen binnenschilderwerk
- H2 Wat kunnen we in de winter voor u doen?
- H3 Binnenschilderwerk
- H3 Latex spuiten
- H3 Lakwerk
- H3 Behangen
- H2 Winterschilder: voor en na
- H2 Zo verloopt binnenwerk in de winter
- H3 Aanvraag en inspectie
- H3 Offerte en planning
- H3 Voorbereiden en schilderen
- H3 Schone oplevering
- H2 Waarom Schildersbedrijf040 voor binnenwerk in de winter?
- H3 5,0 op Google
- H3 Boonstoppel-verf
- H3 Vaste prijs
- H3 Netjes in huis
- H2 Klanten over ons winterschilder
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Vragen over schilderen in de winter
- H3 Nog vragen?
- H3 Moet ik extra stoken of ventileren als er in de winter binnen geschilderd wordt?
- H3 Droogt verf in de winter langzamer?
- H3 Kan ik thuis blijven tijdens het schilderen?
- H3 Schildert Schildersbedrijf040 ook rond de feestdagen?
- H2 Combineer met
- H2 Winterschilder bij u in de buurt
- H2 Plan uw binnenwerk deze winter
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/waalre</code> (34 koppen)</summary>

- H1 Schilder in Waalre
- H2 Binnen- en buitenschilderwerk in Waalre
- H2 Schilderdiensten in Waalre
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Waalre?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Waalre?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Waalre
- H2 Ook actief rond Waalre
- H3 Wat kost een schilder in Waalre?
- H3 Hoe snel kan Schildersbedrijf040 starten in Waalre?
- H3 Werkt Schildersbedrijf040 in heel Waalre?
- H3 Welke garantie biedt Schildersbedrijf040 in Waalre?
- H3 Kan ik kleuradvies krijgen voor mijn woning in Waalre?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/veldhoven</code> (34 koppen)</summary>

- H1 Schilder in Veldhoven
- H2 Binnen- en buitenschilderwerk in Veldhoven
- H2 Schilderdiensten in Veldhoven
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Veldhoven?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Veldhoven?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Veldhoven
- H2 Ook actief rond Veldhoven
- H3 Wat kost schilderwerk in Veldhoven?
- H3 Heeft Schildersbedrijf040 ervaring met woningen in Veldhoven?
- H3 Hoe lang duurt buitenschilderwerk in Veldhoven?
- H3 Gebruikt Schildersbedrijf040 milieuvriendelijke verf in Veldhoven?
- H3 Kan Schildersbedrijf040 ook het trappenhuis schilderen in Veldhoven?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/geldrop</code> (34 koppen)</summary>

- H1 Schilder in Geldrop
- H2 Binnen- en buitenschilderwerk in Geldrop
- H2 Schilderdiensten in Geldrop
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Geldrop?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Geldrop?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Geldrop
- H2 Ook actief rond Geldrop
- H3 Wat kost een schilder in Geldrop?
- H3 Werkt Schildersbedrijf040 ook in Mierlo?
- H3 Hoe lang duurt het schilderen van een woonkamer in Geldrop?
- H3 Biedt Schildersbedrijf040 gratis offertes in Geldrop?
- H3 Kan Schildersbedrijf040 ook bedrijfspanden schilderen in Geldrop?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/nuenen</code> (34 koppen)</summary>

- H1 Schilder in Nuenen
- H2 Binnen- en buitenschilderwerk in Nuenen
- H2 Schilderdiensten in Nuenen
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Nuenen?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Nuenen?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Nuenen
- H2 Ook actief rond Nuenen
- H3 Wat kost schilderwerk in Nuenen?
- H3 Schildert Schildersbedrijf040 ook in Gerwen en Nederwetten?
- H3 Hoe bereidt Schildersbedrijf040 de ondergrond voor in Nuenen?
- H3 Wanneer is de beste periode voor buitenschilderwerk in Nuenen?
- H3 Biedt Schildersbedrijf040 garantie op schilderwerk in Nuenen?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/best</code> (34 koppen)</summary>

- H1 Schilder in Best
- H2 Binnen- en buitenschilderwerk in Best
- H2 Schilderdiensten in Best
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Best?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Best?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Best
- H2 Ook actief rond Best
- H3 Wat kost een schilder in Best?
- H3 Hoe snel kan Schildersbedrijf040 beginnen in Best?
- H3 Werkt Schildersbedrijf040 ook in De Vleut en Naastenbest?
- H3 Welke verfmerken gebruikt Schildersbedrijf040 in Best?
- H3 Kan Schildersbedrijf040 ook latex spuiten in Best?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/son-en-breugel</code> (34 koppen)</summary>

- H1 Schilder in Son en Breugel
- H2 Binnen- en buitenschilderwerk in Son en Breugel
- H2 Schilderdiensten in Son en Breugel
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Son en Breugel?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Son en Breugel?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Son en Breugel
- H2 Ook actief rond Son en Breugel
- H3 Wat kost een schilder in Son en Breugel?
- H3 Werkt Schildersbedrijf040 in zowel Son als Breugel?
- H3 Kan Schildersbedrijf040 ook bedrijfspanden schilderen bij Ekkersrijt?
- H3 Hoe lang duurt het schilderen van een huis in Son en Breugel?
- H3 Biedt Schildersbedrijf040 garantie in Son en Breugel?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/helmond</code> (37 koppen)</summary>

- H1 Schilder in Helmond
- H2 Binnen- en buitenschilderwerk in Helmond
- H3 Brandevoort
- H3 Dierdonk
- H3 Brouwhuis en Rijpelberg
- H2 Schilderdiensten in Helmond
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Helmond?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Helmond?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Helmond
- H2 Ook actief rond Helmond
- H3 Wat kost schilderwerk in Helmond?
- H3 Werkt Schildersbedrijf040 in heel Helmond?
- H3 Kan Schildersbedrijf040 nieuwbouw schilderen in Brandevoort?
- H3 Hoe snel kan Schildersbedrijf040 starten in Helmond?
- H3 Biedt Schildersbedrijf040 garantie op schilderwerk in Helmond?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/valkenswaard</code> (34 koppen)</summary>

- H1 Schilder in Valkenswaard
- H2 Binnen- en buitenschilderwerk in Valkenswaard
- H2 Schilderdiensten in Valkenswaard
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Valkenswaard?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Valkenswaard?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Valkenswaard
- H2 Ook actief rond Valkenswaard
- H3 Wat kost een schilder in Valkenswaard?
- H3 Heeft Schildersbedrijf040 ervaring met woningen in de Tuinwijk van Valkenswaard?
- H3 Hoe snel kan Schildersbedrijf040 starten in Valkenswaard?
- H3 Welke verf gebruikt Schildersbedrijf040 in Valkenswaard?
- H3 Werkt Schildersbedrijf040 ook in Dommelen en Borkel en Schaft?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/oirschot</code> (34 koppen)</summary>

- H1 Schilder in Oirschot
- H2 Binnen- en buitenschilderwerk in Oirschot
- H2 Schilderdiensten in Oirschot
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Oirschot?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Oirschot?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Oirschot
- H2 Ook actief rond Oirschot
- H3 Wat kost schilderwerk aan een monument in Oirschot?
- H3 Heeft Schildersbedrijf040 ervaring met monumenten in Oirschot?
- H3 Is er subsidie beschikbaar voor schilderwerk in Oirschot?
- H3 Hoe lang duurt buitenschilderwerk aan een pand in Oirschot?
- H3 Werkt Schildersbedrijf040 ook in Spoordonk en Middelbeers?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/heeze</code> (34 koppen)</summary>

- H1 Schilder in Heeze
- H2 Binnen- en buitenschilderwerk in Heeze
- H2 Schilderdiensten in Heeze
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Heeze?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Heeze?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Heeze
- H2 Ook actief rond Heeze
- H3 Wat kost een schilder in Heeze?
- H3 Heeft Schildersbedrijf040 ervaring met vrijstaande woningen in Heeze?
- H3 Hoe snel kan Schildersbedrijf040 starten in Heeze?
- H3 Werkt Schildersbedrijf040 ook in Leende en Sterksel?
- H3 Welke garantie biedt Schildersbedrijf040 in Heeze?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/mierlo</code> (34 koppen)</summary>

- H1 Schilder in Mierlo
- H2 Binnen- en buitenschilderwerk in Mierlo
- H2 Schilderdiensten in Mierlo
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Mierlo?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Mierlo?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Mierlo
- H2 Ook actief rond Mierlo
- H3 Wat kost een schilder in Mierlo?
- H3 Heeft Schildersbedrijf040 ervaring met het beschermd dorpsgezicht Het Broek?
- H3 Hoe snel kan Schildersbedrijf040 starten in Mierlo?
- H3 Kan Schildersbedrijf040 ook in Luchen schilderen?
- H3 Welke verf gebruikt Schildersbedrijf040 in Mierlo?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/meerhoven</code> (34 koppen)</summary>

- H1 Schilder in Meerhoven
- H2 Binnen- en buitenschilderwerk in Meerhoven
- H2 Schilderdiensten in Meerhoven
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Meerhoven?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Meerhoven?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Meerhoven
- H2 Ook actief rond Meerhoven
- H3 Wat kost een schilder in Meerhoven?
- H3 Is latex spuiten geschikt voor mijn woning in Meerhoven?
- H3 Hoe snel kan Schildersbedrijf040 starten in Meerhoven?
- H3 Heeft Schildersbedrijf040 ervaring met nieuwbouwwoningen in Meerhoven?
- H3 Werkt Schildersbedrijf040 in alle deelwijken van Meerhoven?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/deurne</code> (34 koppen)</summary>

- H1 Schilder in Deurne
- H2 Binnen- en buitenschilderwerk in Deurne
- H2 Schilderdiensten in Deurne
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Deurne?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Deurne?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Deurne
- H2 Ook actief rond Deurne
- H3 Wat kost een schilder in Deurne?
- H3 Hoe snel kan Schildersbedrijf040 starten met schilderwerk in Deurne?
- H3 Werkt Schildersbedrijf040 in alle wijken van Deurne?
- H3 Is buitenschilderwerk in Deurne extra belangrijk vanwege het landelijke karakter?
- H3 Biedt Schildersbedrijf040 garantie op schilderwerk in Deurne?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/beek-en-donk</code> (34 koppen)</summary>

- H1 Schilder in Beek en Donk
- H2 Binnen- en buitenschilderwerk in Beek en Donk
- H2 Schilderdiensten in Beek en Donk
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Beek en Donk?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Beek en Donk?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Beek en Donk
- H2 Ook actief rond Beek en Donk
- H3 Wat kost een schilder in Beek en Donk?
- H3 Werkt Schildersbedrijf040 in de hele gemeente Laarbeek?
- H3 Heeft Schildersbedrijf040 ervaring met jaren '60 en '70 woningen in Beek en Donk?
- H3 Hoe lang duurt buitenschilderwerk aan een woning in Beek en Donk?
- H3 Welke verf gebruikt Schildersbedrijf040 in Beek en Donk?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/eersel</code> (34 koppen)</summary>

- H1 Schilder in Eersel
- H2 Binnen- en buitenschilderwerk in Eersel
- H2 Schilderdiensten in Eersel
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Eersel?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Eersel?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Eersel
- H2 Ook actief rond Eersel
- H3 Wat kost een schilder in Eersel?
- H3 Heeft Schildersbedrijf040 ervaring met Kempische boerderijen in Eersel?
- H3 Werkt Schildersbedrijf040 ook in Duizel, Steensel en Knegsel?
- H3 Is houtrot sanering in Eersel belangrijk voor mijn woning?
- H3 Hoe lang gaat schilderwerk van Schildersbedrijf040 mee in Eersel?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/bergeijk</code> (34 koppen)</summary>

- H1 Schilder in Bergeijk
- H2 Binnen- en buitenschilderwerk in Bergeijk
- H2 Schilderdiensten in Bergeijk
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Bergeijk?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Bergeijk?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Bergeijk
- H2 Ook actief rond Bergeijk
- H3 Wat kost een schilder in Bergeijk?
- H3 Werkt Schildersbedrijf040 ook in Westerhoven, Riethoven en Luyksgestel?
- H3 Heeft Schildersbedrijf040 ervaring met houten geveldelen in Bergeijk?
- H3 Hoe vaak moet buitenschilderwerk in Bergeijk worden vernieuwd?
- H3 Biedt Schildersbedrijf040 garantie op schilderwerk in Bergeijk?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/locaties/maarheeze</code> (34 koppen)</summary>

- H1 Schilder in Maarheeze
- H2 Binnen- en buitenschilderwerk in Maarheeze
- H2 Schilderdiensten in Maarheeze
- H3 Binnenschilderwerk
- H3 Buitenschilderwerk
- H3 Behangen
- H3 Houtrot Sanering
- H3 Lakwerk
- H3 Latex Spuiten
- H3 Wat kost een schilder in Maarheeze?
- H2 Resultaat waar u trots op bent
- H3 Review uit de buurt
- H2 Waarom Schildersbedrijf040 in Maarheeze?
- H3 Hoogst beoordeeld in de regio
- H3 Premium Boonstoppel verf
- H3 Garantie op elk project
- H3 Korte reistijd, lage kosten
- H3 Kennis van lokale bouwstijlen
- H3 5,0 op Google
- H3 4,9 op Werkspot
- H2 Onze werkwijze in 4 stappen
- H3 Contact
- H3 Inspectie
- H3 Offerte
- H3 Uitvoering
- H2 Vragen over schilderwerk in Maarheeze
- H2 Ook actief rond Maarheeze
- H3 Wat kost een schilder in Maarheeze?
- H3 Werkt Schildersbedrijf040 ook in Soerendonk en Gastel?
- H3 Heeft Schildersbedrijf040 ervaring met Brabantse boerderijen in Maarheeze?
- H3 Hoe beschermt Schildersbedrijf040 het houtwerk van mijn woning in Maarheeze?
- H3 Biedt Schildersbedrijf040 garantie op schilderwerk in Maarheeze?
- H2 Klaar voor een frisse start?
- H3 Offerte aanvragen

</details>

<details><summary><code>/blog</code> (7 koppen)</summary>

- H1 Schildertipsen advies
- H2 Plafond Schilderen, uitleg en tips van een schilder
- H2 Verven Na Behang: Alles Wat Je Moet Weten [2026 Gids]
- H2 BTW Tarief Schilderwerk: Alle Regels voor 2026
- H2 Hoe Schilder je een Deur? Stappenplan Zonder Strepen
- H2 Hoe Verf je een Muur? Complete Handleiding van A tot Z
- H2 Liever uitbesteden?

</details>

<details><summary><code>/blog/btw-tarief-schilderwerk</code> (14 koppen)</summary>

- H1 BTW Tarief Schilderwerk: Alle Regels voor 2026
- H2 Het verschil tussen 9% en 21% BTW bij schilderwerk
- H2 Wanneer geldt het lage BTW-tarief van 9%?
- H2 Wanneer geldt het hoge BTW-tarief van 21%?
- H2 Concrete rekenvoorbeelden
- H3 Voorbeeld 1: Binnenschilderwerk rijtjeshuis (bouwjaar 1985)
- H3 Voorbeeld 2: Nieuwbouwwoning (opgeleverd 2025)
- H3 Voorbeeld 3: Buitenschilderwerk vrijstaande woning
- H2 Veelgemaakte fouten en hoe je ze voorkomt
- H2 Wat betekent dit voor jouw project?
- H3 Hulp Nodig Bij Uw Project?
- H2 FAQ: BTW & Kosten
- H3 Jordy Jacobs
- H3 Hulp Nodig?

</details>

<details><summary><code>/blog/hoe-schilder-je-een-deur</code> (15 koppen)</summary>

- H1 Hoe Schilder je een Deur? Stappenplan Zonder Strepen
- H2 Dit heb je nodig
- H2 Stap 1: De deur demonteren en voorbereiden
- H2 Stap 2: Schuren – de basis van elk goed resultaat
- H2 Stap 3: Ontvetten en repareren
- H2 Stap 4: Gronden met primer
- H2 Stap 5: De eerste laklaag aanbrengen
- H2 Stap 6: Tussenschuren en de tweede laklaag
- H2 Stap 7: Drogen en monteren
- H2 Veelgemaakte fouten en hoe je ze voorkomt
- H2 Wanneer toch een professional inschakelen?
- H3 Hulp Nodig Bij Uw Project?
- H2 FAQ: How-To
- H3 Jordy Jacobs
- H3 Hulp Nodig?

</details>

<details><summary><code>/blog/hoe-verf-je-een-muur</code> (24 koppen)</summary>

- H1 Hoe Verf je een Muur? Complete Handleiding van A tot Z
- H2 De juiste muurverf kiezen
- H3 Latex vs. acrylaat: wat is het verschil?
- H3 Glansgraad kiezen
- H3 Hoeveel verf heb je nodig?
- H2 De muur voorbereiden
- H3 Stap 1: De muur inspecteren en repareren
- H3 Stap 2: Schuren en stof verwijderen
- H3 Stap 3: Voorstrijken indien nodig
- H3 Stap 4: Afplakken en afdekken
- H2 De techniek: schilderen zonder strepen
- H3 Eerst bijwerken met de kwast
- H3 Dan rollen: de W-techniek
- H3 De tweede laag
- H2 Speciale situaties
- H3 Over behang heen schilderen
- H3 Nicotinevlekken en waterschade
- H3 Schimmel op de muur
- H2 Veelgemaakte fouten
- H2 Wanneer een professional inschakelen?
- H3 Hulp Nodig Bij Uw Project?
- H2 FAQ: How-To
- H3 Jordy Jacobs
- H3 Hulp Nodig?

</details>

<details><summary><code>/blog/plafond-schilderen</code> (20 koppen)</summary>

- H1 Plafond Schilderen, uitleg en tips van een schilder
- H2 Plafond schilderen in de lengte of breedte?
- H3 De vuistregel: richting van het licht
- H3 Waarom dit uitmaakt voor het eindresultaat
- H2 Voorbereiding: plafond schuren voor verven
- H3 Wanneer schuren noodzakelijk is
- H3 Hoe schuur je een plafond goed?
- H2 Welke plafondverf kies je?
- H3 Latex vs muurverf vs kalkverf
- H3 Mat, zijdeglans of hoogglans?
- H2 Plafond schilderen: stap voor stap
- H2 Hoe lang duurt plafond witten?
- H2 5 veelgemaakte fouten bij plafond schilderen
- H2 Hulp nodig? Schakel een vakman in
- H3 Hulp Nodig Bij Uw Project?
- H2 FAQ: How-To
- H3 Jordy Jacobs
- H3 Hulp Nodig?
- H2 Gerelateerde Artikelen
- H3 Hoe Schilder je een Deur? Stappenplan Zonder Strepen

</details>

<details><summary><code>/blog/verven-na-behang</code> (20 koppen)</summary>

- H1 Verven Na Behang: Alles Wat Je Moet Weten [2026 Gids]
- H2 Kun je over behang heen verven?
- H3 Wanneer wel: vliesbehang en glad behang
- H3 Wanneer niet: structuurbehang en los behang
- H2 Behang verwijderen: stap-voor-stap
- H3 Benodigdheden
- H3 Behang weken en verwijderen
- H3 Lijmresten verwijderen
- H2 Muur voorbereiden na behang verwijderen
- H3 Schuren en egaliseren
- H3 Primer of voorstrijk aanbrengen
- H2 Behang sauzen – wanneer en hoe?
- H3 Welke verf gebruik je op behang?
- H3 Tips voor een strak resultaat
- H2 Veelgemaakte fouten bij verven na behang
- H2 Liever een professional? Vraag een offerte aan
- H3 Hulp Nodig Bij Uw Project?
- H2 FAQ: How-To
- H3 Jordy Jacobs
- H3 Hulp Nodig?

</details>

