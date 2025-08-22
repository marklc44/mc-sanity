import type { Metadata } from 'next'
import './globals.css'
import classNames from 'classnames'
import { GoogleTagManager } from '@next/third-parties/google'
import StickyHeader from './_components/shared/StickyHeader'
import MainNavBar from './_components/shared/MainNavBar'
import Footer from './_components/shared/Footer'
import { PHProvider } from './_components/providers/PostHogProvider'
import dynamic from 'next/dynamic'
import ContactFormDialog from './_components/forms/ContactForm'

const PostHogPageView = dynamic(
  () => import('./_components/providers/PostHogPageView')
)

export const metadata: Metadata = {
  title:
    'Mark Centoni | Software Engineer, Business Owner, Neuroscience Enthusiast',
  description: 'Professional and personal information about Mark Centoni',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/android-chrome-192x192.png',
      },
      {
        url: '/android-chrome-512x512.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      <PHProvider>
        <body
          className={classNames(
            'min-h-screen bg-white text-slate'
          )}
        >
          <StickyHeader>
            <MainNavBar />
          </StickyHeader>
          <main className="fullHeightContainer">
            <PostHogPageView />
            {children}
            <ContactFormDialog />
          </main>
          <Footer />
        </body>
      </PHProvider>
    </html>
  )
}
