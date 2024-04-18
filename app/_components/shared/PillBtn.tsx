import Link from 'next/link'
import classNames from 'classnames'

interface Props {
  text: string
  href: string
  colorClasses?: string
  handleClick?: Function
}

export default function PillBtn({
  text,
  href,
  colorClasses,
  handleClick,
}: Props) {
  const classes = classNames(
    colorClasses ? colorClasses : `bg-iris hover:bg-tropicalIndigo`,
    `inline-block py-2 px-6 rounded-full  hover:transition-colors text-white`
  )

  return (
    <Link
      className={classes}
      href={href}
      // @ts-ignore
      onClick={handleClick}
    >
      {text}
    </Link>
  )
}
