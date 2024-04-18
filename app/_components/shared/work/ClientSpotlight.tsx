import ContentSection from '../ContentSection'
import { Work } from '@/types/Work'
import SanityImage from '../SanityImage'
import WorkSection from './WorkSection'

interface Props {
  workItem: Work
}

const getAdjustedLogoDimensions = (clientSlug: string) => {
  switch (clientSlug) {
    case 'nextme':
      return {
        width: 400,
        height: 60,
      }
    case 'plastiq':
      return {
        width: 600,
        height: 200,
      }
    case 'hopelab':
      return {
        width: 600,
        height: 40,
      }
    default:
      return {
        width: 400,
        height: 400,
      }
  }
}

export default function ClientSpotlight({ workItem }: Props) {
  const { _id, client, description, roles, position, workSections } = workItem

  const logoDimensions = getAdjustedLogoDimensions(client?.clientSlug)

  return (
    <ContentSection>
      <div className="flex flex-col justify-start items-center align-middle gap-4 mb-8">
        <div>
          <SanityImage
            image={client?.logo}
            height={logoDimensions.height}
            width={logoDimensions.width}
            alt={client?.name || 'client'}
            priority={true}
            style={{
              maxHeight: `${logoDimensions.height}px`,
              width: 'auto',
            }}
          />
        </div>
        {/* <h3 className="mb-0">{client?.name}</h3> */}
      </div>
      <div className="flex gap-4 my-8 border-t-[1px] border-b-[1px] border-gray-200 py-4">
        <span className="font-bold">Roles:</span>{' '}
        {roles &&
          roles.map((role, idx) => {
            return <span key={`${_id}-role-${idx}`}>{role}</span>
          })}
      </div>
      <p className="text-center px-8">{description}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 mt-12">
        {workSections &&
          workSections.map((item) => {
            return (
              <WorkSection
                key={`workSection-${item._id}`}
                work={item}
              />
            )
          })}
        <div className="col-span-1"></div>
      </div>
    </ContentSection>
  )
}
