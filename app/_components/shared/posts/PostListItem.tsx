import PostMeta from './PostMeta'
import PostBody from './PostBody'
import SanityImage from '../SanityImage'
import { Post } from '@/types/Post'
import Link from 'next/link'
import PostCategories from './PostCategories'
import classNames from 'classnames'
import postStyles from './Posts.module.css'

interface Props {
  post: Post
  className?: string
}

export default function PostListItem({ post, className }: Props) {
  const { title, categories, body, mainImage, slug } = post
  const articleClasses = classNames(
    className,
    postStyles.postListItem,
    `postCard flex flex-row h-full overflow-hidden place-content-between`
  )
  return (
    <article className={articleClasses}>
      <div className={`content flex flex-col content-between pr-4 gap-2`}>
        <section>
          <div>
            <PostCategories
              categories={categories}
              displayLimit={1}
              className={`eyebrow`}
            />
          </div>
          <h4>
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h4>
        </section>

        {/* <PostMeta
          author={post.authorName}
          pubDate={post.publishedAt}
          onCard={true}
        /> */}
        <PostBody
          body={body}
          isExcerpt={true}
          slug={post.slug}
        />
      </div>
      <div className={`header justify-self-end py-8`}>
        {mainImage?.asset && (
          <Link href={`/posts/${slug}`}>
            <SanityImage
              image={mainImage}
              height={300}
              width={300}
              alt="distracted child"
              loading="lazy"
              style={{
                width: '150px',
                height: '150px',
                minWidth: '150px',
                objectFit: 'cover',
              }}
            />
          </Link>
        )}
      </div>
    </article>
  )
}
