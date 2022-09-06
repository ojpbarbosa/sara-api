import { Article, Descriptor } from '.'

export interface ArticleDescriptor {
  id: string
  articleId: string
  descriptorId: string

  article?: Article
  descriptor?: Descriptor
}
