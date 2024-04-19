import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { Image as SanityImageType } from 'sanity'
import { getImageDimensions } from '@sanity/asset-utils'

const placeholderSrc = 'https://placehold.co/600x400/png'

interface Props {
  image: SanityImageType
  width: number
  height: number
  alt: string
  rest?: any
  autoCrop?: boolean
}

const getCroppedUrl = (
  image: any,
  width: number,
  height: number,
  autoCrop?: boolean
) => {
  if (autoCrop) {
    return (
      urlForImage(image)
        .width(width)
        .height(height)
        .fit('crop')
        .crop('entropy')
        .dpr(2)
        .quality(80)
        // .rect(rect[0], rect[1], rect[2], rect[3])
        .focalPoint(1, 1)
        .url()
    )
  }
  return urlForImage(image).fit('max').dpr(2).quality(80).url()
}

export default function SanityImage({
  image,
  width,
  height,
  alt = '',
  autoCrop,
  ...rest
}: Props) {
  const src = getCroppedUrl(image, width, height, autoCrop)

  const dimensions = getImageDimensions(src)
  const calcWidth = dimensions.height * dimensions.aspectRatio

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
