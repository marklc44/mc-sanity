import { client } from "@/sanity/lib/client"
import { Service } from "@/types/Service"

export const getServices = async (): Promise<Service[] | undefined> => {
  const query = `*[_type == "service"] | order(position asc) {
    _id,
    title,
    position,
    description,
    icon
 }
  `

  try {
    const res = await client.fetch(query)
    return res
  } catch (error) {
    console.error(error)
  }
}