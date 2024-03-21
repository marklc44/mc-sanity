import { Body } from './Post'


export interface WorkSection {
  _id: string
  title: string
  position?: number
  body: Body[]
  sectionImage: any
  client: Client
}

export interface Client {
  name: string
  description?: string
  logo?: any
  url?: string
  clientSlug: string
}