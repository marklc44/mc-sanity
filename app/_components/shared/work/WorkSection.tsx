import { WorkSection } from '@/types/Work'
import SanityImage from '../SanityImage'
import Link from 'next/link'
import workStyles from '@/app/_styles/WorkList.module.css'
import classNames from 'classnames'
import ReadMoreCta from '../ReadMoreCta'

interface Props {
  work: WorkSection
}

const filterTitle = (client: string, title: string) => {
  console.log('client: ', client)
  if (client !== 'nextme') {
    return title
      .split(' ')
      .filter((item, idx) => idx !== 0)
      .join(' ')
  }
  return title
}

export default function WorkSection({ work }: Props) {
  const singleLink = `/work/${work.client.slug.current}`
  const itemClasses = classNames(
    workStyles.workListItemClear,
    'flex flex-row gap-8'
  )

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
              autoCrop={work.sectionImage.autoCrop}
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
        <p className="mb-0 font-bold">{`${work.client.name}: ${filterTitle(
          work.client.slug.current,
          work.title
        )}`}</p>
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
