
import { Body } from "@/types/post"
/**
 * Might need to handle different html elements in the body. This is pretty annoying, actually.
 */
export default function PostBody({ body }: { body: Body[]}) {

  return (
    <article>
      {body.map(item => {
        return (
          <p key={item._key}>
            {item.children.map(child => child.text)}
          </p>
        )
      })}
    </article>
  )

}