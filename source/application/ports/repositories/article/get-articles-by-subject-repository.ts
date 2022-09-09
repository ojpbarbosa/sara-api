import { Article } from '@/domain/entities'

import { GetArticlesBySubjectData } from '@/domain/use-cases'

export interface GetArticlesBySubjectRepository {
  getArticlesBySubject(data: GetArticlesBySubjectData): Promise<Article[]>
}
