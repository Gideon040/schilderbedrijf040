import Image from 'next/image'
import { urlForImage } from '@/sanity/image'
import type { Image as SanityImageType } from 'sanity'

type SanityImageProps = {
  image: SanityImageType
  alt: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  priority?: boolean
}

export function SanityImage({
  image,
  alt,
  fill,
  width,
  height,
  sizes,
  className,
  priority,
}: SanityImageProps) {
  if (!image?.asset) return null

  let imageUrl: string | null = null
  try {
    imageUrl = urlForImage(image)?.url() ?? null
  } catch {
    return null
  }

  if (!imageUrl) return null

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 800}
      height={height || 450}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  )
}
