import { client } from "@/sanity/lib/client"

export const getWork = async (slug: string) => {
  const query = `
  *[_type == "work" && slug.current == "${slug}"] | order(position asc) {
      _id,
        title,
        client -> {
          name,
          description,
          "clientSlug": slug->current,
          logo,
          url
        },
        "workSlug": slug->current,
        roles,
        description,
        order,
        mainImage->{
         asset->
       },
       workSections[]-> {
         _id,
         title,
         order,
         client->,
         sectionImage,
         body,
       }
    }
  `
  try {
    const res = await client.fetch(query)
    return res
  } catch (error) {
    console.error(error)
  }
}

export const getWorkSections = async (limit: number | null) => {
  const query = `*[_type == "workSection"] {
    _id,
    title,
      position,
    client -> {
      name,
      description,
      logo,
      url
    },
    sectionImage,
     body
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

