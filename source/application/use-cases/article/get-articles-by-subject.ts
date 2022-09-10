import {
  GetArticlesBySubjectUseCase,
  GetArticlesBySubjectData
} from '@/domain/use-cases'
import { GetArticlesBySubjectRepository } from '@/application/ports/repositories'
import { Article } from '@/domain/entities'

export class GetArticlesBySubject implements GetArticlesBySubjectUseCase {
  constructor(
    private readonly getArticlesBySubjectRepository: GetArticlesBySubjectRepository
  ) {}

  async getArticlesBySubject({
    subject,
    depth
  }: GetArticlesBySubjectData): Promise<Article[]> {
    const articles: Article[] = []

    async function getArticlesBySubjectRecursively(
      subject: string,
      depth: number,
      getArticlesBySubjectRepository: GetArticlesBySubjectRepository
    ) {
      if (depth === 0) return

      const articlesBySubject =
        await getArticlesBySubjectRepository.getArticlesBySubject(subject)

      articles.push(...articlesBySubject)

      articlesBySubject.forEach((article) => {
        getArticlesBySubjectRecursively(
          getRecurrentDescriptors(articles)[0],
          depth - 1,
          getArticlesBySubjectRepository
        )
      })
    }

    function getRecurrentDescriptors(articles: Article[]): string[] {
      const descriptors: string[] = []

      articles.forEach((article) => {
        article.descriptors.forEach((descriptor) => {
          descriptors.push(descriptor.descriptor.name)
        })
      })

      descriptors.sort()

      const recurrentDescriptors: string[] = []

      descriptors.forEach((descriptor, index) => {
        if (descriptor === descriptors[index + 1])
          recurrentDescriptors.push(descriptor)
      })

      return recurrentDescriptors
    }

    await getArticlesBySubjectRecursively(
      subject,
      depth,
      this.getArticlesBySubjectRepository
    )

    return articles
  }
}
