import { Express, Router } from 'express'
import { articles, graphs } from '@/main/routes'

export default (app: Express) => {
  const router = Router()

  app.use('/', router)

  articles(router)
  graphs(router)
}
