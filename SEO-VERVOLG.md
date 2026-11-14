# SEO-vervolg: wat buiten de code moet gebeuren

Afvinklijst voor Gideon, opgesteld 14 november 2026 na de livegang van de branch `seo-conversie-nov-2026` (main, commit 4bc8c6b en later).

## 1. Search Console

- [ ] Sitemap opnieuw indienen: `https://schildersbedrijf040.nl/sitemap.xml` (57 URL's).
- [ ] Controleren dat de oude `http://www.`-versie van de homepage (317 kliks dit jaar) naar de nieuwe wordt samengevoegd: URL-inspectie op `http://www.schildersbedrijf040.nl/`.
- [ ] Eerst aanbieden (ontbraken in Search Console):
  - [ ] https://schildersbedrijf040.nl/diensten/kozijnen-schilderen
  - [ ] https://schildersbedrijf040.nl/locaties/geldrop
  - [ ] https://schildersbedrijf040.nl/locaties/valkenswaard
  - [ ] https://schildersbedrijf040.nl/locaties/oirschot
  - [ ] https://schildersbedrijf040.nl/locaties/heeze
  - [ ] https://schildersbedrijf040.nl/locaties/deurne
  - [ ] https://schildersbedrijf040.nl/locaties/beek-en-donk
- [ ] Nieuwe URL's ter indexering aanbieden (14):
  - [ ] https://schildersbedrijf040.nl/reviews
  - [ ] https://schildersbedrijf040.nl/diensten/trap-schilderen
  - [ ] https://schildersbedrijf040.nl/diensten/dakkapel-schilderen
  - [ ] https://schildersbedrijf040.nl/diensten/vve-en-zakelijk
  - [ ] https://schildersbedrijf040.nl/diensten/latex-spuiten-nieuwbouw
  - [ ] https://schildersbedrijf040.nl/kosten/wat-kost-een-schilder
  - [ ] https://schildersbedrijf040.nl/kosten/latex-spuiten
  - [ ] https://schildersbedrijf040.nl/kosten/plafond-schilderen
  - [ ] https://schildersbedrijf040.nl/kosten/kozijnen-schilderen
  - [ ] https://schildersbedrijf040.nl/projecten/witte-dorp-burghplein-eindhoven
  - [ ] https://schildersbedrijf040.nl/projecten/fluwijnstraat-eindhoven
  - [ ] https://schildersbedrijf040.nl/projecten/driehoeksbos-eindhoven
  - [ ] https://schildersbedrijf040.nl/projecten/badkamer-best
  - [ ] https://schildersbedrijf040.nl/projecten/bungalow-best
- [ ] Gewijzigde URL's ter indexering aanbieden (43; de URL-inspectie heeft een daglimiet, dus verdeel over een paar dagen, belangrijkste eerst):
  - [ ] https://schildersbedrijf040.nl
  - [ ] https://schildersbedrijf040.nl/over-ons
  - [ ] https://schildersbedrijf040.nl/contact
  - [ ] https://schildersbedrijf040.nl/faq
  - [ ] https://schildersbedrijf040.nl/projecten
  - [ ] https://schildersbedrijf040.nl/diensten/latex-spuiten
  - [ ] https://schildersbedrijf040.nl/diensten/binnenschilderwerk
  - [ ] https://schildersbedrijf040.nl/diensten/buitenschilderwerk
  - [ ] https://schildersbedrijf040.nl/diensten/kozijnen-schilderen
  - [ ] https://schildersbedrijf040.nl/diensten/gevel-schilderen
  - [ ] https://schildersbedrijf040.nl/diensten/behangen
  - [ ] https://schildersbedrijf040.nl/diensten/lakwerk
  - [ ] https://schildersbedrijf040.nl/diensten/houtrot-sanering
  - [ ] https://schildersbedrijf040.nl/diensten/winterschilder
  - [ ] https://schildersbedrijf040.nl/locaties/waalre
  - [ ] https://schildersbedrijf040.nl/locaties/veldhoven
  - [ ] https://schildersbedrijf040.nl/locaties/geldrop
  - [ ] https://schildersbedrijf040.nl/locaties/nuenen
  - [ ] https://schildersbedrijf040.nl/locaties/best
  - [ ] https://schildersbedrijf040.nl/locaties/son-en-breugel
  - [ ] https://schildersbedrijf040.nl/locaties/helmond
  - [ ] https://schildersbedrijf040.nl/locaties/valkenswaard
  - [ ] https://schildersbedrijf040.nl/locaties/oirschot
  - [ ] https://schildersbedrijf040.nl/locaties/heeze
  - [ ] https://schildersbedrijf040.nl/locaties/mierlo
  - [ ] https://schildersbedrijf040.nl/locaties/meerhoven
  - [ ] https://schildersbedrijf040.nl/locaties/deurne
  - [ ] https://schildersbedrijf040.nl/locaties/beek-en-donk
  - [ ] https://schildersbedrijf040.nl/locaties/eersel
  - [ ] https://schildersbedrijf040.nl/locaties/bergeijk
  - [ ] https://schildersbedrijf040.nl/locaties/maarheeze
  - [ ] https://schildersbedrijf040.nl/blog
  - [ ] https://schildersbedrijf040.nl/blog/beitsen-of-lakken
  - [ ] https://schildersbedrijf040.nl/blog/hoe-lang-duurt-binnenschilderwerk
  - [ ] https://schildersbedrijf040.nl/blog/hoe-vaak-buitenschilderwerk
  - [ ] https://schildersbedrijf040.nl/blog/kitnaden-vervangen
  - [ ] https://schildersbedrijf040.nl/blog/latex-spuiten-of-rollen
  - [ ] https://schildersbedrijf040.nl/blog/wanneer-buiten-schilderen
  - [ ] https://schildersbedrijf040.nl/blog/plafond-schilderen
  - [ ] https://schildersbedrijf040.nl/blog/verven-na-behang
  - [ ] https://schildersbedrijf040.nl/blog/btw-tarief-schilderwerk
  - [ ] https://schildersbedrijf040.nl/blog/hoe-schilder-je-een-deur
  - [ ] https://schildersbedrijf040.nl/blog/hoe-verf-je-een-muur

## 2. Netlify

- [ ] `http://www.schildersbedrijf040.nl` gaat in twee stappen (eerst naar `https://www`, dan naar het kale domein). Netlify forceert https vóór de redirectregels, dus dit is niet in de code op te lossen. Controleer in Netlify bij Domain management of `www` als domeinalias met automatische doorverwijzing naar `schildersbedrijf040.nl` staat; elke stap is wel een 301, en HSTS staat aan.
- [ ] Optioneel: `NEXT_PUBLIC_GTM_ID` toevoegen zodra er een GTM-container is (zie punt 6).

## 3. Google Bedrijfsprofiel

- [ ] Projectfoto's uploaden (alleen na akkoord van de bewoners): Witte Dorp, Fluwijnstraat, Driehoeksbos, bungalow en badkamer Best. Gebruik de bijgesneden versies uit `public/images/projecten/` (zonder huisnummers en personen).
- [ ] Diensten invullen: binnenschilderwerk, buitenschilderwerk, latex spuiten, lakwerk, behangen, houtrot sanering, kozijnen schilderen, gevel schilderen, trap schilderen, dakkapel schilderen, VvE en zakelijk.
- [ ] Werkgebied invullen: Eindhoven en de 17 plaatsen met een eigen pagina (Helmond, Veldhoven, Best, Nuenen, Geldrop, Valkenswaard, Waalre, Son en Breugel, Meerhoven, Oirschot, Heeze, Mierlo, Deurne, Beek en Donk, Eersel, Bergeijk, Maarheeze).
- [ ] Website-link op `https://schildersbedrijf040.nl` (zonder www).
- [ ] Wekelijks een bericht plaatsen, bij voorkeur met een foto van een lopende of afgeronde klus en een link naar de bijbehorende projectpagina.
- [ ] Na elke klus de directe reviewlink sturen (te vinden in het profiel onder "Meer reviews krijgen"). Die link ook invullen in `lib/site.ts` (`schrijfReviewUrl`), dan gebruikt de knop op /reviews hem.

## 4. Links

- [ ] Boonstoppel: vermelding op de dealer- of verwerkerspagina (en bevestigen of Jordy officieel ambassadeur is; dan `boonstoppelAmbassadeur: true` in `lib/site.ts`).
- [ ] Werkspot-profiel: websitelink naar `https://schildersbedrijf040.nl` en het profiel-adres invullen in `lib/site.ts` (`werkspotUrl`).
- [ ] Leveranciers en groothandels waar Schildersbedrijf040 klant is: vragen om een vermelding met link.
- [ ] Lokale sponsoring (sportclub, vereniging, evenement) met een vermelding en link op hun site.

## 5. Reviews

- [ ] Per review de plaats en het type klus invullen in `data/reviews.json`. Makkelijkst: `node scripts/reviews-csv.mjs export`, invullen in Excel, `node scripts/reviews-csv.mjs import`. Een review met plaats verschijnt automatisch als "review uit de buurt" op die locatiepagina.
- [ ] Volledige tekst van de ingekorte reviews g38 en w03 overnemen (w03 is de trap-review van Werkspot).
- [ ] Werkspot-reviews aanvullen (29 op Werkspot, 3 in het bestand).

## 6. Meten

- [ ] Google Tag Manager-container en GA4-property aanmaken.
- [ ] GTM-ID aanleveren en in Netlify zetten als `NEXT_PUBLIC_GTM_ID`.
- [ ] In GTM triggers maken op de events die de site al stuurt: `generate_lead` (formulieren en afspraak-popup), `phone_click`, `whatsapp_click`, `email_click`, en `generate_lead` als conversie in GA4 markeren.
- [ ] Cookiemelding afstemmen op de gekozen instellingen.

## 7. Nulmeting

- [ ] Search Console, Prestaties, laatste 28 dagen: kliks, vertoningen, CTR en gemiddelde positie exporteren (per pagina en per zoekopdracht). Datum noteren.
- [ ] Posities noteren voor de hoofdzoekwoorden uit de tabel in het eindoverzicht (onder andere schilder eindhoven, latex spuiten eindhoven, winterschilder, wat kost een schilder, trap schilderen).
- [ ] Over vier weken (rond 12 december 2026) dezelfde export opnieuw maken en vergelijken.

## 8. Overig

- [ ] Formspree: het huidige abonnement weigert bijlagen. Aanvragen met foto komen nu binnen zonder foto, met een notitie. Voor foto's direct in de aanvraag is een abonnement met bestandsuploads nodig.
- [ ] Testaanvraag "TEST Claude (niet beantwoorden)" van 14-11-2026 in de inbox mag weg.
