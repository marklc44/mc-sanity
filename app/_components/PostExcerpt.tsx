import Link from "next/link"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

interface Props {
  text?: string | undefined
  slug: string | undefined
}

export default function PostExcerpt({ text, slug }: Props) {
  return (
    <p>
      <span>{text}</span>{" "}
      <span className={`link`}>
        <Link
          href={`/posts/${slug}`}
        >
          <span>more</span>
          <span>
            <ArrowLongRightIcon
              className={`text-sm w-6 inline-block`}
            />
          </span>
          
        </Link>
      </span>
    </p>
  )
}