// eslint-disable-next-line no-unused-vars
import { Article, Graph } from '.'

export interface GraphArticle {
  // id: string
  // graphId: string
  // articleId: string
  x: number
  y: number
  article?: Article
  parent?: GraphArticle
  // graph?: Graph
}
