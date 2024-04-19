import { client } from "@/sanity/lib/client"
import { Work, WorkSection, Tool } from "@/types/Work"

export const getWork = async (slug?: string): Promise<Work[] | undefined> => {
  const query = `
  *[_type == "work" ${slug ? '&& slug.current == "' + slug +'"' : ''}] | order(position asc) {
      _id,
        title,
        client -> {
          name,
          description,
          "clientSlug": slug.current,
          logo,
          url
        },
        "workSlug": slug.current,
        roles,
        description,
        position,
        mainImage,
       workSections[]-> {
         _id,
         title,
         order,
         excerpt,
         client->,
         sectionImage,
         body,
         images,
       },
       tools[]->
    }
  `
  try {
    const res = await client.fetch(query)
    return res
  } catch (error) {
    console.error(error)
  }
}

export const getWorkSections = async (limit: number | null): Promise<WorkSection[] | undefined> => {
  const query = `*[_type == "workSection"] | order(position asc) {
    _id,
    title,
    position,
    client -> {
      name,
      description,
      logo,
      url,
      "clientSlug": slug.current
    },
    excerpt,
    sectionImage,
    body,
    images,
 }
  `
  const limitClause = limit && limit > 0 ? `[0...${limit}]` : ''

  try {
    const res = await client.fetch(query + limitClause)
    return res
  } catch (error) {
    console.error(error)
  }
}

export const getTools = async (): Promise<Tool[] | undefined> => {
  const query = `*[_type == "tool"] {
    _id,
    title
 }
  `
  try {
    const res = await client.fetch(query)
    return res
  } catch (error) {
    console.error(error)
  }
}


