import {
  CommandLineIcon,
  BeakerIcon,
  LockClosedIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FunnelIcon,
  ShareIcon,
  QueueListIcon,
} from '@heroicons/react/24/outline'

interface Props {
  name?: string
  className?: string
}

const availableIcons = [
  'CommandLineIcon',
  'BeakerIcon',
  'LockClosedIcon',
  'ChatBubbleOvalLeftEllipsisIcon',
  'FunnelIcon',
  'ShareIcon',
  'QueueListIcon',
]

// hack to map a string name to a HeroIcon component
const iconComponents = {
  CommandLineIcon: CommandLineIcon,
  BeakerIcon: BeakerIcon,
  LockClosedIcon: LockClosedIcon,
  ChatBubbleOvalLeftEllipsisIcon: ChatBubbleOvalLeftEllipsisIcon,
  FunnelIcon: FunnelIcon,
  ShareIcon: ShareIcon,
  QueueListIcon: QueueListIcon,
}

export default function Icon({ name, className }: Props) {
  // second part of the hack
  const GenericIcon = name && iconComponents[name]

  return (
    <>
      {GenericIcon && availableIcons.includes(name) ? (
        <GenericIcon className={className} />
      ) : (
        <CommandLineIcon className={className} />
      )}
    </>
  )
}
