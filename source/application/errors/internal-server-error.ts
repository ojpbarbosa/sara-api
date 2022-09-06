import { ApplicationError } from './application-error'

export class InternalServerError extends ApplicationError {
  name = 'InternalServerError'
  statusCode = 500
}
