import { getPosts } from "../actions/posts"
import PostBody from "../_components/PostBody"
import { Post } from "@/types/post"

export default async function PostsList() {
  const posts = await getPosts()
  
  return (
    <>
      {posts.map((post: Post) => {
        const { _id, title, categories, body } = post
        return (
          <div key={_id}>
            <h3>{title}</h3>
            <div>
              Post meta
              <p>Author</p>
              <p>pub date</p>
              <p>Categories: {categories[0].title}</p>
            </div>
            <br />
            <PostBody body={body} />
          </div>
        )
      })}
    </>
  )
}