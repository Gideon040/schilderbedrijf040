import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from './env'

const imageBuilder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null

export function urlForImage(source: Image) {
  if (!imageBuilder) return null
  return imageBuilder.image(source)
}
