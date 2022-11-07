import { CreateGraphFromArticlesUseCase } from '@/domain/use-cases'
import { Article, Graph } from '@/domain/entities'

export class CreateGraphFromArticles implements CreateGraphFromArticlesUseCase {
  async createGraphFromArticles(
    subject: string,
    articles: Article
  ): Promise<Graph> {
    // hard coded provider
    const graph = {
      subject,
      provider: {
        logo: 'https://eric.ed.gov/img/eric_large.png',
        name: 'Educational Resource Information Center',
        url: 'https://eric.ed.gov'
      },
      articles: []
    } as Graph

    function createGraphLevel(level: number, article: Article, root = false) {
      graph.articles.push({
        article,
        x: root ? 0 : Math.random() * 100 * level,
        y: root ? 0 : Math.random() * 100 * level
      })

      article.related.forEach((article) => {
        createGraphLevel(level + 1, article)
      })
    }

    createGraphLevel(0, articles, true)

    return graph
  }
}
