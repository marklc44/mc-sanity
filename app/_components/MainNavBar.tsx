'use client'
import Link from 'next/link'
import PillBtn from './PillBtn'
import { useRef, useState } from 'react'
import classNames from 'classnames'

export default function MainNavBar() {
  const mobileMenuRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const mobileMenuStateClasses = classNames(
    'mobileMenu',
    mobileMenuOpen ? 'mobileMenuOpen' : 'mobileMenuClosed'
  )

  return (
    <>
      <div className="uppercase text-xl font-bold">
        <Link href="/">Mark Centoni</Link>
      </div>
      <nav className="hidden md:block">
        <ul className={`list-none flex justify-around`}>
          <li className="mainNavLink">
            <Link
              className={`mainNavAnchor`}
              href={`/`}
            >
              About
            </Link>
          </li>
          <li className="mainNavLink">
            <Link
              className={`mainNavAnchor`}
              href={`/`}
            >
              Work
            </Link>
          </li>
          <li className="mainNavLink">
            <Link
              className={`mainNavAnchor`}
              href={`/posts`}
            >
              Articles
            </Link>
          </li>
          <li className="mainNavLink">
            <Link
              className={`mainNavAnchor`}
              href={`#`}
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`text-right hidden md:block`}>
        <PillBtn
          text="Contact"
          href="#"
        />
      </div>

      {/* Mobile menu */}
      <div className="text-right block md:hidden">
        <div>
          <button
            // className="btn btn-ghost"
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
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`mainNavAnchor`}
                href={`/`}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className={`mainNavAnchor`}
                href={`/posts`}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                className={`mainNavAnchor`}
                href={`#`}
              >
                Services
              </Link>
            </li>
            <li>
              <div>
                <PillBtn
                  text="Contact"
                  href="#"
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
