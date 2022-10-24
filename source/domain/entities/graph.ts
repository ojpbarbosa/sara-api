import { Provider, GraphArticle } from '.'

export interface Graph {
  id: string
  subject: string
  providerId: string
  provider?: Provider
  articles?: GraphArticle[]
}
