import { Article, Author } from '.'

export interface ArticleAuthor {
  id: string
  articleId: string
  authorId: string
  article?: Article
  author?: Author
}
