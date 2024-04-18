import classNames from 'classnames'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  classes?: string
}
export default function Badge({ children, classes }: Props) {
  const badgeClasses = classNames(classes, 'badge')

  return <div className={badgeClasses}>{children}</div>
}
