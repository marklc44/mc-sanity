import StickyHeader from './_components/StickyHeader'
import MainNavBar from './_components/MainNavBar'
import HomeHero from './_components/HomeHero'
import WorkList from './_components/WorkList'
import PillBtn from './_components/PillBtn'
import ServicesGrid from './_components/ServicesGrid'
import Services from '@/sanity/schemaTypes/services'

export default function Home() {
  return (
    <>
      <StickyHeader>
        <MainNavBar />
      </StickyHeader>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className={`grid grid-cols-12 m-w-12 pt-48`}>
          <section className={`col-span-2`}></section>
          <section className={`main col-span-8`}>
            <HomeHero />
            <section className={`about`}>
              <div>
                <p>
                  I help startups and business owners build new products and
                  evolve existing products to maximize ROI and growth.
                </p>
                <PillBtn
                  text="Let's connect"
                  href={`/`}
                />
              </div>
            </section>
            <section className={`services`}>
              <h3>How I help:</h3>
              <ServicesGrid />
            </section>
            <section className={`work`}>
              <h3>Selected work</h3>
              <WorkList />
            </section>
            <section className={`articles`}>Articles work section</section>
          </section>
          <section className={`col-span-2`}></section>
        </div>
      </main>
    </>
  )
}
