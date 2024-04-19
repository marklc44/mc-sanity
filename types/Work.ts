import { Body } from './Post'

export interface Work {
  _id: string
  title: string
  description: string
  client: Client
  position?: number
  workSections: WorkSection[]
  tools: Tool[]
  roles: Array<string>
  mainImage: any
}

export interface WorkSection {
  _id: string
  title: string
  position?: number
  excerpt?: string
  body: Body[]
  sectionImage: any
  client: Client
  images?: Array<any>
}

export interface Client {
  name: string
  description?: string
  logo?: any
  url?: string
  clientSlug: string
  slug: any
}

export interface Tool {
  title: string
}