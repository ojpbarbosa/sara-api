import { ArticleAuthor } from '.'

export interface Author {
  id: string
  firstName: string
  lastName: string

  articles?: ArticleAuthor[]
}
