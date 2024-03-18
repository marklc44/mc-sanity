import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { Image as SanityImageType } from 'sanity'

const placeholderSrc = 'https://placehold.co/600x400/png'

export default function SanityImage({
  image,
  width,
  height,
  alt = '',
  ...rest
}: {
  image: SanityImageType
  width: number
  height: number
  alt: string
}) {
  const src = urlForImage(image, null)
  return (
    <Image
      className={`min-w-full`}
      src={src || placeholderSrc}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  )
}
