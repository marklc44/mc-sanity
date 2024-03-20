import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import technology from './schemaTypes/technology'
import work from './schemaTypes/work'
import workSection from './schemaTypes/workSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, work, workSection, technology],
}
