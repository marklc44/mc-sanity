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
              <ul>
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
            <div className="flex flex-row gap-4 justify-start items-center mb-8">
              <h2 className="mb-0">About</h2>
            </div>

            <p>
              I build software because I love bringing ideas to life. I enjoy
              working with small to medium businesses and startups because value
              is being created everyday in those businesses. It&#39;s exciting
              when each feature connects a user with more value, and each
              experiment makes it easier to access that value and easier to
              transact.
            </p>
            <h3>Why to work with me</h3>
            <p>
              I want my clients to succeed. Not only is it good business, but
              there are real, human reasons why we want to bring businesses and
              products to life, and it&#39;s fulfilling to help realize those.
            </p>
            <p>
              I have worked in small business, startups and enterprise
              technology over the past 20 years, first as a marketer, then as a
              software engineer, lead engineer and engineering manager. My
              approach is holistic. Because I have led projects and teams, I
              understand the business and people reasons behind the software we
              build, as well as the technical considerations, and evaluate
              tradeoffs to optimize both sides.
            </p>
            <h3>How I work</h3>
            <p>
              I integrate seamlessly with your team, workflow and tools to
              expand capacity or create green field products and workflows from
              scratch. Let&#39;s talk about what you need to create value,
              growth, ROI and wealth.
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
            <h3>About this site</h3>
            <p>
              This site was built with the Sanity.io CMS, React, Nextjs,
              Typescript, Tailwindcss and hosted on Vercel.
            </p>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
