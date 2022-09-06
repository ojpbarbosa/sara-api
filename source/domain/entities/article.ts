import { ArticleAuthor, ArticleDescriptor, Publisher } from '.'

export interface Article {
  id: string
  title: string
  description: string
  language: string
  publishedAt: Date
  publisherId: string

  authors?: ArticleAuthor[]
  descriptors?: ArticleDescriptor[]
  publisher?: Publisher
}
