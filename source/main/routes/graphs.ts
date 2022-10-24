import { Router } from 'express'
import { adaptController } from '@/main/adapters/express'
import { createGraphFromArticlesControllerFactory } from '@/main/factories/controllers'

export const graphs = (router: Router) => {
  router.get(
    '/graphs/articles',
    adaptController(createGraphFromArticlesControllerFactory())
  )
}
