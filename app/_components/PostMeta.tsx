import { dayjs } from '@/utils/dayjs'

export default function PostMeta({
  author,
  pubDate,
}: {
  author: string
  pubDate: string
}) {
  const formattedPubDate = dayjs(pubDate).format('MMMM D, YYYY')

  return (
    <section className={`postMeta mb-8`}>
      <span className={`text-sm`}>By</span>{' '}
      <span className={`text-md font-semibold text-slate-500`}>{author}</span>
      <span className={`text-sm italic block`}>{formattedPubDate}</span>
    </section>
  )
}
