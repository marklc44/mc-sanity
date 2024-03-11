import PostMeta from "./PostMeta"
import PostBody from "./PostBody"
import SanityImage from "./SanityImage"

export default function PostCard({ key, post }) {
  const { _id, title, categories, body, mainImage } = post
  console.log('post: ', post)
  return (
    <article key={_id}>
      {mainImage.asset && (
        <SanityImage image={mainImage} height={200} width={200} alt="distracted child" />
      )}
      <h3>{title}</h3>
      <PostMeta author={post.authorName} pubDate={post.publishedAt} categories={post.categories} />
      <br />
      <PostBody body={body} />
    </article>
  )
}