import { Router } from 'express'
import { adaptController } from '@/main/adapters/express'
import { getArticlesBySubjectControllerFactory } from '@/main/factories/controllers'

export const articles = (router: Router) => {
  router.get(
    '/articles',
    adaptController(getArticlesBySubjectControllerFactory())
  )
}
