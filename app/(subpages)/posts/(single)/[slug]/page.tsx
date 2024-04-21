import PostBody from '@/app/_components/shared/posts/PostBody'
import { getPost } from '@/app/actions/posts'
import PostMeta from '@/app/_components/shared/posts/PostMeta'
import PostCategories from '@/app/_components/shared/posts/PostCategories'
import ContentSection from '@/app/_components/shared/ContentSection'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { ResolvingMetadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  // parent includes any existing metadata which can be overwritten or merged
  // TODO - add open graph and other socials?
  const posts = await getPost(params.slug) // this should be cached and reused so not actually making two calls
  const post = posts[0]
  const postTitle = post?.title
    ? `Mark Centoni | ${post.title}`
    : `Mark Centoni | Articles`
  const canonical = post.canonicalUrl || null
  const description = post.excerpt

  return {
    title: postTitle,
    description,
    alternates: {
      canonical: canonical,
    },
  }
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string }
}) {
  const posts = await getPost(params.slug)
  const post = posts[0]

  return (
    <>
      <ContentSection contentClasses="px-[5%] lg:px-0 max-w-[900px] lg:max-w-[900px] mx-auto">
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
    </>
  )
}
