import { Body } from '@/types/Post'
import PostExcerpt from './PostExcerpt'
import { PortableText } from '@portabletext/react'
import SanityImage from './SanityImage'
import { ReactNode } from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
/**
 * Might need to handle different html elements, so push display down to block/image components
 */

const truncateExcerpt = (text: string | undefined) => {
  if (!text) return ''
  return `${text.substring(0, 80)}...`
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      console.log('value: ', value)
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          height={value.height || 500}
          width={value.width || 500}
          src={urlForImage(value, {
            height: value.height || 500,
            width: value.width || 500,
          })}
          style={{
            maxWidth: '100%',
            marginBottom: '24px',
          }}
        />
      )
    },
  },
}

export default function PostBody({
  body,
  isExcerpt,
  slug,
}: {
  body: Body[]
  isExcerpt: boolean
  slug: string
}) {
  const excerptText = isExcerpt
    ? truncateExcerpt(body?.[0]?.children?.[0]?.text)
    : null

  return (
    <article>
      {!isExcerpt && (
        <PortableText
          value={body}
          components={ptComponents}
        />
      )}
      {isExcerpt && (
        <PostExcerpt
          text={excerptText}
          slug={slug}
        />
      )}
    </article>
  )
}
