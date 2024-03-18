'use client'
import { ReactNode } from 'react'
import { useRef, useLayoutEffect } from 'react'

export default function StickyHeader({ children }: { children: ReactNode }) {
  const headerRef = useRef<HTMLElement>(null)

  const addScrollClasses = () => {
    if (window.scrollY > 0) {
      headerRef?.current?.classList?.remove(
        'bg-gradient-to-t',
        'from-white',
        'to-zinc-50'
      )
      headerRef?.current?.classList?.add(
        'shadow',
        'bg-gradient-to-b',
        'from-white',
        'to-zinc-50'
      )
    } else {
      headerRef?.current?.classList?.remove(
        'shadow',
        'bg-gradient-to-b',
        'from-white',
        'to-zinc-50'
      )
      headerRef?.current?.classList?.add(
        'bg-gradient-to-t',
        'from-white',
        'to-zinc-50'
      )
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', addScrollClasses)
    return () => window.removeEventListener('scroll', addScrollClasses)
  }, [headerRef])

  return (
    <header
      ref={headerRef}
      className={`p-8 z-50 flex flex-row flex-wrap justify-between align-middle fixed w-full transition-all bg-gradient-to-t from-white to-zinc-50 border-b-2 sm:border-b-0`}
    >
      {children}
    </header>
  )
}
