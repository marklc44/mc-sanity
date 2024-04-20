import { Category } from "./Category"

export interface Post {
  _id: string
  title: string
  slug: string
  publishedAt: string
  mainImage: any
  body: Body[]
  categories: Category[]
  authorName: string
  canonicalUrl?: string
  excerpt?: string
  author: Author
  _updatedAt: string // parse to date, use as pub date
}

export interface Body {
  _key: string
  _type: string
  style: string
  children: BodyChildren[]
}

export interface BodyChildren {
  _type: string
  _key: string
  text?: string
}

export interface Author {
  _id: string
  name: string
  slug: string
  bio?: string
  // image w/ src, alt text
}