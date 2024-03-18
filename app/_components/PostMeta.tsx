import { dayjs } from '@/utils/dayjs'
import classNames from 'classnames'

export default function PostMeta({
  author,
  pubDate,
  onCard,
}: {
  author: string
  pubDate: string
  onCard?: boolean
}) {
  const formattedPubDate = dayjs(pubDate).format('MMMM D, YYYY')
  const sectionClasses = classNames(
    `postMeta mb-8 `,
    !onCard ? 'border-t-[1px] border-b-[1px] py-3' : null
  )

  return (
    <section className={sectionClasses}>
      <span className={`text-sm`}>By</span>{' '}
      <span className={`text-md font-semibold text-slate-500`}>{author}</span>
      <span className={`text-sm italic block`}>{formattedPubDate}</span>
    </section>
  )
}
