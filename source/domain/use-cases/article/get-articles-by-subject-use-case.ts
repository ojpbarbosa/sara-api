import { Article } from '@/domain/entities'

export interface GetArticlesBySubjectData {
  subject: string
  depth?: number
}

export interface GetArticlesBySubjectUseCase {
  getArticlesBySubject(data: GetArticlesBySubjectData): Promise<Article[]>
}
