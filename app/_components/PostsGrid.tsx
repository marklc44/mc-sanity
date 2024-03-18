'use client'
import PostCard from './PostCard'
import CategoryFilterBar from './CategoryFilterBar'
import { Post } from '@/types/Post'
import { useEffect, useMemo, useState } from 'react'
import { Category } from '@/types/Category'
import { getAllCategories } from '@/utils/category-utils'

interface Props {
  posts: Post[]
}

export default function PostsGrid({ posts }: Props) {
  const [displayCategories, setDisplayCategories] = useState<Category[]>([])
  const allCats = useMemo(() => {
    return getAllCategories(posts)
  }, [posts])

  useEffect(() => {
    setDisplayCategories(allCats)
  }, [allCats])

  const handleCategoryChange = (category: Category, checked: boolean) => {
    //@ts-ignore
    setDisplayCategories((prev) => {
      const isCatInDisplay = prev.includes(category)
      if (isCatInDisplay && !checked) {
        return prev.filter((cat) => cat !== category) as Category[]
      }
      if (!isCatInDisplay && checked) {
        const newCats = [...prev, category]
        return newCats
      }
    })
  }

  const filteredPosts = useMemo(() => {
    return posts?.filter((post) => {
      return post?.categories?.some((cat) => {
        return displayCategories.find((dcat) => {
          return dcat._id === cat._id
        })
      })
    })
  }, [posts, displayCategories])

  return (
    <>
      <CategoryFilterBar
        categories={allCats}
        handleChange={handleCategoryChange}
      />
      <section
        className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
      >
        {filteredPosts?.map((post) => {
          return (
            <div
              key={`post-item-${post._id}`}
              className={`col-span-1 h-full`}
            >
              <PostCard
                key={`post-${post._id}`}
                post={post}
              />
            </div>
          )
        })}
      </section>
    </>
  )
}
