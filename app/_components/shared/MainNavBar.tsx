'use client'
import Link from 'next/link'
import PillBtn from './PillBtn'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

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
              Posts
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
            {!mobileMenuOpen && <Bars3Icon className={`text-lg w-6`} />}
            {mobileMenuOpen && <XMarkIcon className={`text-lg w-6`} />}
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
                Posts
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
