import { getWork } from '@/app/actions/work'
import { Work } from '@/types/Work'
import ClientSpotlight from '@/app/_components/shared/work/ClientSpotlight'

export default async function SingleWork({
  params,
}: {
  params: { slug: string }
}) {
  const workArr = await getWork(params.slug)
  const work = workArr?.[0] as Work

  return (
    <div>
      <ClientSpotlight
        workItem={work}
        isExcerpt={false}
      />
    </div>
  )
}
