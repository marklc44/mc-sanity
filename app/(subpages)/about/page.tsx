import ContentSection from '../../_components/shared/ContentSection'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="fullHeightContainer">
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start justify-center px-[5%] lg:px-0">
          <div className="col-span-1 flex flex-col justify-center items-center">
            {/* <span className="rounded-full w-24 h-24 bg-gray-300 mb-8"></span> */}
            <div
              id="contact"
              className="text-center lg:text-left"
            >
              <ul className="list-none">
                <li className="mb-2">
                  <Link
                    className="link"
                    target="_blank"
                    href="https://www.linkedin.com/in/markcentoni/"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="link"
                    target="_blank"
                    href="https://www.oa-labs.co/"
                  >
                    O & A Labs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="link"
                    target="_blank"
                    href="https://medium.com/@mark_centoni"
                  >
                    Medium
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="link"
                    href="mailto:mark@oa-labs.co"
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <section className="mb-12">
              <div className="flex flex-row gap-4 justify-start items-center mb-8">
                <h2 className="mb-0">About</h2>
              </div>

              <p>
              I’m a senior engineer and former engineering manager with a background leading teams at both startups and enterprise companies. Over the past few years, I’ve worked closely with founders, marketers, and product leaders to build:
              </p>
              <ul>
                <li>Scalable frotends in React + Nextjs</li>
                <li>Go-to-market stacks with CDP, CRM, marketing, payment and other components</li>
                <li>Full-stack apps with Node, GraphQL and SQL/NoSQL databases</li>
                <li>AI integrated tools and features</li>
              </ul>
              <p>I’m currently contracting with a waitlist management platform as lead frontend engineer, building headless CMS-powered sites and custom apps — including a TV remote app for a stroke survivor who needed a more accessible interface.</p>
            </section>
            <section className="mb-12">
              <h3>Why to work with me</h3>
              <p>
                I want my clients to succeed, and treat their products as if they were my own. Not only is it good business, but
                there are real, human reasons why we want to bring businesses and
                products to life, and it&#39;s fulfilling to help realize those. When working with clients, I always focus on:
              </p>
              <ul>
                <li>Cost reduction</li>
                <li>Performance and scalability</li>
                <li>Security</li>
                <li>Customer-focused priority and urgency</li>
              </ul>
            </section>
            <section className="mb-12">
              <h3>How I work</h3>
              <p>
                I integrate seamlessly with your team and workflow to
                expand capacity or create green field products and workflows from
                scratch. Let&#39;s talk about how I can help you create value, growth and wealth.
              </p>
              <p>
                Email me at{' '}
                <Link
                  className="link"
                  href="mailto:mark@oa-labs.co"
                >
                  mark@oa-labs.co
                </Link>
                .
                </p>
            </section>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
