import { Article } from '@/domain/entities'

export interface GetArticlesBySubjectRepository {
  getArticlesBySubject(subject: string): Promise<Article[]>
}
