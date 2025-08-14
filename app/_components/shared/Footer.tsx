import Link from 'next/link'
import { FaCode } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {

  return (
    <footer className="flex flex-row gap-8 justify-around items-center p-8 bg-muted text-slate self-end">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="flex items-center space-x-2 mb-4"
            >
              <FaCode className="h-6 w-6 text-highlight" />
              <span className="text-xl font-bold text-foreground">
                Mark Centoni
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Software engineering contractor and consultant helping
              bootstrapped startups and small businesses build exceptional
              digital products.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 list-none">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-highlight transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
            <Link
                className="link"
                href="mailto:mark@oa-labs.co"
              >
                mark@oa-labs.co
              </Link>
              <li>Available for new projects</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Mark Centoni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
