import { ArticleEricRepository } from '../../../infrastructure/data/articles/eric/article-eric-repository'
import { GetArticlesBySubject } from './get-articles-by-subject'

const articleEricRepository = new ArticleEricRepository()

const getArticlesBySubject = new GetArticlesBySubject(articleEricRepository)

getArticlesBySubject
  .getArticlesBySubject({ subject: 'neuroplasticity', depth: 5 })
  .then((articles) =>
    articles.forEach((article) => console.log(article.subject))
  )
