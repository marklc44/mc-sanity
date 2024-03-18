import StickyHeader from '@/app/_components/StickyHeader'
import MainNavBar from '@/app/_components/MainNavBar'

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StickyHeader>
        <MainNavBar />
      </StickyHeader>
      <main>
        <div className={`grid grid-cols-12 m-w-12 pt-48`}>
          <section className={`col-span-2`}></section>
          <section className={`main col-span-8`}>{children}</section>
          <section className={`col-span-2`}></section>
        </div>
      </main>
    </>
  )
}
