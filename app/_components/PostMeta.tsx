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
  console.log('author: ', author)
  return (
    <section>
      <span>By:</span>{" "}
      <span>{author}</span> {" | "}
      <span>{formattedPubDate}</span>
      <br />
      <span>{categories[0].title}</span>
    </section>
  )
}