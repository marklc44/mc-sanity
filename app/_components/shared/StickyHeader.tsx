'use client'
import { ReactNode } from 'react'
import { useRef, useLayoutEffect } from 'react'

export default function StickyHeader({ children }: { children: ReactNode }) {
  const headerRef = useRef<HTMLElement>(null)

  const addScrollClasses = () => {
    if (window.scrollY > 0) {
      headerRef?.current?.classList?.remove('bg-transparent')
      headerRef?.current?.classList?.add('shadow', 'bg-white')
    } else {
      headerRef?.current?.classList?.remove('shadow', 'bg-white')
      headerRef?.current?.classList?.add('bg-transparent')
    }
  }

  useLayoutEffect(() => {
    addScrollClasses()
    window.addEventListener('scroll', addScrollClasses)
    return () => window.removeEventListener('scroll', addScrollClasses)
  }, [headerRef])

  return (
    <header
      ref={headerRef}
      className={`p-8 z-50 flex flex-row flex-wrap justify-between align-middle fixed w-full transition-all bg-transparent border-b-0`}
    >
      {children}
    </header>
  )
}
