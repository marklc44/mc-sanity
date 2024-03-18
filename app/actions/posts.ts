import { client } from "@/sanity/lib/client"
import { Post } from "@/types/Post"

export const getPosts = async (): Promise<Post[]> => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    mainImage,
    "authorName": author->name,
    categories[] ->{
      _id,
      title
    },
    'slug': slug.current,
    body
  }`

  try {
    const res = await client.fetch(query)
    return res
  } catch (error) {
    console.error(error)
  }
}

// get posts by category
export const getPostsByCategory = async (category: string) => {
  
}

// get single post
export const getPost = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == "${slug}"] {
    _id,
    title,
    publishedAt,
    mainImage,
    "authorName": author->name,
    categories[] ->{
      _id,
      title
    },
    'slug': slug.current,
    body
  }`

  try {
    const res = await client.fetch(query)
    return res
  } catch (error) {
    console.error(error)
  }
}

