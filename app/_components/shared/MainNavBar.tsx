'use client'
import Link from 'next/link'
import PillBtn from './PillBtn'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

export default function MainNavBar() {
  const mobileMenuRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
  }

  const mobileMenuStateClasses = classNames(
    'mobileMenu',
    mobileMenuOpen ? 'mobileMenuOpen' : 'mobileMenuClosed'
  )

  return (
    <>
      <div className="uppercase text-xl font-bold">
        <Link
          className="text-black"
          href="/"
        >
          Mark Centoni
        </Link>
      </div>
      <nav className="hidden lg:block">
        <ul className={`list-none flex justify-around`}>
          <li className="mainNavLink">
            <Link
              className={classNames(
                `mainNavAnchor`,
                pathname === '/about' ? 'activeNav' : null
              )}
              href={`/about`}
            >
              About
            </Link>
          </li>
          <li className="mainNavLink">
            <Link
              className={classNames(
                `mainNavAnchor`,
                pathname === '/work' ? 'activeNav' : null
              )}
              href={`/work`}
            >
              Work
            </Link>
          </li>
          <li className="mainNavLink">
            <Link
              className={classNames(
                `mainNavAnchor`,
                pathname === '/posts' ? 'activeNav' : null
              )}
              href={`/posts`}
            >
              Articles
            </Link>
          </li>
          <li className="mainNavLink">
            <Link
              className={classNames(
                `mainNavAnchor`,
                pathname === '/services' ? 'activeNav' : null
              )}
              href={`/services`}
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`text-right hidden lg:block`}>
        <PillBtn
          text="Contact"
          href="/about"
        />
      </div>

      {/* Mobile menu */}
      <div className="text-right block lg:hidden">
        <div>
          <button
            onClick={() => {
              toggleMobileMenu()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={mobileMenuRef}
        className={mobileMenuStateClasses}
      >
        <nav>
          <ul className={`list-none flex flex-col justify-start text-left`}>
            <li>
              <Link
                className={`mainNavAnchor`}
                href={`/`}
                onClick={() => {
                  handleMobileNavClick()
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`mainNavAnchor`}
                href={`/about`}
                onClick={() => {
                  handleMobileNavClick()
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`mainNavAnchor`}
                href={`/work`}
                onClick={() => {
                  handleMobileNavClick()
                }}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className={`mainNavAnchor`}
                href={`/posts`}
                onClick={() => {
                  handleMobileNavClick()
                }}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                className={`mainNavAnchor`}
                href={`/services`}
                onClick={() => {
                  handleMobileNavClick()
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <div>
                <PillBtn
                  text="Contact"
                  href="/about"
                  handleClick={() => {
                    handleMobileNavClick()
                  }}
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
