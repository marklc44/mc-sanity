import ContentSection from './_components/shared/ContentSection'
import PostsGrid from './_components/shared/posts/PostsGrid'
import { getPosts } from './actions/posts'
import { Badge } from './_components/shared/Badge'
import heroStyles from '@/app/_styles/HomeHero.module.css'
import classNames from 'classnames'
import Link from 'next/link'
import PostHogClient from './posthog'
import Columns from './_components/shared/Columns'
import { Button } from './_components/shared/Button'
import StaticHero from './_components/shared/StaticHero'
import ServicesGrid from './_components/shared/ServicesGrid'
import RecentWork from './_components/shared/RecentWork'
import CtaSection from './_components/shared/CtaSection'
import ContactFormButton from './_components/forms/ContactForm/ContactFormButton'

export default async function Home() {
  const posts = await getPosts()
  const flags = await getFlags()

  const heroClassNames = classNames(heroStyles.motionGradientBg)

  return (
    <>
      <section className={`main flex flex-col`}>
        <ContentSection
          containerClasses={heroClassNames}
          contentClasses="pt-[100px] lg:pt-[180px]"
        >
          <Columns>
            <div>
              <Badge
                variant="outline"
                className="text-highlight border-highlight"
              >
                Software Engineering Contractor
              </Badge>
              <h1>
                <span className="text-5xl leading-tight tracking-tighter mb-4">
                  I help startups and businesses{' '}
                  <span className="text-purpleCust">quickly prototype</span> and
                  build exceptional products
                </span>
              </h1>
              <p className="text-xl tracking-tight leading-relaxed text-muted-foreground mb-4">
                Full-stack development, technical consulting, and MVP
                development for bootstrapped startups and small businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactFormButton text="Start Your Project" />
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link href="/work">View My Work</Link>
                </Button>
              </div>
            </div>
            <StaticHero />
          </Columns>
        </ContentSection>
        <ContentSection containerClasses="pb-28">
          <ServicesGrid />
        </ContentSection>
        <ContentSection containerClasses="pb-28">
          <RecentWork />
        </ContentSection>
        <ContentSection containerClasses="bg-slate-100 py-28">
          <CtaSection />
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
            {/* <div className="col-span-1">
              <h4>Neuroscience</h4>
              <PostsGrid
                posts={posts}
                view="list"
                withFilters={false}
                preFilterCategory="Neuroscience"
                limit={2}
              />
            </div> */}

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

async function getFlags() {
  const posthog = PostHogClient()
  const flags = await posthog.getAllFlags('test_user_1')

  return flags
}
