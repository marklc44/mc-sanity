import PostBody from '@/app/_components/shared/posts/PostBody'
import { getPost } from '@/app/actions/posts'
import PostMeta from '@/app/_components/shared/posts/PostMeta'
import PostCategories from '@/app/_components/shared/posts/PostCategories'
import ContentSection from '@/app/_components/shared/ContentSection'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default async function SinglePost({
  params,
}: {
  params: { slug: string }
}) {
  const posts = await getPost(params.slug)
  const post = posts[0]

  return (
    <ContentSection contentClasses="max-w-[900px] lg:max-w-[900px] mx-auto">
      <Link
        className="block link mb-8"
        href="/posts"
      >
        <ArrowLeftIcon className={`text-sm w-4 inline-block translate-x-1`} />{' '}
        Back to all posts
      </Link>
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

      <PostBody
        body={post.body}
        isExcerpt={false}
        slug={post.slug}
      />
    </ContentSection>
  )
}
