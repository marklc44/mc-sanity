import StickyHeader from './_components/StickyHeader'
import MainNavBar from './_components/MainNavBar'

export default function Home() {
  return (
    <>
      <StickyHeader>
        <MainNavBar />
      </StickyHeader>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className={`grid grid-cols-12 m-w-12 pt-48`}>
          <section className={`col-span-2`}></section>
          <section className={`main col-span-8`}>Home page content</section>
          <section className={`col-span-2`}></section>
        </div>
      </main>
    </>
  )
}
