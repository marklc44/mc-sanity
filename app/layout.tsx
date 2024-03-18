import type { Metadata } from 'next'
import { Noto_Sans, Poppins } from 'next/font/google'
import './globals.css'
import classNames from 'classnames'
import StickyHeader from './_components/StickyHeader'
import MainNavBar from './_components/MainNavBar'

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
  title: 'Mark Centoni | Software Engineer, Neuroscience Enthusiast',
  description: 'Professional and personal information about Mark Centoni',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(noto.className, poppins.className)}>
        {children}
      </body>
    </html>
  )
}
