import { ArticleDescriptor } from '.'

export interface Descriptor {
  id: string
  name: string

  articles: ArticleDescriptor[]
}
