import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface Props {
  text?: string | undefined
  slug: string | undefined
}

export default function PostExcerpt({ text, slug }: Props) {
  return (
    <div>
      <span>{text}</span>{' '}
      <div className={`link no-underline`}>
        <Link href={`/posts/${slug}`}>
          <span>{`[ `}</span>
          <span>more</span>
          <span>
            <ArrowRightIcon
              className={`text-sm w-4 inline-block translate-x-1`}
            />
          </span>
          <span>{` ]`}</span>
        </Link>
      </div>
    </div>
  )
}
