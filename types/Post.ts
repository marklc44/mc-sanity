import { Category } from "./Category"

export interface Post {
  _id: string
  title: string
  slug: string
  publishedAt: Date
  body: Body[]
  categories: Category[]
  author: Author
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