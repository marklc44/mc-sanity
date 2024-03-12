import PostMeta from "./PostMeta"
import PostBody from "./PostBody"
import SanityImage from "./SanityImage"

export default function PostCard({ key, post }) {
  const { _id, title, categories, body, mainImage } = post
  console.log('post: ', post)
  return (
    <article key={_id} className={`postCard flex flex-col h-full rounded-xl overflow-hidden bg-slate-50`}>
      <div className={`header`}>
      {mainImage?.asset && (
        <SanityImage
          image={mainImage}
          height={200}
          width={200}
          alt="distracted child"
          style={{
            maxHeight: '300px',
            objectFit: 'cover',
          }}
        />
      )}
      </div>
      <div className={`content p-4`}>
        <h3>{title}</h3>
        <PostMeta
          author={post.authorName}
          pubDate={post.publishedAt}
          categories={post.categories}
        />
        <PostBody body={body} isExcerpt={true} slug={post.slug} />
      </div>
      
    </article>
  )
}