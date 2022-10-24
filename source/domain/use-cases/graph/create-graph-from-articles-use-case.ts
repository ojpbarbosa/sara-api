import { Article, Graph } from '@/domain/entities'

export interface CreateGraphFromArticlesUseCase {
  createGraphFromArticles(articles: Article): Promise<Graph>
}
