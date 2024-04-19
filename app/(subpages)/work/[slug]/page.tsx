import { getWork } from '@/app/actions/work'
import SanityImage from '@/app/_components/shared/SanityImage'
import ContentSection from '@/app/_components/shared/ContentSection'
import Badge from '@/app/_components/shared/Badge'
import { getAdjustedLogoDimensions } from '@/utils/work-utils'
import { Work } from '@/types/Work'
import WorkSection from '@/app/_components/shared/work/WorkSection'
import ClientSpotlight from '@/app/_components/shared/work/ClientSpotlight'

interface Params {
  slug: string
}

export default async function SingleWork({
  params,
}: {
  params: { slug: string }
}) {
  const workArr = await getWork(params.slug)
  const work = workArr?.[0] as Work
  const { _id, client, description, roles, position, workSections } =
    work as Work
  const logoDimensions = getAdjustedLogoDimensions(work?.client?.clientSlug)

  return (
    <div>
      <ClientSpotlight
        workItem={work}
        isExcerpt={false}
      />
    </div>
  )
}
