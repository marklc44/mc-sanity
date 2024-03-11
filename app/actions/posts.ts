import { client } from "@/sanity/lib/client"
import { Post } from "@/types/post"

export const getPosts = async (): Promise<Post[]> => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
      mainImage->{
        "url": asset->url,
        asset->{
          ...
        }
      },
    "authorName": author->name,
    categories[] ->{
      _id,
      title
    },
    'slug': slug.current,
    body,
      ...
  }`

  try {
    const res = await client.fetch(query)
    // console.log('res: ', res)
    return res
  } catch (error) {
    console.error(error)
  }
}