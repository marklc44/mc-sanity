import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

const placeholderSrc = 'https://placehold.co/600x400/png'

export default function SanityImage({ image, width, height, alt="", ...rest }) {
  const src = urlForImage(image)
  return (
    <Image
      className={`min-w-full`}
      src={src || placeholderSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      {...rest}
    />
  )
}