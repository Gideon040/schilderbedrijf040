// Zet de blogs om van Sanity naar lokale bestanden (de site gebruikt Sanity niet meer).
// Leest data/blog/ruw/*.json (gemaakt met de create-/update-scripts en --json),
// downloadt de afbeeldingen naar public/images/blog/ en schrijft data/blog/<slug>.json + data/blog/index.ts.
// Gebruik: node scripts/blog-naar-lokaal.mjs
import fs from 'node:fs'
import path from 'node:path'

const RUW = 'data/blog/ruw'
const UIT = 'data/blog'
const IMG = 'public/images/blog'
fs.mkdirSync(IMG, { recursive: true })

const docs = fs.readdirSync(RUW).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join(RUW, f), 'utf8')))
const idNaarSlug = Object.fromEntries(docs.map((d) => [d._id, d.slug.current]))

// Sanity-assetref "image-<hash>-<w>x<h>-<ext>" -> CDN-url, afmetingen en extensie
function asset(ref) {
  const m = ref.match(/^image-([a-f0-9]+)-(\d+)x(\d+)-(\w+)$/)
  if (!m) throw new Error(`Onbekende assetref: ${ref}`)
  const [, hash, w, h, ext] = m
  return { hash, width: Number(w), height: Number(h), ext, url: `https://cdn.sanity.io/images/lrd4dy39/production/${hash}-${w}x${h}.${ext}` }
}

const gedownload = {}
async function download(ref, naam) {
  const a = asset(ref)
  if (gedownload[a.hash]) return gedownload[a.hash]
  const bestand = `${naam}.${a.ext}`
  const doel = path.join(IMG, bestand)
  if (!fs.existsSync(doel)) {
    const r = await fetch(a.url)
    if (!r.ok) throw new Error(`Download mislukt (${r.status}): ${a.url}`)
    fs.writeFileSync(doel, Buffer.from(await r.arrayBuffer()))
  }
  gedownload[a.hash] = { src: `/images/blog/${bestand}`, width: a.width, height: a.height }
  return gedownload[a.hash]
}

// Nieuwe blogs krijgen een eigen foto uit de site in plaats van een hergebruikte Sanity-omslag
const eigenCover = {
  'hoe-lang-duurt-binnenschilderwerk': { src: '/images/binnenschilderwerk-woonkamer-met-tuindeuren.jpg', width: 1005, height: 1104 },
  'latex-spuiten-of-rollen': { src: '/images/latex-spuiten-benedenverdieping-blixembosch-eindhoven.jpg', width: 1009, height: 853 },
  'wanneer-buiten-schilderen': { src: '/images/buitenschilderwerk-tuinhuis-wit-geschilderd.jpg', width: 1800, height: 1350 },
  'hoe-vaak-buitenschilderwerk': { src: '/images/buitenschilderwerk-dakkapel-wit-geschilderd.jpg', width: 1179, height: 851 },
  'kitnaden-vervangen': { src: '/images/lakwerk-kozijnen-buiten-wit-gelakt.jpg', width: 1350, height: 1800 },
  'beitsen-of-lakken': { src: '/images/lakwerk-voordeur-antraciet.jpg', width: 1179, height: 1534 },
}

const slugs = []
for (const d of docs) {
  const slug = d.slug.current
  const cover = eigenCover[slug] ?? (await download(d.coverImage.asset._ref, `${slug}-cover`))
  let n = 0
  const content = []
  for (const b of d.content) {
    if (b._type === 'image' && b.asset?._ref) {
      const img = await download(b.asset._ref, `${slug}-${++n}`)
      content.push({ _type: 'image', _key: b._key, ...img, alt: b.alt ?? '', caption: b.caption ?? '' })
    } else content.push(b)
  }
  const post = {
    slug,
    title: d.title,
    metaTitle: d.metaTitle,
    metaDescription: d.metaDescription,
    excerpt: d.excerpt,
    cover,
    date: d.date,
    readTime: d.readTime,
    category: d.category,
    keywords: d.keywords ?? [],
    author: d.author,
    content,
    faq: (d.faq ?? []).map(({ question, answer }) => ({ question, answer })),
    related: (d.relatedPosts ?? []).map((r) => idNaarSlug[r._ref]).filter(Boolean),
  }
  fs.writeFileSync(path.join(UIT, `${slug}.json`), JSON.stringify(post, null, 1) + '\n')
  slugs.push(slug)
  console.log('klaar:', slug, `(${content.length} blokken, ${post.faq.length} FAQ, ${n} afbeeldingen in de tekst)`)
}

// Index met statische imports, zodat de blog zonder fs of CMS werkt
const naam = (s) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase())
const index = [
  '// Gegenereerd door scripts/blog-naar-lokaal.mjs. Nieuwe blog: voeg een JSON-bestand toe en een regel hieronder.',
  "import type { BlogPost } from '@/lib/blog'",
  ...slugs.map((s) => `import ${naam(s)} from './${s}.json'`),
  '',
  `export const alleBlogs = [${slugs.map(naam).join(', ')}] as BlogPost[]`,
  '',
].join('\n')
fs.writeFileSync(path.join(UIT, 'index.ts'), index)
console.log(`\n${slugs.length} blogs, ${Object.keys(gedownload).length} afbeeldingen`)
