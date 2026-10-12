// Gegenereerd door scripts/blog-naar-lokaal.mjs. Nieuwe blog: voeg een JSON-bestand toe en een regel hieronder.
import type { BlogPost } from '@/lib/blog'
import beitsenOfLakken from './beitsen-of-lakken.json'
import btwTariefSchilderwerk from './btw-tarief-schilderwerk.json'
import hoeLangDuurtBinnenschilderwerk from './hoe-lang-duurt-binnenschilderwerk.json'
import hoeSchilderJeEenDeur from './hoe-schilder-je-een-deur.json'
import hoeVaakBuitenschilderwerk from './hoe-vaak-buitenschilderwerk.json'
import hoeVerfJeEenMuur from './hoe-verf-je-een-muur.json'
import kitnadenVervangen from './kitnaden-vervangen.json'
import latexSpuitenOfRollen from './latex-spuiten-of-rollen.json'
import plafondSchilderen from './plafond-schilderen.json'
import vervenNaBehang from './verven-na-behang.json'
import wanneerBuitenSchilderen from './wanneer-buiten-schilderen.json'

export const alleBlogs = [beitsenOfLakken, btwTariefSchilderwerk, hoeLangDuurtBinnenschilderwerk, hoeSchilderJeEenDeur, hoeVaakBuitenschilderwerk, hoeVerfJeEenMuur, kitnadenVervangen, latexSpuitenOfRollen, plafondSchilderen, vervenNaBehang, wanneerBuitenSchilderen] as BlogPost[]
