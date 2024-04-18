import { getWork } from '@/app/actions/work'
import SanityImage from '@/app/_components/shared/SanityImage'
import ContentSection from '@/app/_components/shared/ContentSection'
import WorkList from '@/app/_components/shared/work/WorkList'

interface Params {
  slug: string
}

export default async function SingleWork({
  params,
}: {
  params: { slug: string }
}) {
  const workArr = await getWork(params.slug)
  const work = workArr?.[0]

  return (
    <div>
      <ContentSection>
        <h2>{work?.title}</h2>
        <div className="w-[60px]">
          <SanityImage
            image={work?.client.logo}
            height={60}
            width={60}
            alt={work?.client?.name || 'client'}
            priority={true}
            style={{
              width: '60px',
              height: '60px',
            }}
          />
        </div>
        <p>{work?.client.description}</p>
      </ContentSection>
      <ContentSection>
        <div>
          <span>Role: </span>
          {work?.roles?.map((role: any, idx: number) => {
            return <span key={`role=${idx}`}>{role}</span>
          })}
        </div>
        <div>
          <span>Tools: </span>
          {work?.tools?.map((tool, idx: number) => {
            return <span key={`tool-${idx}`}>{tool.title}</span>
          })}
        </div>
      </ContentSection>
      <ContentSection>
        <WorkList />
      </ContentSection>
    </div>
  )
}
