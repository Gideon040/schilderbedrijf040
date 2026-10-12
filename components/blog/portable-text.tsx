import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock, Image as SanityImageType } from 'sanity'
import { SanityImage } from './sanity-image'

// Tekst uit een Sanity-blok (voor ankers en de inhoudsopgave)
export function blokTekst(block: unknown): string {
  const kinderen = (block as unknown as { children?: { text?: string }[] }).children ?? []
  return kinderen.map((c) => c.text ?? '').join('')
}

export function anker(tekst: string): string {
  return tekst
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Inhoud van het artikel komt ongewijzigd uit Sanity; alleen de opmaak is van ontwerp v2 (.prose in v2.css)
const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={anker(blokTekst(value))}>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="pt-ul">{children}</ul>,
    number: ({ children }) => <ol className="steps-list">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => (
      <li>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <b>{children}</b>,
    em: ({ children }) => <em>{children}</em>,
  },
  types: {
    image: ({ value }: { value: SanityImageType & { alt?: string; caption?: string } }) => (
      <figure className="pt-fig">
        <SanityImage image={value} alt={value.alt || ''} width={800} height={450} sizes="(max-width: 768px) 100vw, 800px" />
        {value.caption && <figcaption>{value.caption}</figcaption>}
      </figure>
    ),
  },
}

export function PortableTextRenderer({ content }: { content: PortableTextBlock[] }) {
  return <PortableText value={content} components={components} />
}
