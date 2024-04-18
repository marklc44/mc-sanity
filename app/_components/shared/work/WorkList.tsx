import { WorkSection } from '@/types/Work'
import { getWorkSections } from '../../../actions/work'
import SanityImage from '../SanityImage'
import Link from 'next/link'
import workStyles from '@/app/_styles/WorkList.module.css'
import classNames from 'classnames'
import ReadMoreCta from '../ReadMoreCta'

interface Props {
  clientFilter?: string
  limit?: number
}

export default async function WorkList({ clientFilter, limit }: Props) {
  const workSections = await getWorkSections(0)
  const itemClasses = classNames(workStyles.workListItem, 'flex flex-row gap-8')
  const filteredWorks = workSections?.filter(
    (item) => item.client.clientSlug === clientFilter
  )

  return (
    <>
      <div className="flex flex-col gap-8">
        {filteredWorks?.map((work: WorkSection, idx: number) => {
          const singleLink = `/work/${work.client.clientSlug}`

          if (!limit || idx <= limit) {
            return (
              <div
                key={`work-${work._id}`}
                className={itemClasses}
              >
                <div className="header basis-1/3 w-1/3">
                  <Link
                    href={singleLink}
                    className="block shadow-lg"
                  >
                    {work.sectionImage && (
                      <SanityImage
                        image={work.sectionImage.asset}
                        height={400}
                        width={400}
                        alt={work.sectionImage?.alt || 'an image'}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                  </Link>
                </div>
                <div className="content basis-2/3 w-2/3">
                  <p className="mb-0 font-bold">{`${work.client.name}: ${work.title}`}</p>
                  <div>
                    <p className={`small mb-3`}>{work.excerpt}</p>
                  </div>
                  <div className="cta">
                    <ReadMoreCta
                      url={singleLink}
                      text="more"
                    />
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}
