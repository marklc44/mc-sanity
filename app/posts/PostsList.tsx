import { getPosts } from "../actions/posts"
import PostCard from "../_components/PostCard"

export default async function PostsList() {
  const posts = await getPosts()
  
  return (
    <>
      {posts.map((post) => {
        return (
          <PostCard key={`post-${post._id}`} post={post} />
        )
      })}
    </>
  )
}