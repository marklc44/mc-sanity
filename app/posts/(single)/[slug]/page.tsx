import PostBody from '@/app/_components/PostBody'
import { getPosts, getPost } from '@/app/actions/posts'
import PostMeta from '@/app/_components/PostMeta'
import DoubleSeparator from '@/app/_components/DoubleSeparator'
import PostCategories from '@/app/_components/PostCategories'

export default async function SinglePost({
  params,
}: {
  params: { slug: string }
}) {
  const posts = await getPost(params.slug)
  const post = posts[0]
  console.log('single post: ', post)
  return (
    <div>
      <div>
        <PostCategories
          categories={post.categories}
          className={`eyebrow`}
        />
      </div>
      <h1>{post.title}</h1>
      <PostMeta
        author={post.authorName}
        pubDate={post.publishedAt}
      />
      <DoubleSeparator />
      <PostBody
        body={post.body}
        isExcerpt={false}
        slug={post.slug}
      />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
