import { Body } from '@/types/Post'
import PostExcerpt from './PostExcerpt'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'

const truncateExcerpt = (text: string | undefined, length: number) => {
  if (!text) return ''
  return `${text.substring(0, length)}...`
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          height={value.height || 500}
          width={value.width || 500}
          src={urlForImage(value).url()}
          style={{
            width: '100%',
            marginBottom: '24px',
          }}
        />
      )
    },
  },
}

interface Props {
  body: Body[]
  isExcerpt?: boolean
  slug: string
}

export default function PostBody({ body, isExcerpt, slug }: Props) {
  const excerptText = isExcerpt
    ? truncateExcerpt(body?.[0]?.children?.[0]?.text, 120)
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
