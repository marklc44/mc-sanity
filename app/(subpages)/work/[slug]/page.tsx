import { getWork } from '@/app/actions/work'
import { Work } from '@/types/Work'
import ClientSpotlight from '@/app/_components/shared/work/ClientSpotlight'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import ContentSection from '@/app/_components/shared/ContentSection'

export default async function SingleWork({
  params,
}: {
  params: { slug: string }
}) {
  const workArr = await getWork(params.slug)
  const work = workArr?.[0] as Work

  return (
    <>
      <ContentSection>
        <Link
          className="link mb-16"
          href="/work"
        >
          <ArrowLeftIcon className={`text-sm w-4 inline-block translate-x-1`} />{' '}
          Back to all work
        </Link>
      </ContentSection>
      <div>
        <ClientSpotlight
          workItem={work}
          isExcerpt={false}
        />
      </div>
    </>
  )
}
