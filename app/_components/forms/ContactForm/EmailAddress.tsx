'use client'
import { useEffect, useRef } from 'react'

export default function ObfuscatedEmail() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const user = 'mark'
    const domain = 'markcentoni.com'
    const email = `${user}@${domain}`

    if (ref.current) {
      ref.current.innerHTML = '' // ✅ Clear previous content

      const link = document.createElement('a')
      link.href = `mailto:${email}`
      link.textContent = email
      ref.current.appendChild(link)
    }
  }, [])

  return <span className="email" ref={ref} />
}
