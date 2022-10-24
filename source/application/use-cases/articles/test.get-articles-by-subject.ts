// import { Article } from '@/domain/entities'
import { ArticlesEricRepository } from '../../../infrastructure/data/articles/eric/article-eric-repository'
import { GetArticlesBySubject } from './get-articles-by-subject'

const articlesRepository = new ArticlesEricRepository()

const getArticlesBySubjectUseCase = new GetArticlesBySubject(articlesRepository)

getArticlesBySubjectUseCase
  .getArticlesBySubject({ subject: 'neuroplasticity', depth: 1 })
  .then((articles) => {
    // let length = 0
    // function getLength(article: Article) {
    //   length += article.related.length
    //   article.related.forEach((article) => getLength(article))
    // }
    // getLength(articles)
    // console.log(length + 1)
    console.log(articles)
  })
