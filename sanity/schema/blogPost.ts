import { defineType } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      validation: (Rule: any) => Rule.max(70).warning('Houd de meta title onder 70 tekens'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(160).warning('Houd de meta description onder 160 tekens'),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Korte samenvatting voor de blog overzichtspagina',
    },
    {
      name: 'coverImage',
      title: 'Cover Afbeelding',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Publicatiedatum',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Leestijd',
      type: 'string',
      description: 'Bijv. "6 min"',
    },
    {
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          { title: 'BTW & Kosten', value: 'BTW & Kosten' },
          { title: 'How-To', value: 'How-To' },
          { title: 'Tips & Advies', value: 'Tips & Advies' },
          { title: 'Materialen', value: 'Materialen' },
          { title: 'Inspiratie', value: 'Inspiratie' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'keywords',
      title: 'Keywords (SEO)',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'object',
      fields: [
        { name: 'name', title: 'Naam', type: 'string' },
        { name: 'role', title: 'Rol', type: 'string' },
      ],
    },
    {
      name: 'content',
      title: 'Inhoud',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normaal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule: any) =>
                      Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
                  },
                ],
              },
            ],
          },
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt tekst' },
            { name: 'caption', type: 'string', title: 'Bijschrift' },
          ],
        },
      ],
    },
    {
      name: 'faq',
      title: 'Veelgestelde Vragen',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Vraag',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Antwoord',
              type: 'text',
              rows: 4,
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    },
    {
      name: 'relatedPosts',
      title: 'Gerelateerde Artikelen',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
      validation: (Rule: any) => Rule.max(3),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
  orderings: [
    {
      title: 'Publicatiedatum (nieuwste)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
