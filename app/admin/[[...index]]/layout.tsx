import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mark Centoni | Sanity Admin',
  description: 'Content management',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
