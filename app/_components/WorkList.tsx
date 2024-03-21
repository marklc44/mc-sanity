import { WorkSection } from '@/types/Work'
import { getWorkSections } from '../actions/work'
import SanityImage from './SanityImage'
import Link from 'next/link'
import PostBody from './posts/PostBody'

export default async function WorkList() {
  const workSections = await getWorkSections(0)
  console.log('workSections: ', workSections)

  return (
    <>
      <div className="flex flex-col gap-3">
        {workSections?.map((work: WorkSection) => {
          const singleLink = `/work/${work.client.clientSlug}`

          return (
            <div
              key={`work-${work._id}`}
              className="flex flex-row gap-3"
            >
              <div className="header">
                <Link href={singleLink}>
                  {work.sectionImage && (
                    <SanityImage
                      image={work.sectionImage.asset}
                      height={200}
                      width={200}
                      alt={work.sectionImage?.alt || 'an image'}
                      loading="lazy"
                      style={{
                        maxHeight: '200px',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Link>
              </div>
              <div className="content">
                <h4>{work.title}</h4>
                <div>
                  <PostBody
                    body={work.body}
                    isExcerpt={false}
                    slug={work.client.clientSlug}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
