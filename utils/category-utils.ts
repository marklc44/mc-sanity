import { Post } from "@/types/Post"
import { Category } from "@/types/Category"

export const getAllCategoriesFromPosts = (posts: Post[]) => {
  let ids: string[] = []
  return posts?.reduce((acc, post) => {
    const postCats = [...post.categories]
    postCats?.forEach((cat) => {
      if (!ids.includes(cat._id)) {
        ids.push(cat._id)
        acc.push({ ...cat, checked: true })
      }
    })
    return acc
  }, [] as Category[])
}