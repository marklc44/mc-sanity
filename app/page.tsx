import HomeHero from './_components/shared/HomeHero'
import WorkList from './_components/shared/work/WorkList'
import PillBtn from './_components/shared/PillBtn'
import ServicesList from './_components/shared/work/ServicesList'
import ContentSection from './_components/shared/ContentSection'
import PostsGrid from './_components/shared/posts/PostsGrid'
import { getPosts } from './actions/posts'
import { getTools } from './actions/work'
import Badge from './_components/shared/Badge'
import heroStyles from '@/app/_styles/HomeHero.module.css'
import classNames from 'classnames'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()
  const tools = await getTools()
  const heroClassNames = classNames(heroStyles.motionGradientBg)

  return (
    <>
      <section className={`main flex flex-col`}>
        <ContentSection
          containerClasses={heroClassNames}
          contentClasses="pt-[48px] lg:pt-[100px]"
        >
          <HomeHero />
        </ContentSection>
        <ContentSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <p className="text-3xl tracking-tighter leading-relaxed mb-4">
                I help startups and business owners build products, create value
                and maximize ROI, growth and wealth.
              </p>
              <PillBtn
                text="Let's connect"
                href={`/about`}
              />
            </div>
          </div>
        </ContentSection>
        <ContentSection containerClasses="pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-24">
            <div className="col-span-1 lg:col-span-2">
              <h2>Services and selected work</h2>
            </div>
            <div className="col-span-1">
              <ServicesList />
            </div>
            <div className="col-span-1">
              <WorkList
                limit={3}
                clientFilter="nextme"
              />
            </div>
          </div>
        </ContentSection>
        <ContentSection containerClasses="bg-slate-100 py-24">
          <h2 className="text-center">Tools</h2>
          <div className="flex flex-row flex-wrap justify-center px-8 gap-3">
            {tools?.map((tool, idx) => {
              return (
                <Badge
                  key={`tool-${idx}`}
                  classes="bg-slate-600 text-white"
                >
                  <>{tool.title}</>
                </Badge>
              )
            })}
          </div>
        </ContentSection>
        <ContentSection containerClasses="py-24">
          <h2>Posts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <div className="col-span-1">
              <h4>Tech</h4>
              <PostsGrid
                posts={posts}
                view="list"
                withFilters={false}
                preFilterCategory="Tech"
                limit={2}
              />
            </div>
            <div className="col-span-1">
              <h4>SMB</h4>
              <PostsGrid
                posts={posts}
                view="list"
                withFilters={false}
                preFilterCategory="SMB"
                limit={2}
              />
            </div>
            <div className="col-span-1">
              <h4>Neuroscience</h4>
              <PostsGrid
                posts={posts}
                view="list"
                withFilters={false}
                preFilterCategory="Neuroscience"
                limit={2}
              />
            </div>

            <div className="col-span-1">
              <div className="flex justify-center items-center bg-slate-100 rounded-xl p-8 h-auto lg:h-full">
                <h4>
                  <Link
                    className="link"
                    href="/posts"
                  >
                    View all posts
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </ContentSection>
      </section>
    </>
  )
}
