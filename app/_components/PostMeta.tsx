import { dayjs } from '@/utils/dayjs'
import { Category } from '@/types/Category'

export default function PostMeta({
  author,
  pubDate,
  categories,
}: {
    author: string,
    pubDate: string,
    categories: Category[]
}) {
  const formattedPubDate = dayjs(pubDate).format('MM/DD/YYYY')

  return (
    <section className={`postMeta mb-2`}>
      <span className={`text-sm italic block`}>{`By ${author} on ${formattedPubDate}`}</span>
      <span className={`text-sm block`}>{categories[0].title}</span>
    </section>
  )
}