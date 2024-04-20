import { getPosts } from '@/app/actions/posts'
import PostsGrid from '../../../_components/shared/posts/PostsGrid'
import ContentSection from '@/app/_components/shared/ContentSection'

export default async function PostsPage() {
  const posts = await getPosts()
  return (
    <div className="'min-h-screen'">
      <ContentSection>
        <h1>Articles</h1>
        <PostsGrid
          posts={posts}
          view="grid"
          withFilters={true}
        />
      </ContentSection>
    </div>
  )
}
