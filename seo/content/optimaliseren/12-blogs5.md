---
id: blogs5
url: /blog/btw-tarief-schilderwerk, /blog/hoe-schilder-je-een-deur, /blog/hoe-verf-je-een-muur, /blog/plafond-schilderen, /blog/verven-na-behang
title_oud: (ongewijzigd)
title_nieuw: (ongewijzigd)
meta_description_oud: (ongewijzigd)
meta_description_nieuw: (ongewijzigd)
h1_oud: (ongewijzigd)
h1_nieuw: (ongewijzigd)
sanity_drafts:
  - drafts.blogPost-btw-tarief-schilderwerk
  - drafts.blogPost-hoe-schilder-je-een-deur
  - drafts.blogPost-hoe-verf-je-een-muur
  - drafts.blogPost-plafond-schilderen
  - drafts.blogPost-verven-na-behang
script: scripts/update-blog-blogs5.mjs
open_punten:
  - "Drafts NIET geschreven: SANITY_API_TOKEN in .env.local is alleen-lezen (403, permission 'create' required) en de Sanity-MCP was niet verbonden. Draaien met een Editor-token: SANITY_API_TOKEN=<editor-token> node scripts/update-blog-blogs5.mjs --write (proefrun zonder --write is geslaagd)."
  - "BTW-blog: de live tekst zegt dat materialen altijd onder 21% vallen. Volgens belastingdienst.nl vallen de gebruikte materialen en het voorbereiden bij schilderen van woningen ouder dan 2 jaar ook onder 9%. Gecorrigeerd in de draft (zie hieronder). [JORDY: hoe factureer je nu verf en materiaal bij woningen ouder dan 2 jaar? Als dat 21% is, klopt het met de Belastingdienst niet.]"
  - "BTW-blog, alinea 'De derde fout is geen factuur bewaren': de stelling dat je als particuliere opdrachtgever aansprakelijk kunt worden gesteld voor te weinig gerekende btw heb ik niet kunnen bevestigen bij de Belastingdienst (naheffing loopt normaal via de ondernemer). Niet aangepast; graag laten checken."
  - "BTW-blog: jaartal 2026 in title, metaTitle, metaDescription en FAQ klopt nu (oktober 2026). Per januari 2027 bijwerken; er is geen wijziging van het 9%-tarief voor schilderwerk aangekondigd (wel voor bloemen en ballonvaarten per 2028)."
  - "Deur-blog noemt 'een standaard binnendeur voor €150-€200 inclusief materiaal'; /diensten/lakwerk noemt €80 tot €120 per binnendeur exclusief btw. Bestaande tekst niet aangepast; prijzen graag gelijktrekken. [JORDY]"
  - "Plafond-blog en verven-na-behang hadden al een draft van 8 maart 2026. Die verschilde van de gepubliceerde versie alleen in één ongebruikte link-definitie (opgeschoond). De nieuwe draft neemt die opschoning over, er gaat dus niets verloren."
  - "Vier blogs (deur, muur, plafond, behang) hebben al een slotsectie richting professional. 'Liever laten doen?' komt daarna als laatste H2 (zoals gevraagd). Eventueel later samenvoegen."
---

## Samenvatting wijzigingen

Bestaande tekst blijft staan. Per blog toegevoegd volgens briefing 12:

- **Direct antwoord:** geen van de vijf intro's gaf het antwoord in de eerste 40 tot 60 woorden. Per blog één korte openingsalinea (50 tot 54 woorden) vóór de bestaande intro gezet.
- **Blok "Liever laten doen?"** (H2, anker `#liever-laten-doen` wordt automatisch gemaakt door `components/blog/portable-text.tsx`) met twee alinea's aan het eind van de content, met links naar de passende dienst, `/diensten/winterschilder` en `/contact`, plus klikbaar telefoonnummer (`tel:+31638903004`).
- **FAQ:** alle vijf blogs hadden al minimaal 3 vragen (btw 5, deur 5, muur 5, plafond 8, behang 3). Geen FAQ's toegevoegd. FAQPage-schema wordt al gemaakt uit het veld `faq` in `app/(site)/blog/[slug]/page.tsx`.
- **Dashes:** 63 em/en dashes vervangen (btw 5, deur 13, muur 7, plafond 23, behang 15). Geen nieuwe dashes in de toevoegingen. Koppen "Stap 2: Schuren, de basis..." en "Behang sauzen: wanneer en hoe?" behouden hetzelfde anker.
- **BTW-blog:** materialen-regel en ingangsmoment van de 2 jaar gecorrigeerd volgens belastingdienst.nl, rekenvoorbeelden herberekend.

## Toevoegingen

### 1. btw-tarief-schilderwerk

**Plaats:** vóór de bestaande intro ("Als je een offerte ontvangt...")

Schilderwerk aan een woning die langer dan twee jaar in gebruik is, valt onder het lage BTW-tarief van 9%. Volgens de Belastingdienst geldt dat voor de arbeid, het voorbereidende werk en de materialen die de schilder gebruikt. Voor nieuwbouw jonger dan twee jaar, bedrijfspanden en verf die je zelf koopt, betaal je 21%.

**Plaats:** na "Wat betekent dit voor jouw project?" (einde content)

## Liever laten doen?

Wil je je woning laten schilderen en meteen weten welk BTW-tarief op jouw offerte hoort? Schildersbedrijf040 schildert woningen in Eindhoven en omgeving en zet de BTW per post op de offerte. Wat we binnen doen en wat dat per vierkante meter kost, lees je op de pagina over [binnenschilderwerk](/diensten/binnenschilderwerk).

Binnenschilderwerk loopt in de winter gewoon door, want verf droogt binnen bij kamertemperatuur goed en het BTW-tarief is in januari hetzelfde als in juni. Lees meer over [binnen schilderen in de winter](/diensten/winterschilder). Wil je een offerte met de juiste BTW? [Vraag een gratis offerte aan](/contact) of bel [06-38903004](tel:+31638903004).

> Let op: "zet de BTW per post op de offerte" leunt op de bestaande zin in de blog ("Bij Schildersbedrijf040 ontvang je altijd een transparante offerte met gesplitste arbeids- en materiaalkosten"). [JORDY: bevestigen.]

### 2. hoe-schilder-je-een-deur

**Plaats:** vóór de bestaande intro

Een deur schilder je zo: haal de deur uit de sponning en leg hem plat, verwijder het beslag, schuur met korrel 180, ontvet en plamuur, grond waar het hout kaal is en breng twee dunne laklagen aan met tussenschuren op korrel 240. Door de droogtijden ben je met één binnendeur minstens twee dagen bezig.

*(Alle stappen en korrels komen uit de blog zelf; "minstens twee dagen" volgt uit de droogtijden in de blog: primer min. 4 uur, 16 uur tussen laklagen, 24 uur voor montage.)*

**Plaats:** na "Wanneer toch een professional inschakelen?" (einde content)

## Liever laten doen?

Heb je geen zin in dagen schuren, gronden en lakken, of wil je meerdere deuren tegelijk aanpakken? Dan kun je het lakken van je deuren uitbesteden aan Schildersbedrijf040. Op de pagina over [lakwerk voor deuren, kozijnen en trappen](/diensten/lakwerk) lees je hoe we werken en wat het kost.

Binnendeuren lakken is binnenwerk en kan dus ook in de wintermaanden: lak droogt binnen bij kamertemperatuur goed. Meer daarover lees je op de pagina over [schilderen in de winter](/diensten/winterschilder). Wil je weten wat het lakken van jouw deuren kost? [Vraag een vrijblijvende offerte aan](/contact) of bel [06-38903004](tel:+31638903004).

### 3. hoe-verf-je-een-muur

**Plaats:** vóór de bestaande intro

Een muur verf je in vaste stappen: kies de juiste muurverf, repareer en schuur de muur, strijk voor als de ondergrond zuigt en plak af. Werk eerst de randen bij met een kwast en rol daarna nat-in-nat in vakken van ongeveer 1 m². Na minimaal 4 uur droogtijd volgt de tweede laag.

**Plaats:** na "Wanneer een professional inschakelen?" (einde content)

## Liever laten doen?

Zie je op tegen een hoog trappenhuis, veel vierkante meters of muren met vlekken die eerst geïsoleerd moeten worden? Schildersbedrijf040 schildert muren en plafonds in woningen in Eindhoven en omgeving. Hoe we dat aanpakken en wat het kost, lees je op de pagina over [binnenschilderwerk](/diensten/binnenschilderwerk). Bij grote oppervlakken of nieuwbouw is [latex spuiten](/diensten/latex-spuiten) vaak sneller dan rollen.

Muren schilderen kan het hele jaar door, ook in de winter: in een verwarmde woning droogt muurverf gewoon goed. Lees meer over [binnenschilderwerk in de winter](/diensten/winterschilder). Benieuwd wat het schilderen van jouw muren kost? [Neem contact op](/contact) voor een gratis offerte of bel [06-38903004](tel:+31638903004).

### 4. plafond-schilderen

**Plaats:** vóór de bestaande intro

Een plafond schilder je in de richting van het licht: begin bij het raam en rol mee met de lichtinval, nat-in-nat in banen van maximaal 1 meter. Schuur en ontstof het plafond eerst, zet de randen aan met een kwast en breng na 4 tot 6 uur droogtijd de tweede laag aan.

**Plaats:** na "Hulp nodig? Schakel een vakman in" (einde content)

## Liever laten doen?

Boven je hoofd werken is zwaar, en strepen in een plafond zie je bij elk zonnetje terug. Wil je dat niet zelf doen, dan kan Schildersbedrijf040 je plafond rollen of spuiten. Bij grote plafonds of een hele verdieping is [latex spuiten](/diensten/latex-spuiten) vaak de snelste route naar een egaal resultaat. Voor een losse kamer valt het plafond onder ons [binnenschilderwerk](/diensten/binnenschilderwerk).

Plafonds schilderen kan ook in de winter, omdat verf binnen bij kamertemperatuur goed droogt. Lees meer over [schilderen in de wintermaanden](/diensten/winterschilder). Wil je een prijs voor jouw plafond? [Vraag een gratis offerte aan](/contact) of bel [06-38903004](tel:+31638903004).

### 5. verven-na-behang

**Plaats:** vóór de bestaande intro

Verven na behang kan op twee manieren. Glad vliesbehang dat overal vastzit, kun je direct sauzen met latex of acrylaat muurverf. Structuurbehang of loszittend behang haal je eerst weg. Daarna verwijder je alle lijmresten, vul en schuur je de muur, breng je een voorstrijk aan en volgen twee lagen muurverf.

**Plaats:** na "Liever een professional? Vraag een offerte aan" (einde content)

## Liever laten doen?

Behang weghalen, lijmresten afwassen, plamuren, voorstrijken en twee lagen verf: met de droogtijden ben je al snel een paar dagen per kamer bezig. Wil je dat uitbesteden? Schildersbedrijf040 haalt het oude behang weg en schildert de muren daarna strak af. Hoe we dat aanpakken, lees je op de pagina over [binnenschilderwerk in Eindhoven en omgeving](/diensten/binnenschilderwerk).

Behang verwijderen en muren schilderen is binnenwerk en kan dus ook in de winter, als de verf bij kamertemperatuur goed droogt. Lees meer over [binnen laten schilderen in de winter](/diensten/winterschilder). Wil je weten wat het kost voor jouw kamer? [Vraag een vrijblijvende offerte aan](/contact) of bel [06-38903004](tel:+31638903004).

## BTW-check (btw-tarief-schilderwerk)

**Bronnen (geraadpleegd 12 oktober 2026):**
- Belastingdienst, Btw-tarief schilderen: "Het schilderen van woningen ouder dan 2 jaar valt onder het 9%-tarief. Het gaat ook om: de gebruikte materialen; het voorbereiden van het schilderwerk." https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/diensten_9_btw/werkzaamheden_aan_woningen/schilderen
- Belastingdienst, Werkzaamheden aan woningen ouder dan 2 jaar: de 2 jaar telt "vanaf de datum waarop een pand voor het eerst als woning wordt gebruikt"; bij twijfel BAG (Kadaster) of schriftelijke verklaring van de klant; bij gemengd gebruik geldt 9% alleen voor het woongedeelte. https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/diensten_9_btw/werkzaamheden_aan_woningen/woningen_ouder_dan_2_jaar
- SRA-Nieuwsbank (januari 2025): goedkeuring voor gemengd gebruik vervallen per 1 juli 2025. https://www.sra.nl/nieuws/000000/2025/01/wijzigingen-toepassing-9-btw-bij-schilderen-en-stukadoren

**Wat klopte:** 9% voor woningen ouder dan 2 jaar; 21% voor nieuwbouw jonger dan 2 jaar en bedrijfspanden; gemengd gebruik alleen woongedeelte 9%; 9% ook voor buitenschilderwerk; jaartal 2026; intro-rekensom (€3.000, verschil €360 = 12%).

**Wat niet klopte en is gecorrigeerd** (oud → nieuw):

| Blok | Oud | Nieuw |
|---|---|---|
| H2 "Wanneer geldt het lage BTW-tarief van 9%?", alinea 1 | ...ouder is dan twee jaar én het gaat om arbeidskosten. Dit betekent dat de woning minimaal twee jaar geleden is opgeleverd door de aannemer. Een woning die in januari 2024 is opgeleverd, komt dus... | Het lage BTW-tarief van 9% is van toepassing als je woning ouder is dan twee jaar. Volgens de Belastingdienst telt die termijn vanaf de datum waarop het pand voor het eerst als woning in gebruik is genomen. Een woning die in januari 2024 voor het eerst is bewoond, komt dus vanaf januari 2026 in aanmerking voor het lage tarief. |
| idem, alinea 2 | Belangrijk: het lage tarief geldt alleen voor de arbeid, niet voor de materialen. ... 9% BTW over de €1.400 (€126) en 21% over de €600 (€126). Totaal: €252 BTW. Had het hoge tarief overal gegolden, dan was dit €420 geweest – een verschil van €168. | Belangrijk: het lage tarief geldt niet alleen voor de arbeid. Volgens de Belastingdienst vallen ook de materialen die de schilder gebruikt en het voorbereidende werk onder 9%. Als je schilder een offerte maakt van €2.000, waarvan €1.400 arbeid en €600 materialen, dan betaal je 9% BTW over het hele bedrag: €180. Had het hoge tarief overal gegolden, dan was dit €420 geweest, een verschil van €240. |
| idem, alinea 3 | Sommige schilders splitsen de offerte niet uit en rekenen overal 21%. ... met apart de arbeidskosten en materiaalkosten. | Sommige schilders rekenen toch 21% over de materialen of over het hele bedrag. Dit is niet in jouw voordeel. Vraag dus altijd om een uitgesplitste offerte met apart de arbeidskosten en materiaalkosten, met per post het BTW-tarief. Een professioneel schildersbedrijf doet dit automatisch. |
| H2 "Wanneer geldt het hoge BTW-tarief van 21%?" | Ten tweede voor alle materiaalkosten, ongeacht de leeftijd van de woning. | Ten tweede voor materialen die je zelf koopt, zoals verf uit de bouwmarkt: alleen materialen die de schilder bij het werk gebruikt, vallen onder 9%. |
| Voorbeeld 1 | ...geldt het lage tarief voor de arbeid. Je betaalt €180 BTW over de arbeid (9%) en €168 over de materialen (21%). Totale BTW: €348. ...€588 geweest – je bespaart €240. | ...geldt het lage tarief voor de arbeid en de materialen. Je betaalt €180 BTW over de arbeid en €72 over de materialen (beide 9%). Totale BTW: €252. Bij volledig hoog tarief was dit €588 geweest: je bespaart €336. |
| Voorbeeld 2 | Dan bespaar je €240. | Dan bespaar je €336. |
| Voorbeeld 3 | Je betaalt €432 BTW over de arbeid en €357 over de materialen. Totaal: €789. Besparing...: €576. | Je betaalt €432 BTW over de arbeid en €153 over de materialen (beide 9%). Totaal: €585. Besparing ten opzichte van volledig hoog tarief: €780. |
| Fout 1 | Daardoor betalen ze 21% over het totaalbedrag, terwijl ze recht hebben op 9% over de arbeid. | Daardoor betalen ze soms 21% over de materialen of over het totaalbedrag, terwijl bij een woning ouder dan twee jaar 9% geldt over arbeid en materialen. |
| FAQ "Welk BTW-tarief geldt voor schilderwerk in 2026?" | ...9% BTW op arbeidskosten en 21% op materialen. | Voor woningen ouder dan 2 jaar geldt 9% BTW op het schilderwerk, inclusief het voorbereidende werk en de materialen die de schilder gebruikt. Voor nieuwbouwwoningen (jonger dan 2 jaar) en bedrijfspanden geldt altijd 21% BTW op zowel arbeid als materialen. |
| FAQ "Hoe weet ik of mijn woning oud genoeg is voor 9% BTW?" | Je woning moet minimaal 2 jaar geleden zijn opgeleverd. De datum van oplevering staat in je koopakte of kun je opvragen bij de gemeente. Twijfel je? Je schilder kan dit voor je controleren aan de hand van het bouwjaar. | Je woning moet minimaal 2 jaar geleden voor het eerst als woning in gebruik zijn genomen. Twijfel je? Het bouwjaar en de gegevens van je woning staan in de Basisregistratie Adressen en Gebouwen (BAG) van het Kadaster. Je schilder kan je ook een verklaring laten tekenen dat de woning ouder is dan 2 jaar. |
| FAQ "Geldt 9% BTW ook voor materiaalkosten?" | Nee, voor materialen geldt altijd 21% BTW... | Ja, als de schilder de materialen levert en gebruikt bij schilderwerk aan een woning ouder dan 2 jaar. De Belastingdienst noemt de gebruikte materialen en het voorbereiden uitdrukkelijk als onderdeel van het 9%-tarief voor schilderen. Koop je de verf zelf, bijvoorbeeld in de bouwmarkt, dan betaal je daarover 21% BTW. |
| FAQ "Wat als mijn schilder geen gesplitste offerte geeft?" | ...is dat een rode vlag – je betaalt dan waarschijnlijk te veel BTW. | Vraag hier expliciet om. Een professioneel schildersbedrijf splitst arbeids- en materiaalkosten standaard uit, zodat je ziet waar je voor betaalt. Controleer ook het tarief: bij schilderwerk aan een woning ouder dan 2 jaar hoort op zowel de arbeid als de materialen 9% BTW te staan. Staat er 21%, vraag dan waarom. |
| FAQ "Geldt het lage BTW-tarief ook voor buitenschilderwerk?" | ...9% BTW op de arbeidskosten... | ...9% BTW op de arbeid en de gebruikte materialen... |

**Niet aangepast, wel twijfel:** alinea "De derde fout is geen factuur bewaren" (aansprakelijkheid opdrachtgever), zie open punten. Slotalinea "Wat betekent dit voor jouw project?" (gesplitste offerte) blijft staan; die is na de correctie nog steeds juist.

## Vervangen dashes (63)

Alleen het leesteken is veranderd; de woorden zijn gelijk gebleven.

**btw-tarief-schilderwerk (5):** "schilder – de regels" → "schilder: de regels"; "twee jaar – hier is" → "twee jaar: hier is"; drie dashes verdwenen in de gecorrigeerde zinnen hierboven (alinea 2, voorbeeld 1, FAQ 4).

**hoe-schilder-je-een-deur (13):**
- (geen goedkope – investeer → (geen goedkope: investeer
- geen verf in komt – dit voorkomt → geen verf in komt. Dit voorkomt
- H2 Stap 2: Schuren – de basis → Stap 2: Schuren, de basis
- mat aanvoelt – glanzende → mat aanvoelt: glanzende
- Laat volledig drogen – minimaal → Laat volledig drogen: minimaal
- heen – verf vult geen gaten → heen: verf vult geen gaten
- korrel 240 – dit kost → korrel 240. Dit kost
- vlak deel – dit geeft → vlak deel. Dit geeft
- van het blik – niet aan → van het blik, niet aan
- te snel draaien – dit veroorzaakt → te snel draaien. Dit veroorzaakt
- contraproductief – je schuurt je eigen werk weg – maar → contraproductief, je schuurt je eigen werk weg, maar (2)
- inclusief materiaal – en dan → inclusief materiaal, en dan

**hoe-verf-je-een-muur (7):**
- schoon te maken – wrijf je → schoon te maken: wrijf je
- 10-15% extra – je hebt → 10-15% extra: je hebt
- muurvuller – direct uit → muurvuller, direct uit
- overlappingen – strepen die → overlappingen: strepen die
- zinloos – de schimmel → zinloos: de schimmel
- droog is – na 1-2 uur → droog is, na 1-2 uur
- FAQ: natte spons – komen ze los → natte spons. Komen ze los

**plafond-schilderen (23, em dashes):**
- uitstellen — en dat is → uitstellen, en dat is
- één factor — de richting → één factor: de richting
- doorheen komt — in de meeste → doorheen komt. In de meeste
- dwars overheen — waardoor → dwars overheen, waardoor
- hele plafond — vooral → hele plafond, vooral
- te lang — dat veroorzaakt → te lang. Dat veroorzaakt
- voorstrijk aan — dit sluit → voorstrijk aan. Dit sluit
- voor plafonds — het verschil → voor plafonds: het verschil
- wordt aangeboden — deze heeft → wordt aangeboden. Deze heeft
- plafondverf — reken op → plafondverf: reken op
- badkamers en keukens — de lichte → badkamers en keukens: de lichte
- 5 centimeter — dit heet → 5 centimeter. Dit heet
- tweede laag — met een vlekkerig → tweede laag, met een vlekkerig
- verkeert — met scheuren, vlekken of bladderende verf — komt → verkeert, met scheuren, vlekken of bladderende verf, komt (2)
- zichtbare aanzet — een streep → zichtbare aanzet: een streep
- doorgehard — breng → doorgehard. Breng
- en omgeving — van kleine → en omgeving, van kleine
- 06-38903004 — we helpen → 06-38903004, we helpen
- excerpt: het verschil maakt — tips van → het verschil maakt. Tips van
- FAQ: kleuromslag — bijvoorbeeld van geel naar wit — kan → kleuromslag, bijvoorbeeld van geel naar wit, kan (2)
- FAQ: aan te raden — het kost → aan te raden: het kost

**verven-na-behang (15):**
- overgeschilderd te worden – veel → overgeschilderd te worden. Veel
- overgeschilderd behang – en dat → overgeschilderd behang, en dat
- niet los – vooral → niet los. Vooral
- van de muur – gebruik → van de muur. Gebruik
- tegelijk te verwijderen – de onderste → tegelijk te verwijderen: de onderste
- droge muur – voelt het → droge muur. Voelt het
- H2 Behang sauzen – wanneer → Behang sauzen: wanneer
- goede dekking – een dekkende → goede dekking: een dekkende
- alleen maar erger – de verf → alleen maar erger: de verf
- naden controleren – het bespaart → naden controleren. Het bespaart
- één dikke laag – dit geldt → één dikke laag. Dit geldt
- specifieke ondergrond – niet alle → specifieke ondergrond: niet alle
- behang op heeft gezeten – van nieuwbouw → behang op heeft gezeten, van nieuwbouw
- 06-38903004 – we staan → 06-38903004, we staan
- FAQ: A-merk – deze dekt → A-merk: deze dekt

## Interne links toevoegen in bestaande tekst

| Bestaande zin (fragment) | Nieuwe ankertekst | Link naar |
|---|---|---|
| (geen; alle nieuwe links staan in het blok "Liever laten doen?") | | |

Na publicatie: op `/diensten/binnenschilderwerk` (Krijgt links van) een contextuele link naar een van deze blogs toevoegen, bijvoorbeeld bij de FAQ "Hoe bereid ik mijn woning voor op binnenschilderwerk?" naar `/blog/hoe-verf-je-een-muur`. Niet gedaan in deze ronde (alleen Sanity-scope).

## FAQ-aanvulling

Geen. Alle vijf blogs hadden al minimaal 3 FAQ's. Alleen de btw-FAQ's zijn inhoudelijk gecorrigeerd (zie BTW-check).

## Schema

Geen codewijziging. `app/(site)/blog/[slug]/page.tsx` maakt al Article, FAQPage (uit het veld `faq`) en BreadcrumbList. Na publicatie van de drafts bevat het FAQPage-schema van de btw-blog automatisch de gecorrigeerde antwoorden.
