import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface Props {
  url: string
  text?: string
}

export default function ReadMoreCta({ url, text = 'more' }: Props) {
  return (
    <div className={`link no-underline`}>
      <Link href={url}>
        <span>{`[ `}</span>
        <span>{text}</span>
        <span>
          <ArrowRightIcon
            className={`text-sm w-4 inline-block translate-x-1`}
          />
        </span>
        <span>{` ]`}</span>
      </Link>
    </div>
  )
}
