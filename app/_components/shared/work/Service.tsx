import Icon from '../Icon'
import { Service } from '@/types/Service'

interface Props {
  service: Service
}

export default function Service({ service }: Props) {
  return (
    <div
      key={`service-${service._id}`}
      className="basis-full w-full flex flex-col gap-3 items-center align-middle p-8 mb-16"
    >
      <div className="">
        <Icon
          name={service.icon}
          className="w-[96px] text-slate-300 mb-8"
        />
      </div>
      <div>
        <p className="mb-0 font-bold">{service.title}</p>
        <div>
          <p className="mb-1">{service.description}</p>
        </div>
      </div>
    </div>
  )
}
