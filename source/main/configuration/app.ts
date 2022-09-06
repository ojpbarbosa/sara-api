import express from 'express'
import setupRoutes from './routes'
import setupMiddlewares from './middlewares'

export const setupApp = () => {
  const app = express()

  setupMiddlewares(app)
  setupRoutes(app)

  return app
}
