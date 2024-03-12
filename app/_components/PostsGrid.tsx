import { getPosts } from "../actions/posts"
import PostCard from "./PostCard"

export default async function PostsGrid() {
  const posts = await getPosts()

  return (
    <section className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
      {posts.map((post) => {
        return (
          <div key={ `post-item-${post._id}`} className={`col-span-1 h-full`}>
            <PostCard key={`post-${post._id}`} post={post} />
          </div>
        )
      })}
    </section>
  )
}