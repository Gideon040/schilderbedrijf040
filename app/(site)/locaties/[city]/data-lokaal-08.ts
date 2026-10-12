import type { Lokaal } from './data-lokaal'

// Briefing 08: Veldhoven, Valkenswaard, Helmond, Best, Geldrop, Nuenen.
// Alleen geverifieerde feiten, met bron in `bronnen`. Ontbreekt iets: [JORDY: ...].
export const lokaal08: Record<string, Lokaal> = {
  veldhoven: {
    tekst:
      "Veldhoven ontstond op 1 mei 1921 uit vier kerkdorpen: Veldhoven-Dorp, Meerveldhoven, Zeelst en Oerle. Na de oorlog groeide Veldhoven wijk voor wijk, van d'Ekker in 1952 tot Zilverackers vanaf 2006. Daardoor verschilt het schilderwerk in Veldhoven sterk per buurt: in de oudere wijken draait het om onderhoud van het buitenhoutwerk, in de jongste wijk vooral om de afwerking binnen.",
    wijken: [
      {
        label: 'Gebouwd vanaf 1962',
        naam: 'Zonderwijk',
        tekst:
          'Een van de eerste grote naoorlogse uitbreidingen van Veldhoven. Na ruim zestig jaar zijn kozijnen, deuren en boeiboorden hier vaak toe aan een grondige onderhoudsbeurt.',
      },
      {
        label: 'Gebouwd vanaf 1980',
        naam: 'Heikant',
        tekst:
          'Woningen uit de jaren tachtig, inmiddels ruim veertig jaar oud. Bij die leeftijd loont het om de buitenkozijnen op houtrot te laten controleren voordat er opnieuw geschilderd wordt.',
      },
      {
        label: 'Gebouwd vanaf 2006',
        naam: 'Zilverackers',
        tekst:
          'De jongste wijk van Veldhoven, met circa 2.700 geplande woningen. Binnen vragen de gestucte wanden en plafonds om een egale afwerking, waarvoor latex spuiten goed geschikt is.',
      },
    ],
    alineas: [
      'In Zilverackers en andere recent gebouwde delen van Veldhoven zijn wanden en plafonds vaak nog kaal gestuct of alleen voorzien van een eerste laag. Op zulke grote, vlakke oppervlakken is [latex spuiten in Veldhoven](/diensten/latex-spuiten) sneller en egaler dan rollen. Kozijnen, deuren en trappen binnen krijgen geen latex maar lak; dat valt onder [binnenschilderwerk](/diensten/binnenschilderwerk), waarvoor u gemiddeld €30 tot €35 per m² rekent. Binnenwerk hoeft niet te wachten op mooi weer, zoals u leest op de pagina over [schilderen in de winter](/diensten/winterschilder).',
      "In wijken uit de jaren zestig tot tachtig, zoals de Zonderwijk, 't Look, Cobbeek en Heikant, ligt het accent buiten. Houten kozijnen van die leeftijd zijn al meerdere keren overgeschilderd. Schildersbedrijf040 verwijdert loszittende verf, herstelt houtrot en zet de [kozijnen opnieuw in de verf](/diensten/kozijnen-schilderen) voor gemiddeld €50 tot €100 per kozijn. Een volledige [buitenschilderbeurt van de gevel](/diensten/buitenschilderwerk) kost gemiddeld €35 tot €45 per m².",
      "Rond de oude kernen gaat de bebouwing verder terug. Het Trapjeshuis aan de Kapelstraat-Noord in Zeelst is een monumentaal pand uit 1750 en laat zien hoe oud delen van Veldhoven zijn. Bij een [aanvraag voor een oudere woning](/contact) in Veldhoven-Dorp, Oerle of Zeelst bekijkt Schildersbedrijf040 ter plaatse per onderdeel welk verfsysteem bij het hout past.",
    ],
    metaDescription:
      'Schilder in Veldhoven nodig? Van de Zonderwijk tot Zilverackers: latex spuiten, binnenwerk en kozijnen met Boonstoppel-verf. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Veldhoven (vier kernen samengevoegd 1 mei 1921; d\'Ekker 1952, Zonderwijk 1962, \'t Look 1970, Cobbeek 1973, Heikant 1980, Zilverackers vanaf 2006 met circa 2.700 woningen; Trapjeshuis aan de Kapelstraat-Noord in Zeelst, monumentaal pand uit 1750)',
    ],
  },

  valkenswaard: {
    tekst:
      'Valkenswaard bestaat uit drie kernen: Valkenswaard zelf, Dommelen en Borkel en Schaft. Dommelen en Borkel en Schaft werden in 1934 bij Valkenswaard gevoegd. De kern van Valkenswaard ontstond uit kleine ontginningen uit de twaalfde eeuw, zoals Geenhoven en Zeelberg, en groeide vanaf 1864 sterk door de sigarenindustrie. Elke kern vraagt daardoor een eigen aanpak van het schilderwerk.',
    wijken: [
      {
        label: 'Sigarenindustrie vanaf 1864',
        naam: 'Valkenswaard-Centrum',
        tekst:
          'Ontstaan uit middeleeuwse ontginningen en gegroeid met de sigarenindustrie, met de Sint-Nicolaaskerk uit 1929 als herkenningspunt. Woningen van uiteenlopende leeftijd staan hier naast elkaar, dus de staat van kozijnen en deuren verschilt per pand.',
      },
      {
        label: 'Uitgebreid na de jaren zestig',
        naam: 'Dommelen',
        tekst:
          'Dommelen telde in 1934 nog 702 inwoners; na de jaren zestig bouwde Valkenswaard er meerdere nieuwe woonwijken. De oudste van die woningen zijn inmiddels meer dan vijftig jaar oud, wat aandacht vraagt voor kozijnen en boeiboorden.',
      },
      {
        label: 'Agrarische kern in het Dommeldal',
        naam: 'Borkel en Schaft',
        tekst:
          'Twee kleine dorpen met Brabantse boerderijen en in beide dorpen een identieke Mariakapel uit 1950 en 1951, de Tweelingkapel. Bij vrijstaande woningen en boerderijen is het buitenhoutwerk hier vaak flink van omvang.',
      },
    ],
    alineas: [
      'In Dommelen en Borkel en Schaft ligt het accent op de buitenkant. Vrijstaande woningen en boerderijen hebben veel buitenhoutwerk, dat dicht bij bos en beekdal langer vochtig blijft. Schildersbedrijf040 controleert eerst kozijnen, deuren en boeiboorden op houtrot en zet daarna een duurzaam systeem met Boonstoppel-verf op. Hoe dat in zijn werk gaat, leest u bij [buitenschilderwerk](/diensten/buitenschilderwerk); voor een gevel rekent u gemiddeld €35 tot €45 per m².',
      'In de oudere straten van Valkenswaard-Centrum bepalen kozijnen en voordeuren het beeld. Bij woningen met originele houten kozijnen is [kozijnen laten schilderen](/diensten/kozijnen-schilderen) vaak de eerste stap, gemiddeld €50 tot €100 per kozijn aan de buitenkant. Binnen gaat het meestal om wanden, plafonds en trappenhuizen die een frisse laag nodig hebben; dat valt onder [binnenschilderwerk in Valkenswaard](/diensten/binnenschilderwerk), gemiddeld €30 tot €35 per m².',
      'Wie via de [contactpagina](/contact) binnen- en buitenwerk tegelijk aanvraagt, kan het werk over het jaar spreiden: binnen in de wintermaanden, buiten vanaf het voorjaar wanneer het droger en warmer is. Waarom binnenwerk in de koude maanden goed uit te voeren is, staat op de pagina over de [winterschilder](/diensten/winterschilder).',
    ],
    metaDescription:
      'Schilder in Valkenswaard, Dommelen of Borkel en Schaft? Schildersbedrijf040 schildert kozijnen, gevels en interieurs met Boonstoppel-verf. Gratis offerte.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Valkenswaard_(plaats) (ontginningen 12e eeuw: Geenhoven, Zeelberg; sigarenindustrie vanaf 1864; Sint-Nicolaaskerk 1929)',
      'https://nl.wikipedia.org/wiki/Dommelen (702 inwoners in 1934, samenvoeging 1934, nieuwe woonwijken na de jaren zestig)',
      'https://nl.wikipedia.org/wiki/Borkel_en_Schaft (twee kernen, agrarisch karakter, Tweelingkapel 1950 tot 1951, bij Valkenswaard in 1934, Dommeldal)',
    ],
  },

  helmond: {
    tekst:
      'Helmond groeide in een paar golven: in de jaren tachtig kwamen er als groeistad duizenden woningen bij in het oosten van de stad, in de jaren negentig volgde Dierdonk en vanaf 1997 Brandevoort. Daardoor staan er in Helmond woningen van heel verschillende leeftijd naast elkaar. Dat vraagt per wijk een andere aanpak: bij jongere woningen gaat het vaak om strak binnenwerk, bij woningen van rond de veertig jaar oud om onderhoud van kozijnen en ander buitenhoutwerk.',
    wijken: [
      {
        label: 'Gebouwd vanaf 1997',
        naam: 'Brandevoort',
        tekst:
          'Vinex-wijk met in het hart De Veste, gebouwd in een traditionele stijl met veel detail in gevels, deuren en kozijnen. Juist dat houtwerk vraagt zorgvuldig lakwerk. Binnen zijn de woningen geschikt voor latex spuiten.',
      },
      {
        label: 'Ontwikkeld vanaf de jaren negentig',
        naam: 'Dierdonk',
        tekst:
          'Woonwijk die begin jaren negentig werd gepland. De woningen zijn nu ruim dertig jaar oud; regelmatig onderhoud van het buitenschilderwerk houdt kozijnen en deuren in goede staat.',
      },
      {
        label: 'Gebouwd 1980 tot 1990',
        naam: 'Brouwhuis en Rijpelberg',
        tekst:
          'De grote uitbreidingswijken aan de oostkant van Helmond uit de groeistadperiode. Bij deze woningen zijn een frisse binnenkant en een controle van de buitenkozijnen op houtrot vaak de eerste stap.',
      },
    ],
    alineas: [
      'In jongere wijken als Brandevoort en Dierdonk draait het binnen meestal om wanden en plafonds die strak en egaal moeten worden. Op grote oppervlakken werkt [latex spuiten in Helmond](/diensten/latex-spuiten) sneller dan rollen, zeker als meerdere kamers tegelijk aan de beurt zijn. Wilt u liever structuur of een patroon op de muur, dan is Schildersbedrijf040 ook uw behanger in Helmond: [behangen](/diensten/behangen) kan van één accentwand tot een complete verdieping. Wanden en plafonds die geschilderd worden, vallen onder [binnenschilderwerk](/diensten/binnenschilderwerk), gemiddeld €30 tot €35 per m².',
      "In de oudere delen van Helmond liggen de wortels van de stad als industriestad. Na de Woningwet van 1911 ontwierpen vier woningbouwverenigingen nieuwe stadswijken voor de arbeiders van de textiel- en metaalbedrijven, zoals de Klaverhof, en in de binnenstad staan Kasteel Helmond en de kubuswoningen van Piet Blom bij theater 't Speelhuis uit 1977. Bij oudere woningen met houten kozijnen levert [kozijnen schilderen](/diensten/kozijnen-schilderen) het meeste op, gemiddeld €50 tot €100 per kozijn; een complete [buitenschilderbeurt](/diensten/buitenschilderwerk) kost gemiddeld €35 tot €45 per m² gevel.",
      'Latex spuiten, behangen en lakwerk binnen hangen niet af van het weer en gaan in de wintermaanden gewoon door; meer daarover op de pagina over de [winterschilder](/diensten/winterschilder). Na een [aanvraag via de contactpagina](/contact) plant Schildersbedrijf040 binnen- en buitenwerk zo, dat het buitenwerk in het voorjaar of de zomer valt.',
    ],
    metaDescription:
      'Schilder in Helmond voor latex spuiten, behangen en kozijnen. Van Brandevoort tot Brouwhuis werkt Schildersbedrijf040 met Boonstoppel-verf. Gratis offerte.',
    bronnen: [
      'https://www.helmond.nl (Feiten en cijfers 2018: Rijpelberg en Brouwhuis 1980 tot 1990)',
      'https://commissiemer.nl/docs/mer/p04/p0470/470-066masterplan.pdf (Masterplan Dierdonk 1991)',
      'https://en.wikipedia.org/wiki/Brandevoort (bouw vanaf ca. 1997, De Veste)',
      "https://en.wikipedia.org/wiki/Cube_house (kubuswoningen Helmond, Piet Blom: eerste drie 1974 en 1975, achttien rond theater 't Speelhuis 1977)",
      "https://en.wikipedia.org/wiki/Theater_%27t_Speelhuis (opening oktober 1977)",
      'https://geschiedenis.cognito.nl/upload/files/themablad%20industrialisdatie%20en%20groei%20helmond(2016).pdf (textiel en metaal; na de Woningwet 1911 vier woningbouwverenigingen die nieuwe stadswijken ontwierpen)',
      'https://monumentenregister.cultureelerfgoed.nl/monumenten/pdf/21450 (Kasteel Helmond, rijksmonument)',
    ],
  },

  best: {
    tekst:
      'Rond 1960 bestond Best uit een dorpskern met lintbebouwing richting Aarle, de gehuchten Aarle en De Vleut, de arbeiderswijk Wilhelminadorp en ten zuiden van het Wilhelminakanaal de fabriekswijk Batadorp. Daarna volgden de uitbreidingen: Hoge Akker in de jaren zestig, Speelheide en De Leeuwerik vanaf de tweede helft van de jaren zeventig en Heivelden in de jaren negentig. Elke bouwperiode in Best heeft eigen aandachtspunten voor het schilderwerk.',
    wijken: [
      {
        label: 'Fabriekswijk uit de jaren dertig',
        naam: 'Batadorp',
        tekst:
          'Wijk van schoenfabrikant Bata, die hier in 1933 en 1934 een fabriek bouwde, met arbeiderswoningen met platte daken en meerdere rijksmonumenten. Bij schilderwerk aan deze woningen hoort een kleur- en verfkeuze die past bij het oorspronkelijke, functionele ontwerp.',
      },
      {
        label: 'Gebouwd 1961 tot circa 1972',
        naam: 'Hoge Akker',
        tekst:
          'De eerste naoorlogse uitbreidingswijk van Best, met in 1962 ook de eerste flats van Best aan de Willem de Zwijgerweg. Kozijnen en deuren van ruim zestig jaar oud hebben vaak zoveel verflagen dat ze eerst kaal geschuurd moeten worden.',
      },
      {
        label: 'Jaren negentig',
        naam: 'Heivelden',
        tekst:
          'Grondgebonden eengezinswoningen: vrijstaand aan de randen van de wijk, twee-onder-een-kap en geschakeld richting het midden. Na ruim dertig jaar is het buitenschilderwerk hier toe aan een planmatige onderhoudsbeurt.',
      },
    ],
    alineas: [
      'In Hoge Akker, Speelheide en De Leeuwerik staan woningen uit de jaren zestig en zeventig. Bij die leeftijd is het buitenhoutwerk vaak al meerdere keren overgeschilderd en zit er onder de verf soms houtrot. Schildersbedrijf040 begint daarom met een inspectie van kozijnen, ramen en deuren, herstelt waar nodig en schildert daarna. [Kozijnen buiten laten schilderen](/diensten/kozijnen-schilderen) kost gemiddeld €50 tot €100 per kozijn; voor het complete [buitenschilderwerk](/diensten/buitenschilderwerk) aan de gevel rekent u op €35 tot €45 per m².',
      'In Heivelden en de nieuwere delen van Best ligt het accent vaker binnen. Wanden, plafonds en trappenhuizen in gezinswoningen slijten door dagelijks gebruik; [binnenschilderwerk in Best](/diensten/binnenschilderwerk) kost gemiddeld €30 tot €35 per m². Omdat binnenwerk niet van het weer afhangt, kan het ook in de koude maanden, zie de pagina over [binnen schilderen in de winter](/diensten/winterschilder).',
      'In Batadorp gelden andere uitgangspunten, omdat delen van de fabriekswijk rijksmonument zijn. Bij een rijksmonument kan voor een andere buitenkleur een vergunning nodig zijn. Vermeld daarom bij uw [aanvraag](/contact) dat het om een woning in Batadorp gaat, zodat Schildersbedrijf040 vooraf kan nagaan wat voor uw pand geldt.',
    ],
    metaDescription:
      'Schilder in Best nodig? Van Batadorp en Hoge Akker tot Heivelden: Schildersbedrijf040 schildert kozijnen, gevels en interieurs. Vraag een gratis offerte aan.',
    bronnen: [
      'https://ruimtelijkeplannen.nl/documents/NL.IMRO.07530000HSL-/t_NL.IMRO.07530000HSL-.pdf (bestemmingsplan Hoge Akker, Speelheide en De Leeuwerik, 2007: Best rond 1960, Hoge Akker 1961 tot circa 1972, eerste flats 1962, Speelheide vanaf 1976, De Leeuwerik vanaf 1977)',
      'https://www.ruimtelijkeplannen.nl/documents/NL.IMRO.0753.bpBijenheiong-VG01/t_NL.IMRO.0753.bpBijenheiong-VG01.pdf (Heivelden: grondgebonden eengezinswoningen uit de jaren negentig)',
      'https://en.wikipedia.org/wiki/Batadorp (fabriek 1933 tot 1934, woningen met platte daken, rijksmonumenten)',
      'https://monumentenregister.cultureelerfgoed.nl/monumenten/pdf/512318 (Batadorp, rijksmonumenten)',
    ],
  },

  geldrop: {
    tekst:
      'Geldrop is een oude textielplaats: de textielnijverheid was eeuwenlang de belangrijkste bron van inkomsten en al in 1831 stond er een stoommachine. Rond de oude kern met Kasteel Geldrop groeide het dorp uit met wijken als Coevering, gebouwd rond 1970, en Zesgehuchten ten westen van het spoor. Woningen van heel verschillende leeftijd vragen in Geldrop daarom elk een eigen aanpak.',
    wijken: [
      {
        label: 'Kasteel vermeld in 1403',
        naam: 'Geldrop-Centrum',
        tekst:
          'De oude kern rond Kasteel Geldrop, de Sint-Brigidakerk uit 1891 en negentiende-eeuwse gebouwen uit de textieltijd. Oudere panden hebben hier vaak houten kozijnen en deuren die om zorgvuldig voorbereid lakwerk vragen.',
      },
      {
        label: 'Gebouwd rond 1970',
        naam: 'Coevering',
        tekst:
          'Wijk met drie hoogbouwflats aan de bosrand en verder rijwoningen, twee-onder-een-kapwoningen en vrijstaande huizen, met een winkelcentrum uit 1973. De woningen zijn ruim vijftig jaar oud, een leeftijd waarop buitenkozijnen en boeiboorden regelmatig onderhoud nodig hebben.',
      },
      {
        label: 'Bij Geldrop sinds 1921',
        naam: 'Zesgehuchten',
        tekst:
          'Voormalige gemeente van zes gehuchten, waaronder Hoog Geldrop, Gijzenrooi en Genoenhuis, en nu het bebouwde deel van Geldrop ten westen van het spoor. De bebouwing loopt er uiteen van oude gehuchten tot nieuwere woningen, dus het schilderwerk verschilt per straat.',
      },
    ],
    alineas: [
      'In Coevering gaat het vooral om de buitenkant. Waar de rijwoningen en twee-onder-een-kapwoningen uit de jaren zeventig nog houten kozijnen hebben, staan er meestal al meerdere schilderbeurten op. Schildersbedrijf040 controleert die kozijnen op houtrot, herstelt aangetaste delen en zet ze opnieuw in de verf; [kozijnen laten schilderen](/diensten/kozijnen-schilderen) kost gemiddeld €50 tot €100 per kozijn. Voor een volledige [buitenschilderbeurt van de gevel](/diensten/buitenschilderwerk) rekent u gemiddeld €35 tot €45 per m².',
      'In de oude kern van Geldrop staan panden die ouder zijn dan de naoorlogse wijken. Daar ligt de nadruk binnen vaak op trappen, deuren en plafonds, die zorgvuldig voorbereid moeten worden voordat ze een nieuwe laag krijgen. Dat valt onder [binnenschilderwerk in Geldrop](/diensten/binnenschilderwerk), gemiddeld €30 tot €35 per m² voor wanden en plafonds. Binnenwerk is niet afhankelijk van het weer en kan ook in de wintermaanden, zoals uitgelegd bij de [winterschilder](/diensten/winterschilder).',
      'Vermeld bij een [offerteaanvraag](/contact) het bouwjaar van uw woning; dan weet Schildersbedrijf040 vooraf welke staat van het houtwerk te verwachten is. In Zesgehuchten is dat extra nuttig, omdat de bebouwing daar sterk verschilt tussen de voormalige gehuchten en de nieuwere straten.',
    ],
    metaDescription:
      'Schilder in Geldrop? Van de oude kern tot Coevering en Zesgehuchten: Schildersbedrijf040 schildert kozijnen, gevels en interieurs. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Geldrop (textielnijverheid, stoommachine 1831, Kasteel Geldrop vermeld 1403, Sint-Brigidakerk 1891)',
      'https://nl.wikipedia.org/wiki/Coevering (planning 1968, bouw rond 1970, winkelcentrum 1973, drie hoogbouwflats aan de bosrand, rij-, twee-onder-een-kap- en vrijstaande woningen)',
      'https://nl.wikipedia.org/wiki/Zesgehuchten (zes gehuchten, bij Geldrop 1921, nu het bebouwde deel ten westen van het spoor Eindhoven-Weert)',
    ],
  },

  nuenen: {
    tekst:
      'De gemeente Nuenen, Gerwen en Nederwetten bestaat uit drie kerkdorpen. Na 1945 groeide Nuenen snel uit tot woonplaats voor forensen uit Eindhoven, terwijl Gerwen en Nederwetten hun dorpse karakter hielden. Rond het Park en de Berg ligt de oude kern van Nuenen, waar Vincent van Gogh van 1883 tot 1885 woonde.',
    wijken: [
      {
        label: 'Beschermd dorpsgezicht',
        naam: 'Park en Berg',
        tekst:
          'Het Park, een driehoekig groen plein in het zuiden van de oude kern, is samen met een deel van de Berg beschermd dorpsgezicht. Aan de Berg staat de pastorie met jaartalankers uit 1764, een rijksmonument, en bij panden hier hoort een buitenkleur die past bij het historische straatbeeld.',
      },
      {
        label: 'Oudste nederzetting',
        naam: 'Gerwen',
        tekst:
          'Gerwen is de oudste nederzetting van de gemeente, al groeide het huidige dorp vooral in de negentiende eeuw. Bij de oudere woningen uit die periode is een controle van het buitenhoutwerk op houtrot de eerste stap.',
      },
      {
        label: 'Ontginning uit de twaalfde eeuw',
        naam: 'Nederwetten',
        tekst:
          'Nederwetten ontstond in de twaalfde eeuw als ontginningsdorp bij de priorij Hooidonk en hoort sinds 1821 bij de gemeente. In een landelijk dorp als Nederwetten vraagt het buitenhoutwerk van woningen en bijgebouwen extra aandacht.',
      },
    ],
    alineas: [
      'In het centrum van Nuenen, rond het Park en de Berg, telt bij buitenwerk vooral het straatbeeld. Voor een rijksmonument zoals de pastorie aan de Berg kan bij een andere buitenkleur een vergunning nodig zijn, en ook voor andere panden in het beschermd dorpsgezicht is het verstandig vooraf na te gaan wat er geldt. Bij [buitenschilderwerk in het oude centrum](/diensten/buitenschilderwerk) houdt Schildersbedrijf040 daarom zo nodig de bestaande kleuren aan; een gevel kost gemiddeld €35 tot €45 per m².',
      'De woonwijken die na 1945 rond de oude kern van Nuenen zijn gebouwd, zijn inmiddels tientallen jaren oud. Houten kozijnen zijn daar vaak al een paar keer overgeschilderd, en dan is een goede ondergrond belangrijker dan de nieuwe laag zelf. [Kozijnen laten schilderen](/diensten/kozijnen-schilderen) kost aan de buitenkant gemiddeld €50 tot €100 per kozijn.',
      'Binnen gaat het in Nuenen, Gerwen en Nederwetten om wanden, plafonds, trappen en deuren; [binnenschilderwerk](/diensten/binnenschilderwerk) kost gemiddeld €30 tot €35 per m². Na een [aanvraag](/contact) uit een van de drie kerkdorpen komt Schildersbedrijf040 eerst kijken voordat er een offerte volgt. Wie het werk wil spreiden, laat het binnenwerk in de koude maanden doen, zoals uitgelegd bij de [winterschilder](/diensten/winterschilder), en het buitenwerk in het voorjaar of de zomer.',
    ],
    metaDescription:
      'Schilder in Nuenen, Gerwen of Nederwetten? Schildersbedrijf040 schildert kozijnen, gevels en interieurs, ook in het oude centrum. Vraag een gratis offerte aan.',
    bronnen: [
      'https://nl.wikipedia.org/wiki/Nuenen (Van Gogh 1883 tot 1885, groei tot forensendorp na 1945, driehoekig plein De Berg)',
      'https://en.nuenen.nl/historie-en-algemene-informatie (drie kerkdorpen, Nederwetten 12e eeuw bij priorij Hooidonk, gemeente sinds 1821)',
      'https://nl.wikipedia.org/wiki/Gerwen (oudste nederzetting, huidige dorp vooral 19e eeuw)',
      'https://monumentenregister.cultureelerfgoed.nl/monumenten/pdf/30819 (Berg 26, pastorie, jaartalankers 1764, rijksmonument)',
      'https://archisarchief.cultureelerfgoed.nl/Beschermde_Gezichten/BG265/TOELICHTING_aanwijzing_265.pdf (beschermd dorpsgezicht Park-Nuenen, inclusief deel van de Berg)',
    ],
  },
}
