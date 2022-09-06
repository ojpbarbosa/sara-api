import { ApplicationError } from './application-error'

export class BadRequestError extends ApplicationError {
  name = 'BadRequestError'
  statusCode = 400
}
