import { ApplicationError } from './application-error'

export class NotFoundError extends ApplicationError {
  name = 'NotFoundError'
  statusCode = 404
}
