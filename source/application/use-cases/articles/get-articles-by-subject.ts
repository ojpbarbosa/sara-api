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
  }: GetArticlesBySubjectData): Promise<Article> {
    depth = depth || 2
    range = range || 5

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
      parent: Article,
      subject: string,
      depth: number,
      getArticlesBySubjectRepository: GetArticlesBySubjectRepository
    ): Promise<void> {
      if (depth === 0 || !subject) return

      console.log(subject, depth)

      const articles =
        await getArticlesBySubjectRepository.getArticlesBySubject(subject)

      articles.forEach((article) => {
        if (!parent.related.find((related) => related.id === article.id))
          parent.related.push(article)
      })

      const descriptors = getRecurrentDescriptors(articles)

      range = range > descriptors.length ? descriptors.length : range

      for (let i = 0; i < range; i++) {
        for (let j = 0; j < articles.length; j++) {
          await getArticles(
            articles[j],
            descriptors[
              (descriptors.length / range) * i +
                Math.round((Math.random() * descriptors.length) / range)
            ],
            depth - 1,
            getArticlesBySubjectRepository
          )
        }
      }
    }

    const article = (
      await this.getArticlesBySubjectRepository.getArticlesBySubject(subject)
    )[0]

    await getArticles(
      article,
      subject,
      depth,
      this.getArticlesBySubjectRepository
    )

    return article
  }
}
