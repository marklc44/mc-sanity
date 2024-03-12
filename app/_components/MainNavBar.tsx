import Link from 'next/link'
import PillBtn from './PillBtn'

export default function MainNavBar() {
  return (
    <>
      <div>Logo</div>
      <nav>
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
      <div className={`text-right`}>
        <PillBtn
          text="Contact"
          href="#"
        />
      </div>
    </>
  )
}
