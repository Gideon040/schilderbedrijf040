// Schrijft data/lastmod.json: per URL de datum waarop de inhoud het laatst is gewijzigd (git).
// Draai `node scripts/lastmod.mjs` voor een commit met inhoudelijke wijzigingen; de sitemap leest het bestand.
// Bestanden met niet-gecommitte wijzigingen krijgen de datum van vandaag.
import { execSync } from 'node:child_process'
import { existsSync, readdirSync, writeFileSync } from 'node:fs'

const sh = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim()
const vandaag = new Date().toISOString().slice(0, 10)

function datum(bestanden) {
  const b = bestanden.filter((f) => existsSync(f))
  if (!b.length) return null
  const lijst = b.map((f) => `"${f}"`).join(' ')
  if (sh(`git status --porcelain -- ${lijst}`)) return vandaag
  const d = sh(`git log -1 --format=%cs -- ${lijst}`)
  return d || vandaag
}

const site = 'app/(site)'
const routes = {
  '/': [`${site}/page.tsx`, 'components/home/v2.tsx'],
  '/over-ons': [`${site}/over-ons/page.tsx`],
  '/contact': [`${site}/contact/page.tsx`],
  '/faq': [`${site}/faq/page.tsx`],
  '/projecten': [`${site}/projecten/page.tsx`, 'data/projecten.ts'],
  '/reviews': [`${site}/reviews/page.tsx`, 'data/reviews.json'],
  '/blog': [`${site}/blog/page.tsx`],
  '/locaties': [`${site}/locaties/[city]/data.ts`, `${site}/locaties/[city]/data-batch1.ts`, `${site}/locaties/[city]/data-batch2.ts`, `${site}/locaties/[city]/data-lokaal.ts`, `${site}/locaties/[city]/data-lokaal-08.ts`, `${site}/locaties/[city]/data-lokaal-13.ts`],
}
for (const d of readdirSync(`${site}/diensten`)) routes[`/diensten/${d}`] = [`${site}/diensten/${d}/page.tsx`]
if (existsSync(`${site}/kosten`)) for (const d of readdirSync(`${site}/kosten`)) routes[`/kosten/${d}`] = [`${site}/kosten/${d}/page.tsx`]

const uit = {}
for (const [url, bestanden] of Object.entries(routes)) {
  const d = datum(bestanden)
  if (d) uit[url] = d
}
writeFileSync('data/lastmod.json', JSON.stringify(uit, null, 2) + '\n')
console.log(`data/lastmod.json: ${Object.keys(uit).length} routes`)
