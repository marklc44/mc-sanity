import { getServices } from '../../../actions/services'
import Icon from '../Icon'

export default async function ServicesGrid() {
  const services = await getServices()

  return (
    <div className="flex flex-row flex-wrap flex-grow-0 justify-between flex-shrink-0">
      {services?.map((service) => {
        return (
          <div
            key={`service-${service._id}`}
            className="basis-full lg:basis-1/4 flex flex-col p-3 gap-8 mb-8"
          >
            <div>
              <Icon
                name={service.icon}
                className="w-[40px] text-slate-300"
              />
            </div>
            <div>
              <h4>{service.title}</h4>
              <div>{service.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
