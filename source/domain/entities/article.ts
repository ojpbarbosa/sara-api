/* eslint-disable no-unused-vars */
import {
  Author,
  ArticleAuthor,
  ArticleDescriptor,
  Descriptor,
  Publisher
} from '.'

export interface Article {
  id: string
  title: string
  description: string
  language: string[]
  subject: string
  publishedOn: Date
  // publisherId: string

  // authors?: ArticleAuthor[]
  authors?: Author[]
  // descriptors?: ArticleDescriptor[]
  descriptors?: Descriptor[]
  publisher?: Publisher
}
