import { Article, Graph } from '@/domain/entities'

export interface CreateGraphFromArticlesUseCase {
  createGraphFromArticles(subject: string, articles: Article): Promise<Graph>
}
