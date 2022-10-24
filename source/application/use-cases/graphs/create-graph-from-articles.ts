import { CreateGraphFromArticlesUseCase } from '@/domain/use-cases'
import { Article, Graph } from '@/domain/entities'

export class CreateGraphFromArticles implements CreateGraphFromArticlesUseCase {
  async createGraphFromArticles(articles: Article): Promise<Graph> {
    return null
  }
}
