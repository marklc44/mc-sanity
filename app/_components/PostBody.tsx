
import { Body } from "@/types/Post"
import PostExcerpt from "./PostExcerpt"
/**
 * Might need to handle different html elements, so push display down to block/image components
 */

const truncateExcerpt = (text: string | undefined) => {
  if (!text) return ''
  return `${text.substring(0, 80)}...`
}
export default function PostBody({
  body,
  isExcerpt,
  slug,
}: {
    body: Body[],
    isExcerpt: boolean,
    slug: string
}) {
  const excerptText = isExcerpt ? truncateExcerpt(body?.[0]?.children?.[0]?.text) : null

  return (
    <article>
      {!isExcerpt ? body.map(item => {
        return (
          <p key={item._key}>
            {item?.children?.map(child => child.text)}
          </p>
        )
      }) : (
          <PostExcerpt text={excerptText} slug={slug} />
      )}
    </article>
  )
}