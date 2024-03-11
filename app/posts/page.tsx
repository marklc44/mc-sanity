import PostsList from "./PostsList"

/**
 * Page title and layout -> layout file
 */
export default async function PostsPage() {
  return (
    <main>
      <h1>Posts</h1>
      <hr />
      <PostsList />
    </main>
  )
}
