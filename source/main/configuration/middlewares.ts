import { Express } from 'express'
import { content, cors, json } from '@/main/middlewares'

export default (app: Express) => {
  app.use(content)
  app.use(cors)
  app.use(json)
}
