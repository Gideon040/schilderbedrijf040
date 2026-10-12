import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock, Image as SanityImageType } from 'sanity'
import { SanityImage } from './sanity-image'

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-bebas text-[clamp(1.8rem,3vw,2.5rem)] leading-tight mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-bebas text-[clamp(1.4rem,2.5vw,2rem)] leading-tight mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-bebas text-xl mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-600 text-[0.95rem] leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-2.5 my-5 ml-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-2.5 my-5 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-gray-600 text-[0.95rem] leading-relaxed">
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1668E3] mt-[0.6rem]" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-gray-600 text-[0.95rem] leading-relaxed">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-[#1668E3] hover:underline font-medium"
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold text-[#0B1B30]">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
  types: {
    image: ({ value }: { value: SanityImageType & { alt?: string; caption?: string } }) => (
      <figure className="my-8 -mx-2">
        <SanityImage
          image={value}
          alt={value.alt || ''}
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded-xl w-full"
        />
        {value.caption && (
          <figcaption className="text-sm text-gray-400 mt-3 text-center">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
}

export function PortableTextRenderer({ content }: { content: PortableTextBlock[] }) {
  return (
    <div className="space-y-6">
      <PortableText value={content} components={components} />
    </div>
  )
}
