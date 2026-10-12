// Vervangt em dashes en losse en dashes in de blogposts in Sanity door gewone leestekens.
// Standaard alleen een proefrun (toont wat er verandert). Echt schrijven: node scripts/fix-dashes-sanity.mjs --write
// Let op: --write past de live blog aan. Alleen draaien na akkoord van Gideon.
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const TOKEN = process.env.SANITY_API_TOKEN
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const WRITE = process.argv.includes('--write')

function fix(text) {
  return text
    .replace(/(€\s?[\d.,]+|\b\d+(?:[.,]\d+)?)\s*[–—]\s*(€\s?[\d.,]+|\d)/g, '$1 tot $2')
    .replace(/\s+[—–]\s+(?=[A-Z0-9€])/g, '. ')
    .replace(/\s+[—–]\s+/g, ', ')
}

// Loopt recursief door het document en past alle strings aan (behalve systeemvelden)
function walk(value, changes, path = '') {
  if (typeof value === 'string') {
    const fixed = fix(value)
    if (fixed !== value) changes.push({ path, before: value, after: fixed })
    return fixed
  }
  if (Array.isArray(value)) return value.map((v, i) => walk(v, changes, `${path}[${i}]`))
  if (value && typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) out[k] = k.startsWith('_') ? v : walk(v, changes, path ? `${path}.${k}` : k)
    return out
  }
  return value
}

const query = encodeURIComponent('*[_type=="blogPost" && !(_id in path("drafts.**"))]')
const res = await fetch(`https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/query/${DATASET}?query=${query}`, {
  headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
})
const { result } = await res.json()

const mutations = []
for (const doc of result) {
  const changes = []
  const fixed = walk(doc, changes)
  if (!changes.length) continue
  console.log(`\n${doc.slug?.current}: ${changes.length} wijzigingen`)
  for (const c of changes.slice(0, 5)) console.log(`  ${c.path}\n    - ${c.before.slice(0, 120)}\n    + ${c.after.slice(0, 120)}`)
  mutations.push({ createOrReplace: fixed })
}

if (!WRITE) {
  console.log(`\nProefrun: ${mutations.length} posts zouden worden aangepast. Draai met --write om op te slaan.`)
} else {
  const r = await fetch(`https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ mutations }),
  })
  console.log(r.status, await r.text())
}
