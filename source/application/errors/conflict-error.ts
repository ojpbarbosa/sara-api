import { ApplicationError } from './application-error'

export class ConflictError extends ApplicationError {
  name = 'ConflictError'
  statusCode = 409
}
