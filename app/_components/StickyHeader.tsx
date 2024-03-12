'use client'
import { ReactNode } from 'react'
import { useRef, useLayoutEffect } from 'react'

export default function StickyHeader({ children }: { children: ReactNode }) {
  const headerRef = useRef<HTMLElement>(null)

  const addScrollClasses = () => {
    if (window.scrollY > 0) {
      headerRef?.current?.classList?.add('shadow', 'bg-slate-50')
    } else {
      headerRef?.current?.classList?.remove('shadow', 'bg-slate-50')
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', addScrollClasses)
    return () => window.removeEventListener('scroll', addScrollClasses)
  }, [headerRef])

  return (
    <header
      ref={headerRef}
      className={`grid grid-cols-3 p-8 justify-between align-middle fixed w-full transition-all`}
    >
      {children}
    </header>
  )
}
