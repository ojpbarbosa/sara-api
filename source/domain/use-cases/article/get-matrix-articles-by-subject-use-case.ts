import { Article } from '@/domain/entities'

export interface GetMatrixArticlesBySubjectUseCase {
  getMatrixArticlesBySubject(subject: string): Promise<Article[][]>
}
