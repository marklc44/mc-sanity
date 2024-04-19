import ContentSection from '@/app/_components/shared/ContentSection'
import { getWork } from '@/app/actions/work'
import ClientSpotlight from '@/app/_components/shared/work/ClientSpotlight'

export default async function WorkPage() {
  const works = await getWork()
  return (
    <div className="fullHeightContainer">
      <ContentSection>
        <h2>Work</h2>
        {works &&
          works.map((work) => {
            return (
              <ClientSpotlight
                key={`work-${work?._id}`}
                workItem={work}
                isExcerpt={true}
              />
            )
          })}
      </ContentSection>
    </div>
  )
}
