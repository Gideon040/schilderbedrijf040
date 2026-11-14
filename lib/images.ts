// Foto's van de site, lokaal in /public/images met beschrijvende bestandsnamen.
// Bron: Google-bedrijfsprofiel en Cloudinary van Schildersbedrijf040. next/image levert ze als AVIF/WebP.
// Plaats alleen in de alt-tekst als die bekend is; anders [JORDY: plaats] in voortgang.md.

// sfeer: AI-gegenereerd sfeerbeeld. Alleen als sfeer gebruiken: nooit op projectpagina's, nooit als voor/na,
// nooit bij een review en nooit met een tekst die suggereert dat het eigen werk is.
// eigenAlt: de alt-tekst van het beeld zelf gebruiken (projectfoto's en sfeerbeelden), niet de oude vaste alt-teksten
export type SiteImage = { src: string; alt: string; width: number; height: number; sfeer?: boolean; eigenAlt?: boolean }

const img = (file: string, alt: string, width: number, height: number): SiteImage => ({
  src: `/images/${file}`,
  alt,
  width,
  height,
})

export const images = {
  jordy: img('jordy-jacobs-schildersbedrijf040-op-ladder.jpg', 'Jordy Jacobs, eigenaar van Schildersbedrijf040, op een ladder met een verfblik', 1800, 1201),
  binnendeur: img('binnenschilderwerk-binnendeur-wit-gelakt.jpg', 'Wit gelakte binnendeur met glas en kozijn na binnenschilderwerk', 1440, 1800),
  woonkamer: img('binnenschilderwerk-woonkamer-met-tuindeuren.jpg', 'Woonkamer met strak geschilderde wanden en plafond na binnenschilderwerk', 1005, 1104),
  zolder: img('binnenschilderwerk-zolder-renovatie.jpg', 'Zolderverdieping geschilderd tijdens een complete renovatie', 1179, 868),
  horeca: img('binnenschilderwerk-lambrisering-horeca-eindhoven.jpg', 'Donker geschilderde lambrisering in de entree van een horecazaak', 1179, 1462),
  tuinhuis: img('buitenschilderwerk-tuinhuis-wit-geschilderd.jpg', 'Tuinhuis met wit geschilderde gevel, kozijnen en deuren', 1800, 1350),
  villa: img('buitenschilderwerk-vrijstaande-woning-wit.jpg', 'Vrijstaande woning met wit geschilderde gevel en kozijnen', 1350, 1800),
  dakkapel: img('buitenschilderwerk-dakkapel-wit-geschilderd.jpg', 'Wit geschilderde dakkapel na buitenschilderwerk', 1179, 851),
  behang: img('behangen-woonkamer-accentwand-rond-haard.jpg', 'Woonkamer met donker behang als accentwand rond de haard', 1170, 871),
  lakKozijnen: img('lakwerk-kozijnen-buiten-wit-gelakt.jpg', 'Wit gelakte kozijnen en deuren aan een bakstenen woning', 1350, 1800),
  voordeur: img('lakwerk-voordeur-antraciet.jpg', 'Antraciet gelakte voordeur in een bakstenen gevel', 1179, 1534),
  latex: img('latex-spuiten-benedenverdieping-blixembosch-eindhoven.jpg', 'Benedenverdieping in Blixembosch, Eindhoven, met latex gespoten muren en plafond', 1009, 853),
  houtrot: img('houtrot-sanering-kozijn-hersteld-en-geschilderd.jpg', 'Kozijn na houtrot sanering hersteld en wit geschilderd', 1440, 1800),
  logo: img('schildersbedrijf040-logo.png', 'Schildersbedrijf040', 1589, 709),
  og: img('schildersbedrijf040-schilder-eindhoven.jpg', 'Schildersbedrijf040, schilder in Eindhoven', 1200, 630),
} as const

// Sfeerbeelden (fotos/sfeer, omgezet met scripts/fotos-verwerken.py). Alt-tekst beschrijft wat er te zien is.
const sf = (file: string, alt: string): SiteImage => ({ src: `/images/sfeer/${file}.webp`, alt, width: 1920, height: 1086, sfeer: true, eigenAlt: true })

export const sfeer = {
  jaren30: sf('jaren-30-woning', 'Bakstenen jaren 30-woning met witte kozijnen en een groene voordeur'),
  rijtjeshuis: sf('rijtjeshuis-buitenschilderwerk', 'Rij bakstenen woningen met witte kozijnen en een grijze voordeur'),
  kozijn: sf('kozijn-detail', 'Detail van een wit gelakt houten kozijn in een bakstenen gevel'),
  witteGevels: sf('witte-gevels', 'Witte gevels van rijwoningen met gekleurde voordeuren'),
  houtrot: sf('kozijn-houtrot-hersteld', 'Onderhoek van een wit geschilderd houten kozijn boven een stenen vensterbank'),
  voordeur: sf('voordeur-hoogglans', 'Donkerblauwe hoogglans gelakte voordeur met wit kozijn'),
  garagedeuren: sf('garagedeuren-gelakt', 'Rood hoogglans gelakte houten garagedeuren'),
  villaHerfst: sf('villa-herfst', 'Vrijstaande woning met een rode pannendak in herfstkleuren'),
  winter: sf('woonkamer-winter', 'Warme woonkamer in de winter met een trapje bij het raam'),
  entreeOranje: sf('entree-oranje-deur', 'Entree met een oranje gelakte voordeur en witte kozijnen'),
  nieuwbouw: sf('nieuwbouw-gespoten', 'Lege nieuwbouwwoonkamer met strak witte wanden en plafond'),
  woonkamer: sf('woonkamer-greige', 'Woonkamer met wanden in een warme greige tint'),
  zolder: sf('zolder-accentwand', 'Zolderslaapkamer met een oudroze accentwand'),
  behang: sf('behang-botanisch', 'Slaapkamer met donker behang met een botanisch dessin'),
  binnendeuren: sf('binnendeuren', 'Gang met wit gelakte binnendeuren'),
  plafond: sf('plafond-strak', 'Strak wit plafond met inbouwspots'),
  badkamer: sf('badkamer', 'Badkamer met taupe wanden en een vrijstaand bad'),
  gereedschap: sf('schildersgereedschap', 'Schildersgereedschap: kwasten, roller, verfbak, plamuurmes en tape'),
  afplakken: sf('ruimte-afgeplakt', 'Lege kamer met afgeplakte kozijnen en afgedekte vloer'),
  wandHalverwege: sf('wand-halverwege-geschilderd', 'Wand die halverwege in een nieuwe kleur is geschilderd, met trapje'),
  kleurstalen: sf('kleurstalen', 'Kleurstalen en verfblikken op een tafel'),
}
