import { Article, Graph } from '.'

export interface GraphArticle {
  id: string
  graphId: string
  articleId: string
  x: number
  y: number

  article?: Article
  graph?: Graph
}
