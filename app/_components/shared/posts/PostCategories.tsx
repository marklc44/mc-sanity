import { Category } from '@/types/Category'
import classNames from 'classnames'

interface Props {
  categories: Category[]
  displayLimit?: number
  className?: string
}

export default function PostCategories({
  categories,
  displayLimit,
  className,
}: Props) {
  // added here to more easily add base classes as needed
  const catClassNames = classNames(className)
  const limitedCats = categories.filter((cat, idx) => {
    if (!displayLimit) {
      return true
    }
    return idx + 1 <= displayLimit
  })

  return (
    <>
      {limitedCats.map((cat, idx) => {
        return (
          <span
            className={catClassNames}
            key={cat._id}
            id={cat._id}
          >
            {cat.title}
          </span>
        )
      })}
    </>
  )
}
