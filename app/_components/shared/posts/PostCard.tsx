import PostMeta from './PostMeta'
import PostBody from './PostBody'
import SanityImage from '../SanityImage'
import { Post } from '@/types/Post'
import Link from 'next/link'
import PostCategories from './PostCategories'

export default function PostCard({ post }: { post: Post }) {
  const { title, categories, body, mainImage, slug } = post
  return (
    <article
      className={`postCard flex flex-col h-full rounded-lg mb-4 overflow-hidden content-between`}
    >
      <div className={`header`}>
        {mainImage?.asset && (
          <Link href={`/posts/${slug}`}>
            <SanityImage
              image={mainImage}
              height={200}
              width={200}
              alt={mainImage.alt}
              // @ts-ignore
              loading="lazy"
              style={{
                maxHeight: '300px',
                minHeight: '300px',
                objectFit: 'cover',
              }}
            />
          </Link>
        )}
      </div>
      <div className={`content flex flex-col content-between p-4`}>
        <section>
          <div>
            <PostCategories
              categories={categories}
              displayLimit={1}
              className={`eyebrow`}
            />
          </div>
          <h3>
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h3>
        </section>

        <PostMeta
          author={post.authorName}
          pubDate={post.publishedAt}
          onCard={true}
        />
        <PostBody
          body={body}
          isExcerpt={true}
          slug={post.slug}
        />
      </div>
    </article>
  )
}
