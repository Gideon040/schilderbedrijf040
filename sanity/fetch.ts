import type { QueryParams } from 'next-sanity'
import { client } from './client'

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}): Promise<T> {
  if (!client) {
    console.warn('Sanity client not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID.')
    return [] as unknown as T
  }

  return client.fetch<T>(query, params, {
    next: {
      revalidate: 60,
      tags,
    },
  })
}
