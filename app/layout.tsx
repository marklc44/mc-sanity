import type { Metadata } from 'next'
import { Noto_Sans, Poppins } from 'next/font/google'
import './globals.css'
import classNames from 'classnames'
import { GoogleTagManager } from '@next/third-parties/google'
import StickyHeader from './_components/shared/StickyHeader'
import MainNavBar from './_components/shared/MainNavBar'
import Footer from './_components/shared/Footer'

const noto = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  weight: ['600', '300'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Mark Centoni | Software Engineer, Business Owner, Neuroscience Enthusiast',
  description: 'Professional and personal information about Mark Centoni',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      <body
        className={classNames(
          noto.className,
          poppins.className,
          'min-h-screen bg-white'
        )}
      >
        <StickyHeader>
          <MainNavBar />
        </StickyHeader>
        <main className="fullHeightContainer">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
