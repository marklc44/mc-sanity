import ContentSection from '../ContentSection'
import { Work } from '@/types/Work'
import SanityImage from '../SanityImage'
import WorkSection from './WorkSection'
import { getAdjustedLogoDimensions } from '@/utils/work-utils'
import WorkSectionFull from './WorkSectionFull'
import classNames from 'classnames'
import Link from 'next/link'
import { stripProtocol } from '@/utils/work-utils'

interface Props {
  workItem: Work
  isExcerpt: boolean
}

export default function ClientSpotlight({ workItem, isExcerpt }: Props) {
  const { _id, client, description, roles, position, workSections } = workItem

  const logoDimensions = getAdjustedLogoDimensions(client?.clientSlug)
  const workSectionClasses = classNames(
    'grid grid-cols-1 gap-x-12 gap-y-12 mt-12',
    isExcerpt ? 'lg:grid-cols-2' : null
  )

  return (
    <ContentSection>
      <div className="flex flex-col justify-start items-center align-middle gap-4 mb-8">
        <div>
          <SanityImage
            image={client?.logo}
            height={logoDimensions.height}
            width={logoDimensions.width}
            alt={client?.name || 'client'}
            //@ts-ignore
            priority={true}
            style={{
              maxHeight: `${logoDimensions.height}px`,
              width: 'auto',
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 my-8 border-t-[1px] border-b-[1px] border-gray-200 py-4 justify-between">
        <div className="flex flex-row gap-4">
          <span className="font-bold">Roles:</span>{' '}
          {roles &&
            roles.map((role, idx) => {
              return <span key={`${_id}-role-${idx}`}>{role}</span>
            })}
        </div>
        <div className="flex flex-row gap-4">
          <span className="font-bold">Client website: </span>
          <span>
            <Link
              className="link"
              href={client.url as string}
              target="_blank"
            >
              {stripProtocol(client.url as string)}
            </Link>
          </span>
        </div>
      </div>

      <p className="text-left lg:text-center px-0 lg:px-8">{description}</p>
      <div className={workSectionClasses}>
        {workSections &&
          workSections.map((item, idx) => {
            if (isExcerpt) {
              return (
                <WorkSection
                  key={`workSection-${item._id}`}
                  work={item}
                />
              )
            }
            return (
              <WorkSectionFull
                key={`workSection-${item._id}`}
                work={item}
                index={idx}
              />
            )
          })}
        <div className="col-span-1"></div>
      </div>
    </ContentSection>
  )
}
