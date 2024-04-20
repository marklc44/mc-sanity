import { WorkSection } from '@/types/Work'
import SanityImage from '../SanityImage'
import Link from 'next/link'
import workStyles from '@/app/_styles/WorkList.module.css'
import classNames from 'classnames'
import PostBody from '../posts/PostBody'
import Carousel from '../Carousel'

interface Props {
  work: WorkSection
  index: number
}

const filterTitle = (client: string, title: string) => {
  if (client !== 'nextme') {
    return title
      .split(' ')
      .filter((item, idx) => idx !== 0)
      .join(' ')
  }
  return title
}

const buildImagesArray = (work: WorkSection) => {
  if (!work?.images) return [work?.sectionImage]
  const { images } = work
  const { sectionImage } = work

  return [sectionImage, ...images]
}

export default function WorkSectionFull({ work, index }: Props) {
  const imagesArr = buildImagesArray(work)
  const itemClasses = classNames(
    workStyles.workListItemClear,
    'flex gap-16 flex-wrap lg:flex-nowrap items-center border-b-2 border-slate-100 pb-16',
    index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'
  )

  return (
    <div
      key={`work-${work._id}`}
      className={itemClasses}
    >
      <div className="header basis-full lg:basis-1/3 w-full lg:w-1/3">
        <div className="block w-full">
          {work.sectionImage && <Carousel items={imagesArr} />}
        </div>
      </div>
      <div className="content basis-full lg:basis-2/3 w-full lg:w-2/3">
        <p className="mb-0 font-bold">
          {`${work.client.name}: ${filterTitle(
            work.client.slug.current,
            work.title
          )}`}
        </p>

        <PostBody
          body={work.body}
          isExcerpt={false}
          slug={work.client.slug.current}
        />
      </div>
    </div>
  )
}
