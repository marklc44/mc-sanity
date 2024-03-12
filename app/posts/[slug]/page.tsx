import { getPosts, getPost } from "@/app/actions/posts"
import { Post } from "@/types/Post"

export default async function SinglePost({ params }: { params: { slug: string } }) {
  // get a single post by
  const posts = await getPost(params.slug)
  const post = posts[0]
  console.log('single post: ', post)
  return <div>
    <p>Slug: {params.slug}</p>
    <h1>{post.title}</h1>
  </div>
}

export async function generateStaticParams() {
  const posts = await getPosts()
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}