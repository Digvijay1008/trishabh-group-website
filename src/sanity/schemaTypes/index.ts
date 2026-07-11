import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { seo } from './seo'
import { project } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, seo, project],
}
