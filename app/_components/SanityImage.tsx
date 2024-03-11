import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

export default function SanityImage({ image, width, height, alt="" }) {
  const src = urlForImage(image)
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
    />
  )
}