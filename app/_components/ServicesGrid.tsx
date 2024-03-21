import { getServices } from '../actions/services'
import Icon from './Icon'

export default async function ServicesGrid() {
  const services = await getServices()

  return (
    <div>
      {services?.map((service) => {
        return (
          <div key={`service-${service._id}`}>
            <div>
              <Icon
                name={service.icon}
                className="w-[24px] text-blue-500"
              />
            </div>
            <h4>{service.title}</h4>
            <div>{service.description}</div>
          </div>
        )
      })}
      <hr />
    </div>
  )
}
