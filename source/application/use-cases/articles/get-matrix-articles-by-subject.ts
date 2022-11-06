import { GetMatrixArticlesBySubjectUseCase } from '@/domain/use-cases'
import { GetArticlesBySubjectRepository } from '@/application/ports/repositories'
import { Article } from '@/domain/entities'

export class GetMatrixArticlesBySubject
  implements GetMatrixArticlesBySubjectUseCase
{
  constructor(
    private readonly getArticlesBySubjectRepository: GetArticlesBySubjectRepository
  ) {}

  async getMatrixArticlesBySubject(subject: string): Promise<Article[][]> {
    function getRecurrentDescriptors(articles: Article[]): string[] {
      const descriptors: string[] = []

      articles.forEach((article) => {
        article.descriptors.forEach((descriptor) => {
          descriptors.push(descriptor.name)
        })
      })

      descriptors.sort()

      const recurrentDescriptors: string[] = []

      descriptors.forEach((descriptor, index) => {
        if (descriptor === descriptors[index + 1])
          recurrentDescriptors.push(descriptor)
      })

      const descriptorsFrequency: { [key: string]: number } = {}

      recurrentDescriptors.forEach((descriptor) => {
        if (descriptorsFrequency[descriptor]) descriptorsFrequency[descriptor]++
        else descriptorsFrequency[descriptor] = 1
      })

      return Object.keys(descriptorsFrequency).sort(
        (a, b) => descriptorsFrequency[b] - descriptorsFrequency[a]
      )
    }

    const articles =
      await this.getArticlesBySubjectRepository.getArticlesBySubject(subject)

    const descriptors = getRecurrentDescriptors(articles)

    const matrix: Article[][] = []

    for (let i = 0; i < 6; i++) {
      const relatedArticles =
        await this.getArticlesBySubjectRepository.getArticlesBySubject(
          descriptors[
            Math.ceil(
              (descriptors.length / 6) * i +
                Math.round((Math.random() * descriptors.length) / 6)
            ) - 1
          ]
        )

      matrix.push([
        articles[0],
        relatedArticles[relatedArticles.length - i] || relatedArticles[0]
      ])
    }

    return matrix
  }
}
