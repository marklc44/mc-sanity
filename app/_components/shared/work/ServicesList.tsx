import { getServices } from '../../../actions/services'
import Icon from '../Icon'

export default async function ServicesList() {
  const services = await getServices()

  return (
    <div className="flex flex-col flex-0 justify-start w-full basis-full align-middle gap-3">
      {services?.map((service) => {
        return (
          <div
            key={`service-${service._id}`}
            className="basis-full w-full flex flex-row gap-3 align-middle"
          >
            <div className="basis-[24px]">
              <Icon
                name={service.icon}
                className="w-[24px] text-slate-600"
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
      })}
    </div>
  )
}
