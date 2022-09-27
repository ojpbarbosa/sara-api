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
    depth,
    range
  }: GetArticlesBySubjectData): Promise<Article[]> {
    depth = depth || 2
    range = range || 5

    const articles: Article[] = []

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

    async function getArticles(
      subject: string,
      depth: number,
      getArticlesBySubjectRepository: GetArticlesBySubjectRepository
    ): Promise<Article[]> {
      if (depth === 0) return articles

      const rawArticles =
        await getArticlesBySubjectRepository.getArticlesBySubject(subject)

      if (
        !articles.find((article) => article.id === rawArticles[0].id) &&
        rawArticles[0].id
      )
        articles.push(rawArticles[0])

      const descriptors = getRecurrentDescriptors(rawArticles)

      while (range > descriptors.length) range--

      for (let i = 0; i < range; i++) {
        await getArticles(
          descriptors[
            (descriptors.length / range) * i +
              Math.round((Math.random() * descriptors.length) / range)
          ],
          depth - 1,
          getArticlesBySubjectRepository
        )
      }
    }

    await getArticles(subject, depth, this.getArticlesBySubjectRepository)

    return articles
  }
}
