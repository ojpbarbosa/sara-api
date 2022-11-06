import { Router } from 'express'
import { adaptController } from '@/main/adapters/express'
import {
  getArticlesBySubjectControllerFactory,
  getMatrixArticlesBySubjectControllerFactory
} from '@/main/factories/controllers'

export const articles = (router: Router) => {
  router.get(
    '/articles',
    adaptController(getArticlesBySubjectControllerFactory())
  )

  router.get(
    '/articles/matrix',
    adaptController(getMatrixArticlesBySubjectControllerFactory())
  )
}
