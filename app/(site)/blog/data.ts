// Blog post type definition
export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  category: string
  keywords: string[]
  author: {
    name: string
    role: string
  }
  content: string
  faq: {
    question: string
    answer: string
  }[]
  relatedSlugs?: string[]
}

export const blogPosts: Record<string, BlogPost> = {
  'btw-tarief-schilderwerk': {
    slug: 'btw-tarief-schilderwerk',
    title: 'BTW Tarief Schilderwerk: Alle Regels voor 2026',
    metaTitle: 'BTW Tarief Schilderwerk 2026 | 9% of 21%? Regels Uitgelegd',
    metaDescription: 'Wanneer betaal je 9% of 21% BTW op schilderwerk? Complete uitleg over BTW tarieven voor schilderwerk in 2026. Inclusief voorbeelden en uitzonderingen.',
    excerpt: 'Het verschil tussen 9% en 21% BTW kan honderden euro\'s schelen. Wij leggen alle regels helder uit.',
    coverImage: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.53.08_myzeda.jpg',
    date: '2026-01-20',
    readTime: '6 min',
    category: 'BTW & Kosten',
    keywords: ['btw tarief schilderwerk', 'btw schilder', '9 procent btw', 'btw renovatie'],
    author: { name: 'Jordy Jacobs', role: 'Eigenaar Schildersbedrijf040' },
    content: `
<p>Als je een offerte ontvangt voor schilderwerk, zie je onderaan een BTW-bedrag staan. Maar waarom rekent de ene schilder 9% en de andere 21%? Het verschil kan bij een project van €3.000 maar liefst €360 schelen. In dit artikel leggen we precies uit welke regels gelden, zodat je nooit voor verrassingen komt te staan.</p>

<h2>Het verschil tussen 9% en 21% BTW bij schilderwerk</h2>

<p>De Belastingdienst hanteert twee BTW-tarieven voor schilderwerk: het lage tarief van 9% en het hoge tarief van 21%. Welk tarief van toepassing is, hangt af van de leeftijd van je woning en het type werkzaamheden. Dit is geen vrije keuze van de schilder, de regels liggen wettelijk vast en worden gecontroleerd.</p>

<p>Waarom bestaat dit verschil eigenlijk? De overheid wil woningonderhoud stimuleren, vooral bij oudere woningen. Door een lager BTW-tarief aan te bieden, worden onderhoudswerkzaamheden betaalbaarder. Het gevolg: meer mensen laten hun woning onderhouden, wat de levensduur van het woningbestand verlengt én werkgelegenheid creëert in de bouw- en onderhoudssector.</p>

<h2>Wanneer geldt het lage BTW-tarief van 9%?</h2>

<p>Het lage BTW-tarief van 9% is van toepassing als je woning ouder is dan twee jaar én het gaat om arbeidskosten. Dit betekent dat de woning minimaal twee jaar geleden is opgeleverd door de aannemer. Een woning die in januari 2024 is opgeleverd, komt dus vanaf januari 2026 in aanmerking voor het lage tarief.</p>

<p>Belangrijk: het lage tarief geldt alleen voor de arbeid, niet voor de materialen. Als je schilder een offerte maakt van €2.000, waarvan €1.400 arbeid en €600 materialen, dan betaal je 9% BTW over de €1.400 (€126) en 21% over de €600 (€126). Totaal: €252 BTW. Had het hoge tarief overal gegolden, dan was dit €420 geweest, een verschil van €168.</p>

<p>Sommige schilders splitsen de offerte niet uit en rekenen overal 21%. Dit is niet in jouw voordeel. Vraag dus altijd om een uitgesplitste offerte met apart de arbeidskosten en materiaalkosten. Een professioneel schildersbedrijf doet dit automatisch.</p>

<h2>Wanneer geldt het hoge BTW-tarief van 21%?</h2>

<p>Het hoge tarief van 21% geldt in drie situaties. Ten eerste bij nieuwbouwwoningen jonger dan twee jaar, hier is geen uitzondering mogelijk. Ten tweede voor alle materiaalkosten, ongeacht de leeftijd van de woning. En ten derde voor schilderwerk aan bedrijfspanden, winkels en andere niet-woonruimtes.</p>

<p>Let op bij gemengd gebruik: heb je een woning met een praktijkruimte of kantoor aan huis? Dan geldt het lage tarief alleen voor het woongedeelte. De schilder moet dan de werkzaamheden splitsen, wat de administratie complexer maakt. Bespreek dit vooraf om misverstanden te voorkomen.</p>

<h2>Concrete rekenvoorbeelden</h2>

<h3>Voorbeeld 1: Binnenschilderwerk rijtjeshuis (bouwjaar 1985)</h3>

<p>Je laat de woonkamer, hal en drie slaapkamers schilderen. De offerte bedraagt €2.800, waarvan €2.000 arbeid en €800 materialen. Omdat de woning ouder is dan twee jaar, geldt het lage tarief voor de arbeid. Je betaalt €180 BTW over de arbeid (9%) en €168 over de materialen (21%). Totale BTW: €348. Bij volledig hoog tarief was dit €588 geweest, je bespaart €240.</p>

<h3>Voorbeeld 2: Nieuwbouwwoning (opgeleverd 2025)</h3>

<p>Dezelfde werkzaamheden in een nieuwbouwwoning. Omdat de woning jonger is dan twee jaar, geldt overal 21% BTW. Over de totale €2.800 betaal je €588 BTW. Tip: kun je het schilderwerk uitstellen tot de woning twee jaar oud is? Dan bespaar je €240.</p>

<h3>Voorbeeld 3: Buitenschilderwerk vrijstaande woning</h3>

<p>Complete buitenschilderbeurt: kozijnen, deuren, boeidelen. Offerte: €6.500, waarvan €4.800 arbeid en €1.700 materialen. De woning is van 1978. Je betaalt €432 BTW over de arbeid en €357 over de materialen. Totaal: €789. Besparing ten opzichte van volledig hoog tarief: €576.</p>

<h2>Veelgemaakte fouten en hoe je ze voorkomt</h2>

<p>De eerste fout die we vaak zien is dat mensen niet om een gesplitste offerte vragen. Daardoor betalen ze 21% over het totaalbedrag, terwijl ze recht hebben op 9% over de arbeid. Dit kost je bij een gemiddeld project €150-€300 extra.</p>

<p>Een tweede fout is aannemen dat alle werkzaamheden onder het lage tarief vallen. Sommige werkzaamheden, zoals het aanbrengen van nieuwe kozijnen (timmerwerkzaamheden), vallen onder andere regels. Schilderwerk, behangen en houtrotherstel vallen wel onder het lage tarief, maar vraag bij twijfel om verduidelijking.</p>

<p>De derde fout is geen factuur bewaren. De Belastingdienst kan tot vijf jaar terug controles uitvoeren. Als blijkt dat ten onrechte het lage tarief is toegepast, kun jij als opdrachtgever aansprakelijk worden gesteld voor het verschil. Bewaar je facturen dus minimaal vijf jaar.</p>

<h2>Wat betekent dit voor jouw project?</h2>

<p>Bij Schildersbedrijf040 ontvang je altijd een transparante offerte met gesplitste arbeids- en materiaalkosten. Zo profiteer je automatisch van het lage BTW-tarief waar je recht op hebt. Woon je in een nieuwbouwwoning? Dan adviseren we je eerlijk over de beste timing voor je schilderproject.</p>

<p>Wil je precies weten wat schilderwerk voor jouw woning kost, inclusief de juiste BTW-berekening? Vraag dan een gratis, vrijblijvende offerte aan. We komen langs, nemen alles door en je weet binnen 48 uur waar je aan toe bent.</p>
`,
    faq: [
      { question: 'Welk BTW-tarief geldt voor schilderwerk in 2026?', answer: 'Voor woningen ouder dan 2 jaar geldt 9% BTW op arbeidskosten en 21% op materialen. Voor nieuwbouwwoningen (jonger dan 2 jaar) en bedrijfspanden geldt altijd 21% BTW op zowel arbeid als materialen.' },
      { question: 'Hoe weet ik of mijn woning oud genoeg is voor 9% BTW?', answer: 'Je woning moet minimaal 2 jaar geleden zijn opgeleverd. De datum van oplevering staat in je koopakte of kun je opvragen bij de gemeente. Twijfel je? Je schilder kan dit voor je controleren aan de hand van het bouwjaar.' },
      { question: 'Geldt 9% BTW ook voor materiaalkosten?', answer: 'Nee, voor materialen geldt altijd 21% BTW, ongeacht de leeftijd van je woning. Alleen de arbeidskosten komen in aanmerking voor het lage tarief. Vraag daarom altijd een offerte met gesplitste kosten.' },
      { question: 'Wat als mijn schilder geen gesplitste offerte geeft?', answer: 'Vraag hier expliciet om. Een professioneel schildersbedrijf splitst arbeids- en materiaalkosten standaard uit. Als een schilder dit weigert of niet kan, is dat een rode vlag, je betaalt dan waarschijnlijk te veel BTW.' },
      { question: 'Geldt het lage BTW-tarief ook voor buitenschilderwerk?', answer: 'Ja, zowel binnen- als buitenschilderwerk komen in aanmerking voor 9% BTW op de arbeidskosten, mits de woning ouder is dan 2 jaar. Dit geldt ook voor kozijnen, deuren, dakgoten en boeidelen.' }
    ],
    relatedSlugs: ['hoe-schilder-je-een-deur', 'hoe-verf-je-een-muur']
  },

  'hoe-schilder-je-een-deur': {
    slug: 'hoe-schilder-je-een-deur',
    title: 'Hoe Schilder je een Deur? Stappenplan Zonder Strepen',
    metaTitle: 'Hoe Schilder je een Deur? | Stappenplan Zonder Strepen',
    metaDescription: 'Leer hoe je een deur schildert zonder strepen. Compleet stappenplan met tips van een vakman: voorbereiding, schuren, gronden en lakken.',
    excerpt: 'Een deur schilderen lijkt simpel, maar zonder de juiste techniek krijg je strepen. Volg dit stappenplan voor een professionele afwerking.',
    coverImage: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873387/WhatsApp_Image_2025-03-27_at_08.02.42_fdixmp.jpg',
    date: '2025-01-18',
    readTime: '10 min',
    category: 'How-To',
    keywords: ['hoe schilder je een deur', 'deur schilderen', 'deur verven', 'deur lakken', 'binnendeur schilderen'],
    author: { name: 'Jordy Jacobs', role: 'Eigenaar Schildersbedrijf040' },
    content: `
<p>Een deur schilderen lijkt een van de makkelijkste klusjes in huis. Kwast erbij, verf erop, klaar. Maar waarom zit je dan vaak met strepen, druppels aan de onderkant of een resultaat dat er na een jaar alweer afbladdert? Het antwoord: de voorbereiding en techniek maken het verschil tussen amateurwerk en een professioneel resultaat dat 7-10 jaar meegaat.</p>

<h2>Dit heb je nodig</h2>

<p>Voordat je begint, verzamel je alle materialen. Niets is vervelender dan halverwege naar de bouwmarkt te moeten omdat je de primer vergeten bent. Je hebt nodig: schuurpapier (korrel 180 voor voorschuren, korrel 240 voor tussenschuren), een schuurspons voor de profileringen, afplaktape, afdekfolie, ontvetter of ammoniak, plamuur voor eventuele gaten, een grondverf of primer, lakverf in de gewenste kleur en glansgraad, een kwast van 5-7 cm breed (geen goedkope, investeer minimaal €8-12 in een kwaliteitskwast), en een kleine roller voor de vlakke delen.</p>

<p>Waarom een kwaliteitskwast zo belangrijk is? Een goedkope kwast verliest haren die in je verflaag blijven plakken. Bovendien houdt een goedkope kwast minder verf vast, waardoor je vaker moet bijdopen en meer kans hebt op strepen. Een kwast van €10 bespaart je uren frustratie en levert een zichtbaar beter resultaat.</p>

<h2>Stap 1: De deur demonteren en voorbereiden</h2>

<p>Haal de deur uit de sponning en leg hem horizontaal op twee schragen of bokken. Waarom horizontaal? Omdat verf de neiging heeft om naar beneden te zakken. Bij een staande deur krijg je druppels aan de onderkant en ophopingen bij de profileringen. Horizontaal schilderen voorkomt dit probleem volledig.</p>

<p>Verwijder alle beslag: deurkruk, slotplaat, scharnieren. Dit kost je 10 minuten, maar bespaart een uur afplakken en corrigeren achteraf. Tape de slotopening en scharnieruitsparing af zodat hier geen verf in komt, dit voorkomt dat de deur straks niet meer goed sluit.</p>

<p>Kun je de deur niet demonteren, bijvoorbeeld bij een ingebouwde schuifdeur? Schilder dan in dunne lagen en werk snel van boven naar beneden. Accepteer dat het resultaat iets minder perfect wordt, of overweeg een professional in te schakelen.</p>

<h2>Stap 2: Schuren, de basis van elk goed resultaat</h2>

<p>Dit is de stap die de meeste mensen overslaan of te snel doen, en precies hier gaat het mis. Schuren zorgt ervoor dat de nieuwe verflaag zich hecht aan de ondergrond. Zonder schuren bladdert je verf binnen 1-2 jaar af, ongeacht hoe duur de verf was.</p>

<p>Begin met korrel 180 en schuur alle vlakke delen en profileringen. Schuur mee met de draad van het hout, nooit dwars erop. Bij profileringen gebruik je een schuurspons die zich aanpast aan de vorm. Schuur tot de gehele deur mat aanvoelt, glanzende plekken betekent dat de verf daar niet goed zal hechten.</p>

<p>Hoeveel tijd kost dit? Reken op 20-30 minuten per zijde bij een standaard binnendeur. Ja, dat is lang. Maar deze investering bepaalt of je resultaat 2 jaar of 10 jaar meegaat. Na het schuren verwijder je al het stof met een vochtige doek of plakdoek. Stofdeeltjes in je verflaag zorgen voor een ruw, onprofessioneel resultaat.</p>

<h2>Stap 3: Ontvetten en repareren</h2>

<p>Ook een geschuurde deur kan nog vet- of vuilresten bevatten van jarenlang aanraken. Neem de deur af met een ontvetter of een sopje van ammoniak (1 eetlepel op 1 liter water). Laat volledig drogen, minimaal 30 minuten.</p>

<p>Inspecteer nu de deur op beschadigingen. Kleine deukjes en gaatjes vul je met houtplamuur. Breng de plamuur aan met een plamuurmes, iets boller dan het oppervlak. Na droging (check de verpakking, meestal 1-2 uur) schuur je de plamuur vlak met korrel 240. Vergeet je deze stap? Dan blijven de beschadigingen zichtbaar door de nieuwe verflaag heen, verf vult geen gaten.</p>

<h2>Stap 4: Gronden met primer</h2>

<p>Een primer of grondverf zorgt voor hechting tussen het hout en de aflaklaag en voorkomt dat het hout de verf opzuigt. Bij een nieuwe, onbehandelde deur is primer verplicht. Bij een eerder geschilderde deur is primer nodig als je tot op het kale hout hebt geschuurd of als de oude verflaag sterk beschadigd was.</p>

<p>Breng de primer aan in een dunne, egale laag. Begin bij de profileringen met een kleine kwast en werk dan de vlakke delen met een roller of bredere kwast. Werk systematisch: eerst alle verdiepte delen, dan de vlakke panelen, dan de stijlen en regels. Zo voorkom je dat je natte delen aanraakt.</p>

<p>Droogtijd: minimaal 4 uur, liever 24 uur. Een niet volledig gedroogde primer geeft problemen bij de aflaklaag. Na droging licht opschuren met korrel 240, dit kost 5 minuten en zorgt voor een gladde basis.</p>

<h2>Stap 5: De eerste laklaag aanbrengen</h2>

<p>Nu komt het echte werk. De techniek is cruciaal: werk altijd in de richting van de houtnerf en zet je streken door tot aan de rand. Stop nooit halverwege een vlak deel, dit geeft zichtbare overgangen.</p>

<p>Begin weer bij de profileringen. Dip je kwast voor maximaal een derde in de verf en strijk het overtollige af aan de rand van het blik, niet aan de binnenkant, want dan droogt daar verf in die later als klontjes in je werk komt. Werk de profileringen met lichte, gelijkmatige streken. Gebruik niet te veel verf: twee dunne lagen zijn altijd beter dan één dikke laag die gaat druipen.</p>

<p>Voor de vlakke delen kun je een kleine lakroller gebruiken. Dit geeft een egaler resultaat dan een kwast, maar werk de randen wel na met een kwast om rolstructuur te voorkomen. Laat de roller niet te snel draaien, dit veroorzaakt spatten en luchtbelletjes.</p>

<p>Na het aanbrengen inspecteer je de deur op druppels en ophopingen. Verwijder deze direct met een droge kwast door licht over het oppervlak te "tippen". Na 10 minuten is de verf te ver uitgehard om nog te corrigeren.</p>

<h2>Stap 6: Tussenschuren en de tweede laklaag</h2>

<p>Hier zit het geheim van een echt professioneel resultaat. Na volledige droging van de eerste laag (minimaal 16 uur, check de verfverpakking) schuur je licht over het gehele oppervlak met korrel 240. Dit voelt contraproductief, je schuurt je eigen werk weg, maar het verwijdert kleine oneffenheden en zorgt voor perfecte hechting van de tweede laag.</p>

<p>De tweede laklaag breng je aan met dezelfde techniek als de eerste. Omdat de ondergrond nu al egaal is, gaat dit sneller en krijg je een nog gladder resultaat. Bij hoogglans lak is een derde laag aan te raden voor een echt spiegelend effect.</p>

<h2>Stap 7: Drogen en monteren</h2>

<p>Laat de deur minimaal 24 uur drogen voordat je het beslag monteert en de deur terughangt. Ja, dit is lang, maar lakverf is na 16 uur "droog" maar nog niet "uitgehard". Als je te vroeg beslag monteert of de deur sluit, plakken oppervlakken aan elkaar en beschadig je je verse verflaag.</p>

<p>Bij het terugplaatsen: controleer of de deur niet langs de sponning schuurt. Een paar verflagen extra kunnen net genoeg zijn om de deur te laten klemmen. Zo ja, schuur de sponning licht bij.</p>

<h2>Veelgemaakte fouten en hoe je ze voorkomt</h2>

<p>De nummer één fout is te dik schilderen. Het lijkt efficiënter om in één keer een dikke laag aan te brengen, maar dikke lagen drogen ongelijkmatig, gaan druipen en bladderen sneller af. Twee dunne lagen kosten nauwelijks meer tijd en leveren een resultaat dat drie keer zo lang meegaat.</p>

<p>Fout twee: schilderen bij verkeerde temperatuur of luchtvochtigheid. Onder 10°C of boven 25°C droogt verf te langzaam of juist te snel, wat leidt tot een slechte hechting. Boven 70% luchtvochtigheid droogt verf niet goed uit. Ideale omstandigheden: 15-20°C en 50-65% luchtvochtigheid.</p>

<p>Fout drie: oude verf niet testen op hechting. Als de oude verflaag al los zit, hecht je nieuwe laag daar ook niet op. Test door een stuk tape stevig aan te drukken en met een ruk los te trekken. Komt er verf mee? Dan moet je de oude laag verder verwijderen.</p>

<h2>Wanneer toch een professional inschakelen?</h2>

<p>Een binnendeur schilderen is een prima doe-het-zelfklus als je de tijd en het geduld hebt. Maar bij buitendeuren, monumentale panden of wanneer je meerdere deuren wilt aanpakken, is een professional vaak voordeliger dan je denkt. Wij schilderen een standaard binnendeur voor €150-€200 inclusief materiaal, en dan heb je een gegarandeerd resultaat zonder een heel weekend kwijt te zijn.</p>

<p>Wil je advies over jouw situatie of een vrijblijvende offerte? Neem gerust contact met ons op.</p>
`,
    faq: [
      { question: 'Hoe lang moet een deur drogen tussen verflagen?', answer: 'Minimaal 16 uur, maar liever 24 uur. De verf voelt na een paar uur droog, maar is nog niet uitgehard. Tussendoor schuren op een niet volledig gedroogde laag beschadigt het oppervlak en geeft een slecht eindresultaat.' },
      { question: 'Moet ik een deur altijd schuren voor het schilderen?', answer: 'Ja, altijd. Schuren zorgt voor hechting tussen de oude en nieuwe verflaag. Zonder schuren bladdert je nieuwe verf binnen 1-2 jaar af, ongeacht de kwaliteit van de verf. Reken op 20-30 minuten schuren per deurzijde.' },
      { question: 'Kan ik een deur schilderen zonder hem te demonteren?', answer: 'Ja, maar het resultaat is minder goed. Bij een hangende deur zakt de verf naar beneden, wat druppels en ophopingen geeft. Kun je de deur echt niet demonteren, werk dan in extra dunne lagen en van boven naar beneden.' },
      { question: 'Hoeveel lagen verf heeft een deur nodig?', answer: 'Minimaal twee laklagen, bij hoogglans liever drie. Daaronder komt een grondlaag als je tot op het kale hout hebt geschuurd. Twee dunne lagen zijn altijd beter dan één dikke laag.' },
      { question: 'Welke verf gebruik ik voor een binnendeur?', answer: 'Voor binnendeur gebruik je alkyd- of acryllak. Alkydlak (terpentinebasis) geeft het meest bestendige resultaat maar geurt sterker. Acryllak (waterbasis) is geurarm en makkelijker te verwerken, maar iets minder slijtvast.' }
    ],
    relatedSlugs: ['hoe-verf-je-een-muur', 'btw-tarief-schilderwerk']
  },

  'hoe-verf-je-een-muur': {
    slug: 'hoe-verf-je-een-muur',
    title: 'Hoe Verf je een Muur? Complete Handleiding van A tot Z',
    metaTitle: 'Hoe Verf je een Muur? | Complete Handleiding met Tips',
    metaDescription: 'Muur schilderen als een pro: voorbereiding, juiste verf kiezen, techniek en tips. Handleiding van een vakman voor een streeploos resultaat.',
    excerpt: 'Een muur verven is de meest voorkomende verfklus, maar toch gaat het vaak mis. Leer hoe je het in één keer goed doet.',
    coverImage: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_08.02.00_o5xgwd.jpg',
    date: '2025-01-15',
    readTime: '12 min',
    category: 'How-To',
    keywords: ['hoe verf je een muur', 'muur schilderen', 'muur verven', 'latex muur', 'muurverf aanbrengen'],
    author: { name: 'Jordy Jacobs', role: 'Eigenaar Schildersbedrijf040' },
    content: `
<p>Een muur verven klinkt als de makkelijkste klus die er bestaat: roller in de verf, over de muur, klaar. Maar waarom krijg je dan strepen, dekt de verf niet na drie lagen, of zie je na een week al vlekken? Het antwoord: muurverf is vergevingsgezinder dan lakverf, maar de voorbereiding en techniek maken nog steeds het verschil.</p>

<h2>De juiste muurverf kiezen</h2>

<p>Voordat je een kwast aanraakt, moet je de juiste verf kiezen. En hier gaat het al vaak mis, want "muurverf" is een breed begrip met grote verschillen in kwaliteit en toepasbaarheid.</p>

<h3>Latex vs. acrylaat: wat is het verschil?</h3>

<p>Latex muurverf is de klassieke keuze voor binnenmuren. Het is betaalbaar (€25-50 voor 10 liter), makkelijk verwerkbaar en in elke bouwmarkt verkrijgbaar. De nadelen: latex is minder goed wasbaar en kan bij vocht vlekken gaan vertonen. Latex is prima voor slaapkamers en woonkamers met normale belasting.</p>

<p>Acrylaat muurverf is de professionele keuze. Het is beter dekkend (je hebt vaak genoeg aan twee lagen waar latex er drie nodig heeft), beter wasbaar en vochtbestendiger. De meerprijs (€40-80 voor 10 liter) verdien je terug in minder verbruik en een duurzamer resultaat. Voor keukens, badkamers en intensief gebruikte ruimtes is acrylaat de betere investering.</p>

<h3>Glansgraad kiezen</h3>

<p>Muurverf komt in verschillende glansgraden: mat, zijdemat en zijdeglans. Mat (glansgraad 2-5) verbergt oneffenheden het beste en geeft een rustige, moderne uitstraling. Het nadeel: matverf is lastig schoon te maken, wrijf je over een vlek, dan krijg je een glimmende plek.</p>

<p>Zijdemat (glansgraad 7-10) is de gulden middenweg: nog steeds vrij egaal, maar beter reinigbaar. Dit is wat de meeste professionals adviseren voor woonruimtes. Zijdeglans (glansgraad 20-30) is goed afwasbaar maar benadrukt elke oneffenheid in de muur.</p>

<h3>Hoeveel verf heb je nodig?</h3>

<p>Reken op 1 liter muurverf per 8-10 m² per laag, afhankelijk van de zuigkracht van de ondergrond. Een gemiddelde woonkamer (20m² muuroppervlak) heeft dus 4-5 liter nodig voor twee lagen. Koop 10-15% extra, je hebt liever verf over dan dat je halverwege naar de winkel moet.</p>

<h2>De muur voorbereiden</h2>

<p>Een goede voorbereiding kost tijd, maar bespaart je dubbel werk achteraf. Skippen van deze stappen is de hoofdoorzaak van een teleurstellend resultaat.</p>

<h3>Stap 1: De muur inspecteren en repareren</h3>

<p>Loop de muur af en markeer alle beschadigingen: gaatjes van pluggen, scheurtjes, beschadigde hoeken. Kleine gaatjes (tot 5mm) vul je met lichte muurvuller, direct uit de tube aan te brengen en binnen een uur schuurbaar. Grotere beschadigingen en scheuren vul je met vulmiddel dat je met een plamuurmes aanbrengt.</p>

<p>Waarom is dit zo belangrijk? Verf vult geen gaten. Die gaatjes die je nu ziet, zie je na twee lagen verf nog steeds. Het kost je 30 minuten om alles te repareren, maar dat scheelt je de frustratie van een muur met zichtbare beschadigingen.</p>

<h3>Stap 2: Schuren en stof verwijderen</h3>

<p>Schuur gerepareerde plekken vlak met korrel 120. Als de oude verflaag beschadigd of poederig is, schuur je de hele muur licht op. Dit verbetert de hechting van de nieuwe verflaag. Verwijder daarna al het stof met een vochtige doek of stofzuiger.</p>

<h3>Stap 3: Voorstrijken indien nodig</h3>

<p>Voorstrijk (fixeer) is nodig bij zuigende of poederige ondergronden. Test dit door een natte spons tegen de muur te houden. Zuigt het water binnen 10 seconden weg? Dan is voorstrijken noodzakelijk. Zonder voorstrijk zuigt de muur de verf op, waardoor je 4-5 lagen nodig hebt in plaats van twee.</p>

<h3>Stap 4: Afplakken en afdekken</h3>

<p>Plak alle kozijnen, plinten, stopcontacten en randen af met schilderstape. Gebruik kwaliteitstape (€5-8 per rol) en geen goedkope afplaktape van een euro. Goedkope tape laat verf onderlopen en trekt bij verwijdering de verflaag los. Dek de vloer af met afdekfolie of karton.</p>

<h2>De techniek: schilderen zonder strepen</h2>

<p>Met de juiste voorbereiding is de verftechniek vrij rechttoe rechtaan, maar er zijn specifieke stappen die het verschil maken.</p>

<h3>Eerst bijwerken met de kwast</h3>

<p>Begin met "bijwerken": schilder met een kwast alle randen, hoeken en moeilijke plekken die je met de roller niet bereikt. Dit zijn de hoeken tussen muur en plafond, rond kozijnen en stopcontacten, en de aansluiting met plinten. Werk een strook van ongeveer 5 centimeter breed.</p>

<h3>Dan rollen: de W-techniek</h3>

<p>Laad de roller door hem door de verf te rollen en dan over het afstrijkrooster af te rollen tot de verf gelijkmatig verdeeld is. Breng de verf aan in een W- of M-patroon: maak eerst grote, diagonale halen om de verf te verdelen, rol dan horizontaal en verticaal uit om een egale laag te krijgen.</p>

<p>Werk in vakken van ongeveer 1 m² en zorg dat de randen nat-in-nat aansluiten op het vorige vak. Wat gebeurt er als je dit niet doet? Als de rand van een vak al droog is voordat je het volgende vak begint, krijg je zichtbare overlappingen, strepen die zelfs door een tweede laag heen zichtbaar blijven.</p>

<h3>De tweede laag</h3>

<p>Laat de eerste laag volledig drogen voordat je de tweede aanbrengt. De droogtijd staat op de verfpot, maar reken in de praktijk op minimaal 4 uur, liever 6-8 uur. Een halfdroge laag die je opnieuw overrolt, trekt los en geeft een rampzalig resultaat.</p>

<h2>Speciale situaties</h2>

<h3>Over behang heen schilderen</h3>

<p>Kan je over behang heen verven? Ja, als het behang goed vastzit, vlak is en niet gestructureerd. Gladvinyl en vliesbehang zijn meestal geschikt. Test eerst of het behang vastzit door met een natte spons over de naden te gaan. Komen de naden los? Dan moet het behang er eerst af.</p>

<h3>Nicotinevlekken en waterschade</h3>

<p>Nicotinevlekken en watervlekken (kringen) trekken door gewone muurverf heen. Hier heb je een isolerende voorstrijk nodig, zoals een schellakproduct. Dit sluit de vlek volledig af. Zonder isolatie blijf je die bruine kringen zien, ook na vijf lagen verf.</p>

<h3>Schimmel op de muur</h3>

<p>Verven over schimmel is zinloos, de schimmel groeit gewoon door onder de verf en komt binnen een paar maanden terug. Verwijder eerst de schimmel met een chlooroplossing en pak de oorzaak aan (vaak: vochtprobleem of slechte ventilatie).</p>

<h2>Veelgemaakte fouten</h2>

<p>De meest voorkomende fout is te weinig verf op de roller. Een "droge" roller geeft strepen en een ongelijke dekking. Liever iets te veel verf, uitrollen tot hij egaal is, dan te weinig waardoor je over halfdroge verf gaat rollen.</p>

<p>Fout twee: de tape te laat verwijderen. Schilderstape moet je verwijderen als de verf nog niet volledig droog is, na 1-2 uur. Is de verf uitgehard, dan trekt de tape de verflaag los en krijg je een rafelige rand.</p>

<p>Fout drie: beginnen zonder de hoeken bij te werken. Als je eerst gaat rollen en dan de hoeken bijwerkt, krijg je zichtbare overgangen. Altijd eerst bijwerken, dan rollen.</p>

<h2>Wanneer een professional inschakelen?</h2>

<p>Een woonkamer of slaapkamer schilderen is een prima weekendklus. Maar bij hoge ruimtes (trappenhuizen, vides), bijzondere ondergronden of wanneer je simpelweg geen tijd hebt, is uitbesteden vaak efficiënter.</p>

<p>Wij schilderen een gemiddelde kamer (20m² muuroppervlak) voor €250-€400 inclusief materiaal, met een gegarandeerd resultaat. Benieuwd wat het voor jouw situatie kost? Vraag vrijblijvend een offerte aan.</p>
`,
    faq: [
      { question: 'Hoeveel lagen muurverf heb ik nodig?', answer: 'Bij een normale kleurverandering zijn twee lagen voldoende. Bij een drastische verandering (donker naar licht) kan een derde laag nodig zijn. Gebruik in dat geval een getinte primer als tussenlaag.' },
      { question: 'Moet ik de muur voorbehandelen voor het schilderen?', answer: 'Dat hangt af van de ondergrond. Test met een natte spons: zuigt het water snel weg? Dan is voorstrijken nodig. Bij een poederige muur moet je fixeren. Bij een schone, niet-zuigende muur kun je direct beginnen.' },
      { question: 'Hoe voorkom ik strepen bij het rollen?', answer: 'Werk in vakken van 1m², breng de verf aan in een W-patroon en rol uit tot een egale laag. Zorg dat de randen nat-in-nat aansluiten op het vorige vak. Neem geen pauzes halverwege een muur.' },
      { question: 'Wat is het verschil tussen latex en acrylaat muurverf?', answer: 'Latex is goedkoper maar minder goed wasbaar en vochtbestendig. Acrylaat dekt beter (vaak 2 lagen in plaats van 3), is beter reinigbaar en geschikter voor keukens en badkamers.' },
      { question: 'Kan ik over oud behang heen schilderen?', answer: 'Ja, als het behang glad is en goed vastzit. Test de naden met een natte spons, komen ze los, dan moet het behang er eerst af. Gestructureerd behang kun je beter verwijderen.' }
    ],
    relatedSlugs: ['hoe-schilder-je-een-deur', 'btw-tarief-schilderwerk']
  }
}

export function getAllPosts(): BlogPost[] {
  return Object.values(blogPosts).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category)
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = blogPosts[slug]
  if (!post?.relatedSlugs) return []
  return post.relatedSlugs.map(s => blogPosts[s]).filter(Boolean)
}
