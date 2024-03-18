import { ReactNode } from 'react'
import StickyHeader from '@/app/_components/StickyHeader'
import MainNavBar from '@/app/_components/MainNavBar'

const SingleLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StickyHeader>
        <MainNavBar />
      </StickyHeader>
      <main className="pt-36 sm:pt-48">
        <section className={`grid grid-cols-12 m-w-12 px-8 sm:px-0`}>
          <div className={`col-span-12 sm:col-span-4`}></div>
          <div className={`col-span-12 sm:col-span-4`}>{children}</div>
          <div className={`col-span-12 sm:col-span-4`}></div>
        </section>
      </main>
    </>
  )
}

export default SingleLayout