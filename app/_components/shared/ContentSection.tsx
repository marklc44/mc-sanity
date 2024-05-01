import classNames from 'classnames'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  containerClasses?: string
  contentClasses?: string
}

export default function ContentSection({
  children,
  containerClasses,
  contentClasses,
}: Props) {
  const outerClasses = classNames(containerClasses, 'py-12')
  const innerClasses = classNames(
    contentClasses,
    'max-w-[90%] md:max-w-[90vw] lg:max-w-[85em] lg:px-[40px] mx-auto'
  )

  return (
    <section className={outerClasses}>
      <div className={innerClasses}>{children}</div>
    </section>
  )
}
