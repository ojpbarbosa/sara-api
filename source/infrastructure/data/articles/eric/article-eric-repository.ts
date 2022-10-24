import { GetArticlesBySubjectRepository } from '@/application/ports/repositories'
import { Article } from '@/domain/entities'
import axios from 'axios'

export class ArticlesEricRepository implements GetArticlesBySubjectRepository {
  async getArticlesBySubject(subject: string): Promise<Article[]> {
    const { data } = await axios.get(
      'https://api.ies.ed.gov/eric/?search=' + subject
    )

    return data.response.docs.map(
      (
        article: Partial<Article> & {
          author: string[]
          publicationdateyear: number
          subject: string[]
          publisher: string
        }
      ) => {
        if (!article.subject) return null

        return {
          id: article.id,
          title: article.title,
          description: article.description,
          language: article.language,
          subject: article.subject[0],
          publishedOn: article.publicationdateyear,
          authors:
            article.author &&
            article.author.map((author) => {
              return {
                firstName: author.split(', ')[1],
                lastName: author.split(', ')[0]
              }
            }),
          descriptors: article.subject.map((descriptor) => {
            return {
              name: descriptor
            }
          }),
          publisher: article.publisher && {
            name: article.publisher.split('.')[0],
            website: article.publisher.split('Web site: ')[1]
          },
          related: []
        }
      }
    )
  }
}
