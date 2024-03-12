import PostsGrid from "../_components/PostsGrid"

/**
 * Page title and layout -> layout file
 */
export default async function PostsPage() {
  return (
    <main>
      <h1>Articles</h1>
      <PostsGrid />
    </main>
  )
}
