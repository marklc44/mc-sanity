import { getPosts } from '@/app/actions/posts'
import PostsGrid from '../../_components/PostsGrid'

/**
 * Page title and layout -> layout file
 */
export default async function PostsPage() {
  const posts = await getPosts()
  return (
    <main>
      <h1>Articles</h1>
      <PostsGrid posts={posts} />
    </main>
  )
}
