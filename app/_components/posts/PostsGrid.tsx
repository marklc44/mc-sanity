'use client'
import PostCard from './PostCard'
import PostListItem from './PostListItem'
import CategoryFilterBar from '../CategoryFilterBar'
import { Post } from '@/types/Post'
import { useEffect, useMemo, useState } from 'react'
import { Category } from '@/types/Category'
import { getAllCategoriesFromPosts } from '@/utils/category-utils'
import classNames from 'classnames'

interface Props {
  posts: Post[]
  view: 'list' | 'grid'
}

export default function PostsGrid({ posts, view = 'list' }: Props) {
  const [displayCategories, setDisplayCategories] = useState<Category[]>([])
  const allCats = useMemo(() => {
    return getAllCategoriesFromPosts(posts)
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

  const containerViewClasses = classNames(
    `grid`,
    view === 'grid'
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
      : 'grid-cols-1 gap-3'
  )

  return (
    <>
      <CategoryFilterBar
        categories={allCats}
        handleChange={handleCategoryChange}
      />
      <section className={containerViewClasses}>
        {filteredPosts?.map((post) => {
          return (
            <div
              key={`post-item-${post._id}`}
              className={`col-span-1 h-full`}
            >
              {view === 'list' ? (
                <PostListItem
                  key={`post-${post._id}`}
                  post={post}
                />
              ) : (
                <PostCard
                  key={`post-${post._id}`}
                  post={post}
                />
              )}
            </div>
          )
        })}
      </section>
    </>
  )
}
