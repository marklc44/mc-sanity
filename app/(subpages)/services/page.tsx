import ContentSection from '@/app/_components/shared/ContentSection'
import Service from '@/app/_components/shared/work/Service'
import { getServices } from '@/app/actions/services'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <ContentSection>
      <h2 className="mb-24">Services</h2>
      <div className="flex flex-row flex-wrap justify-center">
        {services &&
          services.map((service) => {
            return (
              <div
                className="basis-1/3"
                key={`service-${service._id}`}
              >
                <Service service={service} />
              </div>
            )
          })}
      </div>
    </ContentSection>
  )
}
