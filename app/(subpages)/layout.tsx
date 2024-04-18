export default function SubpageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={`pt-[100px] lg:pt-[200px]`}>{children}</div>
}
