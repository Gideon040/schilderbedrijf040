---
id: 11-projecten
url: /projecten
title_oud: "Projecten | Ons Schilderwerk in Beeld"
title_nieuw: "Projecten | Ons Schilderwerk in Beeld"   # ongewijzigd: geen zoekterm (briefing)
meta_description_oud: "Bekijk onze afgeronde schilderprojecten in Eindhoven en omgeving. Van binnenschilderwerk tot complete renovaties. Volg ons op Instagram voor dagelijkse updates."
meta_description_nieuw: ongewijzigd
h1_oud: "Onze projecten"
h1_nieuw: ongewijzigd
open_punten:
  - "[JORDY: projectcases aanleveren: plaats, woningtype, ruimtes, wat er gedaan is, minimaal drie foto's (voor, tijdens, na), quote met voornaam en toestemming]"
  - "[JORDY: plaats bij de projecten 'Houtrot reparatie met schilderwerk', 'Complete vrijstaande woning buitenschilderwerk' en 'Binnen- en buitenschilderwerk project afgerond']"
---

## Samenvatting wijzigingen

- Filter per dienst en per plaats boven het projectenraster (zonder JavaScript staan alle projecten er gewoon, zoals nu).
- Elk project heeft nu een dienst en, waar bekend, een plaats. Alleen gegevens die al op de site staan: "Afgelakte deur project Eindhoven" (alt), "Latex spuiten project Blixembosch" (Blixembosch, Eindhoven) en "Binnenwerk Restaria Oude Gracht" (Oude Gracht, Eindhoven, zoals op de homepage). Bij de andere drie blijft de plaats leeg tot Jordy die aanlevert.
- Nieuw blok "Ons werk in de regio" met links naar binnen- en buitenschilderwerk, de zes belangrijkste locatiepagina's en contact (interne links uit de briefing).
- Projectcases in het format uit het uitvoeringsplan zijn nog niet geschreven: daarvoor zijn foto's, plaats, ruimtes en een klantquote nodig. Zodra Jordy die aanlevert, komt elke case op een eigen URL (`/projecten/{klus}-{plaats}`, template `templates/projectcase.md`).

## Toevoegingen

### 1. Filter per dienst en plaats
**Plaats:** direct onder de kop "Laatste Projecten", boven het raster.

Knoppen "Alle diensten", Binnenschilderwerk, Buitenschilderwerk, Lakwerk, Latex spuiten, Houtrot sanering (alleen diensten waar een project bij hoort) en "Alle plaatsen", Eindhoven. Nieuwe plaatsen verschijnen vanzelf als een project een plaats krijgt.

### 2. Ons werk in de regio (H2, id `projecten-per-dienst-en-plaats`)
**Plaats:** na het projectenraster, vóór het offerteblok.

Schildersbedrijf040 werkt vanuit Eindhoven voor particulieren en bedrijven in de hele regio. De projecten op deze pagina laten zien wat dat in de praktijk betekent: binnenwerk zoals een gelatexte benedenverdieping in Blixembosch en een gelakte lambrisering in een horecazaak, en buitenwerk zoals een complete vrijstaande woning en houtrot dat is hersteld en overgeschilderd. Met de filter hierboven ziet u alleen de projecten van één dienst of één plaats.

Meer over de aanpak per klus leest u op de pagina's over [binnenschilderwerk](/diensten/binnenschilderwerk) en [buitenschilderwerk laten doen](/diensten/buitenschilderwerk). Woont u buiten Eindhoven? Schildersbedrijf040 werkt onder meer in [Helmond](/locaties/helmond), [Veldhoven](/locaties/veldhoven), [Best](/locaties/best), [Geldrop](/locaties/geldrop), [Nuenen](/locaties/nuenen) en [Valkenswaard](/locaties/valkenswaard). Vraag via [de contactpagina](/contact) een gratis inspectie aan, dan bekijkt Jordy Jacobs uw project ter plekke.

## Interne links toevoegen in bestaande tekst

| Bestaande zin (fragment) | Nieuwe ankertekst | Link naar |
|---|---|---|
| (geen: de bestaande tekst is kort en blijft ongewijzigd) | | |

## FAQ-aanvulling

Geen (briefing vraagt geen FAQ).

## Schema

Ongewijzigd: CollectionPage met ItemList van de projecten en BreadcrumbList. Als de cases er zijn: per case een Article.
