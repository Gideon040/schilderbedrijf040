# Maakt de projectfoto's en sfeerbeelden geschikt voor de site (hoofdstuk 4.4 en 8 van CLAUDE-CODE-INSTRUCTIE.md).
# Bron: fotos/ (niet in git). Doel: public/images/projecten/<slug>/ en public/images/sfeer/ als WebP.
# Uitsneden halen huisnummers en herkenbare personen weg. Foto's die niet netjes bij te snijden waren, staan
# hier niet in (zie VRAGEN-JORDY.md). Draaien vanuit de projectmap: python scripts/fotos-verwerken.py
import json, os
from PIL import Image, ImageOps

BRON = 'fotos'
MAX = 1600  # langste zijde; next/image maakt daar kleinere formaten (srcset) van

# (bronbestand, uitsnede (links, boven, rechts, onder) of None, doelbestand)
PROJECTEN = {
    'witte-dorp-burghplein-eindhoven': [
        ('01-voordeur.jpg', (340, 0, 1536, 2048), 'voordeur-monumentale-woning-witte-dorp-eindhoven'),  # huisnummer weg
        ('02-gevel.jpg', (180, 0, 1536, 2048), 'gevel-monumentale-woning-witte-dorp-eindhoven'),  # huisnummer weg
    ],
    'fluwijnstraat-eindhoven': [
        ('02-voorgevel.jpg', (90, 0, 1536, 2048), 'voorgevel-kozijnen-geschilderd-fluwijnstraat-eindhoven'),  # huisnummer weg
        ('03-achterdeur.jpg', None, 'achterdeur-en-kozijn-geschilderd-fluwijnstraat-eindhoven'),
        ('01-kozijn-en-achterdeur.jpg', (880, 250, 1536, 1900), 'achterdeur-grijs-gelakt-fluwijnstraat-eindhoven'),  # persoon achter het raam weg
    ],
    'driehoeksbos-eindhoven': [
        ('02-voordeur.jpg', None, 'voordeur-oranje-gelakt-driehoeksbos-eindhoven'),
        ('01-kozijnen-entree.jpg', None, 'kozijnen-entree-gelakt-driehoeksbos-eindhoven'),
        ('03-garagedeuren.jpg', None, 'garagedeuren-driehoeksbos-eindhoven'),
        ('04-overstek.jpg', None, 'overstek-geschilderd-met-hoogwerker-driehoeksbos-eindhoven'),
    ],
    # Badkamerfoto's uit de eigen map tonen verzorgingsproducten, verhuisdozen en een spiegeling; daarom de lege versie uit de bungalowmap
    'badkamer-best': [
        ('../bungalow-best/08.jpg', None, 'badkamer-in-twee-kleuren-getext-best'),
    ],
    # 03, 04, 05, 06, 10, 11 en 13 niet gebruikt: mensen buiten zichtbaar
    'bungalow-best': [
        ('09.jpg', (600, 0, 1536, 1700), 'woonruimte-met-daklichten-gespoten-bungalow-best'),
        ('12.jpg', (0, 0, 1400, 850), 'plafond-en-daklichten-gespoten-bungalow-best'),
        ('02.jpg', None, 'kamer-wanden-en-plafond-gespoten-bungalow-best'),
        ('07.jpg', None, 'hal-en-kamers-gespoten-bungalow-best'),
        ('01.jpg', None, 'gang-wanden-en-plafond-gespoten-bungalow-best'),
        ('08.jpg', None, 'badkamer-in-twee-kleuren-bungalow-best'),
    ],
}

SFEER = {
    '01-jaren30-woning.jpg': 'jaren-30-woning',
    '02-rijtjeshuis-buiten.jpg': 'rijtjeshuis-buitenschilderwerk',
    '03-kozijn-detail.jpg': 'kozijn-detail',
    '04-witte-gevels.jpg': 'witte-gevels',
    '05-houtrot-hersteld.jpg': 'kozijn-houtrot-hersteld',
    '06-voordeur-hoogglans.jpg': 'voordeur-hoogglans',
    '09-garagedeuren.jpg': 'garagedeuren-gelakt',
    '10-villa-herfst.jpg': 'villa-herfst',
    '11-winter-binnen.jpg': 'woonkamer-winter',
    '12-entree-oranje-deur.jpg': 'entree-oranje-deur',
    '13-nieuwbouw-gespoten.jpg': 'nieuwbouw-gespoten',
    '14-woonkamer-greige.jpg': 'woonkamer-greige',
    '15-zolder-accentwand.jpg': 'zolder-accentwand',
    '16-behang-botanisch.jpg': 'behang-botanisch',
    '18-binnendeuren.jpg': 'binnendeuren',
    '19-plafond-strak.jpg': 'plafond-strak',
    '20-badkamer.jpg': 'badkamer',
    '21-gereedschap.jpg': 'schildersgereedschap',
    '22-afplakken.jpg': 'ruimte-afgeplakt',
    '23-wand-halverwege.jpg': 'wand-halverwege-geschilderd',
    '24-kleurstalen.jpg': 'kleurstalen',
}

maten = {}

def opslaan(bron, uitsnede, doel, kwaliteit=78, maxzijde=MAX):
    im = ImageOps.exif_transpose(Image.open(bron)).convert('RGB')
    if uitsnede:
        im = im.crop(uitsnede)
    im.thumbnail((maxzijde, maxzijde), Image.LANCZOS)
    os.makedirs(os.path.dirname(doel), exist_ok=True)
    im.save(doel, 'WEBP', quality=kwaliteit, method=6)
    maten['/' + doel.replace('public/', '', 1).replace(os.sep, '/')] = [im.width, im.height, os.path.getsize(doel) // 1024]

for slug, fotos in PROJECTEN.items():
    for bron, uitsnede, naam in fotos:
        opslaan(os.path.normpath(f'{BRON}/projecten/{slug}/{bron}'), uitsnede, f'public/images/projecten/{slug}/{naam}.webp')

for bron, naam in SFEER.items():
    opslaan(f'{BRON}/sfeer/{bron}', None, f'public/images/sfeer/{naam}.webp', kwaliteit=72, maxzijde=1920)

for pad, (w, h, kb) in maten.items():
    print(f'{pad}  {w}x{h}  {kb} kB')
json.dump({k: v[:2] for k, v in maten.items()}, open('scripts/fotos-maten.json', 'w'), indent=1)
