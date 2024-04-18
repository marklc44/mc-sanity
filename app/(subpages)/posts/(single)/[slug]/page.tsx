import PostBody from '@/app/_components/shared/posts/PostBody'
import { getPost } from '@/app/actions/posts'
import PostMeta from '@/app/_components/shared/posts/PostMeta'
import PostCategories from '@/app/_components/shared/posts/PostCategories'
import SanityImage from '@/app/_components/shared/SanityImage'
import ContentSection from '@/app/_components/shared/ContentSection'

export default async function SinglePost({
  params,
}: {
  params: { slug: string }
}) {
  const posts = await getPost(params.slug)
  const post = posts[0]

  return (
    <ContentSection contentClasses="max-w-[800px] mx-auto">
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
      <section className="mb-8">
        <SanityImage
          image={post.mainImage}
          height={1080}
          width={1080}
          alt="distracted child"
          priority={true}
        />
      </section>

      <PostBody
        body={post.body}
        isExcerpt={false}
        slug={post.slug}
      />
    </ContentSection>
  )
}
