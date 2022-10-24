import express from 'express'
import routes from './routes'
import middlewares from './middlewares'

export default () => {
  const app = express()

  middlewares(app)
  routes(app)

  return app
}
